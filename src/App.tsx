import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { useContractRead, useWriteContract } from 'wagmi';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { BONDINGS_CORE_CONTRACT_ADDRESS, BONDINGS_CORE_ABI } from './bodingsCoreContract';
import { TOKEN_DISTRIBUTION_CONTRACT_ADDRESS, TOKEN_DISTRIBUTION_ABI } from './tokenDistributionContract';

type BondingDetails = {
  name: string;
  symbol: string;
  topic: string;
  stage: number;
  totalShare: string;
  liquidity: string;
  erc20Address: string;
};

function App() {
  const { address, isConnected } = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();
  const [bondingsId, setBondingsId] = useState(0);
  const [share, setShare] = useState(1);
  const [buyPriceAfterFee, setBuyPriceAfterFee] = useState("0");
  const [sellPriceAfterFee, setSellPriceAfterFee] = useState("0");
  const [bondingDetails, setBondingDetails] = useState<BondingDetails | null>(null);
  const [shareBalance, setShareBalance] = useState("0");
  const [id, setId] = useState<string | undefined>(undefined);
  const [claimableTokens, setClaimableTokens] = useState("0");

  const { writeContract } = useWriteContract({
    mutation: { onSuccess: (id) => setId(id) },
  });

  const { data: buyPriceData, refetch: refetchBuyPrice } = useContractRead({
    address: BONDINGS_CORE_CONTRACT_ADDRESS,
    abi: BONDINGS_CORE_ABI,
    functionName: 'getBuyPriceAfterFee',
    args: [BigInt(bondingsId), BigInt(share)],
  });

  const { data: sellPriceData, refetch: refetchSellPrice } = useContractRead({
    address: BONDINGS_CORE_CONTRACT_ADDRESS,
    abi: BONDINGS_CORE_ABI,
    functionName: 'getSellPriceAfterFee',
    args: [BigInt(bondingsId), BigInt(share)],
  });

  const { data: bondingData, refetch: refetchBonding } = useContractRead({
    address: BONDINGS_CORE_CONTRACT_ADDRESS,
    abi: BONDINGS_CORE_ABI,
    functionName: 'bondings',
    args: [BigInt(bondingsId)],
  });

  const { data: shareBalanceData, refetch: refetchShareBalance } = useContractRead({
    address: BONDINGS_CORE_CONTRACT_ADDRESS,
    abi: BONDINGS_CORE_ABI,
    functionName: 'userShare',
    args: [BigInt(bondingsId), address ? address : "0x0"],
  });

  const { data: claimableTokensData, refetch: refetchClaimableTokens } = useContractRead({
    address: TOKEN_DISTRIBUTION_CONTRACT_ADDRESS,
    abi: TOKEN_DISTRIBUTION_ABI,
    functionName: 'estimateClaimableTokens',
    args: [address ? address : "0x0", BigInt(bondingsId)],
  });

  useEffect(() => {
    console.log('bondingData', bondingData);
    if (bondingData) {
      console.log(bondingData);
      const [name, symbol, topic, stage, totalShare, liquidity, erc20Address] = bondingData;
      const totalShareString = totalShare.toString();
      const liquidityToEthString = ethers.formatEther(liquidity);
      setBondingDetails({
        name,
        symbol,
        topic,
        stage,
        totalShare: totalShareString,
        liquidity: liquidityToEthString,
        erc20Address
      });
    }
  }, [bondingData]);

  useEffect(() => {
    if (buyPriceData) {
      setBuyPriceAfterFee(ethers.formatEther(buyPriceData));
    }
  }, [buyPriceData]);

  useEffect(() => {
    if (sellPriceData) {
      setSellPriceAfterFee(ethers.formatEther(sellPriceData));
    }
  }, [sellPriceData]);

  useEffect(() => {
    if (shareBalanceData) {
      setShareBalance(shareBalanceData.toString());
    }
  }, [shareBalanceData]);

  useEffect(() => {
    if (claimableTokensData) {
      setClaimableTokens(ethers.formatEther(claimableTokensData));
    }
  }, [claimableTokensData]);

  const handleBuy = async () => {
    if (!isConnected) {
      alert('Please connect your wallet first.');
      return;
    }

    await refetchBuyPrice();
    if (buyPriceData) {
      writeContract({
        address: BONDINGS_CORE_CONTRACT_ADDRESS,
        abi: BONDINGS_CORE_ABI,
        functionName: 'buyBondings',
        args: [BigInt(bondingsId), BigInt(share)],
        value: buyPriceData,
      });
    }
  };

  const handleSell = async () => {
    if (!isConnected) {
      alert('Please connect your wallet first.');
      return;
    }

    await refetchSellPrice();
    if (sellPriceData) {
      writeContract({
        address: BONDINGS_CORE_CONTRACT_ADDRESS,
        abi: BONDINGS_CORE_ABI,
        functionName: 'sellBondings',
        args: [BigInt(bondingsId), BigInt(share), sellPriceData],
      });
    }
  };

  const handleClaimTokens = async () => {
    if (!isConnected) {
      alert('Please connect your wallet first.');
      return;
    }

    await refetchClaimableTokens();
    if (claimableTokensData) {
      writeContract({
        address: TOKEN_DISTRIBUTION_CONTRACT_ADDRESS,
        abi: TOKEN_DISTRIBUTION_ABI,
        functionName: 'claimTokens',
        args: [BigInt(bondingsId)],
      });
    }
  };

  return (
    <div>
      <div>
        <h2>Account</h2>
        <div>
          status: {isConnected ? 'connected' : 'disconnected'}
          <br />
          address: {address}
        </div>
        {isConnected && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.id}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>

      <div>
        <h2>My Share Balance</h2>
        {shareBalance && <div>{shareBalance}</div>}
        <button onClick={() => refetchShareBalance()}>Fetch My Share Balance</button>
      </div>

      <div>
        <h2>Buy Bondings</h2>
        <label htmlFor="bondingsId">Bondings ID:</label>
        <input
          type="number"
          value={bondingsId}
          onChange={(e) => setBondingsId(Number(e.target.value))}
          placeholder="Bondings ID"
        />
        <label htmlFor="share">Share:</label>
        <input
          type="number"
          value={share}
          onChange={(e) => setShare(Number(e.target.value))}
          placeholder="Share"
        />
        <button onClick={() => refetchBuyPrice()}>Estimate Buy Pay</button>
        {buyPriceAfterFee && <div>Estimated Buy Pay After Fee: {buyPriceAfterFee} ETH</div>}
        <button onClick={handleBuy}>Buy</button>
      </div>

      <div>
        <h2>Sell Bondings</h2>
        <label htmlFor="bondingsId">Bondings ID:</label>
        <input
          type="number"
          value={bondingsId}
          onChange={(e) => setBondingsId(Number(e.target.value))}
          placeholder="Bondings ID"
        />
        <label htmlFor="share">Share:</label>
        <input
          type="number"
          value={share}
          onChange={(e) => setShare(Number(e.target.value))}
          placeholder="Share"
        />
        <button onClick={() => refetchSellPrice()}>Estimate Sell Pay</button>
        {sellPriceAfterFee && <div>Estimated Sell Pay After Fee: {sellPriceAfterFee} ETH</div>}
        <button onClick={handleSell}>Sell</button>
      </div>

      <div>
        <h2>Bonding Details</h2>
        <button onClick={() => refetchBonding()}>Fetch Bonding Details</button>
        {bondingDetails && (
          <pre>{JSON.stringify(bondingDetails, null, 2)}</pre>
        )}
      </div>

      <div>
        <h2>Claim Tokens</h2>
        <label htmlFor="bondingsId">Bondings ID:</label>
        <input
          type="number"
          value={bondingsId}
          onChange={(e) => setBondingsId(Number(e.target.value))}
          placeholder="Bondings ID"
        />
        <button onClick={() => refetchClaimableTokens()}>Estimate Claimable Tokens</button>
        {claimableTokens && <div>Estimated Claimable Tokens: {claimableTokens} Tokens</div>}
        <button onClick={handleClaimTokens}>Claim Tokens</button>
      </div>

      {id && <div>Transaction ID: {id}</div>}
    </div>
  );
}

export default App;

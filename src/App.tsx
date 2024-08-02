import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { useCapabilities, useWriteContracts } from 'wagmi/experimental';
import { useMemo, useState } from 'react';
import { VOTE_CONTRACT_ADDRESS, VOTE_ABI } from './voteContract';

function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()
  const [id, setId] = useState<string | undefined>(undefined);
  const { writeContracts } = useWriteContracts({
    mutation: { onSuccess: (id) => setId(id) },
  });
  const { data: availableCapabilities } = useCapabilities({
    account: account.address,
  });
  const capabilities = useMemo(() => {
    if (!availableCapabilities || !account.chainId) return {};
    const capabilitiesForChain = availableCapabilities[account.chainId];
    if (
      capabilitiesForChain["paymasterService"] &&
      capabilitiesForChain["paymasterService"].supported
    ) {
      return {
        paymasterService: {
          url: `https://api.developer.coinbase.com/rpc/v1/base-sepolia/Q9sik09vhYGrvsr1n_ZP75c7lCsV6mR2`,
        },
      };
    }
    return {};
  }, [availableCapabilities, account.chainId]);

  return (
    <>
      <div>
        <h2>Account</h2>
        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>
        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
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
        <h2>使用支付服务进行投票</h2>
        <p>{JSON.stringify(capabilities)}</p>
        <div>
          <button
            onClick={() => {
              writeContracts({
                contracts: [
                  {
                    address: VOTE_CONTRACT_ADDRESS,
                    abi: VOTE_ABI,
                    functionName: "vote",
                    args: [133], // 替换为实际的proposalId
                  },
                ],
                capabilities,
              });
            }}
          >
            Vote
          </button>
          {id && <div>Transaction ID: {id}</div>}
        </div>
      </div>
    </>
  )
}

export default App

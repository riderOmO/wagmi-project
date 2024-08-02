export const VOTE_ABI = [
    {
      stateMutability: "nonpayable",
      type: "function",
      inputs: [{ name: "proposalId", type: "uint256" }],
      name: "vote",
      outputs: [],
    },
  ] as const;
   
  export const VOTE_CONTRACT_ADDRESS = "0x4409495472bb88Ced7B87C6B8374e35232BE2dD2";
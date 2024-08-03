export const BONDINGS_CORE_ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "target",
				"type": "address"
			}
		],
		"name": "AddressEmptyCode",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "bondingsId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "share",
				"type": "uint256"
			}
		],
		"name": "buyBondings",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "implementation",
				"type": "address"
			}
		],
		"name": "ERC1967InvalidImplementation",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ERC1967NonPayable",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "FailedInnerCall",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "protocolFeeDestination_",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_admin",
				"type": "address"
			}
		],
		"name": "initialize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "InvalidInitialization",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			}
		],
		"name": "launchBondings",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "bondingsId",
				"type": "uint256"
			}
		],
		"name": "launchERC20",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "NotInitializing",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "UUPSUnauthorizedCallContext",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "slot",
				"type": "bytes32"
			}
		],
		"name": "UUPSUnsupportedProxiableUUID",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "paramName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "oldValue",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "newValue",
				"type": "bytes32"
			}
		],
		"name": "AdminSetParam",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "bondingsId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "bondingsName",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "share",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "lastShare",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "buyPrice",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "buyPriceAfterFee",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "fee",
				"type": "uint256"
			}
		],
		"name": "BuyBondings",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint64",
				"name": "version",
				"type": "uint64"
			}
		],
		"name": "Initialized",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "bondingsId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "bondingsName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "bondingsSymbol",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "LaunchBondings",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "bondingsId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "bondingsName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "bondingsSymbol",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "finalSupply",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			}
		],
		"name": "LaunchERC20",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isOperator_",
				"type": "bool"
			}
		],
		"name": "OperatorSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "bondingsId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "share",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "minGetTokenAmount",
				"type": "uint256"
			}
		],
		"name": "sellBondings",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "bondingsId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "bondingsName",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "share",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "lastShare",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "sellPrice",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "sellPriceAfterFee",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "fee",
				"type": "uint256"
			}
		],
		"name": "SellBondings",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newFairLaunchSupply",
				"type": "uint256"
			}
		],
		"name": "setFairLaunchSupply",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newMaxSupply",
				"type": "uint256"
			}
		],
		"name": "setMaxSupply",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isOperator_",
				"type": "bool"
			}
		],
		"name": "setOperator",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newProtocolFeeDestination",
				"type": "address"
			}
		],
		"name": "setProtocolFeeDestination",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newProtocolFeePercent",
				"type": "uint256"
			}
		],
		"name": "setProtocolFeePercent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "implementation",
				"type": "address"
			}
		],
		"name": "Upgraded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newImplementation",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "upgradeToAndCall",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "bondings",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "stage",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "totalShare",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "liquidity",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "erc20Address",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "bondingsCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "erc20Supply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "fairLaunchSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "bondingsId",
				"type": "uint256"
			}
		],
		"name": "getBondingsTotalShare",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "bondingsId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "getBuyPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "bondingsId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "getBuyPriceAfterFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "supply",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "getPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "bondingsId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "getSellPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "bondingsId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "getSellPriceAfterFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isOperator",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "protocolFeeDestination",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "protocolFeePercent",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "proxiableUUID",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "UPGRADE_INTERFACE_VERSION",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userShare",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
] as const;
   
  export const BONDINGS_CORE_CONTRACT_ADDRESS = "0x5Ba8d27E08f06CDDd4cD00B5dF61dcb46E84Db77";
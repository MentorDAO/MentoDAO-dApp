/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  VotesRepoTrackerUp,
  VotesRepoTrackerUpInterface,
} from "../../../contracts/repositories/VotesRepoTrackerUp";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "delegator",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "fromDelegate",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "toDelegate",
        type: "uint256",
      },
    ],
    name: "DelegateChangedToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "delegate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChangedToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "delegateFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "delegates",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "sbt",
        type: "uint256",
      },
    ],
    name: "delegatesToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "sbt",
        type: "uint256",
      },
    ],
    name: "delegatesTokenOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentSBT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getExtTokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getHub",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastTotalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "sbt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastVotesForToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRepoAddr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTargetContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "sbt",
        type: "uint256",
      },
    ],
    name: "getVotesForToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "hub",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "owner",
        type: "uint256",
      },
    ],
    name: "noncesForToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "hubAddr",
        type: "address",
      },
    ],
    name: "setHub",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "to",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferVotingUnits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b5060805161295261004c60003960008181610681015281816106c101528181610778015281816107b8015261084701526129526000f3fe6080604052600436106101c25760003560e01c80637ecebe00116100f7578063c1c5f41d11610095578063d13684ea11610064578063d13684ea146104ad578063e8a3d485146104cd578063f0d3655d146104ef578063f2fde38b1461050f57600080fd5b8063c1c5f41d14610438578063c3cda52014610458578063c4d66de814610478578063c4e41b221461049857600080fd5b80638e539e8c116100d15780638e539e8c146103c35780639ab24eb0146103e35780639e92fd8e14610403578063a75558111461041857600080fd5b80637ecebe001461036e5780638abe564f1461038e5780638da5cb5b146103ae57600080fd5b80633a46b1a811610164578063587cde1e1161013e578063587cde1e146102fb57806364d2fdb01461031b578063715018a61461033b5780637a8639ed1461035057600080fd5b80633a46b1a8146102b35780634f1ef286146102d357806352d1902d146102e657600080fd5b80632db9a512116101a05780632db9a5121461023157806331962cdc1461025e5780633644e5151461027e5780633659cfe61461029357600080fd5b806302cd1720146101c75780630e7a5d16146101fa5780632949582d1461020f575b600080fd5b3480156101d357600080fd5b506101e76101e23660046123a3565b61052f565b6040519081526020015b60405180910390f35b34801561020657600080fd5b506101e7610541565b34801561021b57600080fd5b5061022f61022a3660046123d1565b6105c7565b005b34801561023d57600080fd5b506102466105e5565b6040516001600160a01b0390911681526020016101f1565b34801561026a57600080fd5b5061022f61027936600461240a565b6105f9565b34801561028a57600080fd5b506101e761066d565b34801561029f57600080fd5b5061022f6102ae36600461240a565b610677565b3480156102bf57600080fd5b506101e76102ce366004612427565b610753565b61022f6102e13660046124c2565b61076e565b3480156102f257600080fd5b506101e761083a565b34801561030757600080fd5b5061024661031636600461240a565b6108ed565b34801561032757600080fd5b506101e76103363660046123a3565b610903565b34801561034757600080fd5b5061022f610924565b34801561035c57600080fd5b5060cb546001600160a01b0316610246565b34801561037a57600080fd5b506101e761038936600461240a565b610938565b34801561039a57600080fd5b506101e76103a936600461240a565b610942565b3480156103ba57600080fd5b50610246610a4c565b3480156103cf57600080fd5b506101e76103de3660046123a3565b610aba565b3480156103ef57600080fd5b506101e76103fe36600461240a565b610b25565b34801561040f57600080fd5b50610246610b33565b34801561042457600080fd5b506101e7610433366004612427565b610b7d565b34801561044457600080fd5b506101e76104533660046123a3565b610bb8565b34801561046457600080fd5b5061022f610473366004612555565b610beb565b34801561048457600080fd5b5061022f61049336600461240a565b610d4a565b3480156104a457600080fd5b506101e7610ee0565b3480156104b957600080fd5b506101e76104c83660046125b7565b610f07565b3480156104d957600080fd5b506104e2610f2c565b6040516101f19190612605565b3480156104fb57600080fd5b5061022f61050a366004612638565b610fa4565b34801561051b57600080fd5b5061022f61052a36600461240a565b610fb4565b600061053b3383610b7d565b92915050565b600061054b61102a565b6001600160a01b031663724686d7336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa15801561059e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c29190612664565b905090565b6105e16105d383611082565b6105dc83611082565b611177565b5050565b60006105c26066546001600160a01b031690565b6066546001600160a01b0316336001600160a01b0316146106615760405162461bcd60e51b815260206004820152601760248201527f4855423a554e415554484f52495a45445f43414c4c455200000000000000000060448201526064015b60405180910390fd5b61066a81611246565b50565b60006105c2611335565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036106bf5760405162461bcd60e51b81526004016106589061267d565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166107086000805160206128d6833981519152546001600160a01b031690565b6001600160a01b03161461072e5760405162461bcd60e51b8152600401610658906126c9565b610737816113b0565b6040805160008082526020820190925261066a918391906113b8565b600061076761076184610942565b83610f07565b9392505050565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036107b65760405162461bcd60e51b81526004016106589061267d565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166107ff6000805160206128d6833981519152546001600160a01b031690565b6001600160a01b0316146108255760405162461bcd60e51b8152600401610658906126c9565b61082e826113b0565b6105e1828260016113b8565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146108da5760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610658565b506000805160206128d683398151915290565b600061053b6108fe6101e284610942565b611523565b3360009081526101046020908152604080832084845290915281205461053b565b61092c611591565b61093660006115f0565b565b600061053b610336835b60cb546000906001600160a01b03908116908316036109c95760405162461bcd60e51b815260206004820152603760248201527f547261636b65723a20736f7572636520636f6e7472616374206164647265737360448201527f206973206e6f7420612076616c6964206163636f756e740000000000000000006064820152608401610658565b60006109d483611082565b90508060000361053b5760405162461bcd60e51b815260206004820152603760248201527f547261636b65723a20726571756573746564206163636f756e74206e6f74206660448201527f6f756e64206f6e20736f7572636520636f6e74726163740000000000000000006064820152608401610658565b60665460408051638da5cb5b60e01b815290516000926001600160a01b031691638da5cb5b9160048083019260209291908290030181865afa158015610a96573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c29190612715565b6000438210610b0b5760405162461bcd60e51b815260206004820152601e60248201527f566f7465735265706f3a20626c6f636b206e6f7420796574206d696e656400006044820152606401610658565b3360009081526101036020526040902061053b9083611642565b600061053b61045383611082565b60665460408051634f497ec760e11b815290516000926001600160a01b031691639e92fd8e9160048083019260209291908290030181865afa158015610a96573d6000803e3d6000fd5b6001600160a01b0382166000908152610101602090815260408083208484529091528120548015610bae5780610bb0565b825b949350505050565b336000908152610102602090815260408083208484529091528120610bdc90611703565b6001600160e01b031692915050565b83421115610c3b5760405162461bcd60e51b815260206004820152601c60248201527f566f7465735265706f3a207369676e61747572652065787069726564000000006044820152606401610658565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b038816918101919091526060810186905260808101859052600090610cb590610cad9060a0016040516020818303038152906040528051906020012061173d565b85858561178b565b9050610ce9610cc382610942565b336000908152610104602090815260408083209383529290522080546001810190915590565b8614610d375760405162461bcd60e51b815260206004820152601860248201527f566f7465735265706f3a20696e76616c6964206e6f6e636500000000000000006044820152606401610658565b610d4181886105c7565b50505050505050565b600154610100900460ff1615808015610d6757506001805460ff16105b80610d805750303b158015610d8057506001805460ff16145b610de35760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610658565b6001805460ff1916811790558015610e05576001805461ff0019166101001790555b610e0d6117b3565b610e16826117da565b610e98610e21611801565b60665460405163e2b49cb960e01b81526001600160a01b039283169263e2b49cb992610e5292911690600401612732565b602060405180830381865afa158015610e6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e939190612715565b61180b565b80156105e1576001805461ff00191681556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b33600090815261010360205260408120610ef990611703565b6001600160e01b0316905090565b3360009081526101026020908152604080832085845290915281206107679083611642565b6060610f3661102a565b6040516333dfa7d560e01b81523060048201526001600160a01b0391909116906333dfa7d590602401600060405180830381865afa158015610f7c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105c29190810190612761565b610faf8383836118fa565b505050565b610fbc611591565b6001600160a01b0381166110215760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610658565b61066a816115f0565b6000611034611801565b60665460405163e2b49cb960e01b81526001600160a01b039283169263e2b49cb99261106592911690600401612732565b602060405180830381865afa158015610a96573d6000803e3d6000fd5b60cb546000906001600160a01b03908116908316036111095760405162461bcd60e51b815260206004820152603e60248201527f45524331313535547261636b65723a20736f7572636520636f6e74726163742060448201527f61646472657373206973206e6f7420612076616c6964206163636f756e7400006064820152608401610658565b60cb5460405163724686d760e01b81526001600160a01b0384811660048301529091169063724686d790602401602060405180830381865afa158015611153573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053b9190612664565b60006111828361052f565b33600090815261010160209081526040808320878452909152902083905590506111ab82611523565b6001600160a01b03166111bd82611523565b6001600160a01b03166111cf85611523565b6001600160a01b03167f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f60405160405180910390a48181847f472d85e9261660ff5a5db6fb50351852ec3312ceeb7eb55cf99286fb54c29a1b60405160405180910390a4610faf8183611241866119c3565b6119e7565b6112d0816001600160a01b03166310055c1d6040518163ffffffff1660e01b8152600401600060405180830381865afa158015611287573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526112af9190810190612761565b60405180604001604052806003815260200162243ab160e91b815250611b8c565b6113135760405162461bcd60e51b8152602060048201526014602482015273125b9d985b1a5908121d588810dbdb9d1c9858dd60621b6044820152606401610658565b606680546001600160a01b0319166001600160a01b0392909216919091179055565b60006105c27f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61136460cc5490565b60cd546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b61066a611591565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156113eb57610faf83611be5565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611445575060408051601f3d908101601f1916820190925261144291810190612664565b60015b6114a85760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b6064820152608401610658565b6000805160206128d683398151915281146115175760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b6064820152608401610658565b50610faf838383611c81565b60cb546040516331a9108f60e11b8152600481018390526000916001600160a01b031690636352211e90602401602060405180830381865afa15801561156d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053b9190612715565b3361159a610a4c565b6001600160a01b0316146109365760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610658565b603480546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60004382106116935760405162461bcd60e51b815260206004820181905260248201527f436865636b706f696e74733a20626c6f636b206e6f7420796574206d696e65646044820152606401610658565b600061169e83611cac565b845490915060006116b186848385611d15565b905080156116ed576116d6866116c86001846127e5565b600091825260209091200190565b5464010000000090046001600160e01b03166116f0565b60005b6001600160e01b03169695505050505050565b805460009080156117345761171d836116c86001846127e5565b5464010000000090046001600160e01b0316610767565b60009392505050565b600061053b61174a611335565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b600080600061179c87878787611d73565b915091506117a981611e37565b5095945050505050565b600154610100900460ff166109365760405162461bcd60e51b8152600401610658906127fc565b600154610100900460ff166106615760405162461bcd60e51b8152600401610658906127fc565b60006105c2610b33565b6040516301ffc9a760e01b81526317ff47d760e21b60048201526001600160a01b038216906301ffc9a790602401602060405180830381865afa158015611856573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061187a9190612847565b6118d85760405162461bcd60e51b815260206004820152602960248201527f54617267657420636f6e747261637420657870656374656420746f20737570706044820152681bdc9d081254dbdd5b60ba1b6064820152608401610658565b60cb80546001600160a01b0319166001600160a01b0392909216919091179055565b82600003611926573360009081526101036020526040902061191f90611f8183611f8d565b5050611951565b33600090815261010060209081526040808320868452909152902061194e90611fc583611f8d565b50505b8160000361197d573360009081526101036020526040902061197690611fc583611f8d565b50506119a8565b3360009081526101006020908152604080832085845290915290206119a590611f8183611f8d565b50505b610faf6119b48461052f565b6119bd8461052f565b836119e7565b336000908152610100602090815260408083208484529091528120610bdc90611703565b8183141580156119f75750600081115b15610faf578215611ac2573360009081526101026020908152604080832086845290915281208190611a2c90611fc585611f8d565b91509150611a3985611523565b6001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611a7c929190918252602082015260400190565b60405180910390a2604080518381526020810183905286917f83da1ccbbd17813255d2273857938d1a72aaa4d1ba08e5effec611a940dd9962910160405180910390a250505b8115610faf573360009081526101026020908152604080832085845290915281208190611af290611f8185611f8d565b91509150611aff84611523565b6001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611b42929190918252602082015260400190565b60405180910390a2604080518381526020810183905285917f83da1ccbbd17813255d2273857938d1a72aaa4d1ba08e5effec611a940dd9962910160405180910390a25050505050565b600081604051602001611b9f9190612869565b6040516020818303038152906040528051906020012083604051602001611bc69190612869565b6040516020818303038152906040528051906020012014905092915050565b6001600160a01b0381163b611c525760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610658565b6000805160206128d683398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b611c8a83611fd1565b600082511180611c975750805b15610faf57611ca68383612011565b50505050565b600063ffffffff821115611d115760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b6064820152608401610658565b5090565b60005b81831015611d6b576000611d2c8484612105565b60008781526020902090915063ffffffff86169082015463ffffffff161115611d5757809250611d65565b611d62816001612885565b93505b50611d18565b509392505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611daa5750600090506003611e2e565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611dfe573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611e2757600060019250925050611e2e565b9150600090505b94509492505050565b6000816004811115611e4b57611e4b61289d565b03611e535750565b6001816004811115611e6757611e6761289d565b03611eb45760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610658565b6002816004811115611ec857611ec861289d565b03611f155760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610658565b6003816004811115611f2957611f2961289d565b0361066a5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610658565b60006107678284612885565b600080611fb885611fb3611fa088611703565b6001600160e01b0316868863ffffffff16565b612120565b915091505b935093915050565b600061076782846127e5565b611fda81611be5565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b6120795760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610658565b600080846001600160a01b0316846040516120949190612869565b600060405180830381855af49150503d80600081146120cf576040519150601f19603f3d011682016040523d82523d6000602084013e6120d4565b606091505b50915091506120fc82826040518060600160405280602781526020016128f660279139612154565b95945050505050565b600061211460028484186128b3565b61076790848416612885565b60008061213e8461213043611cac565b6121398661216d565b6121d6565b6001600160e01b03918216969116945092505050565b60608315612163575081610767565b6107678383612379565b60006001600160e01b03821115611d115760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b6064820152608401610658565b82546000908190801561231f5760006121f4876116c86001856127e5565b60408051808201909152905463ffffffff8082168084526401000000009092046001600160e01b0316602084015291925090871610156122765760405162461bcd60e51b815260206004820152601760248201527f436865636b706f696e743a20696e76616c6964206b65790000000000000000006044820152606401610658565b805163ffffffff8088169116036122bf5784612297886116c86001866127e5565b80546001600160e01b03929092166401000000000263ffffffff90921691909117905561230f565b6040805180820190915263ffffffff80881682526001600160e01b0380881660208085019182528b54600181018d5560008d81529190912094519151909216640100000000029216919091179101555b602001519250839150611fbd9050565b50506040805180820190915263ffffffff80851682526001600160e01b0380851660208085019182528854600181018a5560008a815291822095519251909316640100000000029190931617920191909155905081611fbd565b8151156123895781518083602001fd5b8060405162461bcd60e51b81526004016106589190612605565b6000602082840312156123b557600080fd5b5035919050565b6001600160a01b038116811461066a57600080fd5b600080604083850312156123e457600080fd5b82356123ef816123bc565b915060208301356123ff816123bc565b809150509250929050565b60006020828403121561241c57600080fd5b8135610767816123bc565b6000806040838503121561243a57600080fd5b8235612445816123bc565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561249257612492612453565b604052919050565b600067ffffffffffffffff8211156124b4576124b4612453565b50601f01601f191660200190565b600080604083850312156124d557600080fd5b82356124e0816123bc565b9150602083013567ffffffffffffffff8111156124fc57600080fd5b8301601f8101851361250d57600080fd5b803561252061251b8261249a565b612469565b81815286602083850101111561253557600080fd5b816020840160208301376000602083830101528093505050509250929050565b60008060008060008060c0878903121561256e57600080fd5b8635612579816123bc565b95506020870135945060408701359350606087013560ff8116811461259d57600080fd5b9598949750929560808101359460a0909101359350915050565b600080604083850312156125ca57600080fd5b50508035926020909101359150565b60005b838110156125f45781810151838201526020016125dc565b83811115611ca65750506000910152565b60208152600082518060208401526126248160408501602087016125d9565b601f01601f19169190910160400192915050565b60008060006060848603121561264d57600080fd5b505081359360208301359350604090920135919050565b60006020828403121561267657600080fd5b5051919050565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b60006020828403121561272757600080fd5b8151610767816123bc565b6001600160a01b039190911681526040602082018190526003908201526214d09560ea1b606082015260800190565b60006020828403121561277357600080fd5b815167ffffffffffffffff81111561278a57600080fd5b8201601f8101841361279b57600080fd5b80516127a961251b8261249a565b8181528560208385010111156127be57600080fd5b6120fc8260208301602086016125d9565b634e487b7160e01b600052601160045260246000fd5b6000828210156127f7576127f76127cf565b500390565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60006020828403121561285957600080fd5b8151801515811461076757600080fd5b6000825161287b8184602087016125d9565b9190910192915050565b60008219821115612898576128986127cf565b500190565b634e487b7160e01b600052602160045260246000fd5b6000826128d057634e487b7160e01b600052601260045260246000fd5b50049056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220af9655fdeb4168ec78ad06674253bca9f846badc6aa44534171f5e7f571d457b64736f6c634300080e0033";

type VotesRepoTrackerUpConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VotesRepoTrackerUpConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VotesRepoTrackerUp__factory extends ContractFactory {
  constructor(...args: VotesRepoTrackerUpConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VotesRepoTrackerUp> {
    return super.deploy(overrides || {}) as Promise<VotesRepoTrackerUp>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): VotesRepoTrackerUp {
    return super.attach(address) as VotesRepoTrackerUp;
  }
  override connect(signer: Signer): VotesRepoTrackerUp__factory {
    return super.connect(signer) as VotesRepoTrackerUp__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VotesRepoTrackerUpInterface {
    return new utils.Interface(_abi) as VotesRepoTrackerUpInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VotesRepoTrackerUp {
    return new Contract(address, _abi, signerOrProvider) as VotesRepoTrackerUp;
  }
}

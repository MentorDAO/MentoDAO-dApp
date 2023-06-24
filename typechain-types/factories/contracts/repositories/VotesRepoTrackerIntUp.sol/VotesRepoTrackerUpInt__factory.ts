/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  VotesRepoTrackerUpInt,
  VotesRepoTrackerUpIntInterface,
} from "../../../../contracts/repositories/VotesRepoTrackerIntUp.sol/VotesRepoTrackerUpInt";

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
        internalType: "int256",
        name: "previousBalance",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "newBalance",
        type: "int256",
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
        internalType: "int256",
        name: "previousBalance",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "newBalance",
        type: "int256",
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
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "accountToken",
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
        internalType: "int256",
        name: "",
        type: "int256",
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
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "account",
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
        internalType: "int256",
        name: "",
        type: "int256",
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
        internalType: "int256",
        name: "",
        type: "int256",
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
        internalType: "int256",
        name: "",
        type: "int256",
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
        internalType: "int256",
        name: "",
        type: "int256",
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
        name: "fromSBT",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "toSBT",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "amount",
        type: "int256",
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
  "0x60a06040523060805234801561001457600080fd5b5060805161288461004c6000396000818161063f0152818161067f0152818161073801528181610778015261080b01526128846000f3fe6080604052600436106101b75760003560e01c80637ecebe00116100ec578063c3cda5201161008a578063c4e41b2211610064578063c4e41b22146104a6578063d13684ea146104bb578063e8a3d485146104db578063f2fde38b146104fd57600080fd5b8063c3cda52014610446578063c45e0a8614610466578063c4d66de81461048657600080fd5b80638e539e8c116100c65780638e539e8c146103d15780639ab24eb0146103f15780639e92fd8e14610411578063c1c5f41d1461042657600080fd5b80637ecebe001461037c5780638abe564f1461039c5780638da5cb5b146103bc57600080fd5b80634f1ef286116101595780635c19a95c116101335780635c19a95c1461030957806364d2fdb014610329578063715018a6146103495780637a8639ed1461035e57600080fd5b80634f1ef286146102c157806352d1902d146102d4578063587cde1e146102e957600080fd5b806331962cdc1161019557806331962cdc1461024a5780633644e5151461026c5780633659cfe6146102815780633a46b1a8146102a157600080fd5b806302cd1720146101bc5780630e7a5d16146102085780632db9a5121461021d575b600080fd5b3480156101c857600080fd5b506101f56101d7366004612278565b33600090815261010160209081526040808320938352929052205490565b6040519081526020015b60405180910390f35b34801561021457600080fd5b506101f561051d565b34801561022957600080fd5b506102326105a3565b6040516001600160a01b0390911681526020016101ff565b34801561025657600080fd5b5061026a6102653660046122a6565b6105b7565b005b34801561027857600080fd5b506101f561062b565b34801561028d57600080fd5b5061026a61029c3660046122a6565b610635565b3480156102ad57600080fd5b506101f56102bc3660046122c3565b610711565b61026a6102cf36600461235e565b61072e565b3480156102e057600080fd5b506101f56107fe565b3480156102f557600080fd5b506102326103043660046122a6565b6108b1565b34801561031557600080fd5b5061026a6103243660046122a6565b6108c7565b34801561033557600080fd5b506101f5610344366004612278565b6108d2565b34801561035557600080fd5b5061026a6108f3565b34801561036a57600080fd5b5060cb546001600160a01b0316610232565b34801561038857600080fd5b506101f56103973660046122a6565b610907565b3480156103a857600080fd5b506101f56103b73660046122a6565b610911565b3480156103c857600080fd5b50610232610a1b565b3480156103dd57600080fd5b506101f56103ec366004612278565b610a89565b3480156103fd57600080fd5b506101f561040c3660046122a6565b610af4565b34801561041d57600080fd5b50610232610b02565b34801561043257600080fd5b506101f5610441366004612278565b610b4c565b34801561045257600080fd5b5061026a6104613660046123f1565b610bbb565b34801561047257600080fd5b5061026a610481366004612453565b610d1a565b34801561049257600080fd5b5061026a6104a13660046122a6565b610d2a565b3480156104b257600080fd5b506101f5610ec0565b3480156104c757600080fd5b506101f56104d636600461247f565b610ed9565b3480156104e757600080fd5b506104f0610efe565b6040516101ff91906124cd565b34801561050957600080fd5b5061026a6105183660046122a6565b610f76565b6000610527610fec565b6001600160a01b031663724686d7336040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa15801561057a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059e9190612500565b905090565b600061059e6066546001600160a01b031690565b6066546001600160a01b0316336001600160a01b03161461061f5760405162461bcd60e51b815260206004820152601760248201527f4855423a554e415554484f52495a45445f43414c4c455200000000000000000060448201526064015b60405180910390fd5b61062881611044565b50565b600061059e611133565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016300361067d5760405162461bcd60e51b815260040161061690612519565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166106c6600080516020612808833981519152546001600160a01b031690565b6001600160a01b0316146106ec5760405162461bcd60e51b815260040161061690612565565b6106f58161116a565b6040805160008082526020820190925261062891839190611172565b600061072561071f84610911565b83610ed9565b90505b92915050565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036107765760405162461bcd60e51b815260040161061690612519565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166107bf600080516020612808833981519152546001600160a01b031690565b6001600160a01b0316146107e55760405162461bcd60e51b815260040161061690612565565b6107ee8261116a565b6107fa82826001611172565b5050565b6000306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461089e5760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610616565b5060008051602061280883398151915290565b60006107286108c26101d784610911565b6112dd565b326107fa818361134b565b33600090815261010460209081526040808320848452909152812054610728565b6108fb611365565b61090560006113c4565b565b6000610728610344835b60cb546000906001600160a01b03908116908316036109985760405162461bcd60e51b815260206004820152603760248201527f547261636b65723a20736f7572636520636f6e7472616374206164647265737360448201527f206973206e6f7420612076616c6964206163636f756e740000000000000000006064820152608401610616565b60006109a383611416565b9050806000036107285760405162461bcd60e51b815260206004820152603760248201527f547261636b65723a20726571756573746564206163636f756e74206e6f74206660448201527f6f756e64206f6e20736f7572636520636f6e74726163740000000000000000006064820152608401610616565b60665460408051638da5cb5b60e01b815290516000926001600160a01b031691638da5cb5b9160048083019260209291908290030181865afa158015610a65573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059e91906125b1565b6000438210610ada5760405162461bcd60e51b815260206004820152601e60248201527f566f7465735265706f3a20626c6f636b206e6f7420796574206d696e656400006044820152606401610616565b33600090815261010360205260409020610728908361150b565b600061072861044183611416565b60665460408051634f497ec760e11b815290516000926001600160a01b031691639e92fd8e9160048083019260209291908290030181865afa158015610a65573d6000803e3d6000fd5b600081600003610b975760405162461bcd60e51b8152602060048201526016602482015275159bdd195cd4995c1bce88125b9d985b1a590814d09560521b6044820152606401610616565b33600090815261010260209081526040808320858452909152902061072890611610565b83421115610c0b5760405162461bcd60e51b815260206004820152601c60248201527f566f7465735265706f3a207369676e61747572652065787069726564000000006044820152606401610616565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b038816918101919091526060810186905260808101859052600090610c8590610c7d9060a0016040516020818303038152906040528051906020012061165f565b8585856116ad565b9050610cb9610c9382610911565b336000908152610104602090815260408083209383529290522080546001810190915590565b8614610d075760405162461bcd60e51b815260206004820152601860248201527f566f7465735265706f3a20696e76616c6964206e6f6e636500000000000000006044820152606401610616565b610d11818861134b565b50505050505050565b610d258383836116d5565b505050565b600154610100900460ff1615808015610d4757506001805460ff16105b80610d605750303b158015610d6057506001805460ff16145b610dc35760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610616565b6001805460ff1916811790558015610de5576001805461ff0019166101001790555b610ded61176c565b610df682611793565b610e78610e016117ba565b60665460405163e2b49cb960e01b81526001600160a01b039283169263e2b49cb992610e32929116906004016125ce565b602060405180830381865afa158015610e4f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e7391906125b1565b6117c4565b80156107fa576001805461ff00191681556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b3360009081526101036020526040812061059e90611610565b336000908152610102602090815260408083208584529091528120610725908361150b565b6060610f08610fec565b6040516333dfa7d560e01b81523060048201526001600160a01b0391909116906333dfa7d590602401600060405180830381865afa158015610f4e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261059e91908101906125fd565b610f7e611365565b6001600160a01b038116610fe35760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610616565b610628816113c4565b6000610ff66117ba565b60665460405163e2b49cb960e01b81526001600160a01b039283169263e2b49cb992611027929116906004016125ce565b602060405180830381865afa158015610a65573d6000803e3d6000fd5b6110ce816001600160a01b03166310055c1d6040518163ffffffff1660e01b8152600401600060405180830381865afa158015611085573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526110ad91908101906125fd565b60405180604001604052806003815260200162243ab160e91b8152506118b3565b6111115760405162461bcd60e51b8152602060048201526014602482015273125b9d985b1a5908121d588810dbdb9d1c9858dd60621b6044820152606401610616565b606680546001600160a01b0319166001600160a01b0392909216919091179055565b600061059e7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61116260cc5490565b60cd5461190c565b610628611365565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156111a557610d2583611956565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156111ff575060408051601f3d908101601f191682019092526111fc91810190612500565b60015b6112625760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b6064820152608401610616565b60008051602061280883398151915281146112d15760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b6064820152608401610616565b50610d258383836119f2565b60cb546040516331a9108f60e11b8152600481018390526000916001600160a01b031690636352211e90602401602060405180830381865afa158015611327573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072891906125b1565b6107fa61135783610911565b61136083610911565b611a1d565b3361136e610a1b565b6001600160a01b0316146109055760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610616565b603480546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60cb546000906001600160a01b039081169083160361149d5760405162461bcd60e51b815260206004820152603e60248201527f45524331313535547261636b65723a20736f7572636520636f6e74726163742060448201527f61646472657373206973206e6f7420612076616c6964206163636f756e7400006064820152608401610616565b60cb5460405163724686d760e01b81526001600160a01b0384811660048301529091169063724686d790602401602060405180830381865afa1580156114e7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107289190612500565b600043821061155c5760405162461bcd60e51b815260206004820181905260248201527f436865636b706f696e74733a20626c6f636b206e6f7420796574206d696e65646044820152606401610616565b825460005b818110156115c15760006115758284611afb565b90508486600001828154811061158d5761158d61266b565b60009182526020909120015463ffffffff1611156115ad578092506115bb565b6115b8816001612697565b91505b50611561565b816000036115d457600092505050610728565b846115e06001846126af565b815481106115f0576115f061266b565b6000918252602090912001546401000000009004601b0b95945050505050565b80546000908082036116255750600092915050565b826116316001836126af565b815481106116415761164161266b565b6000918252602090912001546401000000009004601b0b9392505050565b600061072861166c611133565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b60008060006116be87878787611b16565b915091506116cb81611bda565b5095945050505050565b826000036116fd57336000908152610103602052604090206116fa90611d2483611d30565b50505b81600003611725573360009081526101036020526040902061172290611d5e83611d30565b50505b610d2561174a8433600090815261010160209081526040808320938352929052205490565b3360009081526101016020908152604080832087845290915290205483611d6a565b600154610100900460ff166109055760405162461bcd60e51b8152600401610616906126c6565b600154610100900460ff1661061f5760405162461bcd60e51b8152600401610616906126c6565b600061059e610b02565b6040516301ffc9a760e01b81526317ff47d760e21b60048201526001600160a01b038216906301ffc9a790602401602060405180830381865afa15801561180f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118339190612711565b6118915760405162461bcd60e51b815260206004820152602960248201527f54617267657420636f6e747261637420657870656374656420746f20737570706044820152681bdc9d081254dbdd5b60ba1b6064820152608401610616565b60cb80546001600160a01b0319166001600160a01b0392909216919091179055565b6000816040516020016118c69190612733565b60405160208183030381529060405280519060200120836040516020016118ed9190612733565b6040516020818303038152906040528051906020012014905092915050565b6040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090505b9392505050565b6001600160a01b0381163b6119c35760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610616565b60008051602061280883398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6119fb83611f0f565b600082511180611a085750805b15610d2557611a178383611f4f565b50505050565b336000908152610101602090815260408083208584529091529020805490829055611a47826112dd565b6001600160a01b0316611a59826112dd565b6001600160a01b0316611a6b856112dd565b6001600160a01b03167f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f60405160405180910390a48181847f472d85e9261660ff5a5db6fb50351852ec3312ceeb7eb55cf99286fb54c29a1b60405160405180910390a4610d258183611af68633600090815261010060209081526040808320938352929052205490565b611d6a565b6000611b0a600284841861274f565b61072590848416612697565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611b4d5750600090506003611bd1565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611ba1573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611bca57600060019250925050611bd1565b9150600090505b94509492505050565b6000816004811115611bee57611bee612771565b03611bf65750565b6001816004811115611c0a57611c0a612771565b03611c575760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610616565b6002816004811115611c6b57611c6b612771565b03611cb85760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610616565b6003816004811115611ccc57611ccc612771565b036106285760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610616565b60006107258284612787565b600080611d5285611d4d611d4388611610565b868863ffffffff16565b612043565b91509150935093915050565b600061072582846127c8565b818314158015611d7a5750600081135b15610d25578215611e45573360009081526101026020908152604080832086845290915281208190611daf90611d5e85611d30565b91509150611dbc856112dd565b6001600160a01b03167f8508f4e3dc4e292c5ef40ad0343e77116372b6f57806cf637d257203e009783a8383604051611dff929190918252602082015260400190565b60405180910390a2604080518381526020810183905286917ff9390babff649ee103f68f475c4d20b6017ae10e8f27a7eba9620bb8cbbb3789910160405180910390a250505b8115610d25573360009081526101026020908152604080832085845290915281208190611e7590611d2485611d30565b91509150611e82846112dd565b6001600160a01b03167f8508f4e3dc4e292c5ef40ad0343e77116372b6f57806cf637d257203e009783a8383604051611ec5929190918252602082015260400190565b60405180910390a2604080518381526020810183905285917ff9390babff649ee103f68f475c4d20b6017ae10e8f27a7eba9620bb8cbbb3789910160405180910390a25050505050565b611f1881611956565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b611fb75760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610616565b600080846001600160a01b031684604051611fd29190612733565b600060405180830381855af49150503d806000811461200d576040519150601f19603f3d011682016040523d82523d6000602084013e612012565b606091505b509150915061203a828260405180606001604052806027815260200161282860279139612163565b95945050505050565b815460009081908161205486611610565b90506000821180156120925750438661206e6001856126af565b8154811061207e5761207e61266b565b60009182526020909120015463ffffffff16145b156120ef576120a08561217c565b866120ac6001856126af565b815481106120bc576120bc61266b565b600091825260209091200180546001600160e01b03929092166401000000000263ffffffff90921691909117905561215a565b856000016040518060400160405280612107436121e5565b63ffffffff16815260200161211b8861217c565b601b0b905281546001810183556000928352602092839020825193909201516001600160e01b03166401000000000263ffffffff909316929092179101555b95939450505050565b6060831561217257508161194f565b61194f838361224e565b80601b81900b81146121e05760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b6064820152608401610616565b919050565b600063ffffffff82111561224a5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b6064820152608401610616565b5090565b81511561225e5781518083602001fd5b8060405162461bcd60e51b815260040161061691906124cd565b60006020828403121561228a57600080fd5b5035919050565b6001600160a01b038116811461062857600080fd5b6000602082840312156122b857600080fd5b813561194f81612291565b600080604083850312156122d657600080fd5b82356122e181612291565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561232e5761232e6122ef565b604052919050565b600067ffffffffffffffff821115612350576123506122ef565b50601f01601f191660200190565b6000806040838503121561237157600080fd5b823561237c81612291565b9150602083013567ffffffffffffffff81111561239857600080fd5b8301601f810185136123a957600080fd5b80356123bc6123b782612336565b612305565b8181528660208385010111156123d157600080fd5b816020840160208301376000602083830101528093505050509250929050565b60008060008060008060c0878903121561240a57600080fd5b863561241581612291565b95506020870135945060408701359350606087013560ff8116811461243957600080fd5b9598949750929560808101359460a0909101359350915050565b60008060006060848603121561246857600080fd5b505081359360208301359350604090920135919050565b6000806040838503121561249257600080fd5b50508035926020909101359150565b60005b838110156124bc5781810151838201526020016124a4565b83811115611a175750506000910152565b60208152600082518060208401526124ec8160408501602087016124a1565b601f01601f19169190910160400192915050565b60006020828403121561251257600080fd5b5051919050565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b6000602082840312156125c357600080fd5b815161194f81612291565b6001600160a01b039190911681526040602082018190526003908201526214d09560ea1b606082015260800190565b60006020828403121561260f57600080fd5b815167ffffffffffffffff81111561262657600080fd5b8201601f8101841361263757600080fd5b80516126456123b782612336565b81815285602083850101111561265a57600080fd5b61203a8260208301602086016124a1565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156126aa576126aa612681565b500190565b6000828210156126c1576126c1612681565b500390565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60006020828403121561272357600080fd5b8151801515811461194f57600080fd5b600082516127458184602087016124a1565b9190910192915050565b60008261276c57634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fd5b600080821280156001600160ff1b03849003851316156127a9576127a9612681565b600160ff1b83900384128116156127c2576127c2612681565b50500190565b60008083128015600160ff1b8501841216156127e6576127e6612681565b6001600160ff1b038401831381161561280157612801612681565b5050039056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122017160033bb6e8f7d4a0bf9403483aaa7f08cb5614d4d660603e47def170b17bb64736f6c634300080e0033";

type VotesRepoTrackerUpIntConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VotesRepoTrackerUpIntConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VotesRepoTrackerUpInt__factory extends ContractFactory {
  constructor(...args: VotesRepoTrackerUpIntConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VotesRepoTrackerUpInt> {
    return super.deploy(overrides || {}) as Promise<VotesRepoTrackerUpInt>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): VotesRepoTrackerUpInt {
    return super.attach(address) as VotesRepoTrackerUpInt;
  }
  override connect(signer: Signer): VotesRepoTrackerUpInt__factory {
    return super.connect(signer) as VotesRepoTrackerUpInt__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VotesRepoTrackerUpIntInterface {
    return new utils.Interface(_abi) as VotesRepoTrackerUpIntInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VotesRepoTrackerUpInt {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as VotesRepoTrackerUpInt;
  }
}

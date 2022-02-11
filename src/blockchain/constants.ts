export const defaultChainId = 56;

export const rpcUrls = {
  56: 'https://bsc-dataseed.binance.org/',
  1666700000: 'https://api.s0.b.hmny.io',
  42: "https://kovan.infura.io/v3/99b8947af7e14278ae235bb21eb81f53",
  3: "https://eth-ropsten.alchemyapi.io/v2/fxrejtNAKunh--Iym4w8DI4mpb4pEEbA"
}

export const networkNames = {
  42: "Kovan Testnet",
  56: 'BSC Mainnet',
  1666700000: 'Harmony Testnet',
  3: "ropsten Testnet"
}

export const SymbolsMap = {
    "WONE": "0x574f4e4500000000000000000000000000000000000000000000000000000000", // WONE
    "USDT": "0x555344542e740000000000000000000000000000000000000000000000000000", // USDT.t
    "USDT.T": "0x555344542e740000000000000000000000000000000000000000000000000000", 
    "USDC": "0x555344432e740000000000000000000000000000000000000000000000000000", // USDC.t
    "USDC.T": "0x555344432e740000000000000000000000000000000000000000000000000000",
    "BTC": "0x4254432e74000000000000000000000000000000000000000000000000000000", // BTC.t
    "BTC.T": "0x4254432e74000000000000000000000000000000000000000000000000000000",
    "SXP": "0x5358500000000000000000000000000000000000000000000000000000000000",
    "CAKE": "0x43414b4500000000000000000000000000000000000000000000000000000000", // CAKE
    "BNB": "0x57424e4200000000000000000000000000000000000000000000000000000000",
    "BNB.T": "0x57424e4200000000000000000000000000000000000000000000000000000000",
    "ETH": "0x4554480000000000000000000000000000000000000000000000000000000000", // ETH
}

export const symbols = [
  // "0x574f4e4500000000000000000000000000000000000000000000000000000000", // WONE
  "0x555344542e740000000000000000000000000000000000000000000000000000", // USDT.t
  "0x555344432e740000000000000000000000000000000000000000000000000000", // USDC.t
  "0x4254432e74000000000000000000000000000000000000000000000000000000", // BTC.t
  "0x57424e4200000000000000000000000000000000000000000000000000000000"
]


// export const markets = ["WONE", "USDT.t", "USDC.t", "BTC.t"];
export const markets = ["USDT.t", "USDC.t", "BTC.t"];
export const marketAddresses = [
  // '0xD77B20D7301E6F16291221f50EB37589fdAB3720', // WONE
  '0x64c19ceDA1Cb71Ef4962cb9e93F2db58A1a41eB0', // USDT.t
  '0xe3C0BBd4DDcE77e228cD3A9F56328C17ad9E2773', // USDC.t
  '0xd98702cf772c01a7347e857d6f937A4F131bE252',  // BTC.t
  '0x56bf137C3bD165376B2bE88932542849C276931E', // SXP
  '0xd35CAc08bc3493cE11316CC27Fc72FB087905C9f', // CAKE
  '0xA6fA7701f57Cb2401F83Ad70CaEbD73d17b9A1c4' // BNB
  
];
export const latestPrice = [
  // '0.2886',
  '1',
  '1',
  '64931.45'
]

export const DepositInterestRates = {
  "NONE": "7.8%",
  "TWOWEEKS": "10%",
  "ONEMONTH": "15%",
  "THREEMONTHS": "18%"
}

export const VariableDepositInterestRates = {
  "NONE": "0%",
  "TWOWEEKS": "Upto 2.1%",
  "ONEMONTH": "Upto 3.6%",
  "THREEMONTHS": "Upto 6%"
}

export const BorrowInterestRates = {
  "NONE": "18%",
  "ONEMONTH": "15%"
}

// export const decimals = [18,18,18,8];
export const decimals = [8,18,18, 18];

export const DecimalsMap = {
  "BTC": 8,
  "BTC.T": 8,
  "0x4254432e74000000000000000000000000000000000000000000000000000000": 8,
  "USDT": 18,
  "USDT.T": 18,
  "0x555344542e740000000000000000000000000000000000000000000000000000": 18,
  "USDC.T": 18,
  "USDC": 18,
  "0x555344432e740000000000000000000000000000000000000000000000000000": 18,
  "BNB": 18,
  "BNB.T": 18,
  "0x57424e4200000000000000000000000000000000000000000000000000000000": 18
}

export const CommitMap = {
  "NONE": "0x636f6d69745f4e4f4e4500000000000000000000000000000000000000000000",
  "TWOWEEKS": "0x636f6d69745f54574f5745454b53000000000000000000000000000000000000",
  "ONEMONTH": "0x636f6d69745f4f4e454d4f4e5448000000000000000000000000000000000000",
  "THREEMONTHS": "0x636f6d69745f54485245454d4f4e544853000000000000000000000000000000"
}

export const comit_NONE = "0x636f6d69745f4e4f4e4500000000000000000000000000000000000000000000";
export const comit_TWOWEEKS = "0x636f6d69745f54574f5745454b53000000000000000000000000000000000000";
export const comit_ONEMONTH = "0x636f6d69745f4f4e454d4f4e5448000000000000000000000000000000000000";
export const comit_THREEMONTHS = "0x636f6d69745f54485245454d4f4e544853000000000000000000000000000000";

export const faucetAddress = "0x374D2C00Bab402191F2787F117eb854E354381b8";

export const pancakeSwapTokenAddress = {
  "0x555344432e740000000000000000000000000000000000000000000000000000": "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", //USDC
  "0x555344542e740000000000000000000000000000000000000000000000000000": "0x55d398326f99059fF775485246999027B3197955", //USDT,
  "0x4254432e74000000000000000000000000000000000000000000000000000000": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", //BTC,
  "0x57424e4200000000000000000000000000000000000000000000000000000000": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" //BNB
}

export const EventMap = {
  "GET_TOKEN": "",
  "NEW_DEPOSIT": "NewDeposit",
  "DEPOSIT_ADDED": "DepositAdded",
  "WITHDRAW_DEPOSIT": "Withdrawal",
  "REQUEST_LOAN": "NewLoan",
  "REPAY_LOAN": "LoanRepaid",
  "WITHDRAW_LOAN": "WithdrawPartialLoan",
  "ADD_COLLATERAL": "AddCollateral",
  "WITHDRAW_COLLATERAL": "CollateralReleased",
  "SWAP_LOAN": "MarketSwapped",
  "SWAP_TO_LOAN": "MarketSwapped",

  "USDC.T": "USDC",
  "USDT.T": "USDT",
  "BTC.T": "BTC",
  "BNB.T": "BNB",

  "NONE": "None",
  "TWOWEEKS": "Two Weeks",
  "ONEMONTH": "One Month",
  "THREEMONTHS": "Three Months"

};

export const CoinClassNames = {
  "USDT": "mdi mdi-litecoin",
  "USDC": "mdi mdi-ethereum",
  "BTC": "mdi mdi-bitcoin",
  "BNB": "mdi mdi-drag-variant"
};

export const MinimumAmount = {
  "USDT": 100,
  "USDC": 100,
  "BTC": 0.1,
  "BNB": 0.25 
};

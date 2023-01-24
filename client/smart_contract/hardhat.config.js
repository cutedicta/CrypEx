require("@nomic foundation/hardhat-toolbox");


/** @type import('hardhat/config').HardhatUserConfig */


module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    goerli: {
      url:  "https://eth-goerli.g.alchemy.com/v2/046AZqBDWjIJwrdsJvQV3VUQft-vK9E5",
      accounts: ["3321c92b8bcdcf631a6593b272a9074d60779d3bb31a29833e12102fec7d7a7f"],
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}


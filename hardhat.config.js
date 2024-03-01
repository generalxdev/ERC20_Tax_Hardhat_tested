require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-verify");
require('dotenv').config();

const { PRIVATE_KEY, ETHERSCAN_API_KEY, GOERLI_NETWORK_AUX, MENMONIC} = process.env;
console.log(MENMONIC);
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork:"hardhat",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  solidity: {
    version: "0.8.20",
    settings: {
    },
  },
  networks:{
    hardhat: {
      forking: {
        url: "https://eth.llamarpc.com",
      }
    },
    localhost: {
      url: "http://localhost:8545"
    },
    goerli: {
      url: `${GOERLI_NETWORK_AUX}`,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/af866b3a78ea49b3b95d7765f609e388",
      chainId: 1,
      accounts: [PRIVATE_KEY]
    },

  }
};
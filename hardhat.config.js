/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const RPC_URL = process.env.RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.1",
  defaultNetwork: "hardhat",
  networks: {
      goerli: {
        url: RPC_URL,
        accounts: [PRIVATE_KEY],
        chainId: 5
      }
},
}


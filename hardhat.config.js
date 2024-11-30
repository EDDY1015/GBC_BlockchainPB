require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
    solidity: "0.8.27",
    defaultNetwork: "sepolia",
    networks: {
        sepolia: {
          url: "https://eth-sepolia.g.alchemy.com/v2/" + process.env.ALCHEMY_SEPOLIA_URL,
          accounts: [process.env.METAMASK_ACCOUNT_PRIVATE_KEY],
        },
    },
};

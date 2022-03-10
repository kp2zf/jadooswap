require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/XH8xge7vpmbhPve1GVv2UqceQqAa_lmO',
      accounts: [
        'eafbeae7d67d7ef902e59ef99c1d26acc3e57ba588b5ad03db94efcf657dbfef',
      ],
    },
  },
}
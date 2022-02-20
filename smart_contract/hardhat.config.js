require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/mEJIAuxHnE2HsvBATUIEBiTLrd-dN5X3',
      accounts: [
        'f2679263aadf9db7949246a5265f7cf0b0aece610ba4d84dcfc9304ccd050d0c',
      ],
    },
    c4ei: {
      url: 'https://rpc.c4ei.net',
      accounts: [
        '0x2a81708d04c13121b8b5b7406c227259a5c08669e830b29db9934fd19a3fa488',
      ],
    },
  },
}

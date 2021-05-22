require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remind humble install casino sure ten'; 
let testAccounts = [
"0xd5607f1280a5cd4f33e0a9f709b8940ef29cf2ca4910b2ee2ca65af65b36341d",
"0xa696ae6dd1f8eda17d4851ae618bb73cd7cad3277862cdc672b66d33d70970b0",
"0x856f026e0e802cfbf7fe6ac362651051a8782ae081648bdd0aa1f47f19d7c276",
"0x3801f8c1cdb7f9b1ce828522d848d720d560757a0eb560b0184b90100bed53f6",
"0x82a128a951aafbafcb8267ef82fefd544a8d8e004646f7295afb45567f1338c6",
"0x672a36fc66f9c5399dd55779f397f5fa98d29a7f2371912fbb6f36ffbf1c9fc9",
"0x8f0dcfb9efd2f5b64f70622b39278b9328e97c72850c95a30c95b137a1a9d223",
"0x59b5b791fecab50225fdaca4fa62a05876de2ea64f37f057a2c45980b7760a14",
"0x1f445a262c5e3faa28072f672bb1dbdaee40bbfe7bc35a9af5b10082aa4b2435",
"0xac3085873259d985bd27a64316ebe789d591a5ff8328d3ffa5a8908b0602f46f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

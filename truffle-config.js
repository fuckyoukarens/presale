/**
 * More information about configuration can be found at:
 * trufflesuite.com/docs/advanced/configuration
 */

 const HDWalletProvider = require('@truffle/hdwallet-provider');
 const fs = require('fs');
 
 //Load up the correct wallet
 const mnemonic = fs.readFileSync(".secrets/.main").toString().trim();
 
 module.exports = {

   /** https://github.com/rkalis/truffle-plugin-verify */
   plugins: [
     'truffle-plugin-verify'
   ],
   api_keys: {
     bscscan: 'JNK9VUU7VYJQ3RN6BHFV8ZBC511V8YHSS6'
   },

   /**
    * @author Though it'll always use the first account to deploy, force the address in the config just in case
    * 
    * List of BSC RPC endpoints is available at the following URL. The 1st and 2nd are generally SLOW, so use a different one!
    * https://docs.binance.org/smart-chain/developer/rpc.html
    */
 
   networks: {
     dev: { //Linked project in Ganache
       provider: () => new HDWalletProvider(mnemonic, 'http://127.0.0.1:7545'),
       network_id: "5777",
      },
      test: {
       provider: () => new HDWalletProvider(mnemonic, 'https://data-seed-prebsc-1-s3.binance.org:8545'),
       network_id: 97,
       confirmations: 10,
       timeoutBlocks: 200,
       networkCheckTimeout: 1000000,
       skipDryRun: true,
       from: '0x5B359933F2c033c3B47527524A56f51835a5970A'
     },
     bsc: {
       provider: () => new HDWalletProvider(mnemonic, 'https://bsc-dataseed.binance.org/'),
       network_id: 56,
       confirmations: 10,
       timeoutBlocks: 200,
       networkCheckTimeout: 1000000,
       skipDryRun: true,
       from: '0x5B359933F2c033c3B47527524A56f51835a5970A'
     },
   },
 
   // Set up compiler
   compilers: {
     solc: {
       version: "0.5.8",
       settings: {
         optimizer: {
           enabled: false,
            runs: 200
         }
       }
     }
   },
 };
 
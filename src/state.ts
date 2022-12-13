
import {HttpJsonRpcConnector, LotusClient, LotusWalletProvider, MnemonicWalletProvider } from 'filecoin.js';
const BigNumber = require('big-number');


const testMnemonic = 'equip will roof matter pink blind book anxiety banner elbow sun young';
const bearerToken = '';

async function main() {
      const httpConnector = new HttpJsonRpcConnector({ url: 'https://api.node.glif.io/rpc/v0', bearerToken });
      const conector = new LotusClient(httpConnector);
      const mnemonicWalletProvider = new MnemonicWalletProvider( conector, testMnemonic, '');
      const walletLotusHttp = new LotusWalletProvider(conector);
  
      console.log('mnemonicWalletProvider', mnemonicWalletProvider.client.state);
      console.log('walletLotusHttp', walletLotusHttp.state);

    }

    main();

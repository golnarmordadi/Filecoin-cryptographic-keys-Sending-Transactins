
import {HttpJsonRpcConnector, LotusClient, LotusWalletProvider, MnemonicWalletProvider } from 'filecoin.js';
const BigNumber = require('big-number');


const testMnemonic = 'equip will roof matter pink blind book anxiety banner elbow sun young';

async function main() {
      const httpConnector = new HttpJsonRpcConnector({ url: 'https://api.node.glif.io/rpc/v0', token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJyZWFkIiwid3JpdGUiLCJzaWduIiwiYWRtaW4iXX0.GRFjz-pVUeD4GRzHFFvr2ABWkMoaYdHY8Mq4L2jpZeQ' });
      const conector = new LotusClient(httpConnector);
      const mnemonicWalletProvider = new MnemonicWalletProvider( conector, testMnemonic, '');
      const walletLotusHttp = new LotusWalletProvider(conector);
  
      console.log('mnemonicWalletProvider', mnemonicWalletProvider.client.state);
      console.log('walletLotusHttp', walletLotusHttp.state);

    }

    main();

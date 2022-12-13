
const BigNumber = require('big-number');
import { FilecoinClient, FilecoinSigner } from '@blitslabs/filecoin-js-signer';

const testMnemonic = 'equip will roof matter pink blind book anxiety banner elbow sun young';
const receiverAddress = "";
const privateKey = "";

/** Generate a seed (mnemonic). */
function generateMnemonic(testMnemonic: String) {
  const filecoin_signer = new FilecoinSigner();
  const strength = 128 // 128 => 12 words | 256 => 24 words
  const mnemonic =  filecoin_signer.wallet.generateMnemonic(strength)
   console.log(mnemonic)
}

/** Derive (public/private) keys from a mnemonic. */
async function Keypair(){
  const filecoin_signer = new FilecoinSigner()
  const strength = 128 // 128 => 12 words | 256 => 24 words
  const mnemonic = await filecoin_signer.wallet.generateMnemonic(strength)
  const i = 0
  const network = 'testnet'
  const keys = await filecoin_signer.wallet.keyDerive(mnemonic, `m/44'/461'/0'/0/${i}`, network);
  console.log(keys);
}

/** Sign an unsigned message with a given private key */
async function transactionSign(){
  const filecoin_signer = new FilecoinSigner()

  const unsignedMessage = await filecoin_signer.paych.createPaymentChannelMsg(
    receiverAddress , 'f01',BigNumber(1e18) , 0, 'testnet'
  )   

  const signedMessage = await filecoin_signer.tx.transactionSignLotus(unsignedMessage, privateKey);
  console.log(signedMessage);
}

/** Create, sign and broadcast a message send FIL  */
async function sendTransaction(){
  const endpoint = 'https://calibration.node.glif.io';
  const token = '';
  const filecoin_client = new FilecoinClient(endpoint, token)

  const response = await filecoin_client.tx.send(
    receiverAddress, // There should be actor if not throw aan error
    BigNumber(10),
    100,
    privateKey,
    'testnet',
    false
  )
  console.log(response)
}

async function main() {

  generateMnemonic(testMnemonic);
  Keypair();
  transactionSign();
  sendTransaction();

}

main();

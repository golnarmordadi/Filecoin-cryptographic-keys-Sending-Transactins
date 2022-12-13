const  axios = require('axios');

const bearerToken = "";
const adddress = "";

//** WalletBalance returns the balance of the given address at the current head of the chain. */
async function main() {

  var data = JSON.stringify({
      "jsonrpc": "2.0",
      "method": "Filecoin.WalletValidateAddress", 
      "id": 0,
      "params": [
        adddress
      ]
  });


  var config = {
      method: 'post',
      url: 'https://api.node.glif.io',
      headers: { 
          /** Token obtained from local lotus node */
          'Authorization': bearerToken, 
          'Content-Type': 'application/json'
      },
      data : data
  };

  axios(config)
 .then(function (response: any) {
      console.log(JSON.stringify(response.data));
  })
  .catch(function (error: any) {
        console.log(error);
  });

}

main();

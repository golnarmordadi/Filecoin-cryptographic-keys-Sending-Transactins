const  axios = require('axios');

//** WalletBalance returns the balance of the given address at the current head of the chain. */
async function main() {

  var data = JSON.stringify({
      "jsonrpc": "2.0",
      "method": "Filecoin.WalletValidateAddress", 
      "id": 0,
      "params": [
        "t1jdlfl73voaiblrvn2yfivvn5ifucwwv5f26nfza"
      ]
  });


  var config = {
      method: 'post',
      url: 'https://api.node.glif.io',
      headers: { 
          /** Token obtained from local lotus node */
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJyZWFkIiwid3JpdGUiLCJzaWduIiwiYWRtaW4iXX0.GRFjz-pVUeD4GRzHFFvr2ABWkMoaYdHY8Mq4L2jpZeQ', 
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
# typescript-typeorm-graphql

This project is an assignment started to develop `TypeScript`, strongly typed models
`NodeJS` , `Express`.

# In order to run project put in .env file something like:

LOTUS_URL=ws://<ip address of Filecoin node>/rpc/v0
LOTUS_AUTH_TOKEN=<Lotus RPC API authorization token with admin permissions>
COPY_NUMBER=3
ENCRYPTION_KEY=<encryption key>
PRICE=5000000000
COPY_NUMBER=3
PORT=XXXX
LOGS_ERROR_BASE_PATH='./logs/'
LOGS_ERROR_FILE_NAME='error.log'
LOGS_COMBINED_BASE_PATH='./logs/'
LOGS_ERROR_COMBINED_FILE_NAME='combined.log'
READINESS_FAILURE_THRESHOLD='2'
READINESS_PERIOD='5'
SHUTDOWN_TIMEOUT_SECONDS='15'

# Running

- clone the repo
- npm i
- npm run start:dev
- go to localhost:3000

# Ledger Information
- Lotus can manage bls, sec1p256k1 wallets and supports Ledger integration.
- Glif wallet(opens new window)	Glif is a lightweight web interface to send and receive Filecoin with a Ledger device (instructions (opens new window)).
- The Ledger Hardware Filecoin integration does not currently support BLS addresses, only secp256k1

# Related Links
- https://github.com/glifio/filecoin-docker
- https://www.youtube.com/watch?v=aGCpq0Xf-w8&ab_channel=ETHGlobal
- https://documenter.getpostman.com/view/4872192/SWLh5mUd?version=latest

## Lotus tokens
Not all the Lotus API endpoints are public. Some endpoints need extra permissions (read,write,sign,admin). To use these endpoints you need to supply a token.

You can find more info regarding tokens [here](https://docs.filecoin.io/build/lotus/api-token-generation/#generating-new-tokens)

If you want to use these secured endpoints you need to supply a token to the HttpJsonRpcConnector or WsJsonRpcConnector, or use a proxy that takes care of this for you, by adding the Authorization token to all requests.

# Glif nede api
- https://api.node.glif.io 
- https://api.node.glif.io/rpc/v0

# The API can be accessed on:

http://[api:port]/rpc/v0 - HTTP RPC-API endpoint
ws://[api:port]/rpc/v0 - Websocket RPC-API endpoint
http://[api:port]/rest/v0/import (PUT only) - REST endpoint for file import (multipart upload). It requires write permissions

# Lotus full api
- https://github.com/filecoin-project/lotus/blob/master/api/api_full.go

# Available key type
-  Available key types: bls, secp256k1, secp256k1-ledger

# Filecoin Signer
- https://npm.io/package/@blitslabs/filecoin-js-signer

// http://46.101.244.211/rpc/v0
// https://api.node.glif.io


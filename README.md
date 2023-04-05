 docker run --rm -it -v ${PWD}/:/data  ethereum/client-go account new --keystore data
 
 docker rm -f eth-node
 
 geth attach http://127.0.0.1:8546
 
 docker run --rm -v ${PWD}/data:/data -v ${PWD}/genesis.json:/genesis.json ethereum/client-go init --datadir data /genesis.json
 
 docker run --network eth -d -p 8545:8545   --name eth-node  -v ${PWD}/data:/data  ethereum/client-go  --datadir data --http --http.api personal,admin,eth,net,web3 --http.addr 0.0.0.0 --http.port 8545 --mine --miner.etherbase 0x5e0ca4087c09ccf70a78faa5d073e1dcec4aa091 --miner.threads 1 --http.corsdomain="*"
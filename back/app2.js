const { ethers } = require("ethers")
const fs = require("fs")

const json = fs.readFileSync("../nodo/keystore/UTC--2022-12-19T18-46-24.804058039Z--da682c875e6c792d9a7086627d5ec618e7c5e805").toString("utf-8")
ethers.getDefaultProvider()

ethers.Wallet.fromEncryptedJson(json, "1234").then(async (w) => {
    
    let customHttpProvider = await new ethers.providers.JsonRpcProvider("http://localhost:8545");
    let nonce = await customHttpProvider.getTransactionCount(w.address);
    console.log("nonce", nonce)
   // console.log(customHttpProvider)
    w.connect = customHttpProvider
    const tx = {
        chainId: 8888, 
        to: "0xff21E724B7D483fc93708855AbE6ee4f1eD97BF3",
        from: w.address,
        nonce : nonce +3 ,
        gasLimit: ethers.utils.hexlify(21000),
        value: ethers.utils.parseEther("0.0000011"),
    }

    const tx1 = await  w.signTransaction(tx)
    console.log(tx1)
    const tx2 = await customHttpProvider.sendTransaction(tx1)
    
    // console.log(w.privateKey, w.address)
})





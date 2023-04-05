const Web3 = require("web3")
var EC = require('elliptic').ec;
var ec = new EC('secp256k1');
const { ethers } = require("ethers")
const fs = require("fs")
const util = require("ethereumjs-utils")
const web3 = new Web3("http://localhost:8545")

// web3.eth.getBalance("0xda682C875E6C792D9a7086627d5EC618E7C5E805")
//     .then(saldo => { console.log(saldo) })

const json = JSON.parse(fs.readFileSync("../nodo/data/keystore/UTC--2022-12-29T11-29-30.907159383Z--5e0ca4087c09ccf70a78faa5d073e1dcec4aa091").toString("utf-8"));

(async () => {
    const account = await web3.eth.accounts.decrypt(json, "1234");
    const w = await ethers.Wallet.fromEncryptedJson(JSON.stringify(json), "1234")
    const tx = {
        chainId: 8888,
        to: "0xff21E724B7D483fc93708855AbE6ee4f1eD97BF3",
        from: account.address,
        gas: 30000,
        value: web3.utils.toWei("1.0", 'ether')
    }
    const tx1 = await account.signTransaction(tx)
    const respuesta = web3.eth.sendSignedTransaction(tx1.rawTransaction)
    // const firma = await account.sign("aaaaa")

    
    // console.log(respuesta, firma)
    console.log(account)

    console.log(w.publicKey, w.privateKey.substring(2))
    var public = ec.keyFromPrivate(w.privateKey.substring(2)).getPublic();
    console.log(public.getX().toString("hex"))
    console.log(public.getY().toString("hex"))
    var hash = ethers.utils.keccak256("0x" + public.encode('hex'));
    var slicedHash = "0x" + hash.slice(-40);
    console.log(slicedHash)
})()
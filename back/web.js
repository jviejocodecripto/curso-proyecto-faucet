const express = require("express")
const cors = require("cors")
const Web3 = require("web3")
const fs = require("fs")
const path = require("path")
const web3 = new Web3("http://localhost:8545")
require("dotenv").config()


const app = express()

app.use(cors())
app.use(express.json())
app.listen(3003)
const address = JSON.parse(fs.readFileSync(path.join(process.env.PATHKEYSTORE, process.env.ADDRESSFILE)).toString())


app.post("/transfer", async (req, res) => {

    console.log(req.body)
    const account = await web3.eth.accounts.decrypt(address, "1234");
    
    const tx = {
        chainId: 8888,
        to: req.body.cuenta,
        from: account.address,
        gas: 30000,
        value: web3.utils.toWei(req.body.amount, 'ether')
    }
    const tx1 = await account.signTransaction(tx)
    const respuesta = await web3.eth.sendSignedTransaction(tx1.rawTransaction)

    res.send("ok")
})



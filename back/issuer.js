const express = require("express")
const cors = require("cors")
const Web3 = require("web3")
const fs = require("fs")
const path = require("path")
require("dotenv").config()
const web3 = new Web3("http://localhost:8545")

const app = express()

app.use(cors())
app.use(express.json())
app.listen(3003)
const address = JSON.parse(fs.readFileSync(path.join(process.env.PATHKEYSTORE, process.env.ADDRESSFILE)).toString())


app.post("/issue", async (req, res) => {

    console.log(req.body)
    const account = await web3.eth.accounts.decrypt(address, "1234");

    const attributes = {
        data : req.body,
        expired: new Date() + 1000
    }
    const tx1 = await account.sign(attributes)
    res.send(tx1)
})



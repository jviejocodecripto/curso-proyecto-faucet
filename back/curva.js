var EC = require('elliptic').ec;
var ec = new EC('secp256k1');
let sha3 = require('js-sha3');
const { ethers } = require("ethers")

// const keyPair = ec.keyFromPrivate("ce5f83f58c6026804544ca44f91aaf1760a6fbaa714230be582722bd099b7bb6")
const keyPair = ec.keyFromPrivate([2])
let hexToDecimal = (x) => ec.keyFromPrivate(x, "hex").getPrivate().toString(10);

const mensaje =  sha3.keccak256("AAA999")

let firma = ec.sign(mensaje, keyPair.getPrivate(), "hex", {canonical: true});
console.log(firma)
let pubKeyRecovered = ec.recoverPubKey(hexToDecimal(mensaje), firma, firma.recoveryParam, "hex");



console.log(keyPair.getPublic().encode("hex"))
console.log(pubKeyRecovered.encode("hex"));


const BN = require('bn.js');
const crypto = require("crypto")
var a = new BN(11);

[1,2,3,4,5,6,7,8,9,10].map(i=> {
    console.log(i, new BN(i).invm(a))
})
var enc = new TextEncoder()
var p = new Uint8Array(crypto.generatePrimeSync(1024))
var q = new Uint8Array(crypto.generatePrimeSync(1024))
p = new BN(p)
q = new BN(q)
n = p.imul(q)
phi = p.isub(new BN(1)).imul(q.isub(new BN(1)))
const e = new BN(3)
const d = e.invm(phi)

var valor = new BN(2)

var criptograma = valor.pow(e).mod(n)
console.log(criptograma)
// var des = criptograma.mod(n).pow(d).mod(n)
// console.log(des)

// const NodeRSA = require('node-rsa');
// const key1 = new NodeRSA({b: 2048});
// const text1 = 'A';
// const encrypted = key.encrypt(text1);
// console.log('encrypted: ', encrypted);
// const decrypted = key.decrypt(encrypted, 'utf8');
// console.log('decrypted: ', decrypted);

var aesjs = require("aes-js")

// An example 128-bit key
var key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];

// The initialization vector (must be 16 bytes)
var iv = [ 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,35, 36 ];

// Convert text to bytes (text must be a multiple of 16 bytes)
var text = 'TextMustBe16Byte';
var textBytes = aesjs.utils.utf8.toBytes(text);

var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);

var encryptedBytes = aesCbc.encrypt(textBytes);

// To print or store the binary data, you may convert it to hex
var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
console.log(encryptedHex);
// "104fb073f9a131f2cab49184bb864ca2"

// When ready to decrypt the hex string, convert it back to bytes
var encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);

// The cipher-block chaining mode of operation maintains internal
// state, so to decrypt a new instance must be instantiated.
var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
var decryptedBytes = aesCbc.decrypt(encryptedBytes);

// Convert our bytes back into text
var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
console.log(decryptedText);
// "TextMustBe16Byte"1

const a12 = 2n



const NodeRSA = require('node-rsa');
const key1 = new NodeRSA({b: 2048});
console.log(key1.exportKey(NodeRSA.FormatComponentsPublic))
const base = BigInt(key1.keyPair.p.toString()) 
const exponente = BigInt(5) 
console.log(exponente.toString(2).split(""))
const resut = exponente.toString(2).split("").reduce((acc, i) => {return i == 1 ? acc * acc * base: acc * acc }, BigInt(1))
console.log(resut.toString(16))

var bigInt = require("big-integer");
console.log(bigInt(65537).modInv(base))
console.log(bigInt(65537).modPow(base, base))

const bytes = crypto.randomBytes(128);
const bigInt1 = BigInt(`0x${bytes.toString('hex')}`);


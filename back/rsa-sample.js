var bigInt = require("big-integer");
const crypto = require("crypto")
let p = crypto.generatePrimeSync(1024, {bigint: true});
let q = crypto.generatePrimeSync(1024, {bigint: true});
const n = p * q
const phi = (p - BigInt(1)) * (q - BigInt(1))
const e = BigInt('0x10001')

const d = bigInt(e).modInv(phi)

const e1 = bigInt(e)
const bytes = crypto.randomBytes(256)
const criptgrama = bigInt(BigInt(`0x${bytes.toString('hex')}`)).modPow(e, n)

const desencriptamos = bigInt(criptgrama).modPow(d, n)

console.log(BigInt(`0x${bytes.toString('hex')}`),  desencriptamos)

// console.log(11 ^ 10)









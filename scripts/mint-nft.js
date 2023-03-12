require ("dotenv").config;
const fs=require('fs');
const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PUBLIC_KEY = fs.readFileSync('api.txt','utf8');
const { createAlchemyWeb3} = require ("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);
const contract = require ("../artifacts/contracts/MyNFT.sol/MyNFT.json");
const contractAddress = "0x44c7F433aB7D8Cc4077A44e900B2dBa6Fa0A894c" ;
const nftContract = new web3.eth.Contract(contract.abi, contractAddress) ;

async function mintNFT(tokenURI) {
    
const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY,"latest");

const tx={
'from': PUBLIC_KEY,
'to':contractAddress,
'nonce':nonce,
'gas':500000,
'data' :nftContract.methods.mintNFT(PUBLIC_KEY,tokenURI).encodeABI()
}
const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
signPromise
.then((signedTx) => {
web3.eth.sendSignedTransaction(
signedTx.rawTransaction,
function (err, hash){
if (!err) {
console. log(
"The hash of your transaction is: ",
hash,
"\nCheck Alchemy's Mempool to view the status of your transaction!"
)
const fs=require('fs');
fs.writeFileSync('./thash.txt',hash)
}
else{
    console.log("Something went wrong when submitting your transaction" ,err); 
    
} 
        })
        
        .catch((err) => {
        console.log("Promise Failed",err)
    })
        
})}
const lighthouse = require('@lighthouse-web3/sdk');

const deploy = async() =>{
    const path = "./image.jpg"; //Give path to the file 
    const apiKey = "b1d41bab-3108-42db-b75a-8047666925d6"; //generate from https://files.lighthouse.storage/ or cli (lighthouse-web3 api-key --new)
  
    // Both file and folder supported by upload function
    const response = await lighthouse.upload(path, apiKey);
    
    // Display response
    console.log(response);
    console.log("Visit at: https://gateway.lighthouse.storage/ipfs/" + response.data.Hash);
    mintNFT(`https://gateway.lighthouse.storage/ipfs/ ${response.data.Hash}`);  
}

deploy()
module.exports={deploy}



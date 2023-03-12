// Setup: npm install alchemy-sdk
const { Alchemy, Network } = require("alchemy-sdk");
const fs=require('fs')
const config = {
  apiKey: "IxUeeEBzuit7_PNapS7uAox9QOJteeqf",
  network: Network.ETH_GOERLI,
};
const alchemy = new Alchemy(config);

const main = async () => {
  // Wallet address
 // const address =fs.readFileSync('/Users/krishnaaggarwal/my-nft/scripts/pubkey.txt','utf8');
 const address =fs.readFileSync('../scripts/pubkey.txt','utf8');
  // Get all NFTs
  const nfts = await alchemy.nft.getNftsForOwner(address);

  // Parse output
  var numNfts = nfts["totalCount"];
  const nftList = nfts["ownedNfts"];

  console.log(`Total NFTs owned by ${address}: ${numNfts} \n`);
fs.writeFileSync('../scripts/totalnft.txt',numNfts.toString());
  let i = 1;

  for (let nft of nftList) {
   // fs.writeFileSync('/Users/krishnaaggarwal/my-nft/scripts/detailednft.txt',`${i}. ${nft.title} \n`)
    console.log(`${i}. ${nft.title}`);
    i++;
  }
};
main();
module.exports={main};
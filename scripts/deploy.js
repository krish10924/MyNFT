const { ethers } = require("hardhat");

async function main(){
    const mynft = await ethers.getContractFactory("MyNFT");
    const nft = await mynft.deploy();
    console.log(`contract deployed to address ${nft.address}`);
    
}
main()
.then(()=>process.exit(0))
.catch(error=>{console.error(error);
process.exit(1);});
//0x79FC3c77808F02EB14C840aD16f4005ca6C35582
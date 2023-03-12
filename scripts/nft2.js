// import {config} from 'dotenv';
 //import {Client, GatewayIntentBits, REST,Routes } from 'discord.js';
 
 const Discord=require('discord.js'); 
 const dotenv = require('dotenv');
 dotenv.config();
 const { Client, GatewayIntentBits,Attachment } = require('discord.js');
const fs=require('fs');
const { NftFilters } = require('@alch/alchemy-web3');
//const Discord=require('discord.js'); 

//const { Client, GatewayIntentBits } = require('discord.js');
// const ipfsClient = require('ipfs');
// const ipfs = new ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
const client = new Client({
   intents: [
       GatewayIntentBits.Guilds,
       GatewayIntentBits.GuildMessages,
       GatewayIntentBits.MessageContent,
       GatewayIntentBits.GuildMembers,
   ],
});


const token=process.env.token_;
client.on('ready', () => {

 console.log(`Logged in as ${client.user.tag}!`);
});

const Web3 = require('web3');

const web3 = new Web3(Web3.givenProvider);



//client.login('YOUR_DISCORD_BOT_TOKEN');



client.on('messageCreate', message => {

if(message.content=='/help'){
  //message.reply("Input      Output ")
  message.reply("track prevnft <--public key-->        Return your total number nft \n /mint nft         Mint your images as nft ")
}

  if(message.content=='hii'||message.content=='hi'||message.content=='Hii'||message.content=='HII'||message.content=='Hi')
{
  message.reply("hello")
  message.reply("For more help enter /help")
}


if(message.content=="/mint nft")
 message.reply("To mint your nft : upload your image and then enter your public key ")


 if(message.attachments.size > 0 && message.attachments.every(attachment => attachment.contentType.startsWith('image/'))) {
    // Get the attachment URL
    const attachment = message.attachments.first();
    const url = attachment.url;
    const fs=require('fs')
    console.log("hellokrishna")
    //fs.writeFileSync('./image.txt',url)

    // Download the image
    const https = require('https');
    https.get(url, (res) => {
      const data = [];

      res.on('data', (chunk) => {
        data.push(chunk);
      });
      console.log("hiii")
fs.writeFileSync('./api.txt',message.content)
      res.on('end', () => {
        const buffer = Buffer.concat(data);
        //console.log(buffer)
        // Do something with the buffer, like save it to a file
        // For example, if you want to save the file with the same name as the original file:
        const filename = attachment.name;
        //console.log(message)
        require('fs').writeFileSync('./image.jpg',buffer);
        console.log("hi buddy")
        const minter=require('./mint-nft.js');
        message.reply("Your image is succesfully minted as nft")
        message.reply(`Here is the transaction hash: ${fs.readFileSync('./thash.txt','utf8')}`)
        
    });
    });
  }




if(message.content.startsWith('track prevnft'))
  {
 fs.writeFileSync('./pubkey.txt',message.content.slice(14));
   // const axios = require('axios');
  const nftcoll=require('../nft-ownership/main.js');
  const a=fs.readFileSync('./totalnft.txt','utf8');
  console.log("check 1")
  const b=fs.readFileSync('./pubkey.txt','utf8');
  console.log(`--------------${a}----------------`);
  message.reply(`Total NFTs owned by address ${b} : ${a}`);

  // let i = 1;

  // for (let nft of nftList) {
  //   console.log(`${i}. ${nft.title}`);
  //   i++;
  // }
 console.log(message.content);
}
})





client.login(token);



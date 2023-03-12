// SPDX-License-Identifier: MIT
pragma solidity>=0.7.3;
//contract MyNFT{
    // event updatedMessages(string oldStr,string newStr);
    // string public message;
    // constructor(string memory initMessage){
    //     message=initMessage;
    // }
    // function update(string memory newMessage) public{
    //     string memory oldStr=message;
    //    message=newMessage;
    //     emit updatedMessages(oldStr,message);
    // }
    import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
contract MyNFT is ERC721URIStorage , Ownable{
using Counters for Counters. Counter;
Counters.Counter private _tokenIds;
constructor () ERC721("Code Eater", "CER"){}
function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint){
_tokenIds.increment();
uint256 newItemId= _tokenIds.current();
_mint(recipient, newItemId);
_setTokenURI(newItemId, tokenURI);
return newItemId;
}

} 
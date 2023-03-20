import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { count } from "console";
import fs from "fs";
import path from "path";
import { start } from "repl";

(async () => {
  const sdk = new ThirdwebSDK("ethereum");
  // replace the addresses and amount with your own
  const collectionAddress = "0x96c7138c5ed741E5C923470bD27b8272fa3C717F";
  const ownerpublicaddress = "0x340917ff76e6559fe1b5bfE48D4054A1B69Dab6e";
  const tokenAddress = "ETH";
  const tokenAmount = 0.01;

  const contract = await sdk.getContract(collectionAddress);

  if (!contract) {
    return console.log("Contract not found");
  }

  const totalSupply = await contract.erc721.totalCount();
  console.log(totalSupply);
  // getting all the NFTs of the collection
  const queryParams = {
    // The number of NFTs to return
    count: 2996, // Default is total NFT supply
    // The index to start from
    start: 0, // Default is 0
  };
  const nfts = await contract.erc721.getAll(queryParams);

  if (!nfts) {
    return console.log("No NFTs found");
  }

  // creating a new array of addresses
  const csv = nfts.reduce((acc, nft) => {
    const address = nft.owner;
    if (nft.owner == ownerpublicaddress){
      console.log(nft.metadata.id);
      }
    const quantity = acc[address] ? acc[address] + 1 : 1;
    return { ...acc, [address]: quantity };
  }, {});

  // filtering the addressees
  const filteredCsv = Object.keys(csv).reduce((acc, key) => {
    if (key !== "0x0000000000000000000000000000000000000000") {
      return {
        ...acc,
        [key]: csv[key],
      };
    }
    return acc;
  }, {});

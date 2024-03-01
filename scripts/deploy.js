// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
  // const MMMToken = await hre.ethers.getContractFactory("MemeMatch");
  // const mmmContract = await MMMToken.deploy("MemeMatch", "MMM", 1000000000000);
  // console.log(`token bought successfully at address: ${mmmContract.address}`);
  // const receipt = await mmmContract.deployTransaction.wait();

  // const Migrate = await hre.ethers.getContractFactory("MigrateToFritzV2");
  // const MigrateContract = await Migrate.deploy();
  // console.log(`token bought successfully at address: ${MigrateContract.address}`);
  // const receipt = await MigrateContract.deployTransaction.wait();

  // const StorkToken = await hre.ethers.getContractFactory("FritzTheCoin");
  // const StorkContract = await StorkToken.deploy("Fritz Coin", "$Fritz", 1000000000000000);
  // console.log(`token bought successfully at address: ${StorkContract.address}`);
  // const receipt = await StorkContract.deployTransaction.wait();

  const moonToken = await hre.ethers.getContractFactory("MoonToken");
  const moonTokenContract = await moonToken.deploy();

  
  console.log(`contract bought successfully at address: ${moonTokenContract.address}`);
  const receipt = await moonTokenContract.deployTransaction.wait();

  // const FTCToken = await hre.ethers.getContractFactory("FritzTheCat");
  // const ftcContract = await FTCToken.deploy("Fritz The Cat", "$Fritz", 690000000000069);
  // console.log(`token bought successfully at address: ${ftcContract.address}`);
  // const receipt = await ftcContract.deployTransaction.wait();

  const gasUsed = receipt.gasUsed;
  const gasPrice = await hre.ethers.provider.getGasPrice(); // get the current gas price from the network
  const cost = gasUsed * gasPrice;
  console.log(`Gas used: ${gasUsed}`);
  console.log(`Gas price: ${gasPrice}`);
  console.log(`Deployment cost: ${cost / (10 ** 18)}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

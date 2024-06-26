// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.

// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
// const hre = require("hardhat");

// async function main() {
//   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   const unlockTime = currentTimestampInSeconds + 60;

//   const lockedAmount = hre.ethers.parseEther("0.001");

//   const lock = await hre.ethers.deployContract("Lock", [unlockTime], {
//     value: lockedAmount,
//   });

//   await lock.waitForDeployment();

//   console.log(
//     `Lock with ${ethers.formatEther(
//       lockedAmount
//     )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
//   );
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });



// const { ethers } = require("hardhat");

// async function main() {
//     // const [deployer] = await ethers.getSigners();

//     // console.log("Deploying contracts with the account:", deployer.address);

//     const Counter = await ethers.deployContract("Counter");
//     // const SimpleStorageFactory = await ethers.getContractFactory("Counter");

//     // const simpleStorage = await SimpleStorageFactory.deploy();
//     await(await Counter.inc()).wait(2);
//     await(await Counter.inc()).wait(2);
//     await(await Counter.inc()).wait(2);
//     await(await Counter.inc()).wait(2);
    
//     let x = await Counter.get();

//     console.log(`x=${x}`);
// }



// main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//         console.error(error);
//         process.exit(1);
//     });







const { ethers } = require("hardhat");

async function main() {
    // const [deployer] = await ethers.getSigners();

    // console.log("Deploying contracts with the account:", deployer.address);

    const chat = await ethers.deployContract("chat");
    // const SimpleStorageFactory = await ethers.getContractFactory("Counter");

    // const simpleStorage = await SimpleStorageFactory.deploy();
    
    
    console.log(`constarct address=${await chat.getAddress()}`);
}



main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
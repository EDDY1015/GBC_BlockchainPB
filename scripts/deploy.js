const hre = require("hardhat");

async function main() {
    // Fetch the contract factory
    const TaskContract = await hre.ethers.getContractFactory("TaskContract");
    
    // Debug log for contract factory
    console.log("Contract Factory:", TaskContract);

    // Deploy the contract
    const taskContract = await TaskContract.deploy();

    // Wait for the deployment transaction to be mined
    await taskContract.deployed();

    console.log(`TaskContract deployed to: ${taskContract.address}`);
}

// Run the deployment script
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

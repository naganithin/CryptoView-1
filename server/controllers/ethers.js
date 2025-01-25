const { ethers } = require('ethers');
const dotenv = require('dotenv');

dotenv.config();

const provider = new ethers.JsonRpcProvider(process.env.INFURA_URL);

module.exports = { provider, ethers };

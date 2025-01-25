const { provider, ethers } = require('./ethers');
const process = require("process");
const ERC20_ABI = require('./ERC20_ABI.json');

const transferTokens = async (req, res) => {
  const { tokenAddress, fromAddress, toAddress, amount } = req.body;
  const PRIVATE_KEY = process.env.PRIVATE_KEY;

  try {
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
    const contract = new ethers.Contract(tokenAddress, ERC20_ABI, wallet);

    const tx = await contract.transferFrom(fromAddress, toAddress, amount);
    await tx.wait();

    res.status(200).json({ transactionHash: tx.hash });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { transferTokens };

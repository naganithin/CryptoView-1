const { provider, ethers } = require('./ethers');
const ERC20_ABI = require('./ERC20_ABI.json'); 

const getTokenBalance = async (req, res) => {
  const { tokenAddress, walletAddress } = req.body;

  try {
    const contract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
    const balance = await contract.balanceOf(walletAddress);
    res.status(200).json({ balance: balance.toString() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = { getTokenBalance };

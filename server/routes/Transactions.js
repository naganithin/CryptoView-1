const express = require("express");
const {
  createTransaction,
  getTransactions,
} = require("../controllers/transactionsController.js");
const requireAuth = require("../middleware/requireAuth.js");
const { getTokenBalance } = require('../controllers/tokenBalance');
const { transferTokens } = require('../controllers/tokenTransfer');

const router = express.Router();

router.use(requireAuth);

router.post("/", createTransaction);

router.get("/", getTransactions);

router.post('/token-balance', getTokenBalance);
router.post('/transfer-tokens', transferTokens);

module.exports = router;

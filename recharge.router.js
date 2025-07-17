const express = require('express');
const router = express.Router();
const cors = require('cors');
const axios = require('axios');

router.post('/', async (req, res) => {
  const { operator, plan } = req.body;

  console.log("📲 Recharge/Fare requested:", req.body); 

  try {
    res.json({
      status: "success",
      fare: {
        operator: operator,
        plan: plan,
        amount: 1500
      }
    });
  } catch (error) {
    console.error('Error fetching fare data:', error);
    res.status(500).json({ error: 'Failed to fetch fare data' });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const cors = require('cors');
const axios = require('axios');
const app = express();

router.post('/', async (req, res) => {
    const { source, destination, date } = req.body;
    try {
    //     const response = await axios.get(`https://api.railwayapi.com`, {
    //         params: {
    //             source: source,
    //             destination: destination,
    //             date: date,
    //         }
    //     });
    //     res.json(response.data);
    res.json({
  status: "success",
  trains: [
    {
      trainNo: "12345",
      name: "Shatabdi Express",
      from: source,
      to: destination,
      date: date
    },
    {
      trainNo: "67890",
      name: "Rajdhani Express",
      from: source,
      to: destination,
      date: date
    }
  ]
});

    } catch (error) {
        console.error('Error fetching train data:', error);
        res.status(500).json({ error: 'Failed to fetch train data' });
    }
});
module.exports = router;
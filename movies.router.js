const express = require('express');
const router = express.Router();
const cors = require('cors');
const axios = require('axios');



router.post('/', async (req, res) => {
    const { movies, date, time } = req.body;
     console.log("Movies- :", req.body);
    try {
        res.json({
            status: "success",
            message: `🎬 Booking confirmed for '${movies}' on ${date} at ${time}. Enjoy your show!`,
            movies: {
                movies,
                date,
                time
            }
        });
    } catch (error) {
        console.error('Error fetching movie data:', error);
        res.status(500).json({ error: 'Failed to fetch movie data' });
    }
});

module.exports = router;
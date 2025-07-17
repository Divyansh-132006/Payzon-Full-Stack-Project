const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const farerouter = require('./fare.router.js');
const searchrouter = require('./search.router.js');
const seatrouter = require('./seat.router.js'); 
const rechargerouter = require('./recharge.router.js'); 
const moviesrouter = require('./movies.router.js'); 
const signuprouter = require('./auth.router.js'); 
const loginrouter = require('./auth.router.js'); 

// Use routes
app.use('/api/fare', farerouter);
app.use('/api/searchtrain', searchrouter);
app.use('/api/seat', seatrouter);
app.use('/api/recharge', rechargerouter);
app.use('/api/movies', moviesrouter);
app.use('/api/auth', signuprouter);
app.use('/api/auth', loginrouter);

app.listen(3000, () => {
    console.log('✅ Server is running on http://localhost:3000');
});

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const farerouter = require('./src/routers/fare.router.js');
const searchrouter = require('./src/routers/search.router.js');
const seatrouter = require('./src/routers/seat.router.js'); 
const rechargerouter = require('./src/routers/recharge.router.js'); 
const moviesrouter = require('./src/routers/movies.router.js'); 
const signuprouter = require('./src/routers/auth.router.js'); 
const loginrouter = require('./src/routers/auth.router.js'); 

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

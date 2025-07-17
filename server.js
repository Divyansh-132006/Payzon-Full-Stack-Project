const express = require('express');
const cors = require('cors');
const path = require('path'); // ✅ For serving static frontend
const app = express();

app.use(cors());
app.use(express.json());

// Import routes
const fareRouter = require('./fare.router.js');
const searchRouter = require('./search.router.js');
const seatRouter = require('./seat.router.js');
const rechargeRouter = require('./recharge.router.js');
const moviesRouter = require('./movies.router.js');
const authRouter = require('./auth.router.js'); // ✅ One router for signup/login

// Use routes
app.use('/api/fare', fareRouter);
app.use('/api/searchtrain', searchRouter);
app.use('/api/seat', seatRouter);
app.use('/api/recharge', rechargeRouter);
app.use('/api/movies', moviesRouter);
app.use('/api/auth', authRouter); // ✅ Only once

// ✅ Default route (fixes "Cannot GET /")
app.get('/', (req, res) => {
  res.send('✅ Payzon backend is live!');
});

// ✅ (Optional) Serve frontend if you move index.html into public/
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});

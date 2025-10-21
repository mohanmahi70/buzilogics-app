// routes/authRoutes.js
import express from 'express';
import jwt from 'jsonwebtoken';
const router = express.Router();

// Simple login that returns a JWT for testing.
// Replace with real DB checks later.
router.post('/login', (req, res) => {
  // read username from request body (if missing, use testuser)
  const { username = 'testuser' } = req.body || {};

  // create a small payload (only non-sensitive info)
  const payload = { username };

  // sign token using secret in .env or fallback
  const secret = process.env.JWT_SECRET || 'dev_jwt_secret';

  // create token (1 hour expiry)
  const token = jwt.sign(payload, secret, { expiresIn: '1h' });

  // return token
  return res.json({ success: true, token });
});

export default router;
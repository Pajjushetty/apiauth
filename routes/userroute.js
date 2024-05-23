// routes/userRoutes.js
import express from 'express';
import { register, login, getProfile, updateProfile, listPublicProfiles, signout, listAllProfiles } from '../controllers/usercontroller.js';
import { auth, admin } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/signout', signout);
router.get('/profile', auth, getProfile);
router.put('/profile', auth, updateProfile);
router.get('/profiles', listPublicProfiles);
router.get('/admin/profiles', auth, admin, listAllProfiles);

export default router;

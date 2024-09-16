import express from 'express';
import * as authController from '../../app/controllers/auth_controller'; 

const router = express.Router();

// Sign In
router.post('/signin', authController.signIn);

// Sign Up
router.post('/signup', authController.signUp);

export default router;

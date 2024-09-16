import express from "express";
import * as controllers from "../../app/controllers/user_controller"; 
const router = express.Router();

// Routes for User operations
router.get('/', controllers.getAllUsers);             // Get all users
router.get('/:id', controllers.getUserById);          // Get a user by ID
router.post('/', controllers.createUser);             // Create a new user
router.put('/:id', controllers.updateUser);           // Update a user's details
router.delete('/:id', controllers.deleteUser);        // Delete a user

export default router;

import * as service from '../services/user_service';

// Create a new user
export async function createUser(req, res) {
   const body = req.body;
   try {
      const user = await service.createUser(body);
      return res.status(201).json(user);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
}

// Get all users
export async function getAllUsers(req, res) {
   try {
      const users = await service.getAllUsers();
      return res.status(200).json(users);
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

// Get user by ID
export async function getUserById(req, res) {
   try {
      const user = await service.getUserById(req.params.id);
      return res.status(200).json(user);
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

// Update user details
export async function updateUser(req, res) {
   try {
      const user = await service.updateUser(req.params.id, req.body);
      return res.status(200).json(user);
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

// Delete a user
export async function deleteUser(req, res) {
   try {
      await service.deleteUser(req.params.id);
      return res.status(204).end();
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

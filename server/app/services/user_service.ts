import * as repo from '../repositories/user_repository';
import bcrypt from 'bcryptjs';

// Create a new user
export async function createUser(data) {
    const { email, password } = data;

    // Check if the user already exists by email
    const existingUser = await repo.getUserByEmail(email);  // Use the correct repository function
    if (existingUser) {
        throw new Error('User already exists with this email.');
    }

    // Hash the password before saving the user
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await repo.createUser({ ...data, password: hashedPassword });
    return user;
}

// Get all users
export async function getAllUsers() {
    return await repo.getAllUsers();
}

// Get user by ID
export async function getUserById(id) {
    const user = await repo.getUserById(id);
    if (!user) {
        throw new Error('User not found.');
    }
    return user;
}

// Update user details
export async function updateUser(id, data) {
    // If updating the password, hash it before saving
    if (data.password) {
        data.password = await bcrypt.hash(data.password, 10);
    }

    const user = await repo.updateUser(id, data);
    if (!user) {
        throw new Error('User not found.');
    }
    return user;
}

// Delete a user
export async function deleteUser(id) {
    const user = await repo.deleteUser(id);
    if (!user) {
        throw new Error('User not found.');
    }
}

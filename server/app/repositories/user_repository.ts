import User from '../models/user_model';

// Create a new user
export async function createUser(data) {
    const user = new User(data);
    await user.save();
    return user;
}

// Get all users
export async function getAllUsers() {
    return await User.find({});
}

// Get user by ID
export async function getUserById(id) {
    return await User.findById(id);
}

// Get user by Email
export async function getUserByEmail(email) {
    return await User.findOne({ email });
}

// Update user details
export async function updateUser(id, data) {
    return await User.findByIdAndUpdate(id, data, { new: true });
}

// Delete a user
export async function deleteUser(id) {
    return await User.findByIdAndDelete(id);
}

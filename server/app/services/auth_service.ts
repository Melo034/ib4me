import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user_model'; // Ensure the correct import path and model name
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // Use environment variables for sensitive data

// Interface for sign-in and sign-up parameters
interface SignInParams {
  username: string;
  password: string;
}

interface SignUpParams extends SignInParams {
  name: string;
  email: string;
}

// Sign In
export async function signIn({ username, password }: SignInParams): Promise<string> {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid username or password');
  }

  // Generate JWT
  const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, {
    expiresIn: '1h',
  });
  return token;
}

// Sign Up
export async function signUp({ username, password, name, email }: SignUpParams): Promise<any> {
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw new Error('Username already taken');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword, name, email });
  await user.save();
  return user; // Return user object without explicit type
}

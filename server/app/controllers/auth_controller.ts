import { Request, Response } from 'express';
import * as authService from '../services/auth_service';

// Sign In
export async function signIn(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;
  try {
    const token = await authService.signIn({ username, password });
    return res.status(200).json({ token });
  } catch (error: any) {
    if (error.message === 'User not found' || error.message === 'Invalid username or password') {
      return res.status(401).json({ message: error.message }); // 401 for authentication errors
    }
    return res.status(500).json({ message: 'Internal Server Error' }); // 500 for server errors
  }
}

// Sign Up
export async function signUp(req: Request, res: Response): Promise<Response> {
  const { username, password, name, email } = req.body;
  try {
    const user = await authService.signUp({ username, password, name, email });
    return res.status(201).json({ message: 'User created successfully', user });
  } catch (error: any) {
    if (error.message === 'Username already taken') {
      return res.status(409).json({ message: error.message }); // 409 for conflicts
    }
    return res.status(500).json({ message: 'Internal Server Error' }); // 500 for server errors
  }
}

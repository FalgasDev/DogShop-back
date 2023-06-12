import AuthRepository from '@/repositories/AuthRepository';
import { Request, Response } from 'express';

export async function signUp(req: Request, res: Response) {
	const { email, password, name } = req.body;
	try {
		const hasEmail = await AuthRepository.getUserByEmail(email);
		console.log(hasEmail);

		res.sendStatus(201);
	} catch (err) {
		res.status(500).send(err.message);
	}
}

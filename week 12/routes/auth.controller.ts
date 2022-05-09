import { Router } from 'express';
import mongoose from 'mongoose';
import { compareSync, hash } from 'bcrypt';

import { UserModel } from '../models/user.model';
import { verifyToken } from '../middlewares/verify-token';

import { saveRefreshToken, signToken } from '../utils/token.utils';

import { IAuthenticatedUserRequest, IUser } from '../interfaces/user.interface';
import { ITokens } from '../interfaces/tokens.interface';

const authController = Router();

authController.post('/login', async (req, res) => {
	const email: string = req.body.email;
	if (!email || email === '') {
		return res.status(400).json({ error: 'Invalid email address' })
	}

	const userDocument = await UserModel.findOne({ email });
	if (!userDocument) {
		return res.status(404).json({ error: 'User does not exist' })
	}

	const user: IUser = userDocument.toJSON() as IUser;
	if (!compareSync(req.body.password, user.password)) {
		return res.status(403).json({ error: 'Invalid credentials' })
	}

	const tokens: ITokens = signToken(user);

	try {
		await saveRefreshToken(tokens.refreshToken);

		return res.json(tokens);
	} catch (err) {
		return res.json(err);
	};
});

authController.post('/register', async (req, res) => {
	const newUser = req.body as IUser;

	const today: Date = new Date();

	const userDocument = await UserModel.findOne({
		email: req.body.email
	});

	if (!userDocument) {
		const hashed: string = await hash(newUser.password, 10);

		const user = new UserModel({
			id: new mongoose.Types.ObjectId(),
			email: newUser.email,
			password: hashed,
			createDate: today,
			firstName: newUser.firstName,
			lastName: newUser.lastName,
			username: newUser.username
		});
		const validation: NativeError = user.validateSync();
		if (validation) {
			return res.status(400).json(validation);
		}

		await user.save();

		try {
			const tokens: ITokens = signToken(user.toJSON() as IUser);

			await saveRefreshToken(tokens.refreshToken)
			return res.json(tokens);
		} catch (err) {
			res.send({ error: 'There was an error signing your token' });
		}
	}

	return res.json({ error: 'User already exists' });
});

authController.get('/user-info', verifyToken, async (req, res)=> {
	const user: IUser = (await UserModel.findOne(
		{ email: (req as IAuthenticatedUserRequest).user.email }))
			.toJSON() as IUser;

	return res.json(
		user
	);
});

export default authController;
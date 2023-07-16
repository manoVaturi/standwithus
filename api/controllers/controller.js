import Questions from '../models/Question.js';
import LotterySign from '../models/LotterySign.js';
import questions, { answers } from '../models/data.js';

export async function getQuestions(req, res, next) {
	try {
		const questions = await Questions.find();

		res.json(questions);
	} catch (error) {
		console.log(error);

		res.json(error);
	}
}

export async function insertQuestions(req, res, next) {
	try {
		await Questions.insertMany({ questions, answers });
		res.json({ msg: 'Data Saved Successfully...' });
	} catch (error) {
		res.json(error);
	}
}

export async function signupLottery(req, res, next) {
	try {
		const userLottery = new LotterySign({ email: req.body.email });
		const user = await userLottery.save();
		console.log(user);

		res.json({ msg: 'Data Saved Successfully...' });
	} catch (error) {
		res.json({ error });
	}
}
// insertQuestions();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/routes.js';

const app = express();

/* app middleware */
app.use(express.json());
app.use(cors());
config();

const port = process.env.PORT || 3001;

/* routes */
app.use('/api', router); //api routes

app.use('/', (req, res) => {
	try {
		res.json('Get Request');
	} catch (error) {
		res.json(error);
	}
});
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(port, () => {
			console.log('Connected to Mongo');
		})
	)
	.catch((err) => console.log(err));

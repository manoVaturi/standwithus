import axios from 'axios';

export function CountAnswer(result, answers) {
	return result.map((el, i) => answers[i] === result[i]).filter((i) => i)
		.length;
}

export function FaceBookShare() {
	console.log('facebook share');
}

export function WhatsappShare() {
	console.log('whastapp share');
}

export function InstagramShare() {
	console.log('instagram share');
}

export function SignToLottery() {
	console.log('sign-to-lottery');
}

/* get api data */
export async function getQuestions(url, callback) {
	const data = await (await axios.get(url)).data;
	return callback ? callback(data) : data;
}

export async function postEmail(url, email, callback) {
	const user = await axios.post(url, { email: email });
	return callback ? callback(user) : user;
}

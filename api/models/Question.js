import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
	questions: { type: Array, default: [] },
	answers: { type: Array, default: [] },
});

export default mongoose.model('Question', QuestionSchema);

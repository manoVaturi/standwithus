import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const LotterySchema = new Schema({
	email: { type: String, unique: true, required: true },
});

export default mongoose.model('Lottery', LotterySchema);

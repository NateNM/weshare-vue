import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  borrower: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  lender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.model('Expense', expenseSchema);
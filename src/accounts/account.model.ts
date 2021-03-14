import * as mongoose from 'mongoose';

export const AccountSchema = new mongoose.Schema({
  account_name: { type: String, required: true },
  category: { type: String, required: true },
  tag: { type: String, required: true },
  balance: { type: Number, required: true },
  available_balance: { type: Number, required: true }
});

export interface Account extends mongoose.Document {
  id: string;
  account_name: string;
  category: string;
  tag: string;
  balance: number;
  available_balance: number;
}
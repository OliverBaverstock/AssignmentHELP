import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  body: {type: String, required: true},
  author: {type: String, required: true},
  upvotes: {type: Number, default: 0},
  });

 const DealSchema = new Schema({
   dishName: {type: String, required: true},
   restName: {type: String, required: true},
   price: {type: Number, required: true},
   phone: {type: String, required: true},
   picture: {type: String, optional: true},
   reviews: [ReviewSchema],
   upvotes: {type: Number, min: 0, max: 100, default: 0},
 });
export default mongoose.model('deals', DealSchema);
const mongoose = require('mongoose');

// Define Cart Schema
const cartSchema = new mongoose.Schema({
  productId: { type: Number, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  quantity: { type: Number, default: 1 }
});

// Define Purchased Schema
const purchasedSchema = new mongoose.Schema({
  UserName: { type: String, required: true },
  purchasedItem: { type: String, required: true },
  image: { type: String, required: true },
  productId: { type:Number, required: true },
});


// Define User Schema
const userSchema = new mongoose.Schema({
  UserName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobile: { type: String, required: true },
  cart: [cartSchema] ,
  purchasedItems:[purchasedSchema]
});

module.exports = mongoose.model('User', userSchema);

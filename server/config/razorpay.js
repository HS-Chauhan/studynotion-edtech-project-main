require("dotenv").config()

const Razorpay = require("razorpay")

console.log("RAZORPAY_KEY:", process.env.RAZORPAY_KEY) // For debugging
console.log("RAZORPAY_SECRET:", process.env.RAZORPAY_SECRET) // For debugging

exports.instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
})

// server.js

const express = require('express');
const bodyParser = require('body-parser');
const Stripe = require('stripe');
const mongoose = require('mongoose');
const dotEnv = require('dotenv');
const cors = require('cors')
const ejs = require('ejs')
const path = require('path');



const app = express();
dotEnv.config();
app.use(cors())
app.set('view engine', 'ejs' )

const PORT = process.env.PORT || 3000;


// Replace 'your_secret_key' with your actual Stripe secret key
const stripe = Stripe('MONGO_URI');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// Your payment route
app.post('/pay', async (req, res) => {
  try {
    const { amount, currency,description } = req.body;

    // Create a charge
    const charge = await stripe.charges.create({
      Title,
      paymentmethod,
      PaymentAuthentication,
      PaymentConfirmation,
      RefundProcessing,
      TransactionHistory,
      SecurityandCompliance
    });

    res.status(200).json(charge);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
   console.log("MongoDB connected successfully!")
})
.catch((error)=>{
   console.log('${error}')
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


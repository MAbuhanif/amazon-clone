require("dotenv").config();
const express = require("express");
const app = express(); //app config
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRETE);
// console.log(process.env.STRIPE_SECRETE);

//midlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("hello"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  try {
    // console.log("payment Request Recived for this amount>>>", total);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: parseInt(total),
      currency: "EUR",
    });
    
    //ok-created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
    
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(10000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("app listning...");
  }
});

import express from "express";
import dotenv from "dotenv";
import Stripe from "stripe";
import cors from "cors";
dotenv.config();
const stripe = Stripe(process.env.SECRET_KEY);
const app = express();
app.use(cors());


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.post("/session", async (req, res) => {
    const { amount, currency } = req.body
    try {
        const response = await stripe.paymentIntents.create({
            amount: amount * 100, // smallest currency unit (e.g. cents)
            currency,
            automatic_payment_methods: { enabled: true },
        });
        console.log(response)
        res.status(200).json({
            clientSecret: response.client_secret
        })
    } catch (error) {
        console.log(error)
    }
})



app.listen(process.env.PORT, () => {
    console.log("Server is running on port", process.env.PORT);
});

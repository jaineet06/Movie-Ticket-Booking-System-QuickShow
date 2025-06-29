import stripe from "stripe";
import Booking from "../models/Booking.js";

export const stripeWebHooks = async (req, res) => {
    const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY)
    const sig = req.headers["stripe-signature"]

    console.log(sig);
    

    let event;
    try {
        event = stripeInstance.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET)
        console.log(event.type);
    } catch (error) {
        console.log(error);
        return res.status(400).send(`Webhooks error: ${error.message}`)
    }

    try {
        
        switch(event.type){
            case "payment_intent.succeeded":{
                const paymentIntent = event.data.object;
                const sessionList = await stripeInstance.checkout.sessions.list({
                    payment_intent: paymentIntent.id
                })
                console.log(sessionList);
                
                const session = sessionList.data[0];
                const { bookingId } = session.metadata

                const result = await Booking.findByIdAndUpdate(bookingId,{
                    isPaid: true,
                    paymentLink: ""
                })
                console.log(result);
                
            }
            break;

            default:
                console.log('Unhandled event type:', event.type);
                break;
        }

        res.json({received: true})
    } catch (error) {
        console.log(error);
        res.status(500).send("Webhook internal error")
    }
}
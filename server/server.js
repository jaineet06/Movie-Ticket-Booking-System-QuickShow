    import express from 'express'
    import cors from 'cors'
    import 'dotenv/config'
    import connectDb from './config/db.js';
    import { clerkMiddleware } from '@clerk/express'
    import { functions, inngest } from './inngest/index.js';
    import { serve } from "inngest/express";
    import showRouter from './routes/showRoutes.js';
    import bookingRouter from './routes/bookingRoutes.js';
    import adminRouter from './routes/adminRoute.js';
    import userRouter from './routes/userRoutes.js';
    import { stripeWebHooks } from './controllers/stripeWebHook.js';

    const app = express();
    const port = 3000

    await connectDb()

    //Stripe webhook
    app.post('/api/stripe', express.raw({type: 'application/json'}), stripeWebHooks)

    //Middlewares
    app.use(cors())
    app.use(clerkMiddleware())
    app.use(express.json())


    //API routes
    app.get('/', (req, res) => {
        res.send("Api is working")
    })
    app.use('/api/inngest', serve({ client: inngest, functions}))
    app.use('/api/show', showRouter)
    app.use('/api/booking', bookingRouter)
    app.use('/api/admin', adminRouter)
    app.use('/api/user', userRouter)


    app.listen(port, 
        () => console.log(`Server is listening at http://localhost:${3000}`)
    )
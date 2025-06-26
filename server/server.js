import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/db.js';
import { clerkMiddleware } from '@clerk/express'
import { functions, inngest } from './inngest/index.js';
import { serve } from "inngest/express";

const app = express();
const port = 3000

await connectDb()

//Middlewares
app.use(cors())
app.use(clerkMiddleware())
app.use(express.json())


//API routes
app.get('/', (req, res) => {
    res.send("Api is working")
})
app.use('/api/inngest', serve({ client: inngest, functions}))



app.listen(port, 
    () => console.log(`Server is listening at http://localhost:${3000}`)
)
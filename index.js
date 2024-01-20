import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import placeRouter from './routes/placeRouter.js'

dotenv.config()

const PORT = process.env.PORT || 8000

const app = express()
app.use(express.json()) //middleware, which parses incoming JSON requests
app.use('/place', placeRouter)

mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log('\x1b[42m%s\x1b[0m','MongoDB connected!');
    })
    .catch((err)=> console.log('MongoDB failed!'))

app.listen(PORT, () =>{
    console.log('\x1b[42m%s\x1b[0m',`App is running on port ${PORT}`);
})
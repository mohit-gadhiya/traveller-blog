import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user-routes';
import postRouter from './routes/post-routes';
import cors from 'cors'

const app = express()
dotenv.config()

//middlewares
app.use(cors())
app.use(express.json())
app.use("/user", userRouter)
app.use("/posts", postRouter)

//connections to mongodb
mongoose.connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.wiatnhs.mongodb.net/?retryWrites=true&w=majority`
)
    .then(
        app.listen(5000, () => console.log('connection successfull & listening on port 5000'))
    )
    .catch((err) => console.log(err))



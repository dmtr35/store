import 'dotenv/config'
import express from "express"
import mongoose from "mongoose"
import authRouter from "./router/auth-router.js"
import productRouter from "./router/product-router.js"
import cors from 'cors'



const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: true
}))

app.use('/auth', authRouter)
app.use('/product', productRouter)
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', `*`);
    next();
})



const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`Server working, PORT: ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()



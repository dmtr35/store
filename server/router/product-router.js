import Router from "express"
import ProductController from "../controllers/product-controler.js"
import authMiddleware from '../middlewares/auth-middleware.js'
const productRouter = new Router()


productRouter.post('/addProducts/:id', ProductController.addProducts)
productRouter.post('/getProduct/', authMiddleware, ProductController.getProduct)


export default productRouter
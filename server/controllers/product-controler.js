import 'dotenv/config'
import Order from '../models/Store.js'


class ProductController {
    async addProducts(req, res) {
        try {
            const userId = req.params.id
            let { store, surname, hpone, product } = req.body
            await Order.create({ store, userId, surname, hpone, product})
            return res.json("товар добавлен в корзину")
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Create error2' })
        }
    }
    
    async getProduct(req, res) {
        try {
            let { store } = req.body
            const data = await Order.find({ store, userId: req.user.id })
            return res.json(data)
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Create error3' })
        }
    }
}


export default new ProductController()
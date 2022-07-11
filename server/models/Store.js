import mongoose from "mongoose"





const Order = new mongoose.Schema({
    store: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    surname: {type: String, required: true},
    hpone: {type: String, required: true},
    product: [
        
            { type: String, required: true },
        
    ]
})



export default mongoose.model('Order', Order)
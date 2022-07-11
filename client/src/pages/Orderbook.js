import React from 'react'
import Order from '../components/Order'



const Orderbook = () => {
    const userId = localStorage.getItem('userId')


    return (
        <Order/>
    )
}


export default Orderbook
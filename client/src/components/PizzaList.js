import React, { useContext } from 'react'
import { Context } from "../index"
import { observer } from 'mobx-react-lite'
import PizzaItem from "./PizzaItem"


const PizzaList = observer(() => {
    const { device } = useContext(Context)


    return (
        <div>
            <div className='d-flex'>
                {device.pizza.map(pizza =>
                    <PizzaItem key={pizza.id} pizza={pizza} />
                )}
            </div>
        </div>
    )
})


export default PizzaList
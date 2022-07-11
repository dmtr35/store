import React, { useContext } from 'react'
import { Context } from "../index"
import Button from "react-bootstrap/Button"
import { observer } from 'mobx-react-lite'
import { Col } from "react-bootstrap"
import { mcBasketPizza } from '../utils/dopFunks'
import PizzaStor from './PizzaStor'



const PizzaItem = observer(({pizza}) => {
    const { basket } = useContext(Context)
    const basketTwo = (id) => {
        mcBasketPizza(id)
        basket.setBasketIconPizza(true)
    }
    

    return (
        <div >
            <PizzaStor pizza={pizza} />
            <Col>
                <Button
                    className={"button-order"}
                    variant={"outline-success"}
                    onClick={() => basketTwo(pizza.id)}
                >
                    Заказать
                </Button>
            </Col>
        </div>
    )
})


export default PizzaItem
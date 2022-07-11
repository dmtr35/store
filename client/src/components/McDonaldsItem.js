import React, { useContext } from 'react'
import { Context } from "../index"
import Button from "react-bootstrap/Button"
import { observer } from 'mobx-react-lite'
import { Col } from "react-bootstrap"
import { mcBasket } from '../utils/dopFunks'
import McDonaldsStor from './McDonaldsStor'



const McDonaldsItem = observer(({device}) => {
    const { basket } = useContext(Context)
    const basketTwo = (id) => {
        mcBasket(id)
        basket.setBasketIcon(true)
    }
    

    return (
        <div >
            <McDonaldsStor device={device} />
            <Col>
                <Button
                    className={"button-order"}
                    variant={"outline-success"}
                    onClick={() => basketTwo(device.id)}
                >
                    Заказать
                </Button>
            </Col>
        </div>
    )
})


export default McDonaldsItem
import React, { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import { useNavigate } from 'react-router-dom'
import Button from "react-bootstrap/Button"
import { Form } from 'react-bootstrap'
import { SHOP_ROUTE } from '../utils/consts'
import { Col, Card, Image } from "react-bootstrap"
import star from '../assets/star.png'
import { createOrder } from '../http/deviceApi'



const BasketPizza = observer(() => {
    const navigate = useNavigate()
    const { device } = useContext(Context)
    const { basket } = useContext(Context)
    const userId = localStorage.getItem('userId')
    const arrCheckPizza = JSON.parse(localStorage.getItem(`arrPizza-${userId}`))
    const [phone, setPhone] = useState('')
    const [surname, setSurname] = useState('')
    let product = []
    const store = 'Pizza'


    const addOrderPizza = () => {
        if (!phone || !surname) {
            alert("Укажите телефон и фамилию");
            return
        }
        createOrder(userId, phone, surname, store, product)
        localStorage.removeItem(`arrPizza-${userId}`)
        alert("Заказ оформлен, ждите звонка оператора");
        document.location.href = SHOP_ROUTE
    }

    const twoDeletUnitPizza = (id) => {
        localStorage.removeItem(`arrPizza-${userId}`)
        document.location.href = SHOP_ROUTE
    }

    const countPizza = arrCheckPizza.map((name) => {
        return { countPizza: 1, name: name }
    })
        .reduce((a, b) => {
            a[b.name] = (a[b.name] || 0) + b.countPizza
            return a
        }, {})

    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <Form>
                        <Form.Control
                            type='number'
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            placeholder={"введите телефон"}
                        />
                        <Form.Control
                            type="text"
                            value={surname}
                            onChange={e => setSurname(e.target.value)}
                            placeholder={"введите фамилию"}
                        />
                    </Form>
                </Col>
                {basket.showHidePizza
                    ?
                    <div>
                        <Col md={9} className='d-flex'>
                            {device.pizza
                                .filter(pizza => arrCheckPizza.includes(pizza.id))
                                .map(pizza =>
                                    product.push(`${pizza.name} - ${countPizza[pizza.id]}шт.`) &&
                                    <div key={pizza.id}>
                                        <Col md={3} className={" mt-2 mb-2 p-3"} onClick={() => navigate(SHOP_ROUTE)}>
                                            <Card style={{ width: 150, cursor: 'pointer' }} border={"light"}>
                                                <Image wigth={150} height={150} src={pizza.img} />
                                                <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center' >
                                                    <div>Pizza</div>
                                                    <div className='d-flex align-items-center'>
                                                        <div>{pizza.rating}</div>
                                                        <Image wigth={17} height={17} src={star} />
                                                    </div>
                                                </div>
                                                <div>{pizza.name} - {countPizza[pizza.id]}шт.</div>
                                            </Card>
                                        </Col>
                                    </div>
                                )}
                        </Col>
                        <div className='w-50%'>
                            <Button onClick={() => { addOrderPizza() }}>
                                Заказать
                            </Button>
                            <Button
                                variant={"outline-success"}
                                onClick={() => twoDeletUnitPizza()}
                            >
                                Удалить
                            </Button>
                        </div>
                    </div>
                    :
                    <div>
                    </div>}
            </Row >
        </Container >
    )
})


export default BasketPizza
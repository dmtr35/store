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



const Basket = observer(() => {
    const navigate = useNavigate()
    const { device } = useContext(Context)
    const { basket } = useContext(Context)
    const userId = localStorage.getItem('userId')
    const arrCheck = JSON.parse(localStorage.getItem(`arrMcDonalds-${userId}`))
    const [phone, setPhone] = useState('')
    const [surname, setSurname] = useState('')
    let product = []
    const store = 'McDonalds'



    const addOrder = () => {
        if (!phone || !surname) {
            alert("Укажите телефон и фамилию");
            return
        }
        createOrder(userId, phone, surname, store, product)
        localStorage.removeItem(`arrMcDonalds-${userId}`)
        alert("Заказ оформлен, ждите звонка оператора");
        document.location.href = SHOP_ROUTE
    }

    const twoDeletUnit = (id) => {
        localStorage.removeItem(`arrMcDonalds-${userId}`)
        document.location.href = SHOP_ROUTE
    }

    const count = arrCheck.map((name) => {
        return { count: 1, name: name }
    })
        .reduce((a, b) => {
            a[b.name] = (a[b.name] || 0) + b.count
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
                {basket.showHideMcDonalds
                    ?
                    <div>
                        <Col md={9} className='d-flex'>
                            {device.devices
                                .filter(device => arrCheck.includes(device.id))
                                .map(device =>
                                    product.push(`${device.name} - ${count[device.id]}шт.`) &&
                                    <div key={device.id}>
                                        <Col md={3} className={" mt-2 mb-2 p-3"} onClick={() => navigate(SHOP_ROUTE)}>
                                            <Card style={{ width: 150, cursor: 'pointer' }} border={"light"}>
                                                <Image wigth={150} height={150} src={device.img} />
                                                <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center' >
                                                    <div>McDonalds</div>
                                                    <div className='d-flex align-items-center'>
                                                        <div>{device.rating}</div>
                                                        <Image wigth={17} height={17} src={star} />
                                                    </div>
                                                </div>
                                                <div>{device.name} - {count[device.id]}шт.</div>
                                            </Card>
                                        </Col>
                                    </div>
                                )}
                        </Col>
                        <div className='w-50%'>
                            <Button onClick={() => { addOrder() }}>
                                Заказать
                            </Button>
                            <Button
                                variant={"outline-success"}
                                onClick={() => twoDeletUnit()}
                            >
                                Удалить
                            </Button>
                        </div>
                    </div>
                    :
                    <div></div>}
            </Row >
        </Container >
    )
})


export default Basket
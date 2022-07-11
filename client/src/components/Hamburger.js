import React, { useContext, useState } from 'react'
import { Context } from "../index"
import Button from "react-bootstrap/Button"
import { SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'
import { Card } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import star from '../assets/star.png'
import { Col } from "react-bootstrap"


const Hamburger = observer(() => {
    const navigate = useNavigate()
    const { device } = useContext(Context)
    const [willWorkLater, setWillWorkLater] = useState(false)

    return (
        <div>
            <div className='d-flex'>
                {device.hamburgers.map(hamburger =>
                    <div key={hamburger.id}>
                        <Col md={3} className={" mt-2 mb-2 p-3"} onClick={() => navigate(SHOP_ROUTE)}>
                            <Card style={{ width: 150, cursor: 'pointer' }} border={"light"}>
                                <Image wigth={150} height={150} src={hamburger.img} />
                                <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center' >
                                    <div>hamburger</div>
                                    <div className='d-flex align-items-center'>
                                        <div>{hamburger.rating}</div>
                                        <Image wigth={17} height={17} src={star} />
                                    </div>
                                </div>
                                <div>{hamburger.name}</div>
                            </Card>
                        </Col>
                        <Col>
                            <Button
                                className={"button-order"}
                                variant={"outline-success"}
                                onClick={() => { setWillWorkLater(true) }}
                            >
                                Заказать
                            </Button>
                        </Col>
                    </div>
                )}
            </div>
            {willWorkLater ? <div 
                className='willWorkLater'
            >
                Спасибо за ваш интерес, магазин в разработке, приходите позже
            </div>
                :
                <div></div>}
        </div >
    )
})


export default Hamburger
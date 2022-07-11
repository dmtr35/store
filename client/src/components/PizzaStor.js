import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'
import { Col, Card } from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import star from '../assets/star.png'



const PizzaStor = ({ pizza }) => {
    const navigate = useNavigate()

    return (
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
                <div>{pizza.name}</div>
            </Card>
        </Col>
    )
}


export default PizzaStor




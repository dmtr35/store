import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'
import { Col, Card } from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import star from '../assets/star.png'



const McDonaldsStor = ({ device }) => {
    const navigate = useNavigate()

    return (
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
                <div>{device.name}</div>
            </Card>
        </Col>
    )
}


export default McDonaldsStor
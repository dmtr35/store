import React, { useContext, useState } from 'react'
import { Context } from "../index"
import { observer } from 'mobx-react-lite'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import { fetchOrder } from '../http/deviceApi'



const Order = observer(() => {
    const { device } = useContext(Context)
    const [orders, setOrders] = useState([])
    const checkOrder = (store) => {
        fetchOrder(store).then(data => setOrders(data))
    }
    const [isMc, setIsMc] = useState(false)
    const [isPizza, setIsPizza] = useState(false)
    const [isGam, setIsGam] = useState(false)
    const [isSush, setIsSush] = useState(false)




    return (
        <div>
            <div className='dropdown'>
                <InputGroup className="mb-3">
                    <DropdownButton
                        title="Выберите магазин"
                        id="input-group-dropdown-1"
                    >
                        {device.store.map((data) =>
                            <Dropdown.Item
                                key={data.id}
                                href="#"
                                onClick={() => { checkOrder(data.name) }}
                            >
                                {data.name}
                            </Dropdown.Item>
                        )}
                    </DropdownButton>
                </InputGroup>
            </div>
            <div>
                {orders.length === 0
                    ?
                    <div className='order0'>
                        <div
                            className='noOrder'
                        >
                            Выберите магазин
                        </div>
                    </div>
                    :
                    <div className='order0'>
                        {orders.map((order) =>
                            <div
                                className='order'
                                key={order._id}
                            >
                                Имя : {order.surname}
                                <hr />
                                Телефон : {order.hpone}
                                <hr />
                                Заказ : {order.product}
                            </div>
                        )}
                    </div>
                }
            </div>
        </div>
    )
})


export default Order
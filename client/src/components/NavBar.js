import React, { useContext, useEffect, useState } from "react"
import { Navbar } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import { observer } from "mobx-react-lite"
import { Context } from ".."
import { useNavigate } from "react-router-dom"
import { LOGIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE, ORDER_BOOK, BASKET_PIZZA_ROUTE } from "../utils/consts"
import Image from "react-bootstrap/Image"
import busket from '../assets/buket.png'
import busketFull from '../assets/buketFull.png'



const NavBar = observer(() => {
    const navigate = useNavigate()
    const { user } = useContext(Context)
    const { basket } = useContext(Context)
    const [isfullBasket, setIsfullBasket] = useState(false)
    const [isfullBasketPizza, setIsfullBasketPizza] = useState(false)
    const userId = localStorage.getItem('userId')
    const arrCheck = JSON.parse(localStorage.getItem(`arrMcDonalds-${userId}`))
    const arrCheckPizza = JSON.parse(localStorage.getItem(`arrPizza-${userId}`))

    const logOut = () => {
        user.setIsAuth(false)
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        document.location.href = LOGIN_ROUTE
    }

    useEffect(() => {
        if (!arrCheckPizza || arrCheckPizza.length === 0) {
            return setIsfullBasketPizza(false)
        } else {
            setIsfullBasketPizza(true)
        }
    }, [basket.basketIconPizza])
    useEffect(() => {
        if (!arrCheck || arrCheck.length === 0) {
            return setIsfullBasket(false)
        } else {
            setIsfullBasket(true)
        }
    }, [basket.basketIcon])


    return (
        <Navbar bg="primary" expand="lg">
            <Container fluid>
                <div
                    style={{ cursor: 'pointer', color: 'white' }}
                    className="stor-name"
                    onClick={() => { navigate(SHOP_ROUTE) }}
                >
                    Рестораны
                </div>
                <div 
                    style={{ cursor: 'pointer', color: 'white' }}
                    className="stor-name"
                    onClick={() => { navigate(ORDER_BOOK) }}
                >
                    История заказов
                </div>
                <div>

                {basket.showHideMcDonalds
                    ?
                    <div
                        className="d-flex image-buket"
                        style={{ cursor: 'pointer' }}
                    >
                        {isfullBasket ?
                            <Image
                                wigth={40}
                                height={40}
                                src={busketFull}
                                onClick={() => { navigate(BASKET_ROUTE) }}
                            />
                            :
                            <Image
                                wigth={40}
                                height={40}
                                src={busket}
                            />
                        }
                        <Button
                            onClick={() => logOut()}
                            variant="secondary"
                            className="m-1">Log out
                        </Button>
                    </div>
                    :
                    <div
                        className="d-flex image-buket"
                        style={{ cursor: 'pointer' }}
                    >
                    </div>
                }
                {basket.showHidePizza
                    ?
                    <div
                        className="d-flex image-buket"
                        style={{ cursor: 'pointer' }}
                    >
                        {isfullBasketPizza ?
                            <Image
                                wigth={40}
                                height={40}
                                src={busketFull}
                                onClick={() => { navigate(BASKET_PIZZA_ROUTE) }}
                            />
                            :
                            <Image
                                wigth={40}
                                height={40}
                                src={busket}
                            />
                        }
                        <Button
                            onClick={() => logOut()}
                            variant="secondary"
                            className="m-1">Log out
                        </Button>
                    </div>
                    :
                    <div
                        className="d-flex image-buket"
                        style={{ cursor: 'pointer' }}
                    >
                    </div>
                }
                {basket.showHideHamburger
                    ?
                    <div
                        className="d-flex image-buket"
                        style={{ cursor: 'pointer' }}
                    >
                        {isfullBasketPizza ?
                            <Image
                                wigth={40}
                                height={40}
                                src={busketFull}
                                // onClick={() => { navigate(BASKET_PIZZA_ROUTE) }}
                            />
                            :
                            <Image
                                wigth={40}
                                height={40}
                                src={busket}
                            />
                        }
                        <Button
                            onClick={() => logOut()}
                            variant="secondary"
                            className="m-1">Log out
                        </Button>
                    </div>
                    :
                    <div
                        className="d-flex image-buket"
                        style={{ cursor: 'pointer' }}
                    >
                    </div>
                }
                {basket.showHideSushi
                    ?
                    <div
                        className="d-flex image-buket"
                        style={{ cursor: 'pointer' }}
                    >
                        {isfullBasketPizza ?
                            <Image
                                wigth={40}
                                height={40}
                                src={busketFull}
                                // onClick={() => { navigate(BASKET_PIZZA_ROUTE) }}
                            />
                            :
                            <Image
                                wigth={40}
                                height={40}
                                src={busket}
                            />
                        }
                        <Button
                            onClick={() => logOut()}
                            variant="secondary"
                            className="m-1">Log out
                        </Button>
                    </div>
                    :
                    <div
                        className="d-flex image-buket"
                        style={{ cursor: 'pointer' }}
                    >
                    </div>
                }
                </div>
            </Container>
        </Navbar>
    )
})


export default NavBar
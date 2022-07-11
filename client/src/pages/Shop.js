import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import McDonaldsList from '../components/McDonaldsList'
import PizzaList from '../components/PizzaList'
import Hamburger from '../components/Hamburger'
import Sushi from '../components/Sushi'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import Navbar from "react-bootstrap/Navbar"
import ListGroup from "react-bootstrap/ListGroup"




const Shop = observer(() => {
    const { device } = useContext(Context)
    const { basket } = useContext(Context)

    const storeSelection = (store) => {
        device.setSelectedStore(store)
        basket.setShowHideMcDonalds(false)
        basket.setShowHidePizza(false)
        basket.setShowHideHamburger(false)
        basket.setShowHideSushi(false)
        if (store.id === 1) {
            basket.setShowHideMcDonalds(true)
        }
        if (store.id === 2) {
            basket.setShowHidePizza(true)
        }
        if (store.id === 3) {
            basket.setShowHideHamburger(true)
        }
        if (store.id === 4) {
            basket.setShowHideSushi(true)
        }
    }

    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <Navbar bg="primary" variant="dark">
                        <ListGroup>
                            {device.store.map(store =>
                                <ListGroup.Item
                                    className="store-list"
                                    style={{ cursor: 'pointer' }}
                                    active={store.id === device.selectedStore.id}
                                    onClick={() => storeSelection(store)}
                                    key={store.id}
                                >
                                    {store.name}
                                </ListGroup.Item>)}
                        </ListGroup>
                    </Navbar>
                </Col>
                <Col md={9}>
                    {basket.showHideMcDonalds
                        ?
                        <div>
                            <McDonaldsList />
                        </div>
                        :
                        <div>
                        </div>}
                    {basket.showHidePizza
                        ?
                        <div>
                            <PizzaList />
                        </div>
                        :
                        <div>
                        </div>}
                    {basket.showHideHamburger
                        ?
                        <div>
                            <Hamburger />
                        </div>
                        :
                        <div>
                        </div>}
                    {basket.showHideSushi
                        ?
                        <div>
                            <Sushi />
                        </div>
                        :
                        <div>
                        </div>}
                </Col>
            </Row>
        </Container >
    )
})


export default Shop
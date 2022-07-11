import React, { useContext } from 'react'
import { Context } from "../index"
import { Row } from "react-bootstrap"
import { observer } from 'mobx-react-lite'

const BrandBar = observer(() => {
    const { device } = useContext(Context)


    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
                <div
                    style={{ cursor: 'pointer' }}
                    key={brand.id}
                >
                    {brand.img}
                </div>
            )}
        </Row>
    )
})

export default BrandBar




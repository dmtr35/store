import React, { useContext } from 'react'
import { Context } from "../index"
import { observer } from 'mobx-react-lite'
import McDonaldsItem from "./McDonaldsItem"


// const DeviceList = observer(() => {
const McDonaldsList = observer(() => {
    const { device } = useContext(Context)


    return (
        <div>
            <div className='d-flex'>
                {device.devices.map(device =>
                    <McDonaldsItem key={device.id} device={device} />
                )}
            </div>
        </div>
    )
})


export default McDonaldsList
// export default DeviceList
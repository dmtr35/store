import { makeAutoObservable } from "mobx"
import Image from "react-bootstrap/Image"
import mc01 from '../assets/mc01.png'
import mc02 from '../assets/mc02.png'
import mc03 from '../assets/mc03.png'
import mc04 from '../assets/mc04.png'
import pz01 from '../assets/pz01.png'
import pz02 from '../assets/pz02.png'
import pz03 from '../assets/pz03.png'
import pz04 from '../assets/pz04.png'
import gam01 from '../assets/gam01.png'
import gam02 from '../assets/gam02.png'
import gam03 from '../assets/gam03.png'
import gam04 from '../assets/gam04.png'
import s01 from '../assets/s01.png'
import s02 from '../assets/s02.png'
import s03 from '../assets/s03.png'
import s04 from '../assets/s04.png'



export default class DeviceStore {
    constructor() {
        this._store = [
            { id: 1, name: 'McDonalds' },
            { id: 2, name: 'Pizza' },
            { id: 3, name: 'Hamburger' },
            { id: 4, name: 'Sushi' }
        ]
        this._devices = [
            { id: 1, name: 'Share Menu', img: mc01, stor: "McDonalds" },
            { id: 2, name: 'Креветки', img: mc02, stor: "McDonalds" },
            { id: 3, name: 'Dublu Filet-O-Fish', img: mc03, stor: "McDonalds" },
            { id: 4, name: 'Big Tasty', img: mc04, stor: "McDonalds" },
        ]

        this._selectedStore = {}

        this._pizza = [
            { id: 5, name: 'Пицца Гавайская', img: pz01, stor: 'Pizza' },
            { id: 6, name: 'Пицца Фунги', img: pz02, stor: 'Pizza' },
            { id: 7, name: 'Пицца Пепперони', img: pz03, stor: 'Pizza' },
            { id: 8, name: 'Пицца 5 Сыров', img: pz04, stor: 'Pizza' }
        ]
        this._hamburgers = [
            { id: 9, name: 'chicken combo + cola', img: gam01, stor: 'hamburger' },
            { id: 10, name: 'chicken combo + boulion', img: gam02, stor: 'hamburger' },
            { id: 11, name: 'chicken combo + craft beer', img: gam03, stor: 'hamburger' },
            { id: 12, name: 'bro burger combo set', img: gam04, stor: 'hamburger' }
        ]
        this._sushis = [
            { id: 9, name: 'chicken combo + cola', img: s01, stor: 'sushi' },
            { id: 10, name: 'chicken combo + boulion', img: s02, stor: 'sushi' },
            { id: 11, name: 'chicken combo + craft beer', img: s03, stor: 'sushi' },
            { id: 12, name: 'bro burger combo set', img: s04, stor: 'sushi' }
        ]
        this._ordersBook = []

        makeAutoObservable(this)
    }




    setStore(store) {
        this._store = store
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedStore(store) {
        this._selectedStore = store
    }
    setPizza(pizza) {
        this._pizza = pizza
    }
    setHamburgers(hamburgers) {
        this._hamburgers = hamburgers
    }
    setSushis(sushis) {
        this._sushis = sushis
    }
    setOrdersBook(ordersBook) {
        this._ordersBook = ordersBook
    }





    get store() {
        return this._store
    }
    get devices() {
        return this._devices
    }
    get selectedStore() {
        return this._selectedStore
    }
    get pizza() {
        return this._pizza
    }
    get hamburgers() {
        return this._hamburgers
    }
    get sushis() {
        return this._sushis
    }
    get ordersBook() {
        return this._ordersBook
    }
}
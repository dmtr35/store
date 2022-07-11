import { makeAutoObservable } from "mobx"


export default class BasketIcon {
    constructor() {
        this._basketIcon = false
        this._basketIconPizza = false

        this._showHideMcDonalds = false
        this._showHidePizza = false
        this._showHideHamburger = false
        this._showHideSushi = false
        makeAutoObservable(this)
    }



    setBasketIcon(basketIcon) {
        this._basketIcon = basketIcon
    }
    setBasketIconPizza(basketIconPizza) {
        this._basketIconPizza = basketIconPizza
    }


    setShowHideMcDonalds(showHideMcDonalds) {
        this._showHideMcDonalds = showHideMcDonalds
    }
    setShowHidePizza(showHidePizza) {
        this._showHidePizza = showHidePizza
    }
    setShowHideHamburger(showHideHamburger) {
        this._showHideHamburger = showHideHamburger
    }
    setShowHideSushi(showHideSushi) {
        this._showHideSushi = showHideSushi
    }



    get basketIcon() {
        return this._basketIcon
    }
    get basketIconPizza() {
        return this._basketIconPizza
    }


    get showHideMcDonalds() {
        return this._showHideMcDonalds
    }
    get showHidePizza() {
        return this._showHidePizza
    }
    get showHideHamburger() {
        return this._showHideHamburger
    }
    get showHideSushi() {
        return this._showHideSushi
    }
}
import { BASKET_ROUTE } from '../utils/consts'


const userId = localStorage.getItem("userId")


export const mcBasket = (id) => {
    const arrCheck = JSON.parse(localStorage.getItem(`arrMcDonalds-${userId}`)) || []
    arrCheck.push(id)
    localStorage.setItem(`arrMcDonalds-${userId}`, JSON.stringify(arrCheck))
}
export const mcBasketPizza = (id) => {
    const arrCheck = JSON.parse(localStorage.getItem(`arrPizza-${userId}`)) || []
    arrCheck.push(id)
    localStorage.setItem(`arrPizza-${userId}`, JSON.stringify(arrCheck))
}

export const isBasket = () => {
    const arrCheck = JSON.parse(localStorage.getItem(`arrMcDonalds-${userId}`))
    if (arrCheck) {
    } else console.log(false);
}
export const delUnitBasketFull = (id) => {
    const arrCheck = JSON.parse(localStorage.getItem(`arrMcDonalds-${userId}`))
    if (arrCheck.includes(id)) {
        const index = arrCheck.indexOf(id)
        arrCheck.splice(index, 1)
        localStorage.setItem(`arrMcDonalds-${userId}`, JSON.stringify(arrCheck))
    }
    document.location.href = BASKET_ROUTE
}
export const delUnitBasketPizzaFull = (id) => {
    const arrCheck = JSON.parse(localStorage.getItem(`arrPizza-${userId}`))
    if (arrCheck.includes(id)) {
        const index = arrCheck.indexOf(id)
        arrCheck.splice(index, 1)
        localStorage.setItem(`arrPizza-${userId}`, JSON.stringify(arrCheck))
    }
    document.location.href = BASKET_ROUTE
}
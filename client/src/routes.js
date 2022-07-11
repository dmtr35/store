import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, BASKET_ROUTE, ORDER_BOOK, BASKET_PIZZA_ROUTE } from './utils/consts'
import Basket from './pages/Basket'
import BasketPizza from './pages/BasketPizza'
import Shop from './pages/Shop'
import Orderbook from './pages/Orderbook'
import Auth from './pages/Auth'


export const authRoutes = [
    {
        path: BASKET_ROUTE,
        Element: Basket
    },
    {
        path: BASKET_PIZZA_ROUTE,
        Element: BasketPizza
    },
    {
        path: SHOP_ROUTE,
        Element: Shop
    },
    {
        path: ORDER_BOOK,
        Element: Orderbook
    },
]


export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Element: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Element: Auth
    }
]
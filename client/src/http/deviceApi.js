import { $authHost, $host } from "./index";





export const createOrder = async (id, hpone, surname, store, product) => {
    const { data } = await $host.post(`product/addProducts/${id}`, { hpone, surname, store, product })
    return data
}

export const fetchOrder = async (store) => {
    const { data } = await $authHost.post(`product/getProduct/`, { store })
    console.log(data);
    
    return data
}
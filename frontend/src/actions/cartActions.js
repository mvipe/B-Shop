import { CART_ADD_ITEM ,CART_REMOVE_ITEM } from "../constants/cartConstants";
import axios from 'axios';
import { HashRouter } from "react-router-dom";

export const addToCart = (id,qty) => async (dispatch,getState)=>{
    const {data}=await axios.get(`/api/product/${id}`)
    

    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            product:data._id,
            name:data.name,
            image:data.image,
            price:data.price,
            countInStock:data.countInStock,
            qty
        }
    })

    //JSON.stringify(getState.cart.cartItems)

    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}
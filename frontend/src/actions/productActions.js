import {
    PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAILURE
} from "../constants/productConstants"

import axios from "axios"

const listProduct=()=> async(dispatch)=>{
    const url="/api/products/";
    try{
        dispatch({type:PRODUCT_LIST_REQUEST})

        const {data}=await axios.get(url)

        dispatch({type:PRODUCT_LIST_SUCCESS,payload:data})
    }catch(error){
        dispatch({type:PRODUCT_LIST_FAILURE,payload:error.response && error.response.data.message?
        error.response.data.message:error.message})
    }
}
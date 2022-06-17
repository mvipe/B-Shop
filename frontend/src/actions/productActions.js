import {
    PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAILURE

    ,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAILURE
} from "../constants/productConstants"

import axios from "axios"

export const listProducts=()=> async(dispatch)=>{
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

export const listProductDetails=(id)=> async(dispatch)=>{
    const url=`/api/product/${id}`;
    try{
        dispatch({type:PRODUCT_DETAILS_REQUEST})

        const {data}=await axios.get(url)

        dispatch({type:PRODUCT_DETAILS_SUCCESS,payload:data})
    }catch(error){
        dispatch({type:PRODUCT_DETAILS_FAILURE,payload:error.response && error.response.data.message?
        error.response.data.message:error.message})
    }
}
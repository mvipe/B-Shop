import {
    PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAILURE
} from "../constants/productConstants"
const productListReducers = (state={products:[]},action) =>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading:true,product:[]}

        case PRODUCT_LIST_SUCCESS:
            return {loading:false,product:action.payload}

        case PRODUCT_LIST_FAILURE:
            return {loading:false,error:action.payload}

        default:
            return state

        
    }
} 

export default productListReducers;
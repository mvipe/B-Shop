//Redux store
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer,productDetailsReducers} from './reducers/productReducers'
import {cartReducers} from './reducers/cartReducers'
import {userLoginReducer} from './reducers/userReducer'

const reducer=combineReducers({
    productList:productListReducer
    ,productDetails:productDetailsReducers,
    cart:cartReducers,
    userLogin:userLoginReducer

})


const cartItemsFromStorage=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState={
    cart:{cartItems:cartItemsFromStorage}
    
}





const middleWare=[thunk]
const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleWare)))

export default store
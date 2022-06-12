import React,{useEffect,useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'

import {useDispatch,useSelector} from 'react-redux'
import {listProducts} from "../actions/productActions"



function HomeScreen() {
  const dispatch=useDispatch()
  const productList=useSelector(state=>state.productList)
  const {error,loading,products} =productList




useEffect(()=>{
  dispatch(listProducts())

  
},[dispatch])


  return (
    <div>
        <h1>Latest Product</h1>
        {loading ? <h2>Loading ...</h2> : error?<h3>error</h3>:
         <Row>
         {
             products.map(prod=>(
                 <Col key={prod._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={prod} />
                 </Col>
))
         }
     </Row>}
       
    </div>
  )
}

export default HomeScreen
import React,{useEffect,useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'


import axios from "axios"

function HomeScreen() {
const [products,setProducts]=useState([])

const url="/api/products/";

useEffect(()=>{
  async function fetchProducts(){
    const {data}=await axios.get(url)
    setProducts(data)
  }

  fetchProducts()

  
},[])

  return (
    <div>
        <h1>Latest Product</h1>
        <Row>
            {
                products.map(product=>(
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                   <Product product={product} />
                    </Col>
  ))
            }
        </Row>
    </div>
  )
}

export default HomeScreen
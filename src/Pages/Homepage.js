import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Navbar from '../Components/Navbar'
import Cards from "./ProductCard"
import productRef from "../config/products"
import MenuBarOpen from '../Components/MenuBarOpen'
import Courasel from "../Components/courasel"
import Footer from "../Components/footer"

const Homepage = () => {
    let [products, setProducts] = useState([]);
    let [open, setOpen] = useState(false);

    useEffect(()=>{
        setProducts(productRef)
    },[])

    const checkCart=()=>setOpen(!open)

    return (
        <>
            <Navbar checkCart={checkCart} />
            <Courasel />
            <Row className="bg-white" noGutters>
            <Row noGutters className="h-100" style={{ width: "50px" }}>
                    {(open) ? <MenuBarOpen setOpen={setOpen} /> : null}
                </Row>
                 <Row noGutters style={{ width: "calc(100% - 50px)" }}>
                {
                 products.map((result)=>{
                    return(  
                    <Col md={5} lg={3} sm={5} className="p-0 pr-2">
                        <Cards  products={result} />
                    </Col>
                          )
                    })
                }
                </Row>
            </Row>
            <div style={{marginTop:"50px"}}>
            <Footer />
            </div>
        </>
    )
}

export default Homepage;
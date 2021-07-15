import React,{useEffect,useState} from 'react'
import { Row, Col } from 'react-bootstrap'
import {updateCart} from "../store/actions/products/index"
import { useDispatch, useSelector } from "react-redux";

export default function MenuBarOpen ({ setOpen }) {
    const dispatch = useDispatch();
    const productsAddInCart = useSelector((state) =>state.cartProducts.cartList);
    let [total, setTotal] = useState(null);

    useEffect(()=>{
        let total = 0
        productsAddInCart.map((val=>total = total + val.price))
        setTotal(total)
    },[productsAddInCart])


    const removeProductsFromCart=(val)=>{
        const filterProduct =  productsAddInCart.filter((product)=> `${product.url}` !== `${val.url}`)
        dispatch(updateCart(filterProduct))
    }

    return (
       <>
        <Row className="flex-column menu-bar menubar-open pr-3 pl-3 pb-3 vh-100 " onMouseLeave={() => setOpen(false)} noGutters>
{productsAddInCart?.map((val)=>{
    return(
       <Row>
       <Col md={4} lg={3} sm={5} noGutters>
       <img alt="" width="100" src={val.url} /> 
       </Col>
       <Col md={8} >
       <h4 style={{float:"right"}}>{val.name}</h4>
       </Col>
       <Col md={8} >
       <h4>Price -${val.price}</h4>
       </Col>
       <Col md={4} >
       <h3 style={{float:"right"}} onClick={()=>removeProductsFromCart(val)}><i className="fas fa-trash-alt cursor"></i></h3>
       </Col>
   </Row>
    )
})}
<hr className="hr" />
        <Row>
        {total?<Col md={8} ><h4>Total -${total}</h4></Col>:null}
        </Row>
    </Row>
       </>
    )
}

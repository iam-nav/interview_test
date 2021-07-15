import React from 'react'
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "../svgs/logo.png"
import { useSelector } from "react-redux";

export default function Navbar({checkCart,cart}) {
    const productsAddInCart = useSelector((state) =>state.cartProducts.cartList);
    return (
     <>
     <Row className="no-gutters justify-content-center align-items-center w-100 navbar position-relative cursor">
    <img alt="logo" src={Logo} />
    <Link style={{ color: "#136385" }} to="/"><span className="mr-4">Home</span></Link>
    <Link style={{ color: "#136385" }} to="/cart"><span className="mr-4">Cart</span></Link>
    <span className="last" onClick={checkCart}>{productsAddInCart?.length}<i class="fas fa-cart-plus"></i></span>
    </Row>
     </>
    )
}

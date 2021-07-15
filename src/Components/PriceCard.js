import React from 'react'
import Button from './Button';
import { useDispatch,useSelector } from "react-redux";
import {setCartList}  from "../store/actions/products"

function PriceCard({activeProduct, large, pricing, title,img, list = [] }) {
    const dispatch = useDispatch();
    const productsAddInCart = useSelector((state) =>state.cartProducts.cartList);
    return (
        <>
         <div className={`price-card shadow round row no-gutters flex-column align-items-center mt-5 ml-5 pt-3 `} style={{ height: `${!large ? 550 : 500}` }}>
    <h3 className="text-secondary text-center mb-2">{title}</h3>
    <div className="banner row no-gutters pl- mb-3">
        <img alt='products' height={250} width="100%" src={img} />
    </div>
    <h3>
        ${pricing}
    </h3>
    <div className="p-2">
        <ul>
            {
                list.map(val => <li>{val}</li>)
            }
        </ul>
    </div>
    <Button disable={productsAddInCart.includes(activeProduct)}  onClick={()=>dispatch(setCartList([activeProduct]))} text={productsAddInCart.includes(activeProduct)?"Added":"Buy Now"} />
</div>
        </>
    )
}

export default PriceCard;
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import PriceCard from '../Components/PriceCard'


const ProductCard = ({products}) => {
    return (
        <>
            <Container>
                <Row noGutters className="justify-content-center vh-90 w-100">
                    <PriceCard
                        activeProduct={products}
                        title={products.name}
                        subheading="Subheading goes here"
                        pricing={products.price}
                        img={products.url}
                        list={["Commodo eu aliqua elit"]}
                    />
                </Row>
            </Container>
        </>
    )
}

export default ProductCard;
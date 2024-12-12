//import React from 'react'
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../store/CartSlice';
import { getProductsUsingApi } from '../store/productSlice';



const Product = () => {

    const dispatch = useDispatch();
    //receiving the data (data name is should bcz we given in initialstate in productSlice)
    //data:products means products are alias name 
    const { data: products, status } = useSelector((state) => state.product);

    useEffect(() => {
        //dispatching the action fetchProducts
        dispatch(getProductsUsingApi());
    }, [])

    //it will dispatch adding product to cart action  ,invokes addCart method in CartSlice/reducer/
    const addingCart = (product) => {
        //if we use redux instead of redux-tookit then we need mention type also,but here action-type take care of reduxtoolkit
        dispatch(addCart(product));
    }
    if (status === 'error') {
        return <h4>Something Went Wrong!! check Once Your Request!!</h4>
    }
    if (status === 'loading') {
        return <h3> Loading!! Please Wait!!</h3>

    }

    const cards = products.map(product => (
        // this col-sm-3 means grids ,each col have 12 parts ,so here 3 parts each col devided means 3/12=4 products visisble
        <div className='col-sm-3' style={{ marginBottom: '15px' }} key={product.id}>
            <Card style={{ width: '18rem' }} className='' >
                <Card.Img variant="top" src={product.image} className='card-img' />
                <Card.Body>
                    <Card.Title className='card-title'>{product.title}</Card.Title>
                    <Card.Text>{product.category}</Card.Text>
                    <Card.Text>${product.price}</Card.Text>

                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" onClick={() => addingCart(product)}>Add To Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ))

    return (
        <div>
            <h1>Product component...</h1>
            <div className='row'>
                {cards}
            </div>
        </div>
    )
}

export default Product

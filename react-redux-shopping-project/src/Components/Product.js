import React from 'react'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Product = () => {

    const [products, getProducts] = useState([]);

    useEffect(() => {
        //api calling (https://fakestoreapi.com/products-->fake store api)
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(res => getProducts(res))

    }, [])


    const cards = products.map(product => (
        <div className='col-sm-3' style={{ marginBottom: '15px' }} key={product.id}>
            <Card style={{ width: '18rem' }} className='' >
                <Card.Img variant="top" src={product.image} className='card-img' />
                <Card.Body>
                    <Card.Title className='card-title'>{product.title}</Card.Title>
                    <Card.Text>{product.category}</Card.Text>
                    <Card.Text>${product.price}</Card.Text>
                   
                </Card.Body>
                <Card.Footer> <Button variant="primary">Add To Cart</Button></Card.Footer>
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

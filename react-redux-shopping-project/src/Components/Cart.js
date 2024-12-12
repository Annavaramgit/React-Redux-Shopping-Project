import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../store/CartSlice';

const Cart = () => {

  //recieve state from store,automatic re-render when state update also
  const products = useSelector((state) => state.cart);

  //for dispatch action to redux sto
  const dispatch = useDispatch();

  const removingItemFromCart = (id) => {
    dispatch(removeItemFromCart(id));
  }

  const cards = products.map(product => (

    // this col-sm-3 means grids ,each col have 12 parts ,so here 3 parts each col devided means 3/12=4 products visisble
    <div className='col-sm-4 text-center' style={{ marginBottom: '15px' }} key={product.id}>
      <Card style={{ width: '18rem' }} className='' >
        <div className='text-center'>
          <Card.Img variant="top" src={product.image} className='card-img' />
        </div>
        <Card.Body>
          <Card.Title className='card-title'>{product.title}</Card.Title>
          <Card.Text>{product.category}</Card.Text>
          <Card.Text>${product.price}</Card.Text>

        </Card.Body>
        <Card.Footer>
          <Button variant="danger" onClick={() => removingItemFromCart(product.id)}>remove item</Button>
        </Card.Footer>
      </Card>
    </div>
  ))

  return (
    <div className='row'>
      {cards}
    </div>
  )
}

export default Cart

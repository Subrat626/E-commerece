import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
const Cart = () => {
    const cartItem = useSelector(store=>store.cart.items);


  return (
    <div className='Cart_container'>
      
         {
            cartItem.length > 0 ? (
                cartItem.map(e=>{
                    return <CartItem data={e}/>
                  })
            ):(
                <p>There are no items in your Cart.</p>
            )
            
          }
      
    </div>
  )
}

export default Cart;


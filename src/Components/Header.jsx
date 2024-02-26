import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import ManageWishlist from '../utils/HandleContext';
import {  useSelector } from 'react-redux';


const Header = () => {
    const cartItem = useSelector(store=>store.cart.items)
    const {wishList}=useContext(ManageWishlist)
  return (
    <div className='Header'>
        <Link to="/">
Home
      </Link>
      <Link to="/wishlist">
Wishlist{wishList.length>0 && "-"+wishList.length}
      </Link>
      <Link to="/cart">
Cart{cartItem.length>0 && "-"+cartItem.length}
      </Link>
    </div>
  )
}

export default Header

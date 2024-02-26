import React from 'react'
import { useState,useContext } from 'react';
import ManageWishlist from '../utils/HandleContext';
import { useDispatch,useSelector } from 'react-redux';
import { addItem,updateItem } from '../utils/CartSlice';
const ProductCard = ({ title, desc, src, price,id }) => {
const [quantity,setQuantity]=useState(0);

const handleMinus=()=>{
    if(quantity != 0){
        setQuantity(e=>e-1)
    }
}
const handlePlus=()=>{
        setQuantity(e=>e+1)
}

const {wishList, addWishList, removeWishList} = useContext(ManageWishlist);
const data = {
    "title":title,
    "description": desc,
    "Image":src,
    "id":id,
    "quantity":quantity,
    "action":"addToCart"
}
const productExists = wishList.some(product => product.title === title);
const handleClick = ()=>{
    productExists?(
        removeWishList(id)
    ):(
        addWishList(data) 
    )
}
const cartStore = useSelector(store=>store.cart.items);
const cartProductExists = cartStore.some(product => product.title === title);
const dispatch = useDispatch()
const handleAddtoCart=()=>{
    cartProductExists?(
        dispatch(updateItem(data))
    ):(
        dispatch(addItem(data))
    )
}
  return (
    <div className='Product_card'>
        <svg onClick={()=>handleClick()} className='wishList_icon' xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 64 64" stroke-width="3" stroke="red" fill={productExists? "red":"none"}><path d="M9.06,25C7.68,17.3,12.78,10.63,20.73,10c7-.55,10.47,7.93,11.17,9.55a.13.13,0,0,0,.25,0c3.25-8.91,9.17-9.29,11.25-9.5C49,9.45,56.51,13.78,55,23.87c-2.16,14-23.12,29.81-23.12,29.81S11.79,40.05,9.06,25Z"/></svg>
     <img src={src} width={300} height={300}/>
        <div className='content_section'>
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className='action_btns'>
            <div className='qnty_btn_grp'>
                <span className='qnty_btn' onClick={()=>handleMinus()}>-</span>
                <span>{quantity}</span>
                <span className='qnty_btn' onClick={()=>handlePlus()}>+</span>
            </div>
            <button onClick={handleAddtoCart}>Add to Cart @ {price}/-</button>
        </div>
        </div>
    </div>
  )
}

export default ProductCard

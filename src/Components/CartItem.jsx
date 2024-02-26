import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { removeItem,updateItem } from '../utils/CartSlice';

const CartItem = (data) => {
    const [quantity,setQuantity]=useState(data.data.quantity);
    const dispatch = useDispatch();

 
   const Newdata = {
    "title":data.data.title,
    "description": data.data.description,
    "Image":data.data.Image,
    "id":data.data.id,
    "quantity":quantity,
    "action":"update"
} 
const handleMinus=async ()=>{
    if(quantity != 0){
       await setQuantity(e=>e-1)
    }
    await dispatch(updateItem(Newdata))
}
const handlePlus=async ()=>{
    await setQuantity(e=>e+1)
    await dispatch(updateItem(Newdata))
}
const handleRemove = (e)=>{
   dispatch(removeItem(e))
  }
 return (
    <div className='WishList_card'>
                        <svg className='wishList_icon' onClick={()=>handleRemove(Newdata)} xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 1024 1024"><path fill="#000000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
                      <img src={data.data.Image} width={300} height={300}/>
                      <p>{data.data.title}</p>
                      <div className='qnty_btn_grp'>
                <span className='qnty_btn' onClick={handleMinus}>-</span>
                <span>{quantity}</span>
                <span className='qnty_btn' onClick={handlePlus}>+</span>
            </div>
                    </div>
  )
}

export default CartItem

import React,{useContext} from 'react'
import ManageWishlist from '../utils/HandleContext';

const Wishlist = () => {
    const {wishList, removeWishList} = useContext(ManageWishlist);
   const handleRemove =(e)=>{
    removeWishList(e)
   }
  return (
    <div className='title_Container'>
        
      {
        wishList.length>0 ? (
            wishList.map(e=>{
                return(
                <div className='WishList_card'>
                    <svg className='wishList_icon' onClick={()=>handleRemove(e.id)} xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 1024 1024"><path fill="#000000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
                  <img src={e.Image} width={300} height={300}/>
                  <p>{e.title}</p>
                </div>)
              })
        ):(
            <p>There are no items in your Wishlist.</p>
        )
        
      }
    </div>
  )
}

export default Wishlist

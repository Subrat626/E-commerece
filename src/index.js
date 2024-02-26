import React,{useContext,createContext,useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductPage from './Components/ProductCard'
import Cart from './Components/Cart';
import Wishlist from './Components/Wishlist';
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import ManageWishlist from './utils/HandleContext';
import Header from './Components/Header';
import { Provider } from 'react-redux';
import cartStore from './utils/CartStore';

const AppOutlet = () => {
  const [wishList, setWishlist] = useState([]);

  const addWishList = (el) => {
    setWishlist(e => [...e, el]);
  };

  const removeWishList = (el) => {
    setWishlist(e => e.filter(item => item.id !== el)); // Remove the specified item from the wishlist
  };

  return (
    <Provider store={cartStore}>
    <ManageWishlist.Provider value={{ wishList, addWishList, removeWishList }}>
      <Header/>
      <Outlet /> {/* Use Outlet component here */}
    </ManageWishlist.Provider>
    </Provider>
  );
};

export default AppOutlet;

const AppRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppOutlet/>,
    children:[
      {
        path:"/",
        element:<App/>
      },
      {
        path:"/products/:id",
        element:<ProductPage/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/wishlist",
        element:<Wishlist/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={AppRouter}/>
);
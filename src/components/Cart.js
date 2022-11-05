import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from "react-router-dom";
import { addItem, delItem } from "../Redux/actions";
import addItems from "../Redux/reducers/addItems";
import CartBtn from "./CartBtn";
import axios from 'axios';
const Cart = () => {
     const [cartBtn, setCartBtn] = useState("Add to Cart");
     const [product, setProduct] = useState([]);
     const [loading, setLoading] = useState(true);
     const state = useSelector((state) => state.addItems);
     useEffect(() => {
          axios.get('js/data.json').then(res => { setProduct(res.data.Product) });
     }, [])
     const dispatch = useDispatch();
     // const addProduct = (product) => {
     //      dispatch(addItem(product));
     // }
     const handleClose = (item) => {
          dispatch(delItem(item))
     }
     const CartItems = (cartItem) => {
          return (
               <>
                   
                         <div className="bg-light" key={cartItem.id}>
                         <div className="container mt-5">
                                        <button onClick={() => handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                                  
                                   <div className="row">
                                   <div className="col-md-6">
                                        <img src={cartItem.image} height="500px" width="800px" />
                                   </div>
                                   <div className="col-md-4 mt-5">
                                        <h3>{cartItem.name}</h3>
                                        <p>
                                             {state.length} X $ {cartItem.price} = $
                                             {state.length * cartItem.price}
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </>
          );

     }

     const emptyCart = () => {
          return (
               <div className="bg-light">
               <div className="container py-4">
                    <div className="row">
                         <h3>Your Cart is Empty</h3>
                    </div>
               </div>
               </div>
          );
     }
     const button = () => {
          return (
               <div className="container py-4">
                    <div className="row">
                         <NavLink to="/checkout" className="btn btn-outline-primary text-center mb-5 w-25 m-auto">Proceed to Checkout </NavLink>
                    </div>
               </div>
          )
     }

     return (
          <div>

               {state.length === 0 && emptyCart()};
               {state.length !== 0 && state.map(CartItems)};
               {state.length !== 0 && button()};
          </div>
     )
}
export default Cart;
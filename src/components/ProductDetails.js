import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Navs from './Navs';
import './../styles/Products.scss';
import { ReactDOM } from "react";
import { NavLink, useParams } from "react-router-dom";
import Products from "./Products";
import { useSelector, useDispatch } from 'react-redux';
import { addItem, delItem } from "../Redux/actions/index";
const ProductsDetails = () => {
     
     const [cartBtn ,setCartBtn] =useState("Add to Cart");
     const { id } = useParams();
     const [Product, setProduct] = useState([]);
     const [loading, setLoading] = useState(false);
     //GEt DATA FROM API
     const dispatch = useDispatch();
     const addProduct = (Product) => {
          dispatch(addItem(Product));
     }     
     const delProduct = (Product) => {
          dispatch(delItem(Product));
     }    

   
     useEffect(() => {
          const FetchData = async () => {
               const response = await fetch(`https://fakestoreapi.com/products/${id}`);
               setProduct(await response.json());
               setLoading(false)
          }
          FetchData();
     }, [id])
     
    
     const Loading = () => {
          return (
               <div>
                    Loading Products
               </div>
          )
     }
    
     const AllProducts = () => {   
       
          return (
               <>
                    <div className="details row" key={Product.id}>
                         <div className="col-lg-6 card-info" >
                              <img src={Product.image} width="400px" height="400px" />
                         </div>
                         <div className="col-lg-6 col-md-6 product-info">
                              <h2 className="text-uppercase">{Product.category}</h2>
                              <hr />
                              <h3>{Product.title}</h3>
                              <h4>Rating {Product.rating && Product.rating.rate}</h4>
                              <p>${Product.price}</p>
                              <p>{Product.description}</p>
                              <button className="btn btn-primary" onClick={()=>addProduct(Product)}>Add to Cart</button>
                              <NavLink to="/Cart"className="btn ">Go to Cart</NavLink>
                         </div>
                    </div>
               </>
          )

     };
     return (
          <div className="container">
               <div className="row">
                     <AllProducts />
               </div>

          </div>

     )


}
export default ProductsDetails;
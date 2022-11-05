import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Home from "./Home";
import './../styles/Products.scss';
import CartBtn from "./CartBtn";
import { ReactDOM } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
const Products = () => {
     const { id } = useParams();
     const [Product, setProduct] = useState([]);
     const [filter, setFilter] = useState(Product);
     const filterResult = (catItem) => {
          const result = Product.filter((currCat) => {
               return currCat.category === catItem
          });
          
          setFilter(result);
    

     }
     useEffect(() => {
          const FetchData = async () => {
               const response = await fetch('https://fakestoreapi.com/products');
               setProduct(await response.clone().json());
               setFilter(await response.json());
          }
          FetchData();
     }, [id])

     
     // const AllProduct = Product.map((productItem) => {
     
         

     // });
   

     
     return (
          <section className="Products">
               <div className="container">
                    <div className="row">
                         <h2 className="mt-5">Products</h2>
                         <hr />

                    </div>
                    <div className="row">
                         <div className="col-lg-3">
                         <button className="btn btn-warning w-100 mb-4" onClick={() => setFilter(Product)} >All</button>
                              <button className="btn btn-warning w-100 mb-4" onClick={() => filterResult("men's clothing")} >Mens</button>
                              <button className="btn btn-warning w-100 mb-4" onClick={() => filterResult("women's clothing")}>Women</button>
                              <button className="btn btn-warning w-100 mb-4" onClick={() => filterResult("jewelery")}>jewelery</button>
                              <button className="btn btn-warning w-100 mb-4" onClick={() => filterResult("electronics")}>electronics</button>

                         </div>
                         <div className="col-lg-9">
                              <div className="row">
                                   {
                                        filter.map((Product)=>{
                                             return (
                                                  <>
                                   
                                   
                                                       <div className="col-lg-3 col-md-3 card-info" key={Product.id}>
                                                            <Link to={`/ProductDetails/${Product.id}`}>
                                                                 <Card className="Cards">
                                                                      <Card.Img variant="top" src={Product.image} />
                                                                      <Card.Body>
                                                                           <Card.Title>{Product.title.substring(0, 13)}</Card.Title>
                                                                           <p className="price">${Product.price}</p>
                                                                           <NavLink to="/" className="btn btn-outline-primary">Add to Cart</NavLink>
                                                                      </Card.Body>
                                                                 </Card>
                                                            </Link>
                                                       </div>
                                                  </>
                                             )
                                        }
                                        )
                                   }
                                   
                              </div>
                         </div>
                    </div>
               </div>
          </section>

     )



};
export default Products;
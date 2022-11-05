import React from "react";
import Button from 'react-bootstrap/Button';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import './../styles/Checkout.scss';
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Home";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import axios from "axios";
import data from './js/data.json'; 
const Login = () => {
     const state = useSelector((state) => state.addItems);
     const [value, setValue] = useState();
     const [User, setUser] = useState();
   
     useEffect(() => {
          //  var response = axios.get('js/data.json').then(res => { setUser(res.data.userLists) });

     }, [])
     return (
          <>
               <div className="container mt-5 checkout">
                    <div className="row mt-10">
                         <h2>Login</h2>

                    </div>
                    <hr />
                    <div className="row">
                         <div className="col-md-12 order-md-1">

                              <Formik
                                   initialValues={{
                                        email: '',
                                        Password: ''
                                   }}
                                   validationSchema={Yup.object().shape({
                                        email: Yup.string()
                                             .email('Email is invalid')
                                             .required('Email is required'),
                                        Password: Yup.string()
                                             .min(6, 'Password must be at least 6 characters')
                                             .required('Password is required')
                                   })}
                                   onSubmit={fields => {
                                        const loadData = JSON.stringify(data);
                                        const json = JSON.parse(loadData);
                                        console.log(json);
                                        if (fields.email == json.email && fields.Password == json.Password) {
                                             window.location = "/home";

                                         
                                        }
                                        else {
                                          alert("YOU MUST FILL CORRECT DATA!!!")
                                        }

                                   }}
                                   render={({ errors, status, touched }) => (
                                        <Form>

                                             <div className="form-group row">
                                                  <div className="col-md-3">
                                                       <label htmlFor="email">Email *</label>
                                                  </div>
                                                  <div className="col-md-9 text-center">
                                                       <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} /></div>
                                                  <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                             </div>
                                             <div className="form-group row">
                                                  <div className="col-md-3">
                                                       <label htmlFor="confirmPassword"> Password :</label>
                                                  </div>
                                                  <div className="col-md-9">
                                                       <Field name="Password" type="Password" className={'form-control' + (errors.Password && touched.Password ? ' is-invalid' : '')} /></div>

                                                  <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />

                                             </div>
                                             <div className="form-group">
                                                  <button type="submit" className="btn btn-primary">Login</button>
                                                  <Link to="/Register" className="registerLink">Register Now??</Link>
                                             </div>
                                        </Form>
                                   )}
                              />
                         </div>
                    </div>
               </div>
          </>
     );
}
export default Login;
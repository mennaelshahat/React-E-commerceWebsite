import React from "react";
import Button from 'react-bootstrap/Button';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { useState } from "react";
import './../styles/Checkout.scss';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useEffect } from "react";
import axios from "axios";
import data from './js/data.json'; 
const Register = () => {
     const state = useSelector((state) => state.addItems);
     const [value, setValue] = useState();
     useEffect(() => {
     }, [])
  
     return (
          <>
               <div className="container mt-5 checkout">
                    <div className="row mt-10">
                         <h2>Register</h2>

                    </div>
                    <hr />
                    <div className="row mt-50">
                         <div className="col-md-12 order-md-1">
                         
                              <Formik
                                   initialValues={{
                                        name: '',
                                        email: '',
                                        Password: ''
                                   }}
                                   validationSchema={Yup.object().shape({
                                        Name: Yup.string()
                                             .required('Name is required'),
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
                                        if (fields.name == json.name && fields.email == json.email && fields.Password == json.Password) {
                                             alert("YOU ALREADY REGISTERED BEFORE!!!")                                   
                                        }
                                        else {
                                          alert ("REGISTERED")
                                          window.location = "/login";

                                        }

                                   }}
                                   render={({ errors, status, touched }) => (
                                        <Form>
                                             <div className="form-group row">
                                                  <div className="col-md-3"> <label htmlFor="Name">Name *</label></div>
                                                  <div className="col-md-9"> 

                                                   <Field name="Name" type="text"  className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} /></div>
                                                  <ErrorMessage name="Name" component="div" className="invalid-feedback" />
                                             </div>
                                             <div className="form-group row">
                                                  <div className="col-md-3">
                                                       <label htmlFor="email">Email *</label>
                                                  </div>
                                                  <div className="col-md-9">
                                                       <Field name="email" type="text"  className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} /></div>
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
                                             <div className="form-group mt-5">
                                                  <button type="submit" className="btn btn-primary mr-2">Register</button>
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
export default Register;
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
const Checkout = () => {
     const state = useSelector((state) => state.addItems);
     const [value, setValue] = useState();
     var total = 0;
     const itemList = (item) => {
          total = total + item.price;
          return (

               <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                         <h6 className="my-0">{item.title}</h6>
                    </div>
                    <span className="text-muted">${item.price}</span>
               </li>
          );
     }
     return (
          <>
               <div className="container mt-5 checkout">
                    <div className="row mt-10">
                         <h2>Checkout</h2>

                    </div>
                    <hr />
                    <div className="row">
                         <div className="col-md-4 order-md-2 mb-4">
                              <h4 className="d-flex justify-content-between align-items-center mb-3">
                                   <span className="text-muted">Your cart</span>
                                   <Badge className="badge badge-secondary badge-pill">

                                        {state.length}
                                   </Badge>

                              </h4>
                              <ul className="list-group mb-3">
                                   {state.map(itemList)}

                                   <li className="list-group-item d-flex justify-content-between">
                                        <span>Total (USD)</span>
                                        <strong>${total}</strong>
                                   </li>
                              </ul>
                         </div>
                         <div className="col-md-8 order-md-1">
                              <h4 className="mb-3">Billing address</h4>
                              <Formik
                                   initialValues={{
                                        Address: '',
                                        email: '',
                                        PhoneNumber: ''
                                   }}
                                   validationSchema={Yup.object().shape({
                                        Address: Yup.string()
                                             .required('Address is required'),
                                        email: Yup.string()
                                             .email('Email is invalid')
                                             .required('Email is required'),
                                        PhoneNumber: Yup.string()
                                             .min(6, 'Password must be at least 6 characters')
                                             .required('Password is required')
                                   })}
                                   onSubmit={fields => {
                                        alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                                   }}
                                   render={({ errors, status, touched }) => (
                                        <Form>
                                             <div className="form-group row">
                                                  <div className="col-md-3"> <label htmlFor="Address">Address *</label></div>
                                                  <div className="col-md-9">  <Field name="Address" type="text" className={'form-control' + (errors.Address && touched.Address ? ' is-invalid' : '')} /></div>
                                                  <ErrorMessage name="Address" component="div" className="invalid-feedback" />
                                             </div>
                                             <div className="form-group row">
                                                  <div className="col-md-3">
                                                       <label htmlFor="email">Email *</label>
                                                  </div>
                                                  <div className="col-md-9">
                                                       <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} /></div>
                                                  <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                             </div>
                                             <div className="form-group row">
                                             <div className="col-md-3">
                                                     <label htmlFor="confirmPassword"> PhoneNumber</label>
                                                     </div>
                                                  <div className="col-md-9">   <PhoneInput
                                                       placeholder="Enter phone number"
                                                       value={value}
                                                       onChange={setValue} />
                                                       <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                                                  </div>
                                             </div>
                                             <div className="form-group mt-5">
                                                  <button type="submit" className="btn btn-primary mr-2">Submit Form</button>
                                                  <button type="reset" className="btn btn-secondary">Reset</button>
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
export default Checkout;
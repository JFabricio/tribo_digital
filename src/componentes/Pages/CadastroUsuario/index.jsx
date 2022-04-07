import React from "react";
import { Formik,Form,Field,ErrorMessage } from "formik";
import { Link } from "react-router-dom";

import "./index.css"


export default () =>

<div className="FormularioCadastro">
    <div class="container">
        <h3 class="logo">TRIBO DIGITAL</h3>
        <nav>
            <Link to="/">HOME</Link>  
        </nav>
    </div>
<hr id="linha-top"/>

    <div>
        <Formik initialValues={{}} onSubmit={{}} validationSchema={{}}> 
        <Form className="form-cadastro" onSubmit={{}}>

        <div class="form-body">
        <div class="row">
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <h3>Register Today</h3>
                        <p>Fill in the data below.</p>
                        <form class="requires-validation" novalidate>

                            <div class="col-md-12">
                               <input class="form-control" type="text" name="name" placeholder="Full Name" required/>
                
                            </div>

                            <div class="col-md-12">
                                <input class="form-control" type="email" name="email" placeholder="E-mail Address" required/>
                
                            </div>

                           <div class="col-md-12">
                                <select class="form-select mt-3" required>
                                      <option selected disabled value="">Position</option>
                                      <option value="jweb">Junior Web Developer</option>
                                      <option value="sweb">Senior Web Developer</option>
                                      <option value="pmanager">Project Manager</option>
                               </select>
                                
                           </div>


                           <div class="col-md-12">
                              <input class="form-control" type="password" name="password" placeholder="Password" required/>
                               
                           </div>

<br />
                           <div class="col-md-12 mt-3">
                            <label class="mb-3 mr-1" for="gender">Gender: </label>

                            <input type="radio" class="btn-check" name="gender" id="male" autocomplete="off" required/>
                            <label class="btn btn-sm btn-outline-secondary" for="male">Male</label>

                            <input type="radio" class="btn-check" name="gender" id="female" autocomplete="off" required/>
                            <label class="btn btn-sm btn-outline-secondary" for="female">Female</label>

                            <input type="radio" class="btn-check" name="gender" id="secret" autocomplete="off" required/>
                            <label class="btn btn-sm btn-outline-secondary" for="secret">Secret</label>
                             
                            </div>
<br />
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                          <label class="form-check-label">I confirm that all data are correct</label>
                         
                        </div>
                  
<br />
                            <div class="form-button mt-3">
                                <button id="submit" type="submit" class="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


        </Form>
        </Formik>

    </div>

</div>

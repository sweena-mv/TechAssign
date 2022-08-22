import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import ColorfulText from '../inc/ColorfulText';
import ColorRedText from '../inc/ColorRedText';



export default function FormValidation() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div>
 <section className="py-5 f2fefe">
           
           <div className="container f2fefe">
           <div className="row">
               
           <div className="col-md-7 mb-20 white">
            <br/><br/>
           <h1>Make Money <p/> driving with Bolt</h1>
           <p/>
               <p>
               Become a  bolt driver, set your schedule and earn some extra money by driving!
               </p>
              
               
              <div class="accordion" className='phwidth1'    id="accordionExample">
<div class="accordion-item" className='phwidth1' >
    <h2 class="accordion-header" className='phwidth1'   id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
      data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       LEARN MORE @
      </button>
     

    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" className='phwidth1' aria-labelledby="headingTwo" 
    data-bs-parent="#accordionExample">
      <div class="accordion-body">
       
      </div>
    </div>
  </div>
           </div>

           </div>

           <div className="col-md-5">
                <div className="card shadow">
                <div className="card-body" py-3>
                <h4>Become a bolt driver</h4>
                <p>
                If you  have multiple cars or drivers &nbsp;
               <ColorfulText>sign up as a fleet owner</ColorfulText>
                 
                </p>

            <Form onSubmit={handleSubmit(onSubmit)}>
                
                <Form.Field>
                <b>Email</b>
                
                        <input
                        placeholder='Email' class="form-control mb-3"
                        type="Enter your email"
                        {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                    />
                </Form.Field>

                {errors.email && <p><ColorRedText>Email is required</ColorRedText></p>}

                <Form.Field>
                <b>Phone number</b>
                   
 <div class="input-group mb-1">
                    <select class="form-select mb-3" aria-label="Default select example" >
                    <option selected>+372</option>
                    <option value="+372">+372</option>
                    <option value="+372">+372</option>
                    <option value="+372">+372</option>
                    
                    </select>

                    <input
                        placeholder='Phone' class="form-control mb-3"
                        type="text"
                        {...register("phonenumber", { required: true, maxLength: 10 })}
                    />
                
                   </div>

                </Form.Field>
                {errors.phonenumber && <p><ColorRedText>Phone is required</ColorRedText></p>}

                <b>City</b>
                    <select class="form-select mb-3" aria-label="Default select example">
                    <option selected>Tallinn</option>
                    <option value="Kuressare">Kuressare</option>
                    <option value="Narve">Narve</option>
                    <option value="Parnu">Parnu</option>
                    <option value="Poltsamaa">Poltsamaa</option>
                    <option value="Kakvere">Kakvere</option>
                    <option value="Silamae">Silamae</option>
                    <option value="Tallinn">Tallinn</option>
                    </select>

                    <div class="input-group mb-3 bgwhite border-0">
  <div class="input-group-text bgwhite border-0">
    <input class="form-check-input mt-0 input-error" type="checkbox" value=""  placeholder="chbox"
    aria-label="Checkbox for following text input"
    {...register("chbox", { required: true, maxLength: 10 })}
    />
</div> 
  <label class="form-control border-0 fontsize12" for="">I agree to Bolt's &nbsp;
   <ColorfulText>Terms of Service</ColorfulText> and &nbsp;<ColorfulText>Privacy Policy</ColorfulText>
  </label>
  
</div>





                    
                    <button type="submit"
                     class="btn btn-primary rounded-pill w-100 btngreen border-0">
                        Sign up as  a Driver</button>

               
            </Form>
            </div>
                </div>
                </div>
            </div>
            </div>
            </section>
        </div>
    )
}
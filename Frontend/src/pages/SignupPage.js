import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const SignupPage = () => {
    const[fname,setFname]=useState('null')
    const[lname,setLname]=useState('null')
    const[password,setPassword]=useState('null')
    const[phone,setPhone]=useState('null')

    const signup = async ()=>{
   
      const data=new FormData()
      data.append("fname",fname)
      data.append("lname",lname)
      data.append("phone",phone)
      data.append("password",password) 
      const response=await axios.get("http://localhost:3009/signup?fname="+fname+"&lname="+lname+"&phone="+phone+"&password="+password)    
      if(response){
      
        if(response.data.status==='success')
          {
            //alert("Now You can Log in")
           window.location.replace("/home")
          // localStorage.setItem("user_id","1")
            console.log(response)       
      }
      else{
        alert(response.data.alerting)
      }
    }
  };

  return (<Design><div className='bg w-100'><div className="bg-transparent col-4 mx-auto p-3 m-2">
            <center><h4>Signin</h4></center>
            <form>
              <input onChange={(event)=>{setFname(event.target.value)}} className="in rounded form-cotrol mt-3 w-100" name='fname' placeholder='First Name' type='text' required/>
              <input onChange={(event)=>{setLname(event.target.value)}} className="in rounded form-cotrol mt-3 w-100" name='lname' placeholder='Last Name' type='text' required/>
              <input onChange={(event)=>{setPhone(event.target.value)}} className="in rounded form-cotrol mt-3 w-100" name='phone' placeholder='+91|' type='tel' required/>
              <input onChange={(event)=>{setPassword(event.target.value)}} className="in rounded form-cotrol mt-3 w-100" name='password' placeholder='Password' type='password' required/>
              <button onClick={()=>{signup()}} class="btn btn-warning w-100 mt-3" type="submit">Signin</button>
            </form>
            <p className='mt-4'>Already have an account? <Link to='/login'>Login</Link></p>
          </div></div></Design>);
};
export default SignupPage;

const Design = styled.div`
.bg{
  height: 450px;
  background-color: transparent;
  background-image: url("https://support.mamaearth.in/hc/theming_assets/01HZQ05NBPJANP50ZC3BQ8G6YC");
}
`
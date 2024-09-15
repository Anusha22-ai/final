import React from 'react'
import { useState } from "react";
import axios from "axios";
import styled from 'styled-components'

    const LoginPage = () => {
    const[password,setPassword]=useState(null)
    const[phone,setPhone]=useState(null)

    /*function CreateAccount(){
        console.log("password"+password)
        console.log("phone_number"+phone)
    }CreateAccount()

    const CreateAccounts=async()=>{
      const data=new FormData()
      data.append("password",password)
      data.append("phone_number",phone)
      const response=await axios.post("http://localhost:3008/login",data,{header:{"content-type":"multipart/form-data"}})
      if(response){
        if(response.data.status==="success"){
          alert("Account Created")
        }
        else{
          alert("Account creation failed")
        }
      }
    }*/

      const login = async ()=>{
   
        const data=new FormData()
        
        data.append("phone",phone)
        data.append("password",password)
      
        const response=await axios.get("http://localhost:3009/login1?phone="+phone+"&password="+password,data)
      
        if(response){
        
          if(response.data.status==='success')
            {
              console.log(response.data.data)
              window.location.replace("/home")
              }
        else{
          window.alert("you have to signup first/Invalid Credentials")
        }
      }
    }

  return (
    <Design><div className='bg w-100'><div className="bg-transparent col-4 mx-auto p-3 m-2">
    <center><h4>Login</h4></center>
      <input onChange={(event)=>{setPhone(event.target.value)}} className="in rounded form-cotrol mt-3 w-100" name='phone' placeholder='+91|' type='tel' required/>
      <input onChange={(event)=>{setPassword(event.target.value)}} className="in rounded form-cotrol mt-3 w-100" name='password' placeholder='Password' type='password' required/>
      <button class="btn btn-warning w-100 mt-3" onClick={()=>login()}>Login</button>
    </div>
     </div></Design>
  )
}

export default LoginPage;



const Design = styled.div`
.bg{
  height: 450px;
  background-color: transparent;
  background-image: url("https://support.mamaearth.in/hc/theming_assets/01HZQ05NBPJANP50ZC3BQ8G6YC");
}
`
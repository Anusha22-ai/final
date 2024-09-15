import React, { useState } from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import styled from 'styled-components';



const Header = () => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

return(

<Design>


<div>
    <div className='header text-white'>
      <div className='header-space d-flex mx-auto pt-1'>
      <p>Asia's 1sr Brand with MADE SAFE Certified Products</p>
      <p>Shop for Rs.799 and Get Flat Rs.400 Cashback | SHOP NOW</p>
      <div><PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon></div>
    </div>
    </div>
      <div className='first-header mx-auto d-flex mt-3'>
         <img className='logo' src="https://images.mamaearth.in/wysiwyg/mamaearth-logo.png?format=auto&fit=scale"></img>
         <div class="search form-control d-flex bg-white col-4 rounded rounded-end-0">
          <div><SearchOutlinedIcon></SearchOutlinedIcon></div>
            <input placeholder="Search" className='form-control border-0'></input>
          </div>
          <div class="d-flex w-25 h-75">
              <button className='btn btn-primary rounded rounded-start-0'>Search</button>     
            </div>
          <a href='/offers'><img className='logo me-5' src="https://images.mamaearth.in/svg/gi-home-button.svg"></img></a>
          <div className='d-flex ms-3 me-5'>
            <div><ShoppingCartOutlinedIcon sx={{color:'blue'}}></ShoppingCartOutlinedIcon></div>
            <p>Cart</p>
          </div>
          <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>
            <a href="/login"><p className='text-black text-decoration-none'>Login</p></a>
      </div>
      <hr className='mb-0'></hr>
      <div className='second-header d-flex justify-content-between mx-auto'>
        <a href="/home" className='text-dark text-decoration-none'><p>HOME</p></a>
        <a href="/face-page" className='text-dark text-decoration-none'><p>FACE</p></a>
        <a href="/hair-page" className='text-dark text-decoration-none'><p>HAIR</p></a>
        <a href="/makeup" className='text-dark text-decoration-none'><p>MAKEUP</p></a>
        <a href="/body-page" className='text-dark text-decoration-none'><p>BODY</p></a>
        <a href="/baby-page" className='text-dark text-decoration-none'><p>BABY</p></a>
        <a href="/combos" className='text-dark text-decoration-none'><p>COMBOS</p></a>
        <a href="/new-launches" className='text-dark text-decoration-none'><p>NEW LAUNCHES</p></a>
        <a href="/best-seller" className='text-dark text-decoration-none'><p>INGREDIENT</p></a>
        <a href="/all-products" className='text-dark text-decoration-none'><p>ALL PRODUCTS</p></a>
        <p>BLOG</p>
        <p>PLANT GOODNESS</p>
        <p>STORE LOCATOR</p>

      </div>

      </div>  
  

</Design>

)
}

export default Header


const Design = styled.div`

.link{
background-color:transparent;
color:black;
border:0px;
}

.footer{
    height: 950px;
    width: 75%;
}
.case{
    height: 37px;
    width: 50px;
}
.first-footer-left{
    justify-content:center;
    text-align:center;
    width: 100%;
    p{
        font-size: small;
    }
}
.ffl-right{
    width: 50%;
}
.ffl-left{
    width: 50%;
}
.first-footer-right{
    text-align: center;
    p{
        color:rgb(0,175,239);
        border: 1px solid rgb(1, 168, 230);
        width: 30%;
        font-size: larger;
        font-family: Bold;
    }
}
.third-footer{
    width: 90%;
}
.header{
    background-color: rgb(240, 68, 56);
    height: 32px;
}
.header-space{
    width: 95%;
    justify-content: space-between;
}
.first-header{
    height: 50px;
    width: 90%;
    justify-content: space-evenly;
}
.second-header{
    height: 35px;
    width: 90%;
    p{
        font-size: small;
    }
}
.logo{
    width:150px;
    height:33px;
}
.search{
    margin-left:40px;
    width: 40%;
    height:38px;
}
.security{
    height: 20px;
}
.edition{
    width: 150px;
}
.online{
    padding-left:320px;
}
.store{
    padding-left: 335px;
}
.app{
    width: 20%;
}
.fourth-footer img{
    height: 23px;
}
.fifth-footer{
   p{
    text-align: center;
   }
}
.final{
    p,h4,h3{
        padding-left: 70px;
        padding-right: 70px;
    }
    padding-top: 45px;
    height: 1000px;
    background-color: rgb(242, 242, 242);
}
.contact-body{
    height: 350px;
    text-align: center;
}
.content-search{
    text-align: center;
    height: 20px;
}
.contact-box{
    width: 85%;
    h6{
        text-align: center;
    }
}
.bg{
    height: 350px;
    background-color: black;
    background-image: url("https://support.mamaearth.in/hc/theming_assets/01HZQ05NBPJANP50ZC3BQ8G6YC");
}
.box{
    margin-left: 20px;
    margin-right: auto;
    border-radius: 10px;
    border-color: 1px rgba(0, 174, 239, 1);
    color: rgba(0, 174, 239, 1);
}
.recent{
    width: 90%;
}
.act{
    text-align: center;
}
.left{
    width: 30%;
}
.middle{
    width: 40%;
}
.right{
    width: 30%;
}

`
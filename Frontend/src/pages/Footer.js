import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Footer = () => {
  
  return (
  <Design>
    <div>
    <div className='footer mx-auto border pt-5'>
    <div className='first-footer mx-auto d-flex'> 

      <div className='first-footer-left d-flex pt-3'>
        
        <div className='ffl-left border-end'>
          <img className='case' src='https://images.mamaearth.in/wysiwyg/delivery2x.png'></img>
          <h6 className='pt-3'>Free Shipping</h6>
          <p className='text-secondary'>On Orders Above Rs. 399</p>
        </div>
      
        <div className='ffl-right'>
          <img className='case' src='https://images.mamaearth.in/wysiwyg/Group_81512x.png'></img>
          <h6 className='pt-3'>COD Available</h6>
          <p className='text-secondary'>@ Rs. 40 Per Order</p>
        </div>
        
      </div>

      <div className='first-footer-right w-100 m-5'>
        <h5>Have Queries or Concerns?</h5>
        <button class="border-0">
        <Link to={"/contact"}>
        <h6 className='p-2 mx-auto'>CONTACT US</h6>
        </Link>
        </button>

      </div>

    </div>
    <hr className='m-0'></hr>
    <div className='second-footer ps-5 pt-3'>
    <div className='d-flex'>
      <h6>PAYMENT</h6>
    </div>
    <div className='d-flex'>
      <img className='security' src="https://images.mamaearth.in/wysiwyg/noun_trusted_27146262x_6Ekja92.png"></img>
      <p>100% Payment Protection, Easy Return Policy</p>
    </div>
    <div>
      <img src="https://images.mamaearth.in/png/web-payments.png"></img>
    </div>
    </div>
    <hr></hr>

    <div className='third-footer d-flex justify-content-between p-2 mx-auto'>

      <div>
        <h6>USEFUL LINKS</h6>
        <p>Privacy Policy</p>
        <p>Returns</p>
        <p>Terms & Conditions</p>
        <p>Terms & Conditions- Cashback</p>
        <p>We're Safe</p>
        <p>Track Order</p>
        <p>Contact Us</p>
        <p>Sitemap</p>
        <p>About Us</p>
      </div>

      <div>
        <h6>CATEGORIES</h6>
        <p>Baby</p>
        <p>Beauty</p>
        <p>Hair</p>
        <p>Face</p>
        <p>Body</p>
        <p>Makeup</p>
        <p>Ingredient</p>
        <p>Gift Pack</p>
      </div>

      <div>
        <h6>MY ACCOUNT</h6>
        <p>Account</p>
        <p>Orders</p>
        <p>Address</p>
      </div>

      <div>
        <img className='edition' src="https://images.mamaearth.in/wysiwyg/Best-Brand500x5002x.png"></img>
      </div>

    </div>
    <hr></hr>

    <div className='fourth-footer'>
    <div className='online mb-4'>
      <img className='pe-4' src="https://images.mamaearth.in/svg/facebook-gray.svg"></img>
      <img className='pe-4' src="https://images.mamaearth.in/svg/twitter.svg"></img>
      <img className='pe-4' src="https://images.mamaearth.in/svg/insta.svg"></img>
      <img className='pe-4' src="https://images.mamaearth.in/svg/Youtube.svg"></img>
      <img className='pe-4' src="https://images.mamaearth.in/svg/linkedin.svg"></img>
      <img className='pe-4' src="https://images.mamaearth.in/svg/pinterest.svg"></img>
      <img className='pe-4' src="https://images.mamaearth.in/svg/mail.svg"></img>
    </div>

    <div class="store">
      <img className='app' src="https://images.mamaearth.in/wysiwyg/PLAYSTORE18Apr.png"></img>
      <img className='app' src="https://images.mamaearth.in/wysiwyg/APPSTORE18Apr.png"></img>
    </div>
    </div>
    <hr></hr>

    <div  className='fifth-footer'>
      <p>© 2024 Honasa Consumer Limited. All Rights Reserved</p>
    </div>

    </div>


    <div className='final'>
      <h3 className='pb-3'>Get your hands on Nature-Inspired Mamaearth Products </h3>
      <p>Mamaearth is one of the most trustworthy brands in India.Mamaearth natural Skin, Hair, Body, Baby and Makeup products in India. Shop for 599 or more and Get Flat 20% Off +5% Prepaid Off with Code: SAVE25. It offers the best-in-class skincare products to help you discover the essence of beauty with the Goodness of Nature. We are also Asia’s first brand to be accoladed with Made Safe Certification for our beauty products. Mamaearth products are made using safe, pure, gentle, natural, and toxin-free ingredients. We work with skincare experts to make the best natural skin care products for men and women to offer you the best skincare experience.</p>
      <p>We are a brand by the parents and for the parents because we offer safe and gentle baby skin care products through world-class research to solve every little problem of parents. To make Mama product that are especially mum-friendly, we curate our toxic free, harmful chemical-free, paraben-free products with utmost care and precision. We are your one-stop shop for beauty, skin, hair, and baby care needs. Explore Mamaearth official website and choose from an array of products for your beauty care regimen. Mamaearth online shopping store offers you complete convenience. You can view your favorite picks in one place at Mamaearth Honasa website. Our user-friendly interface will guide you through the product information to make the best buying decisions. Buy now!</p>
      <h4 className='pb-3 pt-2'>Download Mamaearth App for iOS and Android today!</h4>
      <p>We welcome you to download our all-new Mamaearth app for your iPhone or Android smartphone. It offers you the best online shopping experience so you could place your order from the comfort of your home.</p>
      <p>Our app features bank-grade security for safe and instant payment gateways. All you thus need to make an order with us is to select the product(s) of your choice, add them to cart, input your address, and make a successful payment- and we will take it up from there.</p>
      <p>Download Mamaearth App Now for Android and iOS. Visit Honasa Consumer Ltd website to know more.</p>
    </div>


  </div>
  </Design>)
}


export default Footer


const Design = styled.div`

.footer{
    height: 1000px;
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
    width: 40%;
    height:35px;
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
    height: 600px;
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



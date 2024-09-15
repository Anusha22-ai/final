import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import styled from 'styled-components';

const OfferPage = () => {
  return (<Design>
    <div class="offer-page">
 <div>
        <img class="offer" src="https://honasa-strapi-production.s3.ap-south-1.amazonaws.com/Goodness_Insider_Landing_Page_Banner_Web_26_July_2022_3c94fa5d9f.jpg"></img>
    </div>

    <div class="grey-box border mt-4 p-5">
       
        <div class="text">
        <h4>Exciting Offers Exclusively for Goodness Insiders</h4>
        </div>
    
         <div class="d-flex">
          <div class=" picture m-3">  
        <img class="gift" src="https://images.mamaearth.in/Goodness_Insider_Guest/Goodness%20Insider_gifts.svg"></img>
        <h4>2 Free Gifts</h4>
        <h6>On every order get 2</h6>
        <h6>sweet surprises</h6>
        </div>
        

        <div class=" picture m-3">  
        <img class="bus" src="https://images.mamaearth.in/Goodness_Insider_Guest/Goodness%20Insider_Shipping_25_July_2022.svg"></img>
        <h4>Free Shipping</h4>
        <h6>No minimum purchase</h6>
        <h6> needed. We’re serious</h6>
        </div>
         

        <div class=" picture m-3 p-3">  
        <img class="discount" src="https://images.mamaearth.in/Goodness_Insider_Guest/Goodness_Insider_Offers_25_July_2022.svg"></img>
        <h4>Exclusive Access to Sale</h4>
        <h6>Special Sale Days only for you</h6>
        
        </div>
         </div>
         </div>

         
              <div class="d-flex">
          <div class="box9 mt-4 border">
            <h3>3 Months</h3>
            <h1>₹99 <strike>₹149</strike></h1>
            <h3>₹33/month</h3>
            <div class="box10 border">
              <h4>Buy Now</h4>
              </div>           
            
          </div>


          
          <div class="box11 mt-4 border">
            <h3>6 Months</h3>
            <h1>₹149 <strike>₹299</strike></h1>
            <h3>₹24/month</h3>
            <div class="box12 border">
             <h4>Buy Now</h4>
          </div>
          </div>
          


  <div class="d-flex">
          <div class="box13 mt-4 border">
            <h3>3 Months</h3>
            <h1>₹99 <strike>₹149</strike></h1>
            <h3>₹33/month</h3>
            <div class="box14 border">
              <h4>Buy Now</h4>
              </div>           
            </div>
          </div>
          </div>

       <div class="heading m-2 ">
          <h2 class="p-5">How to avail Goodness Insider Benefits?</h2>
             </div>


             <div class="green d-flex">
             <img class="g1" src="https://images.mamaearth.in/Goodness_Insider_Guest/Goodness_Insider_Use1_25_July_2022.svg"></img>
             <img class="g2" src="https://images.mamaearth.in/Goodness_Insider_Guest/Goodness_Insider_Use2_25_Juy_2022.svg"></img>
             <img class="g3" src="https://images.mamaearth.in/Goodness_Insider_Guest/Goodness_Insider_Use3_25_July_2022.svg"></img>
             </div>


             <div class="category2 border">
              <div class="d-flex m-5">
              <img class="3" src="https://images.mamaearth.in/Goodness_Insider_Guest/Goodness_Insider_Landing_Terms_25_July_2022.svg"></img>
               <h2 class="m-2">Terms & Conditions</h2>
               </div>
               <div class="points pt-1 d-flex">
               <div><FiberManualRecordIcon className='dot'></FiberManualRecordIcon></div>
               <h5>All the amazing Goodness Insider benefits can be availed on both Mamaearth App and Website.</h5>
               </div><div class="points pt-1 d-flex">
               <div><FiberManualRecordIcon className='dot'></FiberManualRecordIcon></div>
               <h5>As a Goodness Insider, you don’t have to pay any shipping or delivery charges.</h5></div>
               <div class="points pt-1 d-flex">
               <div><FiberManualRecordIcon className='dot'></FiberManualRecordIcon></div>
               <h5>Your Goodness Insider benefits can be clubbed with other coupon codes except for lightning deals.</h5></div>
               <div class="points pt-1 d-flex">
               <div><FiberManualRecordIcon className='dot'></FiberManualRecordIcon></div>
               <h5>We have two new travel size free gifts for you every week! To know more, you can check out the ‘My Accounts’ section</h5></div>
               <div class="points pt-1 d-flex">
               <div><FiberManualRecordIcon className='dot'></FiberManualRecordIcon></div>
               <h5>The two free travel size gifts will be added to your cart directly but can be changed from pre-defined SKUs.</h5></div>
               <div class="points pt-1 d-flex">
               <div><FiberManualRecordIcon className='dot'></FiberManualRecordIcon></div>
               <h5>Your Goodness Insider membership can’t be refunded once purchased.</h5></div>
             </div>
             
    </div>
  </Design>)
}

export default OfferPage


const Design = styled.div`
.offer-page{
  width: 100%;
}

.offer{
    width:90%;
    margin-left: 150px;
    margin-right: 150px;
    margin-top: 30px;
    height: 500px;
  }
  .grey-box{
    width:90%;
    height:350px;
    border-radius: 20px;
    background-color:rgb(230,232,231);
    margin-left: 150px;
  }
  .text{
    text-align: center;
  }
  
  .gift{
    width:100px;
  }
  .picture{
    width:30%;
    text-align: center;
    height:200px;
  }
  
  
  .box9{
    height:250px;
    width:300px;
    text-align: center;
    padding-top: 30px;
   border-radius: 20px;
    margin-left: 250px;
   
  }
  .box10{
    height:80px;
    width: 300px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color:rgb(88, 217, 239);
    padding-top: 15px;
  }
  .box11{
    height: 300px;
    width:300px;
    text-align: center;
    padding-top: 40px;
    border-radius: 20px;
     margin-left: 130px;
     

  }
  .box12{
    height:100px;
    width: 300px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-top: 60px;
    background-color:rgb(88, 217, 239);
    color:white;
    padding-top: 30px;
  }
  .box13{
    margin-left: 100px;
    height:250px;
    width:300px;
    text-align: center;
    padding-top: 30px;
   border-radius: 20px;
   margin-left: 130px;
  

  }
  .box14{
    height:80px;
    width: 300px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color:rgb(88, 217, 239);
    padding-top: 15px;
  }
  .line{
    padding-top: 10px;
  }
  .heading{
    text-align:center;
    padding-top: 50px;
    margin-left: 20px;
  }
  .g1{
    
     margin-top:50px;
     margin-left:220px;
     }
     .g2{
      margin-top:50px;
      margin-left: 100px;
     }
     .g3{
      margin-top:50px;
      margin-left: 100px;
     }
     .category2{
      width:90%;
    margin-left: 150px;
    margin-right: 150px;
    margin-top: 100px;
    height: 400px;
     }
     .points{
      margin-left: 50px;
      padding-top: 40px;
     }
`
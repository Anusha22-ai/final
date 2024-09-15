import styled from "styled-components";
function CartPage(){
    return(
    <Design>

       <div class="navbar shadow d-flex ">
        <div class="left">
        <img class="logo w-25" src="https://images.mamaearth.in/wysiwyg/mamaearth-logo.png?format=auto&fit=scale"></img>
        </div>
        <div class="right d-flex ">
        <p class="text-primary me-5">Cart</p>
        <div class="d-flex dot">
            <div class="box border">

            </div>
           <hr class="hr"></hr>
            <div class="box border">

            </div>
        </div>
        <h6 class="ms-5 me-5 ">Address</h6>
        <div class="d-flex dot">
            <div class="box border">

            </div>
           <hr class="hr"></hr>
            <div class="box border">

            </div>
        </div>
        <h6 class="ms-5 me-5">Payment</h6>
        </div>

        <div class="main-content">
            
            <img class="bag" src="https://images.mamaearth.in/wysiwyg/bags2x.png?format=auto&fit=scale"></img>
            <h4 class="bag1 mt-0">Your Cart is Empty !</h4>
            <p class="  mt-2 bag1">It's a good day to buy the items</p>
            <button class="btn btn-primary bag mt-1">SHOP NOW</button>
            
        </div>

        
    </div>
    </Design>)
}
export default CartPage;


const Design = styled.div`

.navbar{
    margin: 0px;
    padding: 0px;
    width:100%;
    height: 75px;
  
}
.left{
    width: 40%;
    justify-content: center;
   
    
}
.right{
    width:60%;
    margin-top: 20px;
   
   
}
.bag {
   margin-left: 600px;
   margin-top: 50px;
    width: 20%;
    margin-right: 600px;

}
.bag1{
    margin-left: 625px;
}
.box{
    height: 10px;
    width:10px;
    border-radius: 30px;
    
}
.hr{
    width:100px;
}
.dot{
    align-items: center;
   

}

`
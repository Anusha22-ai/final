import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import styled from 'styled-components'
import '../css/custom.css';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const DetailsPage = () => {
  return (<Design>
    <div>

        <div className='category mx-auto d-flex'>
            <div className='left border'>
            <Carousel> 

                <CarouselItem>
                <img className="pic" src="https://images.mamaearth.in/catalog/product/r/i/rice-fw-1.jpg?format=auto&height=600"></img>
                </CarouselItem>

                <CarouselItem>
                <img className="pic" src="https://images.mamaearth.in/catalog/product/r/i/rice-face-wash_1.jpg?format=auto&height=600"></img>
                </CarouselItem>

                <CarouselItem>
                <img className="pic" src="https://images.mamaearth.in/catalog/product/r/i/rice-fw-2.jpg?format=auto&height=600"></img>
                </CarouselItem>

                <CarouselItem>
                <img className="pic" src="https://images.mamaearth.in/catalog/product/r/i/rice-fw-3.jpg?format=auto&height=600"></img>
                </CarouselItem>

                <CarouselItem>
                <img className="pic" src="https://images.mamaearth.in/catalog/product/r/i/rice-fw-4.jpg?format=auto&height=600"></img>
                </CarouselItem>

                <CarouselItem>
                <img className="pic" src="https://images.mamaearth.in/catalog/product/r/i/rice-fw-5.jpg?format=auto&height=600"></img>
                </CarouselItem>

                <CarouselItem>
                <img className="pic" src="https://images.mamaearth.in/catalog/product/p/r/promises_13_2.jpeg?format=auto&height=600"></img>
                </CarouselItem>

                <CarouselItem>
                <img className="pic" src="https://images.mamaearth.in/catalog/product/r/i/rice-face-wash.jpg?format=auto&height=600"></img>
                </CarouselItem>

            </Carousel>

            </div>
            
            <div className='right border ps-3'>
                <div className='d-flex'>
                    <p className='text-primary'><Link to="/">Home</Link></p><div><KeyboardArrowRightOutlinedIcon></KeyboardArrowRightOutlinedIcon></div>
                    <p className='text-primary'>Face-Wash</p><div><KeyboardArrowRightOutlinedIcon></KeyboardArrowRightOutlinedIcon></div>
                    <p>Rice Face Wash With Rice Water & Niacinamide for Glass Skin - 100 ml</p>
                </div>
                <h4 className='head'>Rice Face Wash With Rice Water & Niacinamide for Glass Skin - 100 ml</h4>
                <div>
                    <p className='grey'>Gently Cleanses Skin | Hydrates Skin</p>
                </div>
                <div className='division d-flex'>


                    <div className='right-left'>
                        <div className='d-flex'>
                            <h6 className='pt-1 pe-1'>4.7</h6>
                            <div><StarIcon sx={{color:'rgb(255, 195, 0)'}} fontSize='small' ></StarIcon></div>
                            <p className='text-primary ps-2'>238 reviews</p>
                        </div>
                        <div>
                            <h6 className='text-success'>Special Price</h6>
                        </div>
                        <div className='d-flex'>
                            <h5>₹236.00	</h5>
                            <h6 className='ps-2 pt-1'><strike>₹269</strike></h6>
                            <h5 className='text-danger ps-2'>12% off</h5>
                            <p className='font-size-small ps-2'>Incl. of all taxes</p>
                        </div>
                        <div>
                            <h6 className='sel'>Select Variant</h6>
                        </div>
                        <div className='d-flex'>
                            <div className='box-1'>
                                <div>
                                    <p className='green text-white ps-3 pt-1'>Single</p>
                                    <div className='d-flex'>
                                        <h6 className='ps-2'>₹236.00	</h6>
                                        <p className='rs ps-2'><strike>₹269</strike></p>
                                        <p className='text-danger ps-2'>12% off</p>
                                    </div>  
                                    <div>
                                        <h6 className='text-green ps-2'>₹ 236 / 100 ml</h6>
                                    </div>
                                </div>
                            </div>

                            <div className='box-2'>
                                <div>
                                    <p className='grey-back pt-1 ps-3'>Pack of 2</p>
                                    <div className='d-flex'>
                                        <h6 className='ps-2'>₹388.00	</h6>
                                        <p className='rs ps-2'><strike>₹518</strike></p>
                                        <p className='text-danger ps-2'>25% off</p>
                                    </div>  
                                    <div>
                                        <h6 className='text-green ps-2'>₹ 194 / 100 ml</h6>
                                    </div>
                               </div>

                            </div>

                        </div>
                
                        <img className='circle-img mt-4' src="https://images.mamaearth.in/wysiwyg/goodness-icons.png"></img>

                    </div>


                    <div className='right-right'>

                        <div className='box-3 border'>
                            <div className='d-flex'>
                                <img className='round m-3' src="https://images.mamaearth.in/PDPoffer4Aug.gif"></img>
                                <h5 className='mt-3'>Available Offers</h5>
                            </div>
                            <Carousel>
                                <CarouselItem>
                                    <p>Save upto 35% | Use code REDEEM35</p>
                                </CarouselItem>
                                <CarouselItem>
                                    <p>Get Flat Rs. 400 Cashback | Use code FLAT400</p>
                                </CarouselItem>
                                <CarouselItem>
                                    <p>Flat 10% off  + 5% Prepaid Off | Use code REDEEM15</p>
                                </CarouselItem>
                                <CarouselItem>
                                    <p>Flat 20% off + 5% Prepaid Off | Use code SAVE25</p>
                                </CarouselItem>
                            </Carousel>
                        </div>

                        <div className='box-4 border ps-2'>
                            <div className=''>
                                <h6 className='text-success ps-2 pt-2'>Special Price</h6>
                            </div>
                            <div className='d-flex'>
                                <h5>₹236.00	</h5>
                                <h6 className='ps-2 pt-1'><strike>₹269</strike></h6>
                                <h5 className='text-danger ps-2'>12% off</h5>
                            </div>
                            <div>
                                <p className='incl font-size-small ps-1'>Incl. of all taxes</p>
                            </div>
                            <div className='d-flex'>
                                <p className='pe-1'>4.7</p>
                                <div><StarIcon sx={{color:'rgb(255, 195, 0)'}} fontSize='small' ></StarIcon></div>
                                <p className='text-primary ps-2'>238 reviews</p>
                            </div>
                            <p class="m-0">Single</p>
                            <div className='d-flex'>
                                <p>Quantity:</p>
                                <div className='quantity border d-flex justify-content-between'>
                                    <h5>-</h5>
                                    <h5>1</h5>
                                    <h5>+</h5>
                                </div>
                            </div>
                            <div class="p-0 m-0">
                                <button class="add mt-2 ps-5 pt-3 border rounded bg-primary text-white d-flex">
                                        <ShoppingCartOutlinedIcon sx={{color:'light'}}></ShoppingCartOutlinedIcon>
                                        <p>ADD TO CART</p>
                                </button>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    </div>
    </Design>)
}

export default DetailsPage


const Design = styled.div`

.category{
    width: 90%;
    height: 600px;
}
.left{
    width: 38%;
    height: 360px;
}
.right{
    width: 70%;
}
.pic{
    width: 100%;
}
.grey{
    color: rgb(61, 61, 61);
    font-size: 1.2rem;
}
.head{
    font-size: 20px;
}
.sel{
    color: rgb(112,112,112);
    font-size: large;
}
.box-1{
    border: 2px solid rgb(89,163,14);
    border-radius: 10px;
    width: 40%;
    height: 120px;
}
.green{
    background-color: rgb(89,163,14);
    height: 33px;
}
.rs{
    color:rgb(163,163,163);
}
.text-green{
    color: rgb(89,163,14);
    margin-top: -10px;
}
.box-2{
    border:1px solid grey;
    border-radius: 10px;
    width: 40%;
    height: 120px;
    margin-left: 15px;
}
.grey-back{
    background-color: rgb(244,246,248);
    height: 33px;
}
.circle-img{
    width: 50%;
}
.division{
    width: 100%;
}
.right-left{
    width: 65%;
}
.right-right{
     width: 35%;
}
.box-3{
    height: 140px;
    border-radius: 5px;
    p{
        font-size: medium;
        justify-content: center;
        margin-left: 20px;
    }
}
.round{
    width: 10%;
}
.box-4{
    height: 300px;
}
.quantity{
    width: 35%;
    height: 35px;
    border-radius: 5px;
    margin-left: 10px;
}
.add{
    width: 90%;
    margin-left: 10px;
}

`


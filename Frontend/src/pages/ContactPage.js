import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ContactPage = () => {
  return (
   <Design>
    <div>
        <div className='contact-header h-25 w-75 mx-auto d-flex justify-content-between'>
            <div className='w-25'>
                <img className='logo' src="https://support.mamaearth.in/hc/theming_assets/01HZQ05N4TH4YBHWSHZDMT5FHJ"></img>
            </div>
            <div className='d-flex justify-content-between w-50 text-success'>
               <p>Go to mamaearth website</p>
               <p>Submit a query</p>
               <button className='link border-0'>
                <Link to="/">
                <p className='text-success'>Sign in</p>
                </Link>
               </button>
            </div>
        </div>

        <div className='bg'>
        <div className='contact-body w-100'>
            <h2 className='pt-5'>Welcome! Search, Find and Solve</h2>
            <h2>Effortlessly</h2>
            <div class="contact-search form-control border-1 border-1 d-flex bg-white w-50 mx-auto mt-5 h-25">
            <img class="icon mt-2" src="https://cdn-icons-png.flaticon.com/128/5636/5636698.png"></img>
            <input placeholder="Search" className='border-0 form-control'></input>
        </div>
        </div>

        </div>

        <div className='contact-box mx-auto d-flex justify-content-between m-2'>
            
            <div class='box border col-4 p-4 mt-3 mb-3'>
               <cont> <h6>Track Order</h6> </cont>
            </div>

            <div class='box border col-4 p-4 mt-3 mb-3'>
                <h6>Modify Order</h6>
            </div>
            <div class='box border col-4 p-4 mt-3 mb-3'>
                <h6>Delivery related concern</h6>
            </div>
            

        </div>

        <div className='contact-box mx-auto d-flex justify-content-between m-2'>
            <div class='box border col-4 p-4 mt-3 mb-3'>
                <h6>Cancel Order</h6>
            </div>

            <div class='box border col-4 p-4 mt-3 mb-3'>
                <h6>Payment related</h6>
            </div>

            <div class='box border col-4 p-4 mt-3 mb-3'>
                <h6>Redfund/Cashback related</h6>
            </div>

        </div>

        <div className='contact-box mx-auto d-flex justify-content-between m-2'>
            <div class='box border col-4 p-4 mt-3 mb-3'>
                <h6>Delivered Order Issues</h6>
            </div>

            <div class='box border col-4 p-4 mt-3 mb-3'>
                <h6>Return Order</h6>
            </div>

            <div class='box border col-4 p-4 mt-3 mb-3'>
                <h6>More Help Topics</h6>
            </div>

        </div>

        <div className='recent mx-auto'>
            <h4>Promoted Articles</h4>
            <p className='text-primary'>When will I get the cash back</p>
            <hr></hr>
            <h4 className='act m-4'>Recent activity</h4>
            <div className='recent-activity d-flex'>
                
                <div class="left">

                </div>

                <div class="middle">

                </div>

                <div class="right">

                </div>

            </div>
        </div>

    </div>
   </Design>
  )
}

export default ContactPage


const Design = styled.div`

.link{
background-color:transparent;
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






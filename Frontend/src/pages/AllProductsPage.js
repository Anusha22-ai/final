import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import styled from 'styled-components';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';

const AllProductsPage = () => {
  return (<Design>
    <div className='d-flex'>
        <div className='ps-5 d-flex'>
        <Link to="/Home"><p>Home</p></Link>
        <p> <KeyboardArrowRightIcon></KeyboardArrowRightIcon>All products<KeyboardArrowRightIcon></KeyboardArrowRightIcon>Hair<KeyboardArrowRightIcon></KeyboardArrowRightIcon>Makeup<KeyboardArrowRightIcon></KeyboardArrowRightIcon>Baby<KeyboardArrowRightIcon>Fragnances</KeyboardArrowRightIcon></p></div></div>
        <div><h5 className='center pb-3'>All Products</h5></div>

        <div className='space'>
      <div class="main d-flex">
         <div className='right'>
            <h4 className='pt-3'>Best Sellers</h4><p>Explore best-selling safe, natural, and 100% toxin-free baby and beauty products from Mamaearth. Get amazing deals and start your toxin-free skin, hair, and baby care journey.</p>
         </div>
         <div className='left'>
            <Link to ="/best-seller"><p class="btn btn-primary w-50 ms-4 mt-4">View All</p></Link>
         </div>
      </div>

      <div className='space'>
      <div class="main d-flex">
         <div className='right'>
            <h4 className='pt-3'>Best Sellers</h4><p>Explore best-selling safe, natural, and 100% toxin-free baby and beauty products from Mamaearth. Get amazing deals and start your toxin-free skin, hair, and baby care journey.</p>
         </div>
         <div className='left'>
            <Link to ="/best-seller"><p class="btn btn-primary w-50 ms-4 mt-4">View All</p></Link>
         </div>
      </div>
     
      <div className='category d-flex'>

         <div className='box border rounded'>
         <div className='top'>
               <h6 className='side bg-danger text-white'>Best Sellers</h6>
              <a href="/details"><img className='pic' src="https://images.mamaearth.in/catalog/product/u/b/ubtan-face-wash_1_1_2.jpeg?format=auto&width=400&height=400"></img></a>
         </div>
         <div className='bottom'>
               <h6 class="main-heading">Ubtan Face Wash with Turmeric & Saffron for Tan Removal – 150 ml</h6>
               <p className='text-success p-0 m-0'>Removes Tan | Brightens Skin</p>
               <p className='p-0 m-0'><StarIcon className='text-warning'></StarIcon>4.8</p>
               <p className='text-secondary m-0 p-0'>408 reviews</p>
               <h5>₹399</h5>
               <button className='bg-primary text-light p-2 w-100 border-0 rounded'>ADD TO CART</button>
         </div>
         </div>

         <div className='box border rounded'>
         <div className='top'>
               <h6 className='side bg-danger text-white'>Best Sellers</h6>
               <a href="/details"><img className='pic' src="https://images.mamaearth.in/catalog/product/u/b/ubtan-face-wash_1_1_2.jpeg?format=auto&width=400&height=400"></img></a>
         </div>
         <div className='bottom'>
               <h6 class="main-heading">Ubtan Face Wash with Turmeric & Saffron for Tan Removal – 150 ml</h6>
               <p className='text-success p-0 m-0'>Removes Tan | Brightens Skin</p>
               <p className='p-0 m-0'><StarIcon className='text-warning'></StarIcon>4.8</p>
               <p className='text-secondary m-0 p-0'>408 reviews</p>
               <h5>₹399</h5>
               <button className='bg-primary text-light p-2 w-100 border-0 rounded'>ADD TO CART</button>
         </div>
         </div>

         <div className='box border rounded'>
         <div className='top'>
               <h6 className='side bg-danger text-white'>Best Sellers</h6>
               <a href="/details"><img className='pic' src="https://images.mamaearth.in/catalog/product/u/b/ubtan-face-wash_1_1_2.jpeg?format=auto&width=400&height=400"></img></a>
         </div>
         <div className='bottom'>
               <h6 class="main-heading">Ubtan Face Wash with Turmeric & Saffron for Tan Removal – 150 ml</h6>
               <p className='text-success p-0 m-0'>Removes Tan | Brightens Skin</p>
               <p className='p-0 m-0'><StarIcon className='text-warning'></StarIcon>4.8</p>
               <p className='text-secondary m-0 p-0'>408 reviews</p>
               <h5>₹399</h5>
               <button className='bg-primary text-light p-2 w-100 border-0 rounded'>ADD TO CART</button>
         </div>
         </div>
         

         <div className='box border rounded'>
         <div className='top'>
               <h6 className='side bg-danger text-white'>Best Sellers</h6>
               <a href="/details"><img className='pic' src="https://images.mamaearth.in/catalog/product/u/b/ubtan-face-wash_1_1_2.jpeg?format=auto&width=400&height=400"></img></a>
         </div>
         <div className='bottom'>
               <h6 class="main-heading">Ubtan Face Wash with Turmeric & Saffron for Tan Removal – 150 ml</h6>
               <p className='text-success p-0 m-0'>Removes Tan | Brightens Skin</p>
               <p className='p-0 m-0'><StarIcon className='text-warning'></StarIcon>4.8</p>
               <p className='text-secondary m-0 p-0'>408 reviews</p>
               <h5>₹399</h5>
               <button className='bg-primary text-light p-2 w-100 border-0 rounded'>ADD TO CART</button>
         </div>
         </div>
         
        </div>
  

      <div class="main d-flex">
         <div className='right'>
            <h4 className='pt-3'>Hair Care</h4><p>Explore 100% toxin-free and safe Hair products, formulated with the goodness of natural ingredients and no harmful chemicals.</p>
         </div>
         <div className='left'>
         <Link to ="/hair-page"><p class="btn btn-primary w-50 ms-4 mt-4">View All</p></Link>
         </div>
      </div>

      <div className='category d-flex'>

<div className='box border rounded'>
<div className='top'>
      <h6 className='side bg-success text-white'>Must Try</h6>
      <a href="/details"><img className='pic' src="https://images.mamaearth.in/catalog/product/3/_/3_1.png?format=auto&width=400&height=400"></img></a>
</div>
<div className='bottom'>
      <h6 class="main-heading">Rosemary Hair Growth Oil with Rosemary & Methi Dana – 150 ml</h6>
      <p className='text-success p-0 m-0'>Stimulates Hair Growth | Controls Hair Fall | Strengthens Hair</p>
      <p className='p-0 m-0'><StarIcon className='text-warning'></StarIcon>4.9</p>
      <p className='text-secondary m-0 p-0'>152 reviews</p>
      <h5>₹419</h5>
      <button className='bg-primary text-light p-2 w-100 border-0 rounded'>ADD TO CART</button>
</div>
</div>

<div className='box border rounded'>
<div className='top'>
      <h6 className='side bg-success text-white'>Must Try</h6>
      <a href="/details"><img className='pic' src="https://images.mamaearth.in/catalog/product/3/_/3_1.png?format=auto&width=400&height=400"></img></a>
</div>
<div className='bottom'>
      <h6 class="main-heading">Rosemary Hair Growth Oil with Rosemary & Methi Dana – 150 ml</h6>
      <p className='text-success p-0 m-0'>Stimulates Hair Growth | Controls Hair Fall | Strengthens Hair</p>
      <p className='p-0 m-0'><StarIcon className='text-warning'></StarIcon>4.9</p>
      <p className='text-secondary m-0 p-0'>152 reviews</p>
      <h5>₹419</h5>
      <button className='bg-primary text-light p-2 w-100 border-0 rounded'>ADD TO CART</button>
</div>
</div>

<div className='box border rounded'>
<div className='top'>
      <h6 className='side bg-success text-white'>Must Try</h6>
      <a href="/details"><img className='pic' src="https://images.mamaearth.in/catalog/product/3/_/3_1.png?format=auto&width=400&height=400"></img></a>

</div>
<div className='bottom'>
      <h6 class="main-heading">Rosemary Hair Growth Oil with Rosemary & Methi Dana – 150 ml</h6>
      <p className='text-success p-0 m-0'>Stimulates Hair Growth | Controls Hair Fall | Strengthens Hair</p>
      <p className='p-0 m-0'><StarIcon className='text-warning'></StarIcon>4.9</p>
      <p className='text-secondary m-0 p-0'>152 reviews</p>
      <h5>₹419</h5>
      <button className='bg-primary text-light p-2 w-100 border-0 rounded'>ADD TO CART</button>
</div>
</div>


<div className='box border rounded'>
<div className='top'>
      <h6 className='side bg-success text-white'>Must Try</h6>
       <a href="/details"><img className='pic' src="https://images.mamaearth.in/catalog/product/3/_/3_1.png?format=auto&width=400&height=400"></img></a>
</div>
<div className='bottom'>
      <h6 class="main-heading">Rosemary Hair Growth Oil with Rosemary & Methi Dana – 150 ml</h6>
      <p className='text-success p-0 m-0'>Stimulates Hair Growth | Controls Hair Fall | Strengthens Hair</p>
      <p className='p-0 m-0'><StarIcon className='text-warning'></StarIcon>4.9</p>
      <p className='text-secondary m-0 p-0'>152 reviews</p>
      <h5>₹419</h5>
      <button className='bg-primary text-light p-2 w-100 border-0 rounded'>ADD TO CART</button>
</div>
</div>

</div>

      <div class="main d-flex pt-5">
         <div className='right'>
            <h4>Fragrances</h4><p>Mamaearth Perfume range is the India’s 1st Made Safe Certified perfume and is inspired by both nature and you.</p>
         </div>
         <div className='left'>
         <Link to ="/fragnances"><p class="btn btn-primary w-50 ms-4 mt-4">View All</p></Link>
         </div>
      </div>

      <div className='category d-flex'>

<div className='box border rounded'>
<div className='top'>
      <h6 className='side bg-success text-white'>Best Perfume</h6>
      <a href="/details"><img className='pic' src="https://images.mamaearth.in/catalog/product/1/_/1_fop_white_bg_1.jpg?format=auto&height=600"></img></a>
</div>
<div className='bottom'>
      <h6 class="main-heading">Mamaearth Into the Valley Eau De Parfum For Women - 100 ml</h6>
      <p className='text-success p-0 m-0'>Made Safe Approved | Premium & Long Lasting Fragrance</p>
      <p className='p-0 m-0'><StarIcon className='text-warning'></StarIcon>5.0</p>
      <p className='text-secondary m-0 p-0'>39 reviews</p>
      <h5>₹899</h5>
      <button className='bg-primary text-light p-2 w-100 border-0 rounded'>ADD TO CART</button>
</div>
</div>

<div className='box border rounded'>
<div className='top'>
      <h6 className='side bg-success text-white'>Best Perfume</h6>
      <a href="/details"><img className='pic' src="https://images.mamaearth.in/catalog/product/1/_/1_fop_white_bg_1.jpg?format=auto&height=600"></img></a>
</div>
<div className='bottom'>
      <h6 class="main-heading">Mamaearth Into the Valley Eau De Parfum For Women - 100 ml</h6>
      <p className='text-success p-0 m-0'>Made Safe Approved | Premium & Long Lasting Fragrance</p>
      <p className='p-0 m-0'><StarIcon className='text-warning'></StarIcon>5.0</p>
      <p className='text-secondary m-0 p-0'>39 reviews</p>
      <h5>₹899</h5>
      <button className='bg-primary text-light p-2 w-100 border-0 rounded'>ADD TO CART</button>
</div>
</div>

<div className='box border rounded'>
<div className='top'>
      <h6 className='side bg-success text-white'>Best Perfume</h6>
      <a href="/details"><img className='pic' src="https://images.mamaearth.in/catalog/product/1/_/1_fop_white_bg_1.jpg?format=auto&height=600"></img></a>
</div>
<div className='bottom'>
      <h6 class="main-heading">Mamaearth Into the Valley Eau De Parfum For Women - 100 ml</h6>
      <p className='text-success p-0 m-0'>Made Safe Approved | Premium & Long Lasting Fragrance</p>
      <p className='p-0 m-0'><StarIcon className='text-warning'></StarIcon>5.0</p>
      <p className='text-secondary m-0 p-0'>39 reviews</p>
      <h5>₹899</h5>
      <button className='bg-primary text-light p-2 w-100 border-0 rounded'>ADD TO CART</button>
</div>
</div>


<div className='box border rounded'>
<div className='top'>
      <h6 className='side bg-success text-white'>Best Perfume</h6>
      <a href="/details"><img className='pic' src="https://images.mamaearth.in/catalog/product/1/_/1_fop_white_bg_1.jpg?format=auto&height=600"></img></a>
</div>
<div className='bottom'>
      <h6 class="main-heading">Mamaearth Into the Valley Eau De Parfum For Women - 100 ml</h6>
      <p className='text-success p-0 m-0'>Made Safe Approved | Premium & Long Lasting Fragrance</p>
      <p className='p-0 m-0'><StarIcon className='text-warning'></StarIcon>5.0</p>
      <p className='text-secondary m-0 p-0'>39 reviews</p>
      <h5>₹899</h5>
      <button className='bg-primary text-light p-2 w-100 border-0 rounded'>ADD TO CART</button>
</div>
</div>

</div>

      <div class="main d-flex pt-5">
         <div className='right'>
            <h4 className='pt-3'>Makeup</h4><p>Color with care with our all-new colorcare range that’s 100% toxin-free and formulated with the goodness of natural ingredients. Check out our newly launched products & bring home your new favorites.</p>
         </div>
         <div className='left'>
         <Link to ="/makeup"><p class="btn btn-primary w-50 ms-4 mt-4">View All</p></Link>
         </div>
      </div>

      <div className='category d-flex'>

<div className='box border rounded'>
<div className='top'>
      <h6 className='side bg-danger text-white'>Best Seller</h6>
      <a href="/details"><img className='pic' src="https://images.mamaearth.in/catalog/product/1/_/1_1_.jpg?format=auto&width=400&height=400"></img></a>
</div>
<div className='bottom'>
      <h6 class="main-heading">Charcoal Black Long Stay Kajal with Vitamin C & Chamomile</h6>
      <p className='text-success p-0 m-0'>11-Hour Long Stay | Smudge-Proof | Waterproof</p>
      <p className='p-0 m-0'><StarIcon className='text-warning'></StarIcon>4.8</p>
      <p className='text-secondary m-0 p-0'>235 reviews</p>
      <h5>₹299</h5>
      <button className='bg-primary text-light p-2 w-100 border-0 rounded'>ADD TO CART</button>
</div>
</div>

<div className='box border rounded'>
<div className='top'>
      <h6 className='side bg-danger text-white'>Best Seller</h6>
      <a href="/details"><img className='pic' src="https://images.mamaearth.in/catalog/product/1/_/1_1_.jpg?format=auto&width=400&height=400"></img></a>
</div>
<div className='bottom'>
      <h6 class="main-heading">Charcoal Black Long Stay Kajal with Vitamin C & Chamomile</h6>
      <p className='text-success p-0 m-0'>11-Hour Long Stay | Smudge-Proof | Waterproof</p>
      <p className='p-0 m-0'><StarIcon className='text-warning'></StarIcon>4.8</p>
      <p className='text-secondary m-0 p-0'>235 reviews</p>
      <h5>₹299</h5>
      <button className='bg-primary text-light p-2 w-100 border-0 rounded'>ADD TO CART</button>
</div>
</div>

<div className='box border rounded'>
<div className='top'>
      <h6 className='side bg-danger text-white'>Best Seller</h6>
      <a href="/details"><img className='pic' src="https://images.mamaearth.in/catalog/product/1/_/1_1_.jpg?format=auto&width=400&height=400"></img></a>
</div>
<div className='bottom'>
      <h6 class="main-heading">Charcoal Black Long Stay Kajal with Vitamin C & Chamomile</h6>
      <p className='text-success p-0 m-0'>11-Hour Long Stay | Smudge-Proof | Waterproof</p>
      <p className='p-0 m-0'><StarIcon className='text-warning'></StarIcon>4.8</p>
      <p className='text-secondary m-0 p-0'>235 reviews</p>
      <h5>₹299</h5>
      <button className='bg-primary text-light p-2 w-100 border-0 rounded'>ADD TO CART</button>
</div>
</div>


<div className='box border rounded'>
<div className='top'>
      <h6 className='side bg-danger text-white'>Best Seller</h6>
      <a href="/details"><img className='pic' src="https://images.mamaearth.in/catalog/product/1/_/1_1_.jpg?format=auto&width=400&height=400"></img></a>
</div>
<div className='bottom'>
      <h6 class="main-heading">Charcoal Black Long Stay Kajal with Vitamin C & Chamomile</h6>
      <p className='text-success p-0 m-0'>11-Hour Long Stay | Smudge-Proof | Waterproof</p>
      <p className='p-0 m-0'><StarIcon className='text-warning'></StarIcon>4.8</p>
      <p className='text-secondary m-0 p-0'>235 reviews</p>
      <h5>₹299</h5>
      <button className='bg-primary text-light p-2 w-100 border-0 rounded'>ADD TO CART</button>
</div>
</div>

</div>
     

         <div class="main d-flex pt-5">
            <div className='right'>
               <h4 className='pt-3'>Baby Care</h4><p>Your little bundle of joy deserves nothing but the best. Explore MadeSafe Certified, natural, 100% toxin-free & gentle baby care products by Mamaearth. Give your little one the care they deserve!</p>
            </div>
            <div className='left'>
            <Link to ="/baby-page"><p class="btn btn-primary w-50 ms-4 mt-4">View All</p></Link>
            </div>
         </div>  

         <div className='category d-flex'>

<div className='box border rounded'>
<div className='top'>
      <h6 className='side bg-warning text-white'>Trending</h6>
      <a href="/details"><img className='pic' src="https://images.mamaearth.in/catalog/product/b/o/body-wash_probs_ui8gwmtjnj2sahbz.jpg?format=auto&width=400&height=400"></img></a>
</div>
<div className='bottom'>
      <h6 class="main-heading">Deeply Nourishing Body Wash for babies, 400ml</h6>
      <p className='text-success p-0 m-0'>Natural Cleansers | Tear-Free Formula</p>
      <p className='p-0 m-0'><StarIcon className='text-warning'></StarIcon>4.8</p>
      <p className='text-secondary m-0 p-0'>79 reviews</p>
      <h5>₹499</h5>
      <button className='bg-primary text-light p-2 w-100 border-0 rounded'>ADD TO CART</button>
</div>
</div>

<div className='box border rounded'>
<div className='top'>
      <h6 className='side bg-warning text-white'>Trending</h6>
      <a href="/details"><img className='pic' src="https://images.mamaearth.in/catalog/product/b/o/body-wash_probs_ui8gwmtjnj2sahbz.jpg?format=auto&width=400&height=400"></img></a>

</div>
<div className='bottom'>
      <h6 class="main-heading">Deeply Nourishing Body Wash for babies, 400ml</h6>
      <p className='text-success p-0 m-0'>Natural Cleansers | Tear-Free Formula</p>
      <p className='p-0 m-0'><StarIcon className='text-warning'></StarIcon>4.8</p>
      <p className='text-secondary m-0 p-0'>79 reviews</p>
      <h5>₹499</h5>
      <button className='bg-primary text-light p-2 w-100 border-0 rounded'>ADD TO CART</button>
</div>
</div>

<div className='box border rounded'>
<div className='top'>
      <h6 className='side bg-warning text-white'>Trending</h6>
       <a href="/details"><img className='pic' src="https://images.mamaearth.in/catalog/product/b/o/body-wash_probs_ui8gwmtjnj2sahbz.jpg?format=auto&width=400&height=400"></img></a>
</div>
<div className='bottom'>
      <h6 class="main-heading">Deeply Nourishing Body Wash for babies, 400ml</h6>
      <p className='text-success p-0 m-0'>Natural Cleansers | Tear-Free Formula</p>
      <p className='p-0 m-0'><StarIcon className='text-warning'></StarIcon>4.8</p>
      <p className='text-secondary m-0 p-0'>79 reviews</p>
      <h5>₹499</h5>
      <button className='bg-primary text-light p-2 w-100 border-0 rounded'>ADD TO CART</button>
</div>
</div>


<div className='box border rounded'>
<div className='top'>
      <h6 className='side bg-warning text-white'>Trending</h6>
      <a href="/details"><img className='pic' src="https://images.mamaearth.in/catalog/product/b/o/body-wash_probs_ui8gwmtjnj2sahbz.jpg?format=auto&width=400&height=400"></img></a>
</div>
<div className='bottom'>
      <h6 class="main-heading">Deeply Nourishing Body Wash for babies, 400ml</h6>
      <p className='text-success p-0 m-0'>Natural Cleansers | Tear-Free Formula</p>
      <p className='p-0 m-0'><StarIcon className='text-warning'></StarIcon>4.8</p>
      <p className='text-secondary m-0 p-0'>79 reviews</p>
      <h5>₹499</h5>
      <button className='bg-primary text-light p-2 w-100 border-0 rounded'>ADD TO CART</button>
</div>
</div>

</div>
      

       
      <div class="main d-flex">
         <div className='right'>
            <h4 className='pt-3'>New Launches</h4><p>Explore the goodness of nature from Mamaearth. Take a look at our newly launched toxin-free and natural products for hair, skin, and babies</p>
         </div>
         <div className='left'>
            <Link to ="/new-launches"><p class="btn btn-primary w-50 ms-4 mt-4">View All</p></Link>
         </div>
      </div>

      <div className='category d-flex'>

<div className='box border rounded'>
<div className='top'>
      <h6 className='side bg-success text-white'>New Launch</h6>
      <a href="/details"><img className='pic' src="https://images.mamaearth.in/catalog/product/1/_/1_34.jpg?format=auto&width=400&height=400"></img></a>
</div>
<div className='bottom'>
      <h6 class="main-heading">Kerala Thaali Cleansing Hair Mask</h6>
      <p className='text-success p-0 m-0'>Natural Cleansers | Tear-Free Formula</p>
      <p className='p-0 m-0'><StarIcon className='text-warning'></StarIcon>4.6</p>
      <p className='text-secondary m-0 p-0'>29 reviews</p>
      <h5>₹299</h5>
      <button className='bg-primary text-light p-2 w-100 border-0 rounded'>ADD TO CART</button>
</div>
</div>

<div className='box border rounded'>
<div className='top'>
      <h6 className='side bg-success text-white'>New Launch</h6>
      <a href="/details"><img className='pic' src="https://images.mamaearth.in/catalog/product/1/_/1_34.jpg?format=auto&width=400&height=400"></img></a>
</div>
<div className='bottom'>
      <h6 class="main-heading">Kerala Thaali Cleansing Hair Mask</h6>
      <p className='text-success p-0 m-0'>Natural Cleansers | Tear-Free Formula</p>
      <p className='p-0 m-0'><StarIcon className='text-warning'></StarIcon>4.6</p>
      <p className='text-secondary m-0 p-0'>29 reviews</p>
      <h5>₹299</h5>
      <button className='bg-primary text-light p-2 w-100 border-0 rounded'>ADD TO CART</button>
</div>
</div>

<div className='box border rounded'>
<div className='top'>
      <h6 className='side bg-success text-white'>New Launch</h6>
      <a href="/details"><img className='pic' src="https://images.mamaearth.in/catalog/product/1/_/1_34.jpg?format=auto&width=400&height=400"></img></a>
</div>
<div className='bottom'>
      <h6 class="main-heading">Kerala Thaali Cleansing Hair Mask</h6>
      <p className='text-success p-0 m-0'>Natural Cleansers | Tear-Free Formula</p>
      <p className='p-0 m-0'><StarIcon className='text-warning'></StarIcon>4.6</p>
      <p className='text-secondary m-0 p-0'>29 reviews</p>
      <h5>₹299</h5>
      <button className='bg-primary text-light p-2 w-100 border-0 rounded'>ADD TO CART</button>
</div>
</div>


<div className='box border rounded'>
<div className='top'>
      <h6 className='side bg-success text-white'>New Launch</h6>
      <a href="/details"><img className='pic' src="https://images.mamaearth.in/catalog/product/1/_/1_34.jpg?format=auto&width=400&height=400"></img></a>
</div>
<div className='bottom'>
      <h6 class="main-heading">Kerala Thaali Cleansing Hair Mask</h6>
      <p className='text-success p-0 m-0'>Natural Cleansers | Tear-Free Formula</p>
      <p className='p-0 m-0'><StarIcon className='text-warning'></StarIcon>4.6</p>
      <p className='text-secondary m-0 p-0'>29 reviews</p>
      <h5>₹299</h5>
      <button className='bg-primary text-light p-2 w-100 border-0 rounded'>ADD TO CART</button>
</div>
</div>

</div>
     
      </div>
   </div>
 </Design>)
}

export default AllProductsPage

const Design = styled.div`
.space{
width:90%;
margin:auto;
}
.right{
width:85%;
}
.left{
width:15%;
}
.category{
width:100%;
height:530px;
margin:auto;
}
.box{
margin:auto;
height:100%;
width:23%;
}
.top{
height:60%;
}
.bottom{
height:40%;
text-align:center;
}
.pic{
height:90%;
width:100%;
}
.main-heading{
padding-top:20px;
}
.side{
width:35%
}
.main{
width:95%;
margin:auto;   
}
.center{
text-align:center;
}
`
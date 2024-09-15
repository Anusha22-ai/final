import React, { useEffect, useState } from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import styled from 'styled-components'
import axios from 'axios'
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

const HomePage = () => {

   /*const [baby, setBaby] = useState([]); 
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchBabyCareProducts = async () => {
        try {
          const response = await axios.get('http://localhost:3000/home');
          const data = await response.json();
        setBaby(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching baby care products:", error);
        setLoading(false);
      }
    };

    fetchBabyCareProducts();
  }, []);*/

  return (<Design>
   <div>
      <div className='w-100'>
         <Carousel>
            <CarouselItem><img className="w-100" src="https://st-images.honasa.in/web_soon_741f004167.jpg?format=auto&width=&qualilty="></img></CarouselItem>
            <CarouselItem><img className='w-100' src="https://st-images.honasa.in/Desktop_1920x512_6f64c7811d.jpg?format=auto&width=&qualilty="></img></CarouselItem>
            <CarouselItem><img className='w-100' src="https://st-images.honasa.in/Desktop_1920x512_171b914a42.jpg?format=auto&width=&qualilty="></img></CarouselItem>
         </Carousel>
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

export default HomePage

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
`


















































/*import React from 'react'
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { Mode } from '@mui/icons-material';
import { Carousel, CarouselItem } from 'react-bootstrap';
import styled from 'styled-components';
import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import u1 from "./images/u1.avif"
import u2 from "./images/u2.avif"
import u3 from "./images/u3.avif"
import u4 from "./images/u4.avif"
import img1 from "./images/img1.avif"
import img2 from "./images/img2.avif"
import img3 from "./images/img3.avif"
import img4 from "./images/img4.avif"
import img5 from "./images/img5.avif"
import img6 from "./images/img6.avif"
import img7 from "./images/img7.avif"
import img8 from "./images/img8.avif"
import img9 from "./images/img9.avif"
import image1 from "./images/image1.avif"
import image2 from "./images/image2.avif"
import image3 from "./images/image3.avif"
import image4 from "./images/image4.avif"
import image5 from "./images/image5.avif"
import image6 from "./images/image6.avif"
import image7 from "./images/image7.avif"
import image8 from "./images/image8.avif"
import image9 from "./images/image9.avif"
import oil from "./images/oil.avif"
import serum from "./images/serum.avif"
import onion from "./images/onion.avif"
import i1 from "./images/i1.avif"
import i2 from "./images/i2.avif"
import i3 from "./images/i3.avif"
import i4 from "./images/i4.avif"
import i5 from "./images/i5.avif"
import i6 from "./images/i6.avif"
import i7 from "./images/i7.avif"
import i8 from "./images/i9.avif"
import i9 from "./images/i9.avif"
import i10 from "./images/i10.avif"
import i11 from "./images/i11.avif"
import i12 from "./images/i12.avif"

const HomePage = () => {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }; 

  return (<Design>
    <div>

<Carousel> 
      <CarouselItem>
        <img className="background w-100" src="https://st-images.honasa.in/Website_wwow_43ba7b0cfb.jpg?format=auto&width=&qualilty="></img>
      </CarouselItem>

      <CarouselItem>
        <img className="background w-100" src="https://st-images.honasa.in/Website_wwow_43ba7b0cfb.jpg?format=auto&width=&qualilty="></img>
      </CarouselItem>

    </Carousel>
    
    </div>

<div>
<div class="category d-flex w-100 border">
         <div class="left-division w-25 bg-white">
            <div class="best">
             <h4 class="p-2 m-2">Best Sellers</h4>
             <p class="p-3">Explore best-selling safe, natural, and 100% toxin-free baby and beauty products from Mamaearth. Get amazing deals and start your toxin-free skin, hair, and baby care journey.</p>
             <div class="p-0 m-0">
               <button class="button m-2 p-2 border rounded ">VIEW ALL</button>
             </div>
             </div>
         </div>
         <div class="right-division w-75 d-flex">
        <div class="right">
         <Carousel interval={9000000} controls slide={false}  activeIndex={index} onSelect={handleSelect}>
         <Carousel.Item interval={9000000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
               <div class="name w-25">Trending</div>
         <img class="img1 w-100" src={img1}></img>
         <h6 class="content">Onion Shampoo with Onion & Plant Keratin for Hair Fall Control - 400ml</h6>
         <p class="para">Reduces Hair Fall | Strengthens Hair |Softens Hair</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon> 
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
         <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
       <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2  border rounded ">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <div class="names">Best Seller</div>
         <img class="img1 w-100" src={img2}></img>
         <h6 class="content">Vitamin C Daily Glow Face Serum With Vitamin C & Turmeric for Radiant Skin - 30 ml</h6>
         <p class="para">Enriched with 50X Vitamin C* | Brightens Skin</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
         </div>
         </div>   
         <div class="box m-2 p-0 border">
         <div class="names">Best Seller</div>
         <img class="img1 w-100" src={img3}></img>
         <h6 class="content">Rosemary Anti-Hair Fall Shampoo with Rosemary & Methi Dana for Reducing Hair Loss & Breakage - 250 ml</h6>
         <p class="para">Gives up to 94% Stronger Hair | Up to 93% Less Hair</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         </div>
         </Carousel.Item>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
            <div class="names">Best Seller</div>
         <img class="img1 w-100" src={img4}></img>
         <h6 class="content">Beetroot Gentle Face Wash With Beetroot & Hyaluronic Acid - 100 ml</h6>
         <p class="para">Gives Natural Pink Glow | Hydrates Skin Intensely</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <div class="names">Best Seller</div>
         <img class="img1 w-100" src={img5}></img>
         <h6 class="content">Vitamin C Face Wash with VitaminC and Turmeric for Skin Illumination - 250ml</h6>
         <p class="para">Brightens Skin | Promotes Even Skin Tone</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <div class="name w-25">Trending</div>
         <img class="img1 w-100" src={img6}></img>
         <h6 class="content">Onion Hair Oil with Onion Oil & Redensyl for Hair Fall Control - 200 ml</h6>
         <p class="para">Boosts Hair Growth | Adds Strength & Shine</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         </div>
         </Carousel.Item>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
            <div class="named">New Launch</div>
         <img class="img1 w-100" src={img7}></img>
         <h6 class="content">Rosemary Hair Growth Oil with Rosemary & Methi Dana for Promoting Hair Growth - 200 ml</h6>
         <p class="para">Stimulates Hair Growth | Controls Hair Fall | Strength</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <div class="names">Best Seller</div>
         <img class="img1 w-100" src={img8}></img>
         <h6 class="content">Ubtan Face Wash with Turmeric & Saffron for Tan Removal - 150 ml</h6>
         <p class="para">Removes Tan | Brightens Skin</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <div class="names">Best Seller</div>
         <img class="img1 w-100" src={img9}></img>
         <h6 class="content">Vitamin C Daily Glow Sunscreen With Vitamin C & Turmeric for Sun Protection & Glow - 80 g</h6>
         <p class="para">SPF 50 & PA++++ Protection | Adds Natural Glow</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         </div>
         </Carousel.Item>
         </Carousel>
   </div>
     </div>
      </div>









       <div class="category d-flex w-100 border">
         <div class="left-division w-25 bg-white">
            <div className="best">
             <h4 class="p-2 m-2">Lightning Sale</h4>
             <p class="p-3">Explore the goodness of nature from Mamaearth. Take a look at our lightning offers</p>
             <div class="p-0 m-0">
               <button class="button m-2 p-2 border rounded ">VIEW ALL</button>
             </div>
         </div>
         </div>
         <div class="right-division w-75 d-flex">
        <div class="right">
         <Carousel interval={9000000} controls slide={false} activeIndex={index} onSelect={handleSelect}>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
            <div class="needs-tobe-rendered" time="09:20:00"></div>
         <img class="img1 w-100" src={image1}></img>
         <h6 class="content">Onion Shampoo for Hair Growth and Hair Fall Control with Onion and Plant Keratin - 1 Litre</h6>
         <p class="para">Reduces Hair Fall | Strengthens & Smoothens Hair</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image2}></img> 
         <h6 class="content">Anti-Hair Fall Spa Kit</h6>
         <p class="para"> Boosts Growth | Reduces Hair Fall | Softens Hair</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>   
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image3}></img>
         <h6 class="content">Vitamin C Daily Glow Sunscreen With Vitamin C & Turmeric for Sun Protection & Glow - 50 g - Pack of 2</h6>
         <p class="para">SPF 50 & PA+++ Protection | Adds Natural Glow</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         <p></p>
         </div>
         </div>
         </Carousel.Item>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image4}></img>
         <h6 class="content">Onion Shampoo for Hair Fall Control and Hair Growth with Onion & Plant Keratin - 650 ml</h6>
         <p class="para"> Reduces Hair Fall | Strengthens Hair | 8X Smoothness</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image5}></img>
         <h6 class="content">Ubtan Face Wash 150 ml (Pack of 2)</h6>
         <p class="para">Removes Tan | Brightens Skin</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image6}></img>
         <h6 class="content">Lemon Anti-Dandruff Combo - 250ml + 250ml</h6>
         <p class="para"> Reduces Up to 100% Dandruff | Soothes Itchines</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         </div>
         </Carousel.Item>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image7}></img>
         <h6 class="content">Rosemary Hair Care Kit - 650ml</h6>
         <p class="para"> Gives up to 94% Stronger Hair* | Up to 93% Less Hair Fall* | Made Safe Certified</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
       <img class="star" src=""></img>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image8}></img> 
         <h6 class="content">Vitamin C Glow Combo - 100ml + 300ml</h6>
         <p class="para"> Vitamin C Face Wash 100ml + Vitamin C Sunscreen 300 ml</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>   
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image9}></img>
         <h6 class="content">Aloe Vera Gel with Pure Aloe Vera & Vitamin E for Skin and Hair - 300 ml (Pack of 2)</h6>
         <p class="para"> Hydrates Skin | Soothes Irritated Skin</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         </div>
         </Carousel.Item>
         </Carousel>
   </div>
     </div>
      </div>










      <div class="category d-flex w-100 border">
         <div class="left-division w-25 bg-white">
            <div class="best">
             <h4 class="p-2 m-2">Summer Favourites</h4>
             <p class="p-3">Explore the goodness of nature from Mamaearth. Take a look at our toxin-free and natural products for hair, skin, and babies</p>
             <div class="p-0 m-0">
               <button class="button m-2 p-2 border rounded ">VIEW ALL</button>
             </div>  
             </div>
         </div>
         <div class="right-division w-75 d-flex">
        <div class="right">
         <Carousel interval={9000000} controls slide={false} activeIndex={index} onSelect={handleSelect}>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
            <div class="name w-25">Trending</div>
         <img class="img1 w-100" src={i7}></img>
         <h6 class="content">Vitamin C Daily Glow Sunscreen with Vitamin C & Turmeric for Sun Protection & Glow - 50 g</h6>
         <p class="para"> SPF 50 & PA+++ Protection | Adds Natural Glow</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
       <img class="star" src=""></img>
         </div>
         <div class="box m-2 p-0 border">
         <div class="name w-25">Trending</div>
         <img class="img1 w-100" src={i8}></img> 
         <h6 class="content">Ubtan Face Wash with Turmeric & Saffron for Tan Removal – 100ml</h6>
         <p class="para">Removes Tan | Brightens Skin</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>   
         <div class="box m-2 p-0 border">
         <div class="names">Best Seller</div>
         <img class="img1 w-100" src={i11}></img>
         <h6 class="content">Ubtan Face Mask with Saffron and Turmeric for Skin Brightening and Tan Removal - 100g</h6>
         <p class="para">  Unveils Glow | Removes Tan | Makes Skin Healthy</p> 
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         </div>
         </Carousel.Item>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
            <div class="names">Best Seller</div>
         <img class="img1 w-100" src={i10}></img>
         <h6 class="content">Beetroot Daily Glow Face Cream With Beetroot & Hyaluronic Acid - 80 g</h6>
         <p class="para"> Gives A Hydrated Pink Glow | Makes Skin Soft | Gives Instant Brightening Effect</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <div class="names">Best Seller</div>
         <img class="img1 w-100" src={i11}></img>
         <h6 class="content">Multani Mitti Face Wash with Multani Mitti & Bulgarian Rose For Oil Control & Acne - 100 ml</h6>
         <p class="para"> Controls Oil & Acne | Promotes Hydration </p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <div class="names">Best Seller</div>
         <img class="img1 w-100" src={i12}></img>
         <h6 class="content">Vitamin C Face Wash with Vitamin C and Turmeric for Skin Illumination - 100ml</h6>
         <p class="para"> Brightens Skin | Evens Skin Tone| Makes Skin Glow</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         </div>
         </Carousel.Item>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
            <div class="names">Best Seller</div>
         <img class="img1 w-100" src={i9}></img>
         <h6 class="content">Vitamin C Daily Glow Sunscreen with Vitamin C & Turmeric for Sun Protection & Glow - 50 g</h6>
         <p class="para"> SPF 50 & PA+++ Protection | Adds Natural Glow</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
       <img class="star" src=""></img>
         </div>
         <div class="box m-2 p-0 border">
         <div class="names">Best Seller</div>
         <img class="img1 w-100" src={i7}></img> 
         <h6 class="content">Ubtan Face Wash with Turmeric & Saffron for Tan Removal – 100ml</h6>
         <p class="para">Removes Tan | Brightens Skin</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>   
         <div class="box m-2 p-0 border">
         <div class="name w-25">Trending</div>
         <img class="img1 w-100" src={i12}></img>
         <h6 class="content">Ubtan Face Mask with Saffron and Turmeric for Skin Brightening and Tan Removal - 100g</h6>
         <p class="para">  Unveils Glow | Removes Tan | Makes Skin Healthy</p> 
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         </div>
         </Carousel.Item>
         </Carousel>
   </div>
     </div>
      </div>








      <div class="category d-flex w-100 border">
         <div class="left-division w-25 bg-white">
            <div class="best">
             <h4 class="p-2 m-2">Skin Care</h4>
             <p class="p-3">Explore 100% toxin-free and safe skincare products by Mamaearth that are formulated with love and the goodness of natural ingredients</p>
             <div class="p-0 m-0">
               <button class="button m-2 p-2 border rounded ">VIEW ALL</button>
             </div>
             </div>
         </div>
         <div class="right-division w-75 d-flex">
        <div class="right">
         <Carousel interval={9000000} controls slide={false} activeIndex={index} onSelect={handleSelect}>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image1}></img>
         <h6 class="content">Onion Shampoo for Hair Growth and Hair Fall Control with Onion and Plant Keratin - 1 Litre</h6>
         <p class="para">  Reduces Hair Fall | Strengthens & Smoothens Hair</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
       <img class="star" src=""></img>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image2}></img> 
         <h6 class="content">Anti-Hair Fall Spa Kit</h6>
         <p class="para"> Boosts Growth | Reduces Hair Fall | Softens Hair</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>   
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image3}></img>
         <h6 class="content">Vitamin C Daily Glow Sunscreen With Vitamin C & Turmeric for Sun Protection & Glow - 50 g - Pack of 2</h6>
         <p class="para">SPF 50 & PA+++ Protection | Adds Natural Glow</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         <p></p>
         </div>
         </div>
         </Carousel.Item>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image4}></img>
         <h6 class="content">Onion Shampoo for Hair Fall Control and Hair Growth with Onion & Plant Keratin - 650 ml</h6>
         <p class="para"> Reduces Hair Fall | Strengthens Hair | 8X Smoothness</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image5}></img>
         <h6 class="content">Ubtan Face Wash 150 ml (Pack of 2)</h6>
         <p class="para">Removes Tan | Brightens Skin</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image6}></img>
         <h6 class="content">Lemon Anti-Dandruff Combo - 250ml + 250ml</h6>
         <p class="para"> Reduces Up to 100% Dandruff | Soothes Itchines</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         </div>
         </Carousel.Item>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image4}></img>
         <h6 class="content">Onion Shampoo for Hair Growth and Hair Fall Control with Onion and Plant Keratin - 1 Litre</h6>
         <p class="para">  Reduces Hair Fall | Strengthens & Smoothens Hair</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
       <img class="star" src=""></img>
       <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image2}></img> 
         <h6 class="content">Anti-Hair Fall Spa Kit</h6>
         <p class="para"> Boosts Growth | Reduces Hair Fall | Softens Hair</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>   
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image6}></img>
         <h6 class="content">Vitamin C Daily Glow Sunscreen With Vitamin C & Turmeric for Sun Protection & Glow - 50 g - Pack of 2</h6>
         <p class="para">SPF 50 & PA+++ Protection | Adds Natural Glow</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         <p></p>
         </div>
         </div>
         </Carousel.Item>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image4}></img>
         <h6 class="content">Onion Shampoo for Hair Fall Control and Hair Growth with Onion & Plant Keratin - 650 ml</h6>
         <p class="para"> Reduces Hair Fall | Strengthens Hair | 8X Smoothness</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image5}></img>
         <h6 class="content">Ubtan Face Wash 150 ml (Pack of 2)</h6>
         <p class="para">Removes Tan | Brightens Skin</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image6}></img>
         <h6 class="content">Lemon Anti-Dandruff Combo - 250ml + 250ml</h6>
         <p class="para"> Reduces Up to 100% Dandruff | Soothes Itchines</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         </div>
         </Carousel.Item>
         </Carousel>
   </div>
     </div>
      </div>













      <div class="category d-flex w-100 border">
         <div class="left-division w-25 bg-white">
            <div class="best">
             <h4 class="p-2 m-2">Hair Care</h4>
             <p class="p-3">Explore 100% toxin-free and safe Hair products, formulated with the goodness of natural ingredients and no harmful chemicals.</p>
             <div class="p-0 m-0">
               <button class="button m-2 p-2 border rounded ">VIEW ALL</button>
             </div>
             </div>
         </div>
         <div class="right-division w-75 d-flex">
        <div class="right">
         <Carousel interval={9000000} controls slide={false} activeIndex={index} onSelect={handleSelect}>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image1}></img>
         <h6 class="content">Onion Shampoo for Hair Growth and Hair Fall Control with Onion and Plant Keratin - 1 Litre</h6>
         <p class="para">  Reduces Hair Fall | Strengthens & Smoothens Hair</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
       <img class="star" src=""></img>
       <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image2}></img> 
         <h6 class="content">Anti-Hair Fall Spa Kit</h6>
         <p class="para"> Boosts Growth | Reduces Hair Fall | Softens Hair</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>   
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image3}></img>
         <h6 class="content">Vitamin C Daily Glow Sunscreen With Vitamin C & Turmeric for Sun Protection & Glow - 50 g - Pack of 2</h6>
         <p class="para">SPF 50 & PA+++ Protection | Adds Natural Glow</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         <p></p>
         </div>
         </div>
         </Carousel.Item>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image4}></img>
         <h6 class="content">Onion Shampoo for Hair Fall Control and Hair Growth with Onion & Plant Keratin - 650 ml</h6>
         <p class="para"> Reduces Hair Fall | Strengthens Hair | 8X Smoothness</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image5}></img>
         <h6 class="content">Ubtan Face Wash 150 ml (Pack of 2)</h6>
         <p class="para">Removes Tan | Brightens Skin</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image6}></img>
         <h6 class="content">Lemon Anti-Dandruff Combo - 250ml + 250ml</h6>
         <p class="para"> Reduces Up to 100% Dandruff | Soothes Itchines</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         </div>
         </Carousel.Item>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image1}></img>
         <h6 class="content">Onion Shampoo for Hair Growth and Hair Fall Control with Onion and Plant Keratin - 1 Litre</h6>
         <p class="para">  Reduces Hair Fall | Strengthens & Smoothens Hair</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
       <img class="star" src=""></img>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image2}></img> 
         <h6 class="content">Anti-Hair Fall Spa Kit</h6>
         <p class="para"> Boosts Growth | Reduces Hair Fall | Softens Hair</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>   
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image3}></img>
         <h6 class="content">Vitamin C Daily Glow Sunscreen With Vitamin C & Turmeric for Sun Protection & Glow - 50 g - Pack of 2</h6>
         <p class="para">SPF 50 & PA+++ Protection | Adds Natural Glow</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         <p></p>
         </div>
         </div>
         </Carousel.Item>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image4}></img>
         <h6 class="content">Onion Shampoo for Hair Fall Control and Hair Growth with Onion & Plant Keratin - 650 ml</h6>
         <p class="para"> Reduces Hair Fall | Strengthens Hair | 8X Smoothness</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image5}></img>
         <h6 class="content">Ubtan Face Wash 150 ml (Pack of 2)</h6>
         <p class="para">Removes Tan | Brightens Skin</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image6}></img>
         <h6 class="content">Lemon Anti-Dandruff Combo - 250ml + 250ml</h6>
         <p class="para"> Reduces Up to 100% Dandruff | Soothes Itchines</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         </div>
         </Carousel.Item>
         </Carousel>
   </div>
     </div>
      </div>







      <div class="category d-flex w-100 border">
         <div class="left-division w-25 bg-white">
            <div class="best">
             <h4 class="p-2 m-2">New Launches</h4>
             <p class="p-3">Explore the goodness of nature from Mamaearth. Take a look at our newly launched toxin-free and natural products for hair, skin, and babies</p>
             <div class="p-0 m-0">
               <button class="button m-2 p-2 border rounded ">VIEW ALL</button>
             </div>
             </div>
         </div>
         <div class="right-division w-75 d-flex">
        <div class="right">
         <Carousel interval={9000000} controls slide={false} activeIndex={index} onSelect={handleSelect}>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image1}></img>
         <h6 class="content">Onion Shampoo for Hair Growth and Hair Fall Control with Onion and Plant Keratin - 1 Litre</h6>
         <p class="para">  Reduces Hair Fall | Strengthens & Smoothens Hair</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
       <img class="star" src=""></img>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image2}></img> 
         <h6 class="content">Anti-Hair Fall Spa Kit</h6>
         <p class="para"> Boosts Growth | Reduces Hair Fall | Softens Hair</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>   
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image3}></img>
         <h6 class="content">Vitamin C Daily Glow Sunscreen With Vitamin C & Turmeric for Sun Protection & Glow - 50 g - Pack of 2</h6>
         <p class="para">SPF 50 & PA+++ Protection | Adds Natural Glow</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         <p></p>
         </div>
         </div>
         </Carousel.Item>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image4}></img>
         <h6 class="content">Onion Shampoo for Hair Fall Control and Hair Growth with Onion & Plant Keratin - 650 ml</h6>
         <p class="para"> Reduces Hair Fall | Strengthens Hair | 8X Smoothness</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image5}></img>
         <h6 class="content">Ubtan Face Wash 150 ml (Pack of 2)</h6>
         <p class="para">Removes Tan | Brightens Skin</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image6}></img>
         <h6 class="content">Lemon Anti-Dandruff Combo - 250ml + 250ml</h6>
         <p class="para"> Reduces Up to 100% Dandruff | Soothes Itchines</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         </div>
         </Carousel.Item>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image1}></img>
         <h6 class="content">Onion Shampoo for Hair Growth and Hair Fall Control with Onion and Plant Keratin - 1 Litre</h6>
         <p class="para">  Reduces Hair Fall | Strengthens & Smoothens Hair</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
       <img class="star" src=""></img>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image2}></img> 
         <h6 class="content">Anti-Hair Fall Spa Kit</h6>
         <p class="para"> Boosts Growth | Reduces Hair Fall | Softens Hair</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>   
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image3}></img>
         <h6 class="content">Vitamin C Daily Glow Sunscreen With Vitamin C & Turmeric for Sun Protection & Glow - 50 g - Pack of 2</h6>
         <p class="para">SPF 50 & PA+++ Protection | Adds Natural Glow</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         <p></p>
         </div>
         </div>
         </Carousel.Item>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image4}></img>
         <h6 class="content">Onion Shampoo for Hair Fall Control and Hair Growth with Onion & Plant Keratin - 650 ml</h6>
         <p class="para"> Reduces Hair Fall | Strengthens Hair | 8X Smoothness</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image5}></img>
         <h6 class="content">Ubtan Face Wash 150 ml (Pack of 2)</h6>
         <p class="para">Removes Tan | Brightens Skin</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image6}></img>
         <h6 class="content">Lemon Anti-Dandruff Combo - 250ml + 250ml</h6>
         <p class="para"> Reduces Up to 100% Dandruff | Soothes Itchines</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         </div>
         </Carousel.Item>
         </Carousel>
   </div>
     </div>
      </div>



      <div class="category d-flex w-100 border">
         <div class="left-division w-25 bg-white">
            <div class="best">
             <h4 class="p-2 m-2">Makeup</h4>
             <p class="p-3">Color with care with our all-new colorcare range that’s 100% toxin-free and formulated with the goodness of natural ingredients. Check out our newly launched products & bring home your new favorites.</p>
             <div class="p-0 m-0">
               <button class="button m-2 p-2 border rounded ">VIEW ALL</button>
             </div>
        </div>
         </div>
         <div class="right-division w-75 d-flex">
        <div class="right">
         <Carousel interval={9000000} controls slide={false} activeIndex={index} onSelect={handleSelect}>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image1}></img>
         <h6 class="content">Onion Shampoo for Hair Growth and Hair Fall Control with Onion and Plant Keratin - 1 Litre</h6>
         <p class="para">  Reduces Hair Fall | Strengthens & Smoothens Hair</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
       <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image2}></img> 
         <h6 class="content">Anti-Hair Fall Spa Kit</h6>
         <p class="para"> Boosts Growth | Reduces Hair Fall | Softens Hair</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>   
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image3}></img>
         <h6 class="content">Vitamin C Daily Glow Sunscreen With Vitamin C & Turmeric for Sun Protection & Glow - 50 g - Pack of 2</h6>
         <p class="para">SPF 50 & PA+++ Protection | Adds Natural Glow</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         <p></p>
         </div>
         </div>
         </Carousel.Item>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image4}></img>
         <h6 class="content">Onion Shampoo for Hair Fall Control and Hair Growth with Onion & Plant Keratin - 650 ml</h6>
         <p class="para"> Reduces Hair Fall | Strengthens Hair | 8X Smoothness</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image5}></img>
         <h6 class="content">Ubtan Face Wash 150 ml (Pack of 2)</h6>
         <p class="para">Removes Tan | Brightens Skin</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image6}></img>
         <h6 class="content">Lemon Anti-Dandruff Combo - 250ml + 250ml</h6>
         <p class="para"> Reduces Up to 100% Dandruff | Soothes Itchines</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         </div>
         </Carousel.Item>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image1}></img>
         <h6 class="content">Onion Shampoo for Hair Growth and Hair Fall Control with Onion and Plant Keratin - 1 Litre</h6>
         <p class="para">  Reduces Hair Fall | Strengthens & Smoothens Hair</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
       <img class="star" src=""></img>
       <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image2}></img> 
         <h6 class="content">Anti-Hair Fall Spa Kit</h6>
         <p class="para"> Boosts Growth | Reduces Hair Fall | Softens Hair</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>   
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image3}></img>
         <h6 class="content">Vitamin C Daily Glow Sunscreen With Vitamin C & Turmeric for Sun Protection & Glow - 50 g - Pack of 2</h6>
         <p class="para">SPF 50 & PA+++ Protection | Adds Natural Glow</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         <p></p>
         </div>
         </div>
         </Carousel.Item>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image4}></img>
         <h6 class="content">Onion Shampoo for Hair Fall Control and Hair Growth with Onion & Plant Keratin - 650 ml</h6>
         <p class="para"> Reduces Hair Fall | Strengthens Hair | 8X Smoothness</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image5}></img>
         <h6 class="content">Ubtan Face Wash 150 ml (Pack of 2)</h6>
         <p class="para">Removes Tan | Brightens Skin</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image6}></img>
         <h6 class="content">Lemon Anti-Dandruff Combo - 250ml + 250ml</h6>
         <p class="para"> Reduces Up to 100% Dandruff | Soothes Itchines</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         </div>
         </Carousel.Item>
         </Carousel>
   </div>
     </div>
      </div>















      <div class="category d-flex w-100 border">
         <div class="left-division w-25 bg-white">
            <div class="best">
             <h4 class="p-2 m-2">Vitamin C Range</h4>
             <p class="p-3">Explore 100% toxin-free and safe Vitamin C Range for Glowing and Radiant Skin, formulated with the goodness of natural ingredients and no harmful chemicals</p>
             <div class="p-0 m-0">
               <button class="button m-2 p-2 border rounded ">VIEW ALL</button>
             </div>
             </div>
         </div>
         <div class="right-division w-75 d-flex">
        <div class="right">
         <Carousel interval={9000000} controls slide={false} activeIndex={index} onSelect={handleSelect}>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image1}></img>
         <h6 class="content">Onion Shampoo for Hair Growth and Hair Fall Control with Onion and Plant Keratin - 1 Litre</h6>
         <p class="para">  Reduces Hair Fall | Strengthens & Smoothens Hair</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
        <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
       <img class="star" src=""></img>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image2}></img> 
         <h6 class="content">Anti-Hair Fall Spa Kit</h6>
         <p class="para"> Boosts Growth | Reduces Hair Fall | Softens Hair</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>   
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image3}></img>
         <h6 class="content">Vitamin C Daily Glow Sunscreen With Vitamin C & Turmeric for Sun Protection & Glow - 50 g - Pack of 2</h6>
         <p class="para">SPF 50 & PA+++ Protection | Adds Natural Glow</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         <p></p>
         </div>
         </div>
         </Carousel.Item>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image4}></img>
         <h6 class="content">Onion Shampoo for Hair Fall Control and Hair Growth with Onion & Plant Keratin - 650 ml</h6>
         <p class="para"> Reduces Hair Fall | Strengthens Hair | 8X Smoothness</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image5}></img>
         <h6 class="content">Ubtan Face Wash 150 ml (Pack of 2)</h6>
         <p class="para">Removes Tan | Brightens Skin</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image6}></img>
         <h6 class="content">Lemon Anti-Dandruff Combo - 250ml + 250ml</h6>
         <p class="para"> Reduces Up to 100% Dandruff | Soothes Itchines</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         </div>
         </Carousel.Item>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image1}></img>
         <h6 class="content">Onion Shampoo for Hair Growth and Hair Fall Control with Onion and Plant Keratin - 1 Litre</h6>
         <p class="para">  Reduces Hair Fall | Strengthens & Smoothens Hair</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
       <img class="star" src=""></img>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image2}></img> 
         <h6 class="content">Anti-Hair Fall Spa Kit</h6>
         <p class="para"> Boosts Growth | Reduces Hair Fall | Softens Hair</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>   
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image3}></img>
         <h6 class="content">Vitamin C Daily Glow Sunscreen With Vitamin C & Turmeric for Sun Protection & Glow - 50 g - Pack of 2</h6>
         <p class="para">SPF 50 & PA+++ Protection | Adds Natural Glow</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         <p></p>
         </div>
         </div>
         </Carousel.Item>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image4}></img>
         <h6 class="content">Onion Shampoo for Hair Fall Control and Hair Growth with Onion & Plant Keratin - 650 ml</h6>
         <p class="para"> Reduces Hair Fall | Strengthens Hair | 8X Smoothness</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image5}></img>
         <h6 class="content">Ubtan Face Wash 150 ml (Pack of 2)</h6>
         <p class="para">Removes Tan | Brightens Skin</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={image6}></img>
         <h6 class="content">Lemon Anti-Dandruff Combo - 250ml + 250ml</h6>
         <p class="para"> Reduces Up to 100% Dandruff | Soothes Itchines</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         </div>
         </Carousel.Item>
         </Carousel>
   </div>
     </div>
      </div>
















      <div class="category d-flex w-100 border">
         <div class="left-division w-25 bg-white">
            <div class="best">
             <h4 class="p-2 m-2">Ubtan Range</h4>
             <p class="p-3">Explore 100% toxin-free and safe Ubtan Range for Tan Removal and Radiant Skin, formulated with the goodness of natural ingredients and no harmful chemicals.</p>
             <div class="p-0 m-0">
               <button class="button m-2 p-2 border rounded ">VIEW ALL</button>
             </div>
             </div>
         </div>
         <div class="right-division w-75 d-flex">
        <div class="right">
         <Carousel interval={9000000} controls slide={false} activeIndex={index} onSelect={handleSelect}>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border"> 
               <div class="name w-25">trending</div>
         <img class="img1 w-100" src={u1}></img>
         <h6 class="content">Ubtan Face Scrub with Turmeric and Walnut for Tan Removal - 100g</h6>
         <p class="para"> Removes Tan | Gently Exfoliates | Evens Skin Tone</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
       <img class="star" src=""></img>
         </div>
         <div class="box m-2 p-0 border">
         <div class="name w-25">trending</div>
         <img class="img1 w-100" src={u2}></img> 
         <h6 class="content"> Ubtan Facial Kit with Turmeric & Saffron for Glowing Skin - 60 g </h6>
         <p class="para">  Revives Natural Glow | Improves Skin Texture</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>   
         <div class="box m-2 p-0 border">
         <div class="named">new launch</div>
         <img class="img1 w-100" src={u3}></img>
         <h6 class="content">Ubtan Detan Sunscreen With Turmeric & Saffron For Sun Protection - 50 g</h6>
         <p class="para"> SPF 50 & PA++++ Protection | Removes Tan | Brightens Skin</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         <p></p>
         </div>
         </div>
         </Carousel.Item>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={u4}></img>
         <h6 class="content">Ubtan Body Wash With Turmeric and Saffron for Glowing Skin - 300 ml</h6>
         <p class="para"> Deeply Cleanses | Unveils Glow | Gently Exfoliates</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <div class="name w-25">trending</div>
         <img class="img1 w-100" src={u1}></img>
         <h6 class="content">Ubtan Face Scrub with Turmeric and Walnut for Tan Removal - 100g</h6>
         <p class="para"> Removes Tan | Gently Exfoliates | Evens Skin Tone</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <div class="name w-25">trending</div>
         <img class="img1 w-100" src={u2}></img>
         <h6 class="content"> Ubtan Facial Kit with Turmeric & Saffron for Glowing Skin - 60 g </h6>
         <p class="para">  Revives Natural Glow | Improves Skin Texture</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         </div>
         </Carousel.Item>
         </Carousel>
   </div>
     </div>
      </div>

      <div class="category d-flex w-100 border">
         <div class="left-division w-25 bg-white">
            <div class="best">
             <h4 class="p-2 m-2">Onion Range</h4>
             <p class="p-3">Explore 100% toxin-free and safe Onion Range for Hair Fall, formulated with the goodness of natural ingredients and no harmful chemicals.</p>
             <div class="p-0 m-0">
               <button class="button m-2 p-2 border rounded ">VIEW ALL</button>
             </div>
             </div>
         </div>
         <div class="right-division w-75 d-flex">
        <div class="right">
       
         <div class="d-flex">
            <div class="box m-2 p-0 border">
         <img class="img1 w-100" src={onion}></img>
         <h6 class="content">Onion Conditioner for Hair Fall Control - 250ml</h6>
         <p class="para"> Reduces Hair Fall | Detangles Hair | Softens Hair</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">132 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
      
         </div>
         <div class="box m-2 p-0 border">
         <div class="name w-25">Trending</div>
         <img class="img1 w-100" src={serum}></img> 
         <h6 class="content">Onion Hair Serum with Onion and Biotin for Strong, Frizz-Free Hair - 100 ml</h6>
         <p class="para">    Reduces Frizz & Tangles | Minimizes Hair Breakage</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">189 Ratings</p>
         </div>
         <div class="d-flex">
            <h5 class="rupee1 m-0 p-1">₹268.00	</h5>
            <strike><h5 class="rupee m-0 p-1">₹299</h5></strike>
            <p class="percent">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>   
         <div class="box m-2 p-0 border">
         <div class="name w-25">Trending</div>
         <img class="img1 w-100" src={oil}></img>
         <h6 class="content">Onion Hair Oil with Onion Oil & Redensyl for Hair Fall Control - 150 ml</h6>
         <p class="para">Boosts Hair Growth | Adds Strength & Shine</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">5.0</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">117 Ratings</p>
         </div>
         <div class="d-flex">
            <h5 class="rupee1 m-0 p-1">₹368.00	</h5>
            <strike><h5 class="rupee m-0 p-1">₹419</h5></strike>
            <p class="percent">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         <p></p>
         </div>
         </div>
     
   </div>
     </div>
      </div>

      <div class="category d-flex w-100 border">
         <div class="left-division w-25 bg-white">
            <div class="best">
             <h4 class="p-2 m-2">Baby Care</h4>
             <p class="p-3">Your little bundle of joy deserves nothing but the best. Explore MadeSafe Certified, natural, 100% toxin-free & gentle baby care products by Mamaearth. Give your little one the care they deserve! Mamaearth</p>
             <div class="p-0 m-0">
               <button class="button m-2 p-2 border rounded ">VIEW ALL</button>
             </div>
         </div>
         </div>
         <div class="right-division w-75 d-flex">
        <div class="right">
         <Carousel interval={9000000} controls slide={false} activeIndex={index} onSelect={handleSelect}>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
            <div class="names">trending</div>
         <img class="img1 w-100" src={i1}></img>
         <h6 class="content">Nourishing Bathing Bar Soap For Kids - ( Pack of 5, 75g Each)</h6>
         <p class="para"> Gently Cleanses | Retains Moisture |Fruity Essence</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
       <img class="star" src=""></img>
         </div>
         <div class="box m-2 p-0 border">
         <div class="named">NEW LAUNCH</div>
         <img class="img1 w-100" src={i2}></img> 
         <h6 class="content">Mamaearth Baby Rich Moisturizing Ultra Light Sunscreen - 50g</h6>
         <p class="para">SPF 50 & PA++++ | Water Resistant | Lightweight & Moisturizing</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>   
         <div class="box m-2 p-0 border">
         <div class="names">Best Seller</div>
         <img class="img1 w-100" src={i3}></img>
         <h6 class="content">Milky Soft Face Cream With Murumuru Butter for Babies, 60 ml</h6>
         <p class="para">Moisturizes | Soothes | Heals Chapped Skin</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         <p></p>
         </div>
         </div>
         </Carousel.Item>
         <Carousel.Item interval={90000}>
         <div class="d-flex">
            <div class="box m-2 p-0 border">
            <div class="namee">must try</div>
         <img class="img1 w-100" src={i4}></img>
         <h6 class="content">Milky Soft Shampoo with Oats, Milk and Calendula for Babies - 400 ml</h6>
         <p class="para"> Gently Cleanses Hair | Balances Scalp pH</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <div class="names">Best Seller</div>
         <img class="img1 w-100" src={i5}></img>
         <h6 class="content">Milky Soft Body Lotion for Babies with Oats, Milk and Calendula - 400ml</h6>
         <p class="para">Deeply Nourishes Skin | 24-Hour Moisturization</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         <div class="box m-2 p-0 border">
         <div class="namee">must try</div>
         <img class="img1 w-100" src={i6}></img>
         <h6 class="content">Moisturizing Bathing Bar Soap For Babies, pack of 4*75 g</h6>
         <p class="para"> Retains Moisture | Cleanses Gently | pH Balanced</p>
         <div class="section d-flex">
         <StarIcon class="star"></StarIcon>
         <p class="rating m-0 p-1 ">4.8</p>
         <VerifiedIcon class="icon"></VerifiedIcon>
         <p class="rating m-0 p-1">356 Ratings</p>
         </div>
       <div class="d-flex">
            <h5 class="rupee1 ms-5 p-1 ">₹307.00</h5>
            <strike><h5 class="rupee m-0 p-1">₹349</h5></strike>
            <p class="percent mt-1">12% off</p>
         </div>
         <div class="p-0 m-0">
               <button class="add w-100 m-0 p-2 border rounded">ADD TO CART</button>
      </div>
         </div>
         </div>
         </Carousel.Item>
         </Carousel>
   </div>
     </div>
      </div>

</div>
</Design>
  )
}

export default HomePage



const Design=styled.div`
.category{
    width:100%;
  }
.left-division{
      width:30%;
    }
.right-division{
      width:70%;
    }
.button{
        background-color: rgb(0,175,239);
        justify-content: center;
        width:100px;
        color: white;
    }
.content{
  width: 300px;
}
.box{
  width:30%;
}
.para{
  color:rgb(75, 139, 11);
  text-align: center;
}
.star{
  color:rgb(255, 195, 0);
}
.best{
  text-align: center;
  margin-top: 100px;
}
.name{
    background-color: rgb(255, 153, 0);
    color: rgb(255, 255, 255);
    font-weight: 600;
    text-transform: uppercase;
    text-align: left;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 12px;
    padding: 5px 5px 2px;
}
.names{
  width:80px;
  background-color: rgb(255,91,111);
  color: rgb(255, 255, 255);
  font-weight: 600;
  text-transform: uppercase;
  text-align: left;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 12px;
  padding: 5px 5px 2px;
}
.namee{
  width:70px;
  background-color: rgb(130,195,65);
  color: rgb(255, 255, 255);
  font-weight: 600;
  text-transform: uppercase;
  text-align: left;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 12px;
  padding: 5px 5px 2px;
}
.named{
  width:90px;
  background-color: rgb(130,195,65);
  color: rgb(255, 255, 255);
  font-weight: 600;
  text-transform: uppercase;
  text-align: left;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 12px;
  padding: 5px 5px 2px;
}
.add{
  background-color: rgb(0,175,239);
  font-weight: 600;
}
.star{
  width:10px;
}
.rating{
  font-size: small;
}
.section{
  justify-content: center;
}
.icon{
  width:15px;
}
.rupee{
  color:rgb(163,163,163);
  align-items: center;
  
}
.percent{
  background-color: rgb(168, 213, 122);
    font-size: 0.8rem;
    font-weight: 600;
    padding: 1px 5px;
  color:rgb(49,90,8)
}


`
*/
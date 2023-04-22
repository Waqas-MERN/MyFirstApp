import React from 'react';
import Navbar from './Navbar';
import Form from './Componets/Form';
import About from './Componets/About';
import Hero from './Componets/Hero';
import Home from './Componets/Home';
import Footer from './Footer';
import Counter from './Counter';
import SignIn from './Componets/SignIn';
import SignUp from './Componets/SignUp';
import DateTimeWatch from './Componets/DateTimeWatch';
import YouTubeVideoCard from "./Componets/YouTubeVideoCard";
import Card from './Card';

import {Routes,Route } from "react-router-dom";



const App = () => {
  return (
    
    <div className='container'>
      
    <div className="container"> <Navbar/> </div>
    <div className="container"><DateTimeWatch/></div>
    
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/youtubevideocard" element={<YouTubeVideoCard videoId="abcdefg" />}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/hero" element={<Hero/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      
   
      {/* <div className="container"> <Counter/> </div>
      <div className="container"> <Navbar title="Your App" About="About"/> </div>
      <div className="container"> <Hero/> </div>
      <div className="container"> <Form heading="Enter the Text"/> </div>
      <div className="container"> <About/> </div>
      <div className="container"> <Product/> </div> */}
     
      </Routes>
      <div class="d-flex flex-row mb-3"> 
      <Card
        image="https://images.pexels.com/photos/3774941/pexels-photo-3774941.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Random image"
        title="Example Card"
        description="This is an example card."
      />
      <Card
        image="https://images.pexels.com/photos/355956/pexels-photo-355956.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Random image"
        title="Example Card"
        description="This is an example card."
      />
      <Card
        image="https://images.pexels.com/photos/868306/pexels-photo-868306.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Random image"
        title="Example Card"
        description="This is an example card."
      />
      <Card
        image="https://images.pexels.com/photos/957040/night-photograph-starry-sky-night-sky-star-957040.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Random image"
        title="Example Card"
        description="This is an example card."
      />
    </div>

      <div className="container"> <Footer/> </div>
    
    </div>
    
  );
 
}

export default App;

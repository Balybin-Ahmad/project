import React,{useEffect} from 'react'
import AOS from 'aos';

import {Header} from './header/Header';

function App() {
  useEffect = (()=>{
    AOS.init({
      duration : 1000,
      easing: 'ease-out-back',  
      delay: 600
  })
  })
  return (
    <div className='App'>
      <h1 data-aos className="zoom-in">Hello</h1>
    <Header/>
    </div>
  
  )
}


export default App;

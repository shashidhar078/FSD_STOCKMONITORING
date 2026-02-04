import React from 'react'
import Signup from './../signup/Signup';

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
         <img src="media/images/homeHero.png" alt="home hero" className="mb-5"/>
         <h1 className="mt-5">Invest in everything</h1>
         <p className="fs-5">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
         <button className="p-2 btn btn-primary fs-5 mt-4 mb-5" style={{width:"20%"  , margin:"0 auto"}}>Sign up for free</button>
      </div>
     
    </div>
  )
}

export default Hero
import React from 'react'
import OpenAccount from './../OpenAccount';

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 mb-5">
        <div className="col-6 p-5" style={{lineHeight:"2"}}>
          <h4>Search for an answer or browser help topics to create a ticket</h4>
          <input placeholder="Eg.how do i activate F&O"/>
          <a href="">Track account Opening</a>
          <a href="">Track Segment activationIntraday</a>
          <a href="">marginKite user manual</a>
        </div>
        <div className="col-6 p-5" style={{lineHeight:"2.3"}}>
          <h4>Featured</h4>
          <ol>
            <li><a href="">Current takeovers and Delisting - January 2024</a></li>
            <li><a href="">Latest Intraday leverages - MIS & CO</a></li>
          </ol>
        </div>
        </div>
    </section>
  )
}

export default Hero
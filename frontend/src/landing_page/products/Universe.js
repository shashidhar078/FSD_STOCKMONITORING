import React from 'react'

function Universe() {
  return (
    <div className="container text-center">
       <div className="mt-5">
          <h1>The Zerodha Universe</h1>
          <p>Extend your trading and investment experience even further with our partner platforms</p>
       </div>
       <div className="row mt-5 mb-5">
       
        <div className="col-4 p-5 text-small text-muted">
          <img src="media/images/zerodhaFundhouse.png" className="img-fluid"/>
          <p>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
        </div>
        <div className="col-4 p-5 text-small text-muted">
          <img src="media/images/sensibullLogo.svg" className="img-fluid"/>
          <p>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest,FII/DII, and more.</p>
        </div>
        <div className="col-4 p-5 text-small text-muted">
          <img src="media/images/streakLogo.png" className="img-fluid"/>
          <p>Systematic trading platform that allows you to create and backtest strategies without coding</p>
        </div>
        <div className="col-4 p-5 text-small text-muted">
          <img src="media/images/smallcaseLogo.png" className="img-fluid"/>
          <p>Thematic investment platform that helps you invest in diversified baskets of stocks on ETFs.</p>
        </div>
        <div className="col-4 p-5 text-small text-muted">
          <img src="media/images/smallcaseLogo.png" className="img-fluid"/>
          <p>Thematic investment platform that helps you invest in diversified baskets of stocks on ETFs.</p>
        </div>
        <div className="col-4 p-5 text-small text-muted">
          <img src="media/images/dittoLogo.png" className="img-fluid"/>
          <p>Personalized advice on life and health insurance.No spam and no mis-selling</p>
        </div>
        <button className="p-2 btn btn-primary fs-5 mt-4 mb-5" style={{width:"20%"  , margin:"0 auto"}}>Sign up for free</button>
      </div>
    </div>
  )
}

export default Universe
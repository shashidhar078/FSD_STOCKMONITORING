import React from 'react'

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-3 p-5 border-bottom">
        <h1>Pricing</h1>
        <h5 className="text-muted">Free equity investments and flat ₹20 trady and F&O trades</h5>
      </div>
      <div className="row">
        <div className="col-4 p-5">
          <img src="media/images/pricingEquity.svg"/>
          <h2>Free equity delivery</h2>
          <p className="text-muted p-2">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/pricing0.svg"/>
          <h2>Intraday and F&O trades</h2>
          <p className="text-muted p-2">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/pricingMF.svg"/>
          <h2>Free direct MF</h2>
          <p className="text-muted p-2">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
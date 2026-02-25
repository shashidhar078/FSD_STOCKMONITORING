import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 border-top">
        <div className="col-8">
          <a href="" style={{ textDecoration: "none" }} className="text-center">
            <h4>Brokerage calculator</h4>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.3", fontSize:"15px" }}
            className="text-muted"
          >
            <li>
              Calls & Trade and RMS auto-squaredoff:Additional charges of ₹59 +
              GST per order{" "}
            </li>
            <li>Digital contract notes will be sent via e-mail</li>
            <li>
              Physical copies of contract notes,if required, shall be charged
              ₹20 per contract note.Courier charges apply{" "}
            </li>
            <li>
              if the account is in debit balance,any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order
            </li>
          </ul>
        </div>
        <div className="col-4">
          <a href="" style={{ textDecoration: "none" }} className="text-center">
            <h4>List of charges</h4>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;

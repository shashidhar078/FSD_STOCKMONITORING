import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        
        <div className="col-6 p-5">
          <h1 className="fs-4 mb-3">{productName}</h1>

          <p className="text-muted">{productDescription}</p>

          <a href={learnMore} className="text-decoration-none">
            Learn More
          </a>
          <i className="fa fa-long-arrow-right ms-2"></i>
        </div>

        <div className="col-6 text-center">
          <img
            src={imageUrl}
            className="img-fluid"
            alt={productName}
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;

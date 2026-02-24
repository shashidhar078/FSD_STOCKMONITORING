import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-3 mt-5">
          <img src={imageUrl} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <br/>
          <p className="text-muted">{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
            Try demo
          </a>{" "}
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          <a href={learnMore} style={{ textDecoration: "none" }}>
            Learn More
          </a>{" "}
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
            <img src="media/images/googlePlayBadge.svg" />
          </a>
          <a href={appStore}>
            <img src="media/images/appstoreBadge.svg" />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;

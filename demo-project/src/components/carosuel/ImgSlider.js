  import React from 'react'
import "./ImgSlider.css"
import banner4 from "./../../assets/banner4.jpeg";
import banner2 from "./../../assets/banner2.jpg";
import banner3 from "./../../assets/banner3.jpg";

export default function ImgSlider() {
  return (
   <React.Fragment>
    <div id="carousel-example-autoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img src={banner4}
       className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={banner2} 
      className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={banner3} 
      className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carousel-example-autoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carousel-example-autoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   </React.Fragment>
  )
}

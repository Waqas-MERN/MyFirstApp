import React from 'react'


export default function Hero() {
  return (
    <div>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/2387877/pexels-photo-2387877.jpeg?auto=compress&cs=tinysrgb&w=600" 
      className="d-block" width="1120px" height="400px" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/15334824/pexels-photo-15334824.jpeg?auto=compress&cs=tinysrgb&w=600" 
      className="d-block" width="1120px" height="400px" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/3965176/pexels-photo-3965176.jpeg?auto=compress&cs=tinysrgb&w=600" 
      className="d-block" width="1120px" height="400px" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

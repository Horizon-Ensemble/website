import React from "react";
import HorizonPondEnsemble from "../images/HorizonPondEnsemble.jpg";
import HorizonImage2 from "../images/HorizonEnsemble2.jpg";
import HorizonImage3 from "../images/HorizonEnsemble3.jpg";


class Carousel extends React.Component {
  render() {
    return <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={HorizonPondEnsemble} alt="First slide" style={{height: '75vh', width: '75vh'}}/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={HorizonImage2} alt="Second slide" style={{height: '75vh', width: '75vh'}}/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={HorizonImage3} alt="Third slide" style={{height: '75vh', width: '75vh'}}/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
  }
}

export default Carousel;
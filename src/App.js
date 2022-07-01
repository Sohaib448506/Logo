import { useState } from "react";
import "./App.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import mainImage from "./asset/diagram-01.png";
import img1 from "./asset/diagram-02.png";
import img2 from "./asset/diagram-03.png";
import img3 from "./asset/diagram-04.png";
import img4 from "./asset/diagram-05.png";
import img5 from "./asset/diagram-06.png";
import img6 from "./asset/diagram-07.png";
function App() {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  //img2
  const [isHovering2, setIsHovering2] = useState(false);
  const handleMouseOver2 = () => {
    setIsHovering2(true);
  };
  const handleMouseOut2 = () => {
    setIsHovering2(false);
  };

  //img3
  const [isHovering3, setIsHovering3] = useState(false);
  const handleMouseOver3 = () => {
    setIsHovering3(true);
  };
  const handleMouseOut3 = () => {
    setIsHovering3(false);
  };
  //img4
  const [isHovering4, setIsHovering4] = useState(false);
  const handleMouseOver4 = () => {
    setIsHovering4(true);
  };
  const handleMouseOut4 = () => {
    setIsHovering4(false);
  };
  //img5
  const [isHovering5, setIsHovering5] = useState(false);
  const handleMouseOver5 = () => {
    setIsHovering5(true);
  };
  const handleMouseOut5 = () => {
    setIsHovering5(false);
  };
  //img6
  const [isHovering6, setIsHovering6] = useState(false);
  const handleMouseOver6 = () => {
    setIsHovering6(true);
  };
  const handleMouseOut6 = () => {
    setIsHovering6(false);
  };
  return (
    <>
      <div className="row">
        <div className="col-12 justify-content-center">
          <div className="container container-logo">
            <div className="main-image">
              <div className="forWidth d-flex">
                <a href="">
                  {" "}
                  <img src={mainImage} alt="" />
                </a>
              </div>
            </div>
            <div
              className="img1 d-flex"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <a href="">
                {" "}
                <img src={img1} alt="" />
              </a>
            </div>
            <div
              className="img2 d-flex"
              onMouseOver={handleMouseOver2}
              onMouseOut={handleMouseOut2}
            >
              <a href="">
                {" "}
                <img src={img4} alt="" />
              </a>
            </div>
            <div
              className="img3 d-flex"
              onMouseOver={handleMouseOver3}
              onMouseOut={handleMouseOut3}
            >
              <a href="">
                {" "}
                <img src={img2} alt="" />
              </a>
            </div>
            <div
              className="img4 d-flex"
              onMouseOver={handleMouseOver4}
              onMouseOut={handleMouseOut4}
            >
              <a href="">
                {" "}
                <img src={img3} alt="" />
              </a>
            </div>
            <div
              className="img5 d-flex"
              onMouseOver={handleMouseOver5}
              onMouseOut={handleMouseOut5}
            >
              <a href="">
                {" "}
                <img src={img6} alt="" />
              </a>
            </div>
            <div
              className="img6 d-flex"
              onMouseOver={handleMouseOver6}
              onMouseOut={handleMouseOut6}
            >
              <a href="">
                {" "}
                <img src={img5} alt="" />
              </a>
            </div>
            <div
              className={
                isHovering ? " d-flex description active" : "description"
              }
            >
              <div className="hexagon p1">
                <p>
                  {" "}
                  Img 1Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil dolores qui commodi inventore? Deserunt aut nesciunt eaq
                </p>
              </div>
            </div>
            <div
              className={
                isHovering2 ? " d-flex description active" : "description"
              }
            >
              <div className="hexagon p2">
                <p>
                  {" "}
                  Img2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil dolores qui commodi inventore? Deserunt aut nesciunt e
                </p>
              </div>
            </div>
            <div
              className={
                isHovering3 ? " d-flex description active" : "description"
              }
            >
              <div className="hexagon p2">
                <p>
                  {" "}
                  Img3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil dolores qui commodi inventore? Deserunt aut nesciunt e
                </p>
              </div>
            </div>
            <div
              className={
                isHovering4 ? " d-flex description active" : "description"
              }
            >
              <div className="hexagon p2">
                <p>
                  {" "}
                  Img4 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil dolores qui commodi inventore? Deserunt aut nesciunt e
                </p>
              </div>
            </div>
            <div
              className={
                isHovering5 ? " d-flex description active" : "description"
              }
            >
              <div className="hexagon p2">
                <p>
                  {" "}
                  Img5 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil dolores qui commodi inventore? Deserunt aut nesciunt e
                </p>
              </div>
            </div>
            <div
              className={
                isHovering6 ? " d-flex description active" : "description"
              }
            >
              <div className="hexagon p2">
                <p>
                  {" "}
                  Img6 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil dolores qui commodi inventore? Deserunt aut nesciunt e
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

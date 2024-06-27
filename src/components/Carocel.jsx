import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import demo1 from "../assets/workflow.png";
import demo2 from "../assets/caro1.jpeg";
import demo3 from "../assets/car2.jpg";

const Carocel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Div className="slider-container">
      <Slider {...settings}>
        <Slide>
          <img src={demo1} alt="" />
        </Slide>
        <Slide>
          <img src={demo2} alt="" />
        </Slide>
        <Slide>
          <img src={demo3} alt="" />
        </Slide>
      </Slider>
    </Div>
  );
};

export default Carocel;

const Slide = styled.div`
  height: 250px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Div = styled.div`
  /* background-color: red; */
  margin: 50px 0px;
`;

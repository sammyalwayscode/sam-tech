/* eslint-disable react/prop-types */
import { TbArrowBigUpLines } from "react-icons/tb";
import { FaRegComments } from "react-icons/fa";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import styled from "styled-components";
// import logo from "../../assets/react.svg";
// import demo from "../../assets/demo.jpg";

import Swal from "sweetalert2";

const HomeCard = (props) => {
  const alertUser = () => {
    Swal.fire({
      title: "Update Coming Soon!",
      text: "The detail page is not yet available",
      icon: "info",
    });
  };
  return (
    <Container onClick={alertUser}>
      <CardLogo>
        <img src={props.logo} alt="icon" />
      </CardLogo>
      <CardTitle>{props.title}</CardTitle>

      <DateTime>
        {props.date} ● {props.time} min ago
      </DateTime>

      <CardImage>
        <img src={props.image} alt="Card Image" />
      </CardImage>
      <CardIcons>
        <section>
          <TbArrowBigUpLines />
          <span> {props.voteNum} </span>
        </section>
        <section>
          <FaRegComments />
          <span> {props.comments} </span>
        </section>
        <section>
          <MdOutlineBookmarkBorder />
          <span> {props.bookmark} </span>
        </section>
        <section>
          <FaLink />
        </section>
      </CardIcons>
    </Container>
  );
};

export default HomeCard;

const Container = styled.div`
  height: 400px;
  width: 310px;
  background-color: #f5f8fc;
  border: 1px solid lightgray;
  margin: 10px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media (max-width: 500px) {
    width: 95%;
  }
`;
const CardLogo = styled.div`
  /* background-color: aqua; */
  display: flex;
  align-items: center;

  margin-bottom: 15px;
  img {
    height: 35px;
    width: 35px;
    border-radius: 50px;
    /* background-color: red; */
    border: 0.5px solid lightgray;
    object-fit: cover;
  }
`;
const CardTitle = styled.div`
  font-weight: 800;
  height: 100px;
  /* background-color: pink; */
`;
const DateTime = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #3b3b3b;
  margin: 5px 0px;
`;
const CardImage = styled.div`
  height: 170px;
  /* background-color: brown; */
  border-radius: 15px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
    border: 0.5px solid lightgray;
  }
`;
const CardIcons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  margin-bottom: auto;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
    padding: 5px;
    transition: all 350ms;

    &:hover {
      background-color: rgb(134 239 172);

      border-radius: 3px;
      transition: all 350ms;
    }

    span {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

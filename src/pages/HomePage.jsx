import HomeCard from "../components/block/HomeCard";
import logo from "../assets/react.svg";
import logo2 from "../assets/logggg.jpg";
import logo3 from "../assets/loggg.png";
import demo from "../assets/demo.jpg";
import demo2 from "../assets/code333333333.png";
import demo3 from "../assets/workflow.png";
import styled from "styled-components";
import Carocel from "../components/Carocel";

const HomePage = () => {
  return (
    <Container>
      <CarocelHolder>
        <Carocel />
      </CarocelHolder>
      <HomeCardHolder>
        <HomeCard
          logo={`${logo}`}
          title="🥇The first framework that lets you visualize your React/NodeJS app 🤯"
          image={`${demo}`}
          date="20th May 2024"
          time="20"
          voteNum="20"
          comments="3"
          bookmark="11"
        />
        <HomeCard
          logo={`${logo2}`}
          title="I’ve worked in IT for over 10 years. Here are 5 things I wish I knew when I started"
          image={`${demo2}`}
          date="27th May 2024"
          time="30"
          voteNum="67"
          comments="23"
          bookmark="24"
        />
        <HomeCard
          logo={`${logo3}`}
          title="I Put GitButler To The Test: A New Kind of Git Client by GitHub's Co-Founder"
          image={`${demo3}`}
          date="27th June 2024"
          time="24"
          voteNum="92"
          comments="50"
          bookmark="38"
        />
      </HomeCardHolder>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  margin-top: 20px;
`;

const CarocelHolder = styled.div`
  max-width: 90%;
  /* background-color: yellow; */
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
`;

const HomeCardHolder = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

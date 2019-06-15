import React from "react";
import styled from "styled-components";
import Content from "./Content";
import ProfileInfo from "./ProfileInfo";

const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 40px 0 0;

  @media (max-width: 769px) {
    width: 90%;
  }

  @media (max-width: 1025px) {
    width: 73%;
    padding: 150px 0 0;
  }

  @media (max-width: 1440px) {
    width: 70%;
    padding: 40px 0 60px;

    p {
      font-size: 16px;
    }

    a {
      font-size: 16px;
    }

    .footer p {
      font-size: 16px;
    }
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 65px;

  @media (max-width: 769px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
  }
`;

const HomePage = () => {
  return (
    <div data-aos="fade-up">
      <Wrapper>
        <Container>
          <ProfileInfo />
          <Content />
        </Container>
      </Wrapper>
    </div>
  );
};

export default HomePage;

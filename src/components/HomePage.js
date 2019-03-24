import React, { Component } from 'react';
import styled from 'styled-components';
import Content from './Content';
import ProfilePicture from './ProfilePicture';
import Footer from './Footer';

const Page = styled.div`
  height: 100vh;
  overflow: scroll;
`;

const Wrapper = styled.div`
  width: 55%;
  margin: 0 auto;
  padding: 85px 0 0;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 65px;
`;

export class HomePage extends Component {
  render() {
    return (
      <Page>
        <Wrapper>
          <Container>
            <ProfilePicture />
            <Content />
          </Container>
          <Footer />
        </Wrapper>
      </Page>
    );
  }
}

export default HomePage;

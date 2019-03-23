import React, { Component } from 'react';
import styled from 'styled-components';
import Content from './Content';
import ProfilePicture from './ProfilePicture';

const Wrapper = styled.div`
  width: 40%;
  margin: 0 auto;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

export class HomePage extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <ProfilePicture />
          <Content />
        </Container>
      </Wrapper>
    );
  }
}

export default HomePage;

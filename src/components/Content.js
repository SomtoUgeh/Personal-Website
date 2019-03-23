import React from 'react';
import styled from 'styled-components';

const NameHeader = styled.h1`
  font-size: 60px;
  font-weight: 800;
`;

const Span = styled.span`
  position: relative;
  cursor: pointer;

  &::after {
    display: block;
    content: '';
    width: 100%;
    height: 4px;
    background: red;
    position: absolute;
    right: 0;
    top: 11px;
    opacity: 0.4;
    transition: all 300ms ease-in-out;
  }

  &:hover::after {
    top: 15px;
    height: 2px;
  }
`;

const Content = () => {
  return (
    <div>
      <NameHeader>Hello, I'm Somto.</NameHeader>
      <p>
        I make stuff for the web with JavaScript <span>😉</span>
      </p>

      <p>
        My passion is creating, and I find happiness in being a better me today than I was
        yesterday.
      </p>

      <p>
        I am a <Span>JavaScript Developer</Span>, currently living in Lagos, Nigeria. I work as a{' '}
        <Span>Frontend Developer</Span> at <Span>Softcom</Span> <span>'super cool place'</span>. I
        love my work, it has allowed me to understand the design and development coverage of digital
        products.
      </p>

      <h3>Tool Set</h3>
      <span>React</span>
      <span>Angular</span>
      <span>CSS and some frameworks</span>
      <span>Django</span>
      <span>Node</span>

      <p>
        Outside of Work, I watch a lot of TV shows and I love to hang out with my friends. I also
        really love <Span>Barcelona</Span>
      </p>

      <p>
        Previously, I have had to work across multiple roles including product design, print design
        and web development. Though my expertise these days are more focused on experimentation,
        strategy, user research, usability testing and front-end implementation.
      </p>

      <p>I have a background in architecture and urban planning</p>

      <p>I'm currently unavailable for work, but if you just want to chat, you can contact me.</p>

      <div>
        <h3>Currently Learning</h3>
        <p>Next js and GraphQL</p>
      </div>
    </div>
  );
};

export default Content;

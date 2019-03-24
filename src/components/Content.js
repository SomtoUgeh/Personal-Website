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

const Group = styled.div`
  margin: 0;
  /* padding: 30px 0; */
`;

const WriteUp = styled.p`
  margin: 0 !important;
  padding: 16px 0 0 !important;
  font-size: 18px;
`;

const Content = () => {
  return (
    <div>
      <h2>Profile</h2>

      <WriteUp>
        Hello, I'm Somto. I make stuff for the web with JavaScript <span>😉</span>
      </WriteUp>

      <Group>
        <WriteUp>
          My passion is creating, and I find happiness in being a better me today than I was
          yesterday.
        </WriteUp>

        <WriteUp>
          I am a <Span>JavaScript Developer</Span>, currently living in Lagos, Nigeria.
        </WriteUp>
        <WriteUp>
          I work as a <Span>Frontend Developer</Span> at <Span>Softcom</Span>. I love my work, it
          has allowed me to understand the design and development coverage of digital products.
        </WriteUp>
      </Group>

      <div class="box">
        <ul class="directory-list">
          <li class="folder">Tool Set</li>
          <ul className="tools">
            <li>
              <span>React</span>
            </li>
            <li>
              <span>Angular</span>
            </li>
            <li>
              <span>CSS</span>
            </li>
            <li>
              <span>Django</span>
            </li>
            <li>
              <span>Node JS</span>
            </li>
          </ul>
        </ul>
      </div>

      <Group>
        <WriteUp>
          Previously, I have had to work across multiple roles including product design, print
          design and web development. Though my expertise these days are more focused on
          experimentation, strategy, user research, usability testing and front-end implementation.
        </WriteUp>

        <WriteUp>I have a background in architecture and urban planning</WriteUp>

        <WriteUp>
          Outside of Work, I watch a lot of TV shows and I love to hang out with my friends. I also
          really love <Span>Barcelona</Span>.
        </WriteUp>

        <WriteUp>
          I'm currently unavailable for work, but if you just want to chat, you can{' '}
          <Span>contact me</Span>.
        </WriteUp>
      </Group>
    </div>
  );
};

export default Content;

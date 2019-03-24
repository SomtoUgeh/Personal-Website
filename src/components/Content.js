import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    background: red;
    position: absolute;
    right: 0;
    bottom: 3px;
    opacity: 0.4;
    transition: all 300ms ease-in-out;
  }

  &:hover::after {
    bottom: 0;
    height: 2px;
  }
`;

const LinkSpan = styled.a`
  position: relative;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    right: -2px;
    border-style: solid;
    border-width: 0 8px 8px 0;
    border-color: transparent #b0bec5 transparent transparent;
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    background: red;
    position: absolute;
    right: 0;
    bottom: 3px;
    opacity: 0.4;
    transition: all 300ms ease-in-out;
  }

  &:hover::after {
    bottom: 0;
    height: 2px;
  }
`;

const Group = styled.div`
  margin: 0;
`;

const WriteUp = styled.p`
  padding: 16px 0 0 !important;
  line-height: 1.4;
`;

const Content = () => {
  return (
    <div>
      <h1>Profile</h1>

      <WriteUp>
        Hello, I'm <span>Somto</span>. I make stuff for the web with JavaScript <span>😉</span>
      </WriteUp>

      <Group>
        <WriteUp>
          My passion is creating, and I find happiness in being a better me today than I was
          yesterday.
        </WriteUp>

        <WriteUp>
          I am a <span>JavaScript Developer</span>, currently living in Lagos, Nigeria.
        </WriteUp>
        <WriteUp>
          I work as a <span>Frontend Developer</span> at <LinkSpan>Softcom</LinkSpan>. I love my
          work, it has allowed me to understand the design and development coverage of digital
          products.
        </WriteUp>
      </Group>

      <div class="box">
        <ul class="directory-list">
          <li class="folder">Tool Set</li>
          <ul className="tools">
            <li>
              <span>
                <i class="fab fa-react" />
              </span>
              <span class="tool">React</span>
            </li>
            <li>
              <span>
                <i class="fab fa-angular" />
              </span>
              <span class="tool">Angular</span>
            </li>
            <li>
              <span>
                <i class="fab fa-css3-alt" />
              </span>
              <span class="tool">CSS</span>
            </li>
            <li>
              <span>
                <i class="fab fa-python" />
              </span>
              <span class="tool">
                Python <br /> (Django)
              </span>
            </li>
            <li>
              <span>
                <i class="fab fa-node-js" />
              </span>
              <span class="tool">Node JS</span>
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
          really love <LinkSpan>Barcelona</LinkSpan>.
        </WriteUp>

        <WriteUp>
          I'm currently unavailable for work, but if you just want to chat, you can{' '}
          <Span>reach out</Span>.
        </WriteUp>
      </Group>
    </div>
  );
};

export default Content;

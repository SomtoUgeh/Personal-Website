import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  @media (max-width: 769px) {
    order: 1;
  }
`;

const Span = styled.a`
  position: relative;
  cursor: pointer;
  color: black;
  text-decoration: none;

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
  color: black;
  text-decoration: none;

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
  padding: 18px 0 0 !important;
  line-height: 1.5;
`;

const Content = () => {
  return (
    <Container>
      <h1>Profile</h1>

      <WriteUp>
        Hello, I'm <span>Somtochukwu Medua-Ugeh</span>, Somto for short! I make stuff for the web
        with JavaScript <span>😉</span>
      </WriteUp>

      <Group>
        <WriteUp>
          My passion is creating, and I find happiness in being a better me today than I was
          yesterday. I build, operate & sometimes rescue full-stack web applications.
        </WriteUp>

        <WriteUp>
          I am a <span>JavaScript Developer</span>, currently working at{' '}
          <LinkSpan href="https://www.softcom.ng" target="_blank">
            Softcom
          </LinkSpan>
          , Lagos, Nigeria.
        </WriteUp>
        <WriteUp>
          I love my work, it has allowed me to understand design and development of digital products
          and how it affects our users.
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
          Previously, I have had to work to start-ups and community driven initiatives. I worked
          multiple roles; ranging from community manager to front-end developer. These days, I am
          more focused on experimentation, strategy, and front-end implementation of products.
        </WriteUp>

        <WriteUp>
          Where can you see my work?{' '}
          <Span href="mailto:hello@somto.dev?subject=Hello Somto!">Email me</Span>. and I will
          prepare work samples relevant to your project with accompanying details.
        </WriteUp>

        <WriteUp>
          Outside of work, I watch a lot of TV shows and I love to hang out with my friends. I also
          really love <LinkSpan href="https://www.fcbarcelona.com/en/">Barcelona</LinkSpan>{' '}
          <span style={{ marginLeft: '3px' }}>⚽️</span>
        </WriteUp>

        <WriteUp>
          I'm currently unavailable for work, but if you just want to chat, you can{' '}
          <Span href="mailto:hello@somto.dev?subject=Hello Somto!">reach out</Span>.
        </WriteUp>
      </Group>
    </Container>
  );
};

export default Content;

import React from "react";
import styled from "styled-components";
import { Span, LinkSpan, NavLinks, Folder, Icons } from "./Setup";

const Container = styled.div`
  @media (max-width: 769px) {
    order: 1;
  }
`;

const Group = styled.div`
  margin: 0;
`;

const WriteUp = styled.p`
  padding: 18px 0 0 !important;
  line-height: 1.5;
`;

const Nav = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-auto-flow: column;
  margin-bottom: 35px;
`;

const Content = () => {
  return (
    <Container>
      <Nav>
        <h1>Hi!</h1>

        <NavLinks
          variant="default"
          href="https://www.notion.so/Blog-83ab00afd11a4192b0060fbc4be2c223"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog!
        </NavLinks>
      </Nav>

      <WriteUp>
        I am <span>Somtochukwu Medua-Ugeh</span>, Somto for short! I make stuff for the web with
        JavaScript <span>😉</span>
      </WriteUp>

      <Group>
        <WriteUp>
          My passion is creating, and I find happiness in being a better me today than I was
          yesterday. I build, operate & sometimes rescue full-stack web applications.
        </WriteUp>

        <WriteUp>
          I am a <span>JavaScript Developer</span>, currently working at{" "}
          <LinkSpan variant="default" href="https://www.softcom.ng" target="_blank">
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
          <Folder>Tool Set</Folder>
          <ul className="tools">
            <Icons variant="default">
              <span>
                <i class="fab fa-react" />
              </span>
              <span>React</span>
            </Icons>
            <Icons variant="default">
              <span>
                <i class="fab fa-angular" />
              </span>
              <span class="tool">Angular</span>
            </Icons>
            <Icons variant="default">
              <span>
                <i class="fab fa-css3-alt" />
              </span>
              <span class="tool">CSS</span>
            </Icons>
            <Icons variant="default">
              <span>
                <i class="fab fa-python" />
              </span>
              <span class="tool">
                Python <br /> (Django)
              </span>
            </Icons>
            <Icons variant="default">
              <span>
                <i class="fab fa-node-js" />
              </span>
              <span class="tool">Node JS</span>
            </Icons>
          </ul>
        </ul>
      </div>

      <Group>
        <WriteUp>
          Previously, I have worked with start-ups and community driven initiatives. I worked
          multiple roles; ranging from community manager to front-end developer. These days, I am
          more focused on experimentation, strategy, and front-end implementation of products.
        </WriteUp>

        <WriteUp>
          Where can you see my work?{" "}
          <Span variant="default" href="mailto:hello@somto.dev?subject=Hello Somto!">
            Email me
          </Span>{" "}
          and I will prepare work samples relevant to your project with accompanying details.
        </WriteUp>

        <WriteUp>
          Outside of work, I watch a lot of TV shows and I love to hang out with my friends. I also
          really love{" "}
          <LinkSpan variant="default" href="https://www.fcbarcelona.com/en/" target="_blank">
            Barcelona
          </LinkSpan>{" "}
          <span style={{ marginLeft: "3px" }}>⚽️</span>
        </WriteUp>

        <WriteUp>
          I'm currently unavailable for work, but if you just want to chat, you can{" "}
          <Span variant="default" href="mailto:smugeh@gmail.com?subject=Hello Somto!">
            reach out
          </Span>
          .
        </WriteUp>
      </Group>
    </Container>
  );
};

export default Content;

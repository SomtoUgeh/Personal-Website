import React from 'react';
import styled from 'styled-components';
import profilePicture from '../img/Somto.JPG';

const ImageContainer = styled.div`
  width: 200px;

  @media (max-width: 769px) {
    order: 2;
    text-align: center;
    margin: 30px auto 0;
    width: 230px;
  }
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 6px;
  object-fit: contain;
`;

const Span = styled.a`
  position: relative;
  color: black;
  text-decoration: none;
  cursor: pointer;
  font-size: 18px;
  font-family: 'Akkurat-Light', sans-serif;

  &::after {
    display: block;
    content: '';
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

const LogoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  justify-content: center;
`;

const ProfilePicture = () => {
  return (
    <ImageContainer>
      <Image src={profilePicture} alt="Somtochukwu_Medua-Ugeh" />
      <div style={{ marginTop: '10px' }}>
        <h4 className="contact">Get in touch</h4>
        <Span href="mailto:hello@somto.dev?subject=Hello Somto!">hello@somto.dev</Span>

        <LogoContainer>
          <a href="https://github.com/SomtoUgeh" target="_blank">
            <span class="svg-width">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>GitHub icon</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </span>
          </a>

          <a href="https://twitter.com/SomtoUgeh" target="_blank">
            <span class="svg-width">
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="1.414"
              >
                <path
                  d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z"
                  fill-rule="nonzero"
                />
              </svg>
            </span>
          </a>

          <a href="https://medium.com/@Mr_Ugeh" target="_blank">
            <span class="svg-width">
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="1.414"
              >
                <path d="M11.824 12.628l-.276.45.798.398 2.744 1.372c.15.076.294.11.418.11.278 0 .467-.177.467-.492V5.883l-4.15 6.745zm4.096-8.67c-.004-.003 0-.01-.003-.012l-4.825-2.412c-.06-.03-.123-.038-.187-.044-.016 0-.03-.01-.047-.01-.184 0-.368.092-.467.254l-.24.39-.5.814-1.89 3.08 1.89 3.076.5.813.5.812.59.95 4.71-7.64c.02-.03.01-.06-.02-.08zm-6.27 7.045L7.17 6.97l-.295-.477-.294-.477-.25-.416v4.867l3.32 1.663.5.25.5.25-.5-.813-.5-.813zM.737 1.68L.59 1.608c-.085-.042-.166-.062-.24-.062-.206 0-.35.16-.35.427v10.162c0 .272.2.594.442.716l4.145 2.08c.107.06.208.08.3.08.257 0 .438-.2.438-.53V4.01c0-.02-.012-.04-.03-.047L.738 1.68z" />
              </svg>
            </span>
          </a>

          <a href="https://open.spotify.com/playlist/1IL5YgoG99GqRMsHD0Vi42" target="_blank">
            <span class="svg-width">
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="1.414"
              >
                <path
                  d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.56-8-8-8zm3.68 11.56c-.16.24-.44.32-.68.16-1.88-1.16-4.24-1.4-7.04-.76-.28.08-.52-.12-.6-.36-.08-.28.12-.52.36-.6 3.04-.68 5.68-.4 7.76.88.28.12.32.44.2.68zm.96-2.2c-.2.28-.56.4-.84.2-2.16-1.32-5.44-1.72-7.96-.92-.32.08-.68-.08-.76-.4-.08-.32.08-.68.4-.76 2.92-.88 6.52-.44 9 1.08.24.12.36.52.16.8zm.08-2.24C10.16 5.6 5.88 5.44 3.44 6.2c-.4.12-.8-.12-.92-.48-.12-.4.12-.8.48-.92 2.84-.84 7.52-.68 10.48 1.08.36.2.48.68.28 1.04-.2.28-.68.4-1.04.2z"
                  fill-rule="nonzero"
                />
              </svg>
            </span>
          </a>
        </LogoContainer>
      </div>

      <div className="footer">
        <p>©️ 2019 Somto M.Ugeh</p>
      </div>
    </ImageContainer>
  );
};

export default ProfilePicture;

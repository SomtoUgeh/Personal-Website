import React from 'react';
import styled from 'styled-components';
import profilePicture from '../img/Somto.JPG';

const ImageContainer = styled.div`
  width: 200px;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 6px;
  object-fit: contain;
`;

const ProfilePicture = () => {
  return (
    <ImageContainer>
      <Image src={profilePicture} alt="Somtochukwu_Medua-Ugeh" />
    </ImageContainer>
  );
};

export default ProfilePicture;

import React from 'react';
import styled from 'styled-components';
import profilePicture from '../img/Somto.JPG';

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 6px;
`;

const ProfilePicture = () => {
  return <Image src={profilePicture} alt="Somtochukwu_Medua-Ugeh" />;
};

export default ProfilePicture;

import React from 'react';
import styled from 'styled-components';

export interface CardImageProps {
  src: string;
}

export const CardImage: React.FC<CardImageProps> = ({ src }) => {
  return <Image src={src} />;
};

const Image = styled.img`
  flex-shrink: 0;
`;

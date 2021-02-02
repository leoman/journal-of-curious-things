import styled from 'styled-components';

export const Title = styled.div<any>`
  margin: 0 auto;
  display: flex;
  align-items: center;
  display: ${props => props.sticky ? `none` : "flex"};
`;

export const TextWrapper = styled.div`
  position: relative;
  max-width: 75%;
  margin: 0 auto;
  display: inline-flex;
`;

export const ImageGallery = styled.div`
  display: flex;
`;

export const ImageWrapper = styled.div`
  width: calc(100% / 6);
  display: block;
  position: relative;
  margin: auto;
  overflow: hidden;
`;

export const ImageComponent = styled.img`
  max-width: 100%;
  transition: all 1.0s;
  display: block;
  width: 100%;
  height: auto;
  transform: scale(1);
  max-height: 100px;
  -o-object-fit: cover;
  object-fit: cover;

  &:hover {
    transform: scale(1.4);
  }
`;

export const H1 = styled.h1`
  font-size: 6rem;
  line-height: 5rem;
  margin: 40px 0 60px;
  text-align: center;
  font-family: 'Sacramento', cursive;
`;

export const H2 = styled.h2`
  font-size: 1rem;
  line-height: 1rem;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 300;
  position: absolute;
  right: 80px;
  bottom: 20px;
`;

export const StickyWrapper = styled.div<any>`
  top: 0;
  width: 100%;
  z-index: 100;
  height: 161px;
  transition: all 1s ease-in;
`;


export const HeaderWrapper = styled.header<any>`
  height: ${props => props.sticky ? `161px` : "auto"};
  position: ${props => props.sticky ? `fixed` : "relative"};
  z-index: 100;
`;

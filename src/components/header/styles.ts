import styled from 'styled-components';

export const Title = styled.div<any>`
  margin: 0 auto;
  display: flex;
  align-items: center;
  display: ${props => props.sticky ? `none` : "flex"};
  @media only screen 
  and (max-device-width: 1024px) {
    display: block;
    margin: 0;
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  position: relative;
  max-width: 75%;
  margin: 0 auto;
  display: inline-flex;

  @media only screen 
  and (max-device-width: 1024px) {
    width: 100%;
    display: block;
    margin: 0;
    max-width: 100%;
  }

  @media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) {
    width: 100%;
    display: block;
    margin: 0;
    max-width: 100%;
  }

`;

export const ImageGallery = styled.div`
  display: flex;
  width: 100%;
  margin: 0;
  /* @media only screen 
  and (max-device-width: 1024px) {
    div:nth-child(even) {
      display: none;
    }
  } */
`;

export const ImageWrapper = styled.div`
  width: calc(100% / 6);
  display: block;
  position: relative;
  margin: auto;
  overflow: hidden;
  @media only screen 
  and (max-device-width: 1024px) {
    margin: 0;
    /* div:nth-child(even) {
      width: calc(100% / 3);
    } */
  }
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
  font-weight: bold;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    line-height: 2rem;
    margin: 1rem 0 1rem;
    word-wrap: break-word;
  }

  @media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) {
    font-size: 2rem;
    line-height: 2rem;
    margin: 1rem 0 1rem;
    word-wrap: break-word;
  }

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

  @media only screen and (max-width: 768px) {
    text-align: right;
    position: relative;
    margin-top: 1rem;
    right: 0;
    bottom: 0;
    display: none;
  }

  @media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) {
    text-align: right;
    position: relative;
    margin-top: 1rem;
    right: 0;
    bottom: 0;
    display: none;
  }
`;

export const StickyWrapper = styled.div<any>`
  top: 0;
  width: 100%;
  z-index: 100;
  height: 161px;
  transition: all 1s ease-in;

  @media only screen and (max-width: 768px) {
    height: auto;
    position: relative;
  }
  @media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) {
    height: auto;
    position: relative;
  }
`;


export const HeaderWrapper = styled.header<any>`
  height: ${props => props.sticky ? `161px` : "auto"};
  position: ${props => props.sticky ? `fixed` : "relative"};
  z-index: 1100;
  width: 100%;

  @media only screen and (max-width: 768px) {
    height: auto;
    position: relative;
  }

  @media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) {
    height: auto;
    position: relative;
  }
`;

export const MobileNavToggle = styled.div`
  display: none;
  position: relative;
  font-size: 3rem;
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    top: 0.5rem;
    left: 1.5rem;
    width: 1.5rem;
    height: 0.125rem;
    border-top: 0.375rem double #000;
    border-bottom: 0.375rem double #000;
    font-size: 3rem;
  }

  @media only screen 
  and (max-device-width: 1024px) {
    display: block;
    height: 0;
    position: relative;
    padding-left: 1.25em;
  }
`;

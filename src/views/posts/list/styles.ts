import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
  grid-auto-rows: 10px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(500px,1fr));
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(400px,1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(350px,1fr));
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
  }

  @media only screen 
  and (max-device-width: 1024px) {
    padding: 0 1.2rem;
  }

`;

export const GridItem = styled.div`
  background-color: #fff;
`;

export const EffectWrapper = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  width: auto;
  max-width: 100%;
  height: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover .overlay {
    transform: translate3d(0, 0, 0);
    animation-delay: 1s;
    transition: .5s all;   
    transition-delay: .2s; 
  }
  &:hover .post-wrapper {
    transform: translate3d(0, 100%, 0);
  }
  .post-wrapper {
    transition-delay: .2s; 
  }
`;

export const PostWrapper = styled.div`
  transform: translate3d(0, 0, 0);
  transition: all 0.5s ease-in-out;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
`;

export const PostTitle = styled.h3`
  background: rgba(0, 0, 0, 0.6);
  text-align: center;
  color: #fff;
  font-size: 1.8rem;
  padding: 15px 10px;
  margin: 0;
  display: block;
  line-height: 1;
  width: 100%;
  font-family: 'Playfair Display', serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 1.2;
  box-sizing: border-box;
`;

export const Overlay = styled.div`
  transform: translate3d(0, 100%, 0);
  background: rgba(0, 0, 0, 0.6);
  transition: all 0.5s ease-in-out;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: top;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
`;

export const OverlayContent = styled.div`
  position: relative;
  padding: 2%;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  transform: translate3d(0, 0, 0);
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  float: left;
  transition: all 0.5s ease-in-out;

  img {
    display: block;
    height: auto;
    max-width: 100%;
  }
`;

export const ImageTitle = styled.h3`
  font-size: 1.4rem;
  color: #fff;
  text-transform: uppercase;
  margin: 5px 10px;
  display: block;
  box-sizing: border-box;
  padding: 0;
  line-height: 1;
  font-family: 'Playfair Display', serif;
`;

export const HR = styled.div`
  display: block;
  border: 0;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  width: 70%;
  margin: 0;
  padding: 0;
`;

export const Desc = styled.div`
  padding: 20px 10px;
  color: #fff;

  p {
    font-family: 'Raleway', sans-serif;
    font-size: 1rem;
  }
`;
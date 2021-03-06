import styled from 'styled-components';

export const NavigationWrapper = styled.div`
  background-color: var(--wisp-pink);
  box-shadow: 0 1px 3px 0 rgba(235, 64, 52, 0.1), 0 1px 2px 0 rgba(235, 64, 52, 0.06);
  background: linear-gradient(180deg, var(--wisp-pink), var(--carousel-pink));
  width: 100%;
`;

export const Links = styled.div`
  display: flex;
  justify-items: center;
  justify-content: center;
`;

export const LinkWrapper = styled.div`
  color: var(--white);
  font-size: 1.4rem;
  line-height: 1.4rem;
  padding: .7rem;
  margin: .5rem 1rem; 
  font-weight: 700;
  font-family: 'Barlow Condensed', sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 2px;
  text-shadow: 2px 2px 1px rgba(235, 64, 52, 0.9);
  position: relative;
  overflow: hidden;
  will-change: color;
  transition: color .25s ease-out; 

  &.current {
    color: #fc416a;
    text-shadow: 2px 2px 2px rgba(235, 64, 52, 0.5);
  }

  &:focus{
    outline: 2px solid #fff;
  }

  &::before, 
  &::after {
    content: "";
    width: 0;
    height: 3px;
    background-color: #fff;
    will-change: width;
    transition: width .1s ease-out;
    position: absolute;
    bottom: 0;
  }

  &::before{
    left: 50%;
    transform: translateX(-50%); 
  }

  &::after{
    right: 50%;
    transform: translateX(50%); 
  }

  &:hover::before, 
  &:hover::after,
  &.current::before,
  &.current::after {
    width: 100%;
    transition-duration: .2s;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: inherit;
`;
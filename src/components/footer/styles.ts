import styled from 'styled-components';
import { container } from '../../styles'

export const FooterWrapper = styled.footer`
  flex-shrink: 0;
  margin-top: 4rem;
  padding-bottom: 2rem;
  min-height: 100px;
  background-color: var(--wisp-pink);
  background: linear-gradient(180deg, var(--wisp-pink), var(--carousel-pink));
  box-shadow: 0px -20px 19px 3px var(--wisp-pink);
`;

export const Content = styled.div`
  ${container}
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  flex: 1 0 auto;
`;

export const ContentWrapper = styled.div`
  display: flex;
  margin: 0 2rem;
`;

export const Title = styled.div`
  width: 40%;
`;

export const H3 = styled.h4`
  font-size: 2rem;
  line-height: 2rem;
  margin: 10px 0 20px;
  font-family: 'Sacramento', cursive;
`;

export const Sidebar = styled.div`
  width: 60%;
  margin-left: 20px;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IMG = styled.img`
  margin-bottom: 1rem;
  width: 200px;
  height: 150px;
  clip-path: circle(72px at center);
  object-fit: cover;
  display: block;
`;

export const Text = styled.p`
  text-align: center;
  max-width: 60%;
  font-family: 'Heebo', sans-serif;
  font-size: 1.1rem;
`;
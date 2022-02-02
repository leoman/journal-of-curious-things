import styled from 'styled-components';

export const container = `
  width: 100%;
  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

interface ContentProps {
  readonly flex?: boolean
  readonly isSticky?: boolean
}

export const Content = styled.div<ContentProps>`
  ${container};
  margin-left: auto;
  margin-right: auto;
  flex: 1 0 auto;
  display: ${props => (props.flex ? 'flex' : 'block')};
  padding-top: ${props => (props.isSticky ? '380px' : '40px')}; 

  @media only screen and (max-width: 768px) {
    padding-top: 1rem;
    display: block;
  }
  @media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) {
    padding-top: 1rem;
    display: block;
  }
`;

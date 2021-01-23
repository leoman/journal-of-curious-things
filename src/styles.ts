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
}

export const Content = styled.div<ContentProps>`
  ${container};
  margin-left: auto;
  margin-right: auto;
  flex: 1 0 auto;
  display: ${props => (props.flex ? 'flex' : 'block')};
`;

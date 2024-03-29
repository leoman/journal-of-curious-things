import styled from "styled-components";

export const Content = styled.div<any>`
  flex: 1 1 auto;
  display: flex;
  /* overflow: hidden; */
  /* width: 100%; */
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: #f4f6f8;
  padding-left: ${props => props.showNavigation ? `256px` : "0"};
`;

import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  display: flex;
  /* max-width: 80%; */
  flex-direction: row;
  /* overflow: hidden; */
  vertical-align: bottom;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  &:figure::nth-child(3) {
    margin-right: 0;
  }
`;

export const Figure = styled.figure<any>`
  position: relative;
  /* background-color: white; */
  text-align: center;
  font-size: 15px;
  width: calc(25% - 1rem);
  max-height: 200px;
  box-sizing: border-box;
  margin: 1rem 1rem 1rem 0;
  padding: 0;
  cursor: pointer;
  /* box-shadow: 1px 2px 3px black; */
  overflow: hidden;
  /* transform : ${props => props.deg ? `rotate(${props.deg}deg)` : "rotate(0deg)"}; */
  transition: opacity .2s ease-out;
  border: 4px solid var(--wisp-pink);
  &:hover {
    opacity: 0.8;
  }
`;

export const FigureCaption = styled.figcaption`

`;

export const Img = styled.img`
  padding: 0;
  margin: 0;
  width: 100%;
  margin: 0px;
  box-sizing: border-box;
  transition: transform 1s;
  display: block;
  &:hover {
    transform: scale(1.04);
  }
`;


// export const GalleryWrapper = styled.div`
//   display: flex;
//   /* max-width: 80%; */
//   flex-direction: row;
//   /* overflow: hidden; */
//   vertical-align: bottom;
//   flex-wrap: wrap;
//   align-items: center;
//   justify-content: center;
// `;

// export const Figure = styled.figure<any>`
//   position: relative;
//   background-color: white;
//   text-align: center;
//   font-size: 15px;
//   padding: 15px;
//   margin: 25px;
//   box-shadow: 1px 2px 3px black;

//   transform : ${props => props.deg ? `rotate(${props.deg}deg)` : "rotate(0deg)"};

//   &:hover {
//     box-shadow: 5px 10px 100px black;
//     -webkit-transform: scale(1.1,1.1);
//     transform: scale(1.1,1.1);
//     z-index: 20;
//   }
// `;

// export const FigureCaption = styled.figcaption`

// `;

// export const Img = styled.img`
//   height: 200px;
//   margin: 0px;
// `;

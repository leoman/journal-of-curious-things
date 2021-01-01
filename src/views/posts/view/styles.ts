import styled from 'styled-components';
import { container } from '../../../styles'

export const PostWrapper = styled.div`
  ${container};
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex: 1 0 auto;
`;

export const PostBlock = styled.div`
  width: 100%;
  margin: 0 2rem;
`;

export const Title = styled.div`

`;

export const H3 = styled.h3`
  font-size: 2.4rem;
  line-height: 2.4rem;
  margin: 60px 30px 20px;
  text-align: center;
  font-family: 'Sacramento', cursive;
`;

export const H4 = styled.h4`
  font-size: 1.4rem;
  line-height: 1.4rem;
  margin: 0 0 60px;
  text-align: center;
  font-family: 'Heebo', sans-serif;
`;

export const ImageWrapper = styled.div`
  padding: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .1);
  border-radius: 5px;
`;

export const IMG = styled.img`
  width: 100%;
  display: block;
  border: 1px solid #edf2f7;
  border-radius: 5px;
`;

export const Content = styled.div`
    margin-top: 2rem;
    font-size: 21px;
    font-family: 'Heebo', sans-serif;
    letter-spacing: -0.004em;
    line-height: 1.58;
    word-break: break-word;
    color: rgba(0, 0, 0, 0.84);
    font-weight: 400;

    .double {
      display: flex;
      pointer-events: auto;
      img {
        width: 50%;
      }
    }

    p {
      font-size: 21px;
      font-family: 'Heebo', sans-serif;
      letter-spacing: -0.004em;
      line-height: 1.58;
      word-break: break-word;
      color: rgba(0, 0, 0, 0.84);
      font-weight: 400;
      margin-bottom: -0.46em;
      margin-top: 2em;
    }

    a {
      color: $picton-blue;
      cursor: pointer;
      text-decoration: underline;
    }

    strong {
      font-weight: 700;
    }

    em {
      font-style: italic;
    }

    :not(pre) > code {
      font-family: monospace;
      background-color: #eee;
      padding: 3px;
    }

    blockquote {
      border-left: 2px solid #ddd;
      margin-left: 0;
      margin-right: 0;
      padding-left: 10px;
      color: #aaa;
      font-style: italic;
      margin-top: 1rem;
    }

    ol,
    ul {
      margin-top: 1rem;
      display: block;
      list-style-type: decimal;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 40px;

      li {
        display: list-item;
        text-align: -webkit-match-parent;
      }
    }

    ul {
      list-style-type: disc;
    }

    img { 
      margin-top: 1rem;
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 1rem;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.75rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    h4 {
      font-size: 1.3rem;
    }

    h5 {
      font-size: 1.15rem;
    }

    h6 {
      font-size: 1rem;
    }

    .hr {
      display: block;
      max-width: 100%;
      height: 2px;
      margin: 24px 0;
      background-color: #e1e4e8;
      background-image: linear-gradient(to right, $catskill-light, $geyser, $catskill-light);
    }
`;

import styled from 'styled-components';

export const Product = styled.div`
  display: flex;
`;

export const ProductContent = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: 40%;
  }
`;

export const ReturnToPrevious = styled.div`
  p {
    font-size: 16px;
    font-weight: bold;
    font-family: 'Heebo', sans-serif;
    cursor: pointer;
    border-bottom: 1px solid var(--darker-pink);
    display: inline-flex;
    margin-bottom: 0;
  }
`;

export const Title = styled.div`
  h2 {
    font-size: 3rem;
    line-height: 3rem;
    margin: 60px 30px 20px ;
    text-align: center;
    font-family: 'Heebo', sans-serif;
  }

  h4 {
    font-size: 1.4rem;
    line-height: 1.4rem;
    margin: 0 0 60px;
    text-align: center;
    font-family: 'Heebo', sans-serif;
  }
`;

export const Price = styled.div`
  h4 {
    font-size: 1.4rem;
    line-height: 1.4rem;
    margin: 0 0 60px;
    text-align: center;
    font-family: 'Heebo', sans-serif;
  }
`;

export const Description = styled.div`
 
`;

export const AddToCart = styled.div`
 
`;

export const ProductImages = styled.div`
  width: 60%;
  margin-left: 20px;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }

  img {
    width: 100%;
    display: block;
    border: 1px solid var(--catskill-light);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, .1);
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 20px;
  }
`;

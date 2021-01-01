import styled from 'styled-components';

export const ProductsWrapper = styled.div`
  width: 100%;
`;

export const ProductCarousel = styled.div`
  border: 4px solid var(--wisp-pink);
  padding: 1rem;
  margin-bottom: 2rem;

  .slick-prev {
    left: 10px;
  }

  .slick-next {
    right: 30px;
  }

  .slick-next, .slick-prev {
    z-index: 1000;
    height: 30px;

    &:before {
      font-size: 40px;
    }
  }
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

export const ProductsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  gap: 2rem 2rem;
`;

export const Product = styled.div`
  position: relative;
  display: inline-flex;
  cursor: pointer;
`;

export const ProductImageWrapper = styled.div`
  transform: translate3d(0, 0, 0);
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const ProductTitle = styled.div`
  transform: translate3d(0, 0, 0);
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
`;

export const H3 = styled.h3`
  background: rgba(0, 0, 0, 0.6);
  text-align: center;
  color: #fff;
  font-size: 1.5rem;
  padding: 15px 10px;
  margin: 0;
  display: block;
  line-height: 1;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 1.2;
  box-sizing: border-box;
`;

export const ProductFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #fce8ea;
  box-shadow: 0 1px 3px 0 rgba(235, 64, 52, 0.1), 0 1px 2px 0 rgba(235, 64, 52, 0.06);
  background: linear-gradient(180deg, #fce8ea, #fcedee);
`;

export const SelectBox = styled.div`
  position: relative;
  display: block;
  width: 100%;
  margin: 0;
  font-family: 'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial', sans-serif;
  font-size: 18px;
  color: #60666d;
  z-index: 10;
  margin: 0;
  background: #fff;
  padding: 15px;

  @media (min-width: 1200px) {
    width: calc(25% - 1rem);
  }
`;

export const CurrentFilterOption = styled(SelectBox)`
  box-shadow: 0 15px 30px -11px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  outline: none;
`;

export const FilterOptionsWrapper = styled.div``;

export const FilterOption = styled(SelectBox)`
  cursor: pointer;
  &:hover,
  &:focus {
    color: #546c84;
    background-color: #fbfbfb;
  }
`;
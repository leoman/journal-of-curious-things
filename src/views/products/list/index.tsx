import React, { useState, useEffect, useCallback } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import Slider from "react-slick"
import Layout from '../../Layout'
import Loading from '../../../components/loading'
import { ProductsActionCreators } from '../../../redux/actions/product'
import { Content } from '../../../styles'
import {
  ProductsWrapper,
  ProductCarousel,
  CarouselImage,
  ProductsListWrapper,
  Product,
  ProductImageWrapper,
  ProductImage,
  ProductTitle,
  H3,
  ProductFilterWrapper,
  CurrentFilterOption,
  FilterOptionsWrapper,
  FilterOption,
} from './styles'

interface ProductI {
  title: string
  slug: string
  photo: string
  excerpt: string
  pricePence: number
}

interface Props {
  products: ProductI[]
}

interface ProductTypeI {
  value: string
  id: number
  placeHolder?: string
}

const productTypes = [
  {
    id: 1,
    value: 'print'
  },
  {
    id: 2,
    value: 'class'
  }
];

const allType: ProductTypeI = { value: 'All', id: 0, placeHolder: 'Filter by Product Type' }

const filterTypes = [allType, ...productTypes]

const ProductSlider = ({ products }:  Props) => {

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '10%'
  };

  if (!products.length) {
    return null
  }
  return (
    <ProductCarousel {...sliderSettings}>
      <Slider>
        {products.filter(product => product.photo).map(({ photo }) => (
          <div key={photo}>
            <CarouselImage src={photo} />
          </div>
        ))}
      </Slider>
    </ProductCarousel>
  )
}

const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1)

const CurrentFilter = ({ toggle, type: { value, placeHolder = '' } }: { toggle: any; type: ProductTypeI }) => {
  const output = (placeHolder) ? placeHolder : value
  return (
    <CurrentFilterOption onClick={toggle}>
      {capitalizeFirstLetter(output)}
    </CurrentFilterOption>
  ) 
}

const FilterOptions = ({ show, types, select }: { show: boolean; types: ProductTypeI[]; select: any }) => {
  return show ? (
    <FilterOptionsWrapper>
      {types.map((type) => (
        <FilterOption onClick={() => select(type)} key={type.id}>
          {capitalizeFirstLetter(type.value)}
        </FilterOption>
      ))}
    </FilterOptionsWrapper>
  ) : null
}

const ProductFilters = ({ current, toggleShowProductTypes, showProductTypes, productTypeSelect }: any) => {
  if (!productTypes) {
    return null;
  }
  return (
    <ProductFilterWrapper>
      <CurrentFilter type={current} toggle={toggleShowProductTypes} />
      <FilterOptions types={filterTypes} show={showProductTypes} select={productTypeSelect} />
    </ProductFilterWrapper>
  )
}

const ProductsGrid = ({ products }: Props) => {
  const history = useHistory()

  if (!products.length) {
    return null
  }

  const linkTo = (url: string) => history.push(`/products/${url}`)
  
  return (
    <ProductsListWrapper>
      {products.map(({ title, slug, photo, pricePence }) => (
        <Product onClick={() => linkTo(slug)} key={slug}>

          {photo && (
            <ProductImageWrapper>
              <ProductImage src={photo} />
            </ProductImageWrapper>
          )}

          <ProductTitle>
            <H3>
              { `${title}  - ${pricePence}` } 
            </H3>
          </ProductTitle>

        </Product>
      ))}
    </ProductsListWrapper>
  )
}

const ProductsList = () => {
  const dispatch = useDispatch()

  const [current, setCurrent] = useState<ProductTypeI>(allType);
  const [showProductTypes, setShowProductTypes] = useState<boolean>(false);
  const [filteredProducts, setFilteredProducts] = useState<ProductI[]>([]);

  const toggleShowProductTypes = () => setShowProductTypes(!showProductTypes)
  const productTypeSelect = (type: ProductTypeI) => {
    setCurrent(type)
    toggleShowProductTypes()
  }

  const { products, loading, loaded, productError } = useSelector(
    (state: any) => state.ProductReducer,
  );

  const getProductData = useCallback(() => {
    const { getProducts } = ProductsActionCreators;
    dispatch(getProducts(true));
  }, [dispatch]);

  useEffect(() => {
    if (!loading && !productError && !loaded) {
      getProductData();
    }
  }, [loading, loaded, getProductData, productError]);

  useEffect(() => {
    if (current.value !== allType.value) {
      setFilteredProducts(products.filter(product => product.productType === current.value))
    } else {
      setFilteredProducts(products);
    }
  }, [products, current]);

  if (loading) {
    return <Loading />
  }

  if (productError) {
    return (
      <div>
        <p>An error has occurred, please try again later.</p>
      </div>
    )
  }

  if (!filteredProducts.length) {
    return (
      <div>
        <p>No Products can be found.</p>
      </div>
    )
  }
  
  return (
    <Content flex>
      <ProductsWrapper>
        <ProductSlider products={filteredProducts} />
        <ProductFilters
          current={current}
          showProductTypes={showProductTypes}
          toggleShowProductTypes={toggleShowProductTypes}
          productTypeSelect={productTypeSelect}
        />
        <ProductsGrid products={filteredProducts} />
      </ProductsWrapper>
    </Content>
  )
}

const WrappedProductsList = () => <Layout component={ProductsList} />

export default WrappedProductsList

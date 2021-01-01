import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"
import { useParams } from "react-router"
import Layout from '../../Layout'
import Loading from '../../../components/loading'
import { ProductsActionCreators } from '../../../redux/actions/product'
import { ProductsActionTypes } from '../../../redux/types'
import { ProductI } from '../../../models/product'
import {
  Product,
  ProductContent,
  ReturnToPrevious,
  Title,
  Price,
  Description,
  AddToCart,
  ProductImages
} from './styles'

interface RouteParams {
  slug: string
}

const findProduct = (products: ProductI[], slug: string) => products.find(product => product.slug === slug)


const ProductView = () => {

  const { slug }: RouteParams = useParams()
  const dispatch = useDispatch()
  const history = useHistory()

  const { products, loading, productError, product } = useSelector(
    (state: any) => state.ProductReducer,
  )

  console.log(product);

  const getProductsData = useCallback(() => {
    const { getProducts } = ProductsActionCreators
    dispatch(getProducts())
  }, [dispatch])

  const setProduct = useCallback((product) => {
    dispatch({
      type: ProductsActionTypes.SET_PRODUCT_RES,
      payload: product,
    })
  }, [dispatch])

  useEffect(() => {
    if (!loading && !productError && !products.length) {
      getProductsData()
    }
  }, [loading, products, productError, getProductsData])

  useEffect(() => {
    if (products) {
      const product = findProduct(products, slug)
      if (product) {
        setProduct(product)
      }
    }
  }, [slug, products, setProduct])

  const returnToProducts = () => history.push(`/products`)

  if (loading) {
    return <Loading />
  }

  return (
    <Product>
      <ProductContent>
        {/* <% if @return_to_previous %>
          <ReturnToPrevious>
            <%= link_to 'Return to previous', @return_to_previous %>
          </ReturnToPrevious>
        <% end %> */}

          <ReturnToPrevious>
            <p onClick={returnToProducts}>Return to Products</p>
          </ReturnToPrevious>

        <Title>
          <h2>{product.title}</h2>
          <h4>{product.subtitle}</h4>
        </Title>

        <Price>
          <h4>{product.priceCents}</h4>
        </Price>

        <Description>
          {product.description}
        </Description>

        <AddToCart>
          Purchase Product
        </AddToCart>

      </ProductContent>

      <ProductImages>
        {product.photo && (
          <img alt={''} src={product.photo} />
        )}
      </ProductImages>

    </Product>
  )
}

const WrappedProductView = () => <Layout component={ProductView} />

export default WrappedProductView

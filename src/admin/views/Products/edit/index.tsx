import React, { useCallback, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router"
import {
  Box,
  Container,
  Grid,
  Card,
  CardHeader,
  Divider,
} from '@material-ui/core'

import { ProductsActionCreators } from '../../../../redux/actions/product'
import { ProductsActionTypes } from '../../../../redux/types'

import Layout from '../../Layout'
import Page from '../../../components/Page'
import Form from '../Form'

import { ProductI } from '../../../../models/product'

interface RouteParams {
  id: string
}

const findProduct = (products: ProductI[], id: string) => products.find(product => product.id === parseInt(id))

const ProductEdit = () => {
  const { id }: RouteParams = useParams()
  const history = useHistory()
  const dispatch = useDispatch()

  const { products, loading, productError, product } = useSelector(
    (state: any) => state.ProductReducer,
  )

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
      const product = findProduct(products, id)
      if (product) {
        setProduct(product)
      }
    }
  }, [id, products, setProduct])

  const onCancel = () => history.push('/admin/products')

  const onSubmit = useCallback((fields) => {
    const { editProduct } = ProductsActionCreators
    dispatch(editProduct(fields))
    history.push('/admin/products')
  }, [dispatch, history])

  return (
    <Page>
      <Container maxWidth="lg">
        <Grid
          container
        >
          <Card style={{ width: '100%' }}>
            <CardHeader title="Products" />
            <Divider />
            <Box mt={3}>
              <Form
                onSubmit={onSubmit}
                onCancel={onCancel}
                product={product}
              />
            </Box>
          </Card>
        </Grid>
      </Container>
    </Page>
  )
}

const WrappedProductEdit = () => <Layout component={ProductEdit} />

export default WrappedProductEdit
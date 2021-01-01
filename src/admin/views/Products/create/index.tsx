import React, { useCallback } from 'react';
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'
import {
  Box,
  Container,
  Grid,
  Card,
  CardHeader,
  Divider,
} from '@material-ui/core'

import { ProductsActionCreators } from '../../../../redux/actions/product';

import Layout from '../../Layout'
import Page from '../../../components/Page'
import Form from '../Form'

// eslint-disable-next-line react/display-name
const ProductCreate = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const onCancel = () => history.push('/admin/products')

  const onSubmit = useCallback((fields) => {
    const { addProduct } = ProductsActionCreators;
    dispatch(addProduct(fields));
    history.push('/admin/products')
  }, [dispatch, history]);

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
              />
            </Box>
          </Card>
        </Grid>
      </Container>
    </Page>
  );
}

const WrappedProductCreate = () => <Layout component={ProductCreate} />

export default WrappedProductCreate
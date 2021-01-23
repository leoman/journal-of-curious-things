import React, { useCallback, useEffect }  from 'react';
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import {
  Box,
  Container,
  Grid,
  Card,
  CardHeader,
  Divider,
} from '@material-ui/core'

import { ProductsActionCreators } from '../../../../redux/actions/product';
import { ThemesActionCreators } from '../../../../redux/actions/theme'

import Layout from '../../Layout'
import Page from '../../../components/Page'
import Form from '../Form'

// eslint-disable-next-line react/display-name
const ProductCreate = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const onCancel = () => history.push('/admin/products')

  const { themes, loading: themeLoading } = useSelector(
    (state: any) => state.ThemeReducer,
  )

  const onSubmit = useCallback((fields) => {
    const { addProduct } = ProductsActionCreators;
    dispatch(addProduct(fields));
    history.push('/admin/products')
  }, [dispatch, history]);

  const getThemesData = useCallback(() => {
    const { getThemes } = ThemesActionCreators
    dispatch(getThemes())
  }, [dispatch])

  useEffect(() => {
    if (!themes.length) {
      getThemesData()
    }
  }, [themeLoading, themes, getThemesData])

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
                themesList={themes}
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
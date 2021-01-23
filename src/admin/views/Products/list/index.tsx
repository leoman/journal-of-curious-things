import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom"
import {
  Box,
  Button,
  Container,
  Grid,
  Card,
  Chip,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import PerfectScrollbar from 'react-perfect-scrollbar'
import dayjs from 'dayjs'

import { ProductsActionCreators } from '../../../../redux/actions/product';

import Layout from '../../Layout'
import Page from '../../../components/Page'
import Toolbar from '../../../components/Toolbar'

import {
  TableRowsI,
  TableRowI
} from '../../../../models/product'

const TableRows = ({ products, ...links }: TableRowsI) => (
  <TableBody>  
    {products.map(product => <TableRowComp key={product.id} {...product} {...links} />)}
  </TableBody>  
)

const TableRowComp = ({ id, slug, title, date, status, previewLink, editLink, deleteLink }: TableRowI) => (
  <TableRow>
    <TableCell>{ id }</TableCell>
    <TableCell>{ title }</TableCell>
    <TableCell>{ dayjs(date).format('DD/MM/YYYY') }</TableCell>
    <TableCell>
      <Chip
        color={status === 'draft' ? "secondary" : "primary"}
        label={status}
        size="small"
      />
    </TableCell>
    <TableCell className="text-center">
      <Button
          color="primary"
          variant="outlined"
          size="small"
          onClick={() => previewLink(slug)}
        >
        Preview
      </Button>
    </TableCell>
    <TableCell className="text-center">
      <Button
        color="primary"
        variant="outlined"
        size="small"
        onClick={() => editLink(id)}
      >
        Edit
      </Button>
    </TableCell>
    <TableCell className="text-center">
      <Button
        color="secondary"
        variant="contained"
        size="small"
        onClick={() => deleteLink(id)}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </TableCell>
  </TableRow>
)

const ProductsList = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const { products, loading, loaded, productError } = useSelector(
    (state: any) => state.ProductReducer,
  );

  const getProductData = useCallback(() => {
    const { getProducts } = ProductsActionCreators;
    dispatch(getProducts());
  }, [dispatch]);

  const removeProduct = useCallback((id) => {
    const { deleteProduct } = ProductsActionCreators;
    dispatch(deleteProduct({ id }));
  }, [dispatch]);

  useEffect(() => {
    if (!loading && !productError && !loaded) {
      getProductData();
    }
  }, [loading, loaded, getProductData, productError]);

  const addProduct = () => history.push('/admin/products/create')
  const previewProduct = (slug: string) => history.push(`/admin/products/preview/${slug}`)
  const editProduct = (id: number) => history.push(`/admin/products/edit/${id}`)
  const deleteProduct = (id: number) => {
    const result = window.confirm("Are you sure you want to delete this product?");
    if (result) { removeProduct(id) }
  }

  return (
    <Page>
      <Container maxWidth="lg">

        <Toolbar link={addProduct} title={'Add Product'} />

        <Grid
          container
        >
          <Card style={{ width: '100%' }}>
            <CardHeader title="Products" />
            <Divider />
            <PerfectScrollbar>
              <Box minWidth={800}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Id</TableCell>
                      <TableCell>Title</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell colSpan={3}></TableCell>
                    </TableRow>
                  </TableHead>

                  <TableRows
                    products={products}
                    previewLink={previewProduct}
                    editLink={editProduct}
                    deleteLink={deleteProduct}
                  />

                </Table>
              </Box>
              </PerfectScrollbar>
            </Card>
        </Grid>
      </Container>
    </Page>
  )
}

const WrappedProductsList = () => <Layout component={ProductsList} />

export default WrappedProductsList
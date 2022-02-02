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
import PerfectScrollbar from 'react-perfect-scrollbar'

import { OrdersActionCreators } from '../../../../redux/actions/order';

import Layout from '../../Layout'
import Page from '../../../components/Page'

import {
  TableRowsI,
  TableRowI
} from '../../../../models/order'

import { priceFormat } from "../../../../views/helpers";

const TableRows = ({ orders, ...links }: TableRowsI) => (
  <TableBody>  
    {orders.map(order => <TableRowComp key={order.id} {...order} {...links} />)}
  </TableBody>  
)

const TableRowComp = ({ id, name, email, status, pricePence, viewLink }: TableRowI) => (
  <TableRow>
    <TableCell>{ id }</TableCell>
    <TableCell>{ name }</TableCell>
    <TableCell>{ email }</TableCell>
    <TableCell>
      <Chip
        color={status === 'pending' ? "secondary" : "primary"}
        label={status}
        size="small"
      />
    </TableCell>
    <TableCell>{ priceFormat(pricePence) }</TableCell>
    <TableCell className="text-center">
      <Button
          color="primary"
          variant="outlined"
          size="small"
          onClick={() => viewLink(id)}
        >
        View
      </Button>
    </TableCell>
  </TableRow>
)

const OrdersList = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const { orders, loading, loaded, orderError } = useSelector(
    (state: any) => state.OrderReducer,
  );

  const getOrderData = useCallback(() => {
    const { getOrders } = OrdersActionCreators;
    dispatch(getOrders());
  }, [dispatch]);

  useEffect(() => {
    if (!loading && !orderError && !loaded) {
      getOrderData();
    }
  }, [loading, loaded, getOrderData, orderError]);

  if (!orders) return null

  const viewOrder = (id: number) => history.push(`/admin/orders/view/${id}`)

  return (
    <Page>
      <Container maxWidth="lg">
        <Grid
          container
        >
          <Card style={{ width: '100%' }}>
            <CardHeader title="Orders" />
            <Divider />
            <PerfectScrollbar>
              <Box minWidth={800}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Id</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell colSpan={1}></TableCell>
                    </TableRow>
                  </TableHead>

                  <TableRows
                    orders={orders}
                    viewLink={viewOrder}
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

const WrappedOrdersList = () => <Layout component={OrdersList} />

export default WrappedOrdersList
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

import { PostsActionCreators } from '../../../../redux/actions/post';

import Layout from '../../Layout'
import Page from '../../../components/Page'
import Form from '../PostForm'

// eslint-disable-next-line react/display-name
const PostCreate = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const onCancel = () => history.push('/admin/posts')

  const onSubmit = useCallback((fields) => {
    const { addPost } = PostsActionCreators;
    dispatch(addPost(fields));
    history.push('/admin/posts')
  }, [dispatch, history]);

  return (
    <Page>
      <Container maxWidth="lg">
        <Grid
          container
        >
          <Card style={{ width: '100%' }}>
            <CardHeader title="Posts" />
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

const WrappedPostCreate = () => <Layout component={PostCreate} />

export default WrappedPostCreate
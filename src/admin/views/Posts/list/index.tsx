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
import DoneIcon from '@material-ui/icons/Done';
import PerfectScrollbar from 'react-perfect-scrollbar'
import dayjs from 'dayjs'

import { PostsActionCreators } from '../../../../redux/actions/post';

import Layout from '../../Layout'
import Page from '../../../components/Page'
import Toolbar from '../../../components/Toolbar'

import {
  TableRowsI,
  TableRowI
} from '../../../../models/post'

const TableRows = ({ posts, ...links }: TableRowsI) => (
  <TableBody>  
    {posts.map(post => <TableRowComp key={post.id} {...post} {...links} />)}
  </TableBody>  
)

const TableRowComp = ({ id, title, date, status, sticky, previewLink, editLink, deleteLink }: TableRowI) => (
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
    <TableCell>{ sticky ? <DoneIcon /> : '' }</TableCell>
    <TableCell className="text-center">
      <Button
          color="primary"
          variant="outlined"
          size="small"
          onClick={() => previewLink(id)}
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

const PostsList = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const { posts, loading, loaded, postError } = useSelector(
    (state: any) => state.PostReducer,
  );

  const getPostData = useCallback(() => {
    const { getPosts } = PostsActionCreators;
    dispatch(getPosts());
  }, [dispatch]);

  const removePost = useCallback((id) => {
    const { deletePost } = PostsActionCreators;
    dispatch(deletePost({ id }));
  }, [dispatch]);

  useEffect(() => {
    if (!loading && !postError && !loaded) {
      getPostData();
    }
  }, [loading, loaded, getPostData, postError]);

  if (!posts) return null

  const addPost = () => history.push('/admin/posts/create')
  const previewPost = (id: number) => history.push(`/admin/posts/preview/${id}`)
  const editPost = (id: number) => history.push(`/admin/posts/edit/${id}`)
  const deletePost = (id: number) => {
    const result = window.confirm("Are you sure you want to delete this post?");
    if (result) { removePost(id) }
  }

  return (
    <Page>
      <Container maxWidth="lg">

        <Toolbar link={addPost} title={'Add Post'} />

        <Grid
          container
        >
          <Card style={{ width: '100%' }}>
            <CardHeader title="Posts" />
            <Divider />
            {/* <PerfectScrollbar> */}
              <Box minWidth={800}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Id</TableCell>
                      <TableCell>Title</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Sticky</TableCell>
                      <TableCell colSpan={3}></TableCell>
                    </TableRow>
                  </TableHead>

                  <TableRows
                    posts={posts}
                    previewLink={previewPost}
                    editLink={editPost}
                    deleteLink={deletePost}
                  />

                </Table>
              </Box>
              {/* </PerfectScrollbar> */}
            </Card>
        </Grid>
      </Container>
    </Page>
  )
}

const WrappedPostsList = () => <Layout component={PostsList} />

export default WrappedPostsList
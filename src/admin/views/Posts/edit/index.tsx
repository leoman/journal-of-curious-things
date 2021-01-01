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

import { PostsActionCreators } from '../../../../redux/actions/post'
import { PostsActionTypes } from '../../../../redux/types'

import Layout from '../../Layout'
import Page from '../../../components/Page'
import Form from '../PostForm'

import { PostI } from '../../../../models/post'

interface RouteParams {
  id: string
}

const findPost = (posts: PostI[], id: string) => posts.find(post => post.id === parseInt(id))

const PostEdit = () => {
  const { id }: RouteParams = useParams()
  const history = useHistory()
  const dispatch = useDispatch()

  const { posts, loading, postError, post } = useSelector(
    (state: any) => state.PostReducer,
  )

  const getPostsData = useCallback(() => {
    const { getPosts } = PostsActionCreators
    dispatch(getPosts())
  }, [dispatch])

  const setPost = useCallback((post) => {
    dispatch({
      type: PostsActionTypes.SET_POST_RES,
      payload: post,
    })
  }, [dispatch])

  useEffect(() => {
    if (!loading && !postError && !posts.length) {
      getPostsData()
    }
  }, [loading, posts, postError, getPostsData])

  useEffect(() => {
    if (posts) {
      const post = findPost(posts, id)
      if (post) {
        setPost(post)
      }
    }
  }, [id, posts, setPost])

  const onCancel = () => history.push('/admin/posts')

  const onSubmit = useCallback((fields) => {
    const { editPost } = PostsActionCreators
    dispatch(editPost(fields))
    history.push('/admin/posts')
  }, [dispatch, history])

  if (loading || !post || !post.id) {
    return null
  }

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
                post={post}
              />
            </Box>
          </Card>
        </Grid>
      </Container>
    </Page>
  )
}

const WrappedPostEdit = () => <Layout component={PostEdit} />

export default WrappedPostEdit
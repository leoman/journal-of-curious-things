import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router"
import Layout from '../../Layout'
import { PostsActionCreators } from '../../../redux/actions/post'
import { PostsActionTypes } from '../../../redux/types'
import {
  PostWrapper,
  PostBlock,
  Title,
  H3,
  H4,
  ImageWrapper,
  IMG,
  Content
} from './styles'

import { PostI } from '../../../models/post'

interface RouteParams {
  slug: string
}

const findPost = (posts: PostI[], slug: string) => posts.find(post => post.slug === slug)

const PostView = () => {

  const { slug }: RouteParams = useParams()
  const dispatch = useDispatch()

  const { posts, loading, postError, post } = useSelector(
    (state: any) => state.PostReducer,
  )

  console.log(post);

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
      const post = findPost(posts, slug)
      if (post) {
        setPost(post)
      }
    }
  }, [slug, posts, setPost])
  
  return (
    <PostWrapper>

      <PostBlock>
      
        <Title>
          <H3>{post.title}</H3>
          <H4>{post.subtitle}</H4>
        </Title>

        {(post.photo) && 
          <ImageWrapper>
            <IMG src={post.photo} />
          </ImageWrapper>
        }

        <Content>
          {post.content}
        </Content>

      </PostBlock>

    </PostWrapper>
  )
}

const WrappedPostView = () => <Layout component={PostView} />

export default WrappedPostView

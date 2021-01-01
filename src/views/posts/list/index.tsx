import React, { useState, useEffect, useRef, useCallback } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import Layout from '../../Layout'
import { PostsActionCreators } from '../../../redux/actions/post'
import {
  Grid,
  GridItem,
  EffectWrapper,
  PostWrapper,
  PostTitle,
  Overlay,
  OverlayContent,
  ImageWrapper,
  ImageTitle,
  HR,
  Desc
} from './styles'

interface PostBlock {
  title: string
  slug: string
  image: string
  excerpt: string
}


const Post = ({ title, slug, image, excerpt }: PostBlock) => {

  const history = useHistory()
  const imageEl = useRef<any>(null);
  const [gridRowEnd, setGridRowEnd] = useState<number>(0);

  const linkTo = (url: string) => history.push(`/posts/${url}`)

  useEffect(() => {
    const mainImage = new Image();

    mainImage.onload = () => {
      const rowGap = 30;
      const rowHeight = 10;
      if (imageEl) {
        setGridRowEnd(Math.ceil((imageEl.current.querySelector('.content').getBoundingClientRect().height + rowGap)/(rowHeight+rowGap)))
      }
    };

    mainImage.src = image
  }, [image])

  return (
    <GridItem ref={imageEl} style={{ gridRowEnd: `span ${gridRowEnd}` }} onClick={() => linkTo(slug)} className="item blog">
      <div className="content">
        <EffectWrapper>
          {image && (
            <ImageWrapper>
              <img src={image} alt={title} />
            </ImageWrapper>
          )}
          <PostWrapper className="post-wrapper">
            <PostTitle>{title}</PostTitle>
          </PostWrapper>
          <Overlay className="overlay">
            <OverlayContent>
              <div>
                <ImageTitle>{title}</ImageTitle>
              </div>
              <HR />
              <Desc>
                <p>{excerpt}</p>
              </Desc>
              <HR />
            </OverlayContent>
          </Overlay>
        </EffectWrapper>
      </div>
    </GridItem>
  )
}

const PostsList = () => {
  const dispatch = useDispatch()

  const { posts, loading, loaded, postError } = useSelector(
    (state: any) => state.PostReducer,
  );

  const getPostData = useCallback(() => {
    const { getPosts } = PostsActionCreators;
    dispatch(getPosts());
  }, [dispatch]);

  useEffect(() => {
    if (!loading && !postError && !loaded) {
      getPostData();
    }
  }, [loading, loaded, getPostData, postError]);

  if (!posts) return null
  
  return (
    <div>
      <Grid>
        {posts.map(({ id, slug, title, photo, excerpt }) => (
          <Post
            key={id} 
            title={title}
            slug={slug}
            image={photo} 
            excerpt={excerpt}
          />
        ))}
      </Grid>
    </div>
  )
}

const WrappedPostList = () => <Layout component={PostsList} />

export default WrappedPostList

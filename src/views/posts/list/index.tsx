import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Layout from "../../Layout";
import Loading from "../../../components/loading";
import { PostsActionCreators } from "../../../redux/actions/post";
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
  Desc,
} from "./styles";

interface PostBlock {
  title: string
  subtitle?: string
  slug: string
  image: string
  excerpt: string
}

const Post = ({ title, subtitle, slug, image, excerpt }: PostBlock) => {
  const history = useHistory();
  const imageEl = useRef<any>(null);
  const [gridRowEnd, setGridRowEnd] = useState<number>(0);

  const linkTo = (url: string) => {
    console.log("linkTo", url);
    history.push(`/posts/${url}`);
  };

  useEffect(() => {
    const mainImage = new Image();

    mainImage.onload = () => {
      const rowGap = 30;
      const rowHeight = 10;
      if (imageEl) {
        setGridRowEnd(
          Math.ceil(
            (imageEl.current.querySelector(".content").getBoundingClientRect()
              .height +
              rowGap) /
              (rowHeight + rowGap)
          )
        );
      }
    };

    mainImage.src = image;
  }, [image]);

  return (
    <GridItem
      ref={imageEl}
      style={{ gridRowEnd: `span ${gridRowEnd}` }}
      onClick={() => linkTo(slug)}
      className="item blog"
    >
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
                <ImageTitle>{subtitle || title}</ImageTitle>
              </div>
              {excerpt && (
                <>
                  <HR />
                  <Desc>
                    <p>{excerpt}</p>
                  </Desc>
                  <HR />
                </>
              )}
            </OverlayContent>
          </Overlay>
        </EffectWrapper>
      </div>
    </GridItem>
  );
};

const PostsList = () => {
  const dispatch = useDispatch();

  const { posts, loading, loaded, postError } = useSelector(
    (state: any) => state.PostReducer
  );

  const getPostData = useCallback(() => {
    const { getPosts } = PostsActionCreators;
    dispatch(getPosts(true));
  }, [dispatch]);

  useEffect(() => {
    if (!loading && !postError && !loaded) {
      getPostData();
    }
  }, [loading, loaded, getPostData, postError]);

  if (loading) {
    return <Loading />;
  }

  if (postError) {
    return (
      <div>
        <p>An error has occurred, please try again later.</p>
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div>
        <p>No Posts can be found.</p>
      </div>
    );
  }

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
  );
};

const WrappedPostList = () => <Layout component={PostsList} />;

export default WrappedPostList;

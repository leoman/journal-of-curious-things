import React from "react";
import {
  Title,
  TextWrapper,
  ImageGallery,
  ImageWrapper,
  ImageComponent,
  H1,
  H2,
} from './styles'

// <% if @preview %>
//   <div class="admin-preview">
//     <%= link_to @return do  %>
//       Preview - Return to the previous page
//     <% end %>
//   </div>
// <% end %>

const images = [
  '/images/posts/40704459053_484c4e722a_b.jpg',
  '/images/posts/40704465663_2af51924d4_b.jpg',
  '/images/posts/47670826161_ec8b4b7a5a_b.jpg',
  '/images/posts/47670828331_9f95a0c372_b.jpg',
  '/images/posts/47670840171_682f365c88_b.jpg',
  '/images/posts/47670841351_bd60c95ca1_b.jpg'
]

const Image = ({ image }) => (
  <ImageWrapper>
    <ImageComponent src={image} />
  </ImageWrapper>
)

const Images = () => (
  <ImageGallery>
    {images.map(image => <Image key={image} image={image} />)}
  </ImageGallery>
)

const Header = () => (
  <header>
    <Title>
      <TextWrapper>
        <H1>journal of curious things</H1>
        <H2>Adventures in scrapbooking</H2>
      </TextWrapper>
    </Title>

    <Images images={images} />
  </header>
)

export default Header;

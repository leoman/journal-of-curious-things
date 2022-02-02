import React, { useState, useCallback, useRef, useEffect } from "react";
import Navigation from '../../components/navigation'
import {
  Title,
  TextWrapper,
  ImageGallery,
  ImageWrapper,
  ImageComponent,
  H1,
  H2,
  StickyWrapper,
  HeaderWrapper,
  MobileNavToggle,
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

const Image = ({ image }: any) => (
  <ImageWrapper>
    <ImageComponent src={image} />
  </ImageWrapper>
)

const Images = ({ images }: any) => (
  <ImageGallery>
    {images.map(image => <Image key={image} image={image} />)}
  </ImageGallery>
)

interface MobileMenuToggleProps {
  onClick: (event: any) => void
}
const MobileMenuToggle = ({ onClick }: MobileMenuToggleProps) => (
  <MobileNavToggle onClick={onClick} />
)

const Header = ({ setParentSticky }: any) => {
  const [isSticky, setSticky] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const ref = useRef(null);
  const handleScroll = useCallback(() => {
    if (ref.current) {
      const isPast = window.pageYOffset > ref.current.offsetTop
      // console.log(isPast, ref.current.getBoundingClientRect().top)
      setSticky(isPast);
      setParentSticky(isPast);
    }
  }, [setSticky, setParentSticky]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, [handleScroll]);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu(!showMobileMenu);
  }, [showMobileMenu]);
  
  return (
    <HeaderWrapper sticky={isSticky}>
      <Title sticky={isSticky}>
        <TextWrapper>
          <MobileMenuToggle onClick={toggleMobileMenu} />
          <H1>journal of curious things</H1>
          <H2>Adventures in scrapbooking</H2>
        </TextWrapper>
      </Title>

      <StickyWrapper sticky={isSticky} ref={ref}>
        <Images images={images} />
        <Navigation showMobileMenu={showMobileMenu} />
      </StickyWrapper>
    </HeaderWrapper>
  )
}

export default Header;

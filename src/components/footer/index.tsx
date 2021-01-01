import React from "react"
import {
  FooterWrapper,
  Content,
  ContentWrapper,
  Title,
  H3,
  Sidebar,
  About,
  IMG,
  Text
} from './styles'

const Footer = () => (
  <FooterWrapper>
    <Content>
      <ContentWrapper>
      
        <Title>
          <H3>journal of curious things</H3>
        </Title>

        <Sidebar>
          <About>
            <H3>about me</H3>
            <IMG src={"/images/bio.jpg"} />
            <Text>Hello, I'm Kirsty. I'm a crafter, a Londoner, a teacher, a traveller, a tea drinker and a Guide leader. I love to adventure, camera in hand, and share my stories.</Text>
          </About>
        </Sidebar>

      </ContentWrapper>
    </Content>
  </FooterWrapper>
);

export default Footer

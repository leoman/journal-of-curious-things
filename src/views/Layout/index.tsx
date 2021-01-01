import React from "react"
import Header from '../../components/header'
import Navigation from '../../components/navigation'
import Footer from '../../components/footer'

import { Content } from '../../styles'

// eslint-disable-next-line react/display-name
export default ({ component: Component }: any) => (
  <>
    <Header />
    <Navigation />
    <Content>
      <Component />
    </Content>
    <Footer />
  </>
)
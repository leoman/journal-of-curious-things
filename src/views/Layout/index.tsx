import React, { useState } from "react"
import Header from '../../components/header'
import Footer from '../../components/footer'

import { Content } from '../../styles'

// eslint-disable-next-line react/display-name
export default ({ component: Component }: any) => {
  const [isSticky, setSticky] = useState<boolean>(false);
  return (
    <>
      <Header setParentSticky={setSticky} />
      <Content isSticky={isSticky}>
        <Component />
      </Content>
      <Footer />
    </>
  )
}

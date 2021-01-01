import React from "react"
import Navigation from '../../components/Navigation'

import { Content } from './styles'

// eslint-disable-next-line react/display-name
export default ({ component: Component }: any) => (
  <>
    <Navigation />
    <Content>
      <Component />
    </Content>
  </>
)
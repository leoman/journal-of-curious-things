import React from "react"
import Navigation from '../../components/Navigation'

import { Content } from './styles'

// eslint-disable-next-line react/display-name
export default ({ component: Component, showNavigation = true }: any) => (
  <>
    {showNavigation && <Navigation />}
    <Content showNavigation={showNavigation}>
      <Component />
    </Content>
  </>
)
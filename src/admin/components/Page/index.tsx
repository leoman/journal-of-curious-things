/* eslint-disable react/prop-types */
  
import React from 'react'
import { Helmet } from 'react-helmet'
import { PageWrapper } from './styles'

const Page = ({
  children,
  title = '',
  ...rest
}) => (
  <PageWrapper
    {...rest}
  >
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </PageWrapper>
);

export default Page;
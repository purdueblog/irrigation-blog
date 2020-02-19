import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Helmet } from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'
import { Flex, Box } from 'grid-styled'

import Footer from './footer'

const GlobalStyle = createGlobalStyle`
  @import "//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

  html {
    max-width: 100vw;
    overflow-x: hidden;
  }
`

const Body = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 100vw;

  img {
    margin-bottom: 0;
  }
`

const Content = styled.div`
  flex: 1;
`

const PageBase = ({ location, children }) => {
  return (
    <Body>
      <GlobalStyle />
      <Helmet
        title="Spray"
        meta={[
          { name: 'description', content: 'Irrigation' },
          { name: 'keywords', content: 'Purdue, Irrigation, Lora' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ]}
      >
          <link rel="icon" type="image/png" href="favicon.png" sizes="16x16"/>
      </Helmet>
      <Content>{children}</Content>
      {location && location.pathname != '/404' && <Footer />}
    </Body>
  )
}

export default PageBase

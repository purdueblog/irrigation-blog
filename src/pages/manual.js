import React from 'react'

import Layout from '../components/layout'
import Button from '../components/button'

import NavBar from '../components/navbar'

class Manual extends React.Component {
  render() {
    const content = (
      <div>
        <h1 id="buttons"></h1>
        <Button>Default</Button>
       
       
      </div>
    )
    return (
      <Layout>
        <NavBar dark children={content.props.children} />
        
      </Layout>
    )
  }
}

export default Manual

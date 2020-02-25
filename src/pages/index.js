import React from 'react'
import { graphql } from 'gatsby'
import { Flex, Box } from 'grid-styled'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import FlickrHero from 'react-flickr-hero'

import { media } from '../utils/style'

import Layout from '../components/layout'
import NavBar from '../components/navbar'
import HeroText from '../components/heroText'
import SocialIcons from '../components/socialIcons'
import Portfolio from '../components/portfolio'
import Showcase from '../components/showcase'

const Content = styled.div`
  & > a {
    visibility: hidden;
    display: block;
    height: 0;
  }
  & > h1 {
    text-align: center;
  }
`

const Title = styled.h1`
  font-family: 'Raleway';
  text-transform: uppercase;
  letter-spacing: 6px;
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  border: none;
  color: #292929;

  ${props =>
    props.small &&
    css`
      font-size: 12px;
      letter-spacing: 2px;
      font-weight: 700;
      line-height: 24px;
    `}
`

const Section = styled.div`
  text-align: center;
  padding-top: 45px;
  padding-bottom: 40px;

  a {
    font-family: 'Lato';
  }

  p {
    margin-bottom: 64px;
    font-size: large;
    color: #666;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Raleway';
    text-transform: uppercase;
    color: #292929;
  }

  h4 {
    letter-spacing: 3px;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #292929;
  }

  span {
    color: #666;
    opacity: 0.5;
    display: block;
  }

  & > div:last-child {
    border-bottom: none !important;
  }

  ${props =>
    props.center &&
    css`
      text-align: left;
      & > * {
        margin-left: 30vw;
      }
      h4 {
        margin-left: 20vw;
      }

      ${media.xs`
        & > div {
          margin-left: 3vw !important;
        }
    `}
    `}

  ${props =>
    props.dark &&
    css`
      background: #292929;
      * {
        color: #eee;
      }
      span {
        text-align: left;
        font-size: 16px;
        line-height: 28px;
        font-weight: 400;
        opacity: 0.5;
      }
      span,
      p {
        color: #fefefe !important;
      }
      h6 {
        color: #fff;
        font-weight: 700;
      }
      h4 {
        color: #fff;
      }
      div {
        border-bottom: 1px solid #333 !important;
      }
    `}
`

const Item = styled.div`
  width: 40%;
  margin: 0 auto;
  border: none;
  border-bottom: 1px solid #eee;
  h6 {
    letter-spacing: 2px;
    font-weight: 700;
    padding-top: 6px;
  }
  span,
  p {
    font-size: 13px;
    line-height: 24px;
    color: #666;
  }
  span {
    opacity: 0.75;
    float: right;
    text-transform: uppercase;
  }
  p {
    margin-bottom: 24px;
    opacity: 0.5;
  }
  ${media.xs`
    width: 90%;

  `}
`

export default props => {
  const content = (
    <Content>
      <FlickrHero
        api_key="b1ba02953f291ea6ae1c115588d2d639"
        user_id="186601528@N05"
        album_id="72157712816519807"
        fillPage="plant-images"
      />
      <HeroText />
      <SocialIcons
        style={{
          position: 'absolute',
          margin: '0 auto',
          left: 0,
          right: 0,
          bottom: 16,
        }}
        icons={[
          {
            name: 'github-alt',
            href: 'https://github.com/orgs/purdueblog/dashboard/',
          },
        ]}
      />
      <a id="about-me">Goal</a>
      <Section>
        <Title>Goal</Title>
        <Flex alignItems="center" flexDirection="column">
          <Box px={2} width={[1, 1 / 2]}>
            <p>
              Our project is the Smart Irrigation System of Agriculture IoT.
              The previous smart irrigation system usually checks farm and crop status and adjusts amount of water, using some sensors.
              Our ultimate goal is to use weather API and data to determine the amount of water necessary, considering precipitation.
            </p>
          </Box>
          <Box px={2} width={180}>
            <Img
              sizes={
                props.data.allFile
                  ? props.data.allFile.edges[0].node.childImageSharp.sizes
                  : {}
              }
            />
          </Box>
        </Flex>
      </Section>
      <Title small>Portfolio</Title>
      <a id="portfolio">Portfolio</a>
      <Portfolio items={props.data.allMarkdownRemark.edges} />
      <a id="experience">problem</a>
      <Section center dark>
        <h4>Current Problem</h4>
        <Box px={2} width={[1, 1 / 2]}>
          <p>
              Drought<br></br>
               In the western U.S., there is severe drought. It can kill plants and make farmers use more water.
              <br></br><br></br>
              Water usage rate<br></br>
               Most automatic irrigation system use more water than is necessary.
              Because they can't predict weather.
              If tomorrow is going to be a rainy day, we don't have to water the plants.

          </p>
        </Box>
      </Section>
      <a id="tech">Algorithm</a>
      <Section center>
        <h4>Algorithm</h4><h3>M.A.D for water saving</h3>
        <Box px={2} width={[1, 1 / 2]}>
          <p>
            M.A.D algorithm is Management Allowable Depletion.
            Using this, we can specify how dry soil can be without water stress.
            M.A.D depends on A.W.C (Avaliable Water Capacity) and has a specific value for each crop status, like seeds or flowering.
            <br></br><a href="">Details on M.A.D</a>
          </p>
        </Box>
      </Section>
      <a id="education">Network</a>
      <Section dark center>
        <h4>Network for low power</h4>
        <Box px={2} width={[1, 1 / 2]}>
          <p>
            LoRa is Long Range and low-power, wide-area network(LPWAN) technology.
            It is slower than a 4G or 5G network, but it can communicate at a longer range than them using lower power.
          </p>
        </Box>
      </Section>
      <a id="honoursAndAwards">Honours & Awards</a>
      <Section center>
        <h4>Contribute</h4>
        <Box px={2} width={[1, 1 / 2]}>
          <p>
            <h3>PURDUE University</h3>
            <br></br>Connor Polanka<br></br>
            <h3>CHUNGNAM NATIONAL University</h3>
              <br></br>Myungwoo Yang
              <br></br>Jeongjun Lee 
              <br></br>Subeen Jeong
          </p>
        </Box>
      </Section>
    </Content>
  )
  console.log("location : ",props.location)
  console.log("content : ", content.props.children)
  return (
    <Layout location={props.location}>
      <NavBar main children={content.props.children} />
      {content}
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          timeToRead
          excerpt(pruneLength: 120)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            image {
              childImageSharp {
                sizes(
                  maxWidth: 500
                  maxHeight: 400
                  duotone: {
                    highlight: "#333333"
                    shadow: "#111111"
                    opacity: 65
                  }
                  ) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
    allImageSharp: allFile(filter: { relativePath: { regex: "/logos/" } }) {
      edges {
        node {
          id
          childImageSharp {
            sizes(maxWidth: 300, grayscale: true) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
    allFile(filter: { name: { regex: "/signature/" } }) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 200, grayscale: true) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`

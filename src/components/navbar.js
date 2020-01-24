import React from 'react'
import styled, { css } from 'styled-components'
import { Flex, Box } from 'grid-styled'
import scrollToElement from 'scroll-to-element'
import './styleOfNav.css'
import Name from './name'
import logoCorn from './img/corn.png'

import { media } from '../utils/style'



const Base = styled.div`
  padding: 0;
  margin: 0;
  max-height: 62px;
  line-height: 62px;
  width: 100vw;
  & ul {
    width: 100%;
    height: 62px;
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 13px;
  }
  & ul > li a,
  & ul > li {
    height: 62px;
    font-size: 11px;
    float: right;
    position: relative;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    transition: opacity .3s ease;
  }
  & ul > li a {
    font-family: 'Raleway';
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    margin-right: 32px;
  }

  ${props =>
    props.dark &&
    css`
      background: #fff;
      & ul > li a,
      & ul > li {
        color: #242424;
        opacity: 0.6;
      }
      & ul > li a:hover {
        opacity: 1;
      }
      a {
        color: #000;
      }
    `}

  ${props =>
    props.main &&
    css`
      background: transparent;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
    `}

  ${media.xs`
    & ul {
      display: none;
    }
  `}


`
class NavBar extends React.Component {

  movingdiv = null;
  movinglist = null;
  constructor(props){
    super(props);
    this.state = {btnClicked:1,num:0,pos:0} //btnClicked 가 1이면 없는거(시작:-250px)부터 시작, 0이면 있는거(시작:0px)부터 시작. 
  }
  toRight(){
    let counter = setInterval(()=>{
      console.log("R");
      this.setState({num:this.state.num-1, pos:this.state.pos+5});
      this.movingdiv.style.left=this.state.pos+"px";
      if(this.state.num<=0) clearInterval(counter);
    },25);
  }
  toLeft(){
    
    let counter = setInterval(()=>{
      console.log("L");
      this.setState({num:this.state.num+1,pos:this.state.pos-5});
      this.movingdiv.style.left=this.state.pos+"px";
      if(this.state.num>=50) clearInterval(counter);
      },25);
  }
  makeNone(){
    this.setState({ btnClicked: this.state.btnClicked + 1 })
    console.log("false-true");
    this.toLeft();
    // this.movinglist.style.display='none';
    // this.movingdiv.style.display='none';
  }
  makeTrue(){
    this.setState({ btnClicked: this.state.btnClicked - 1 })
    console.log("true-false");
    this.toRight();
    // this.movinglist.style.display='block';
    // this.movingdiv.style.display='block';
  }
  
  handleOnClick = () => {
    console.log("clicked");
    if(this.state.btnClicked==0){
      this.makeNone();
    }
    else{
      this.makeTrue();
    }
  }

  render() {
    const linkMap = this.props.children
      .map(el => {
        if (el.props.id)
          return { name: el.props.children, href: `#${el.props.id}` }
      })
      .filter(n => n != undefined)
      .reverse()
  
    const links = linkMap.map(function(link) {
      return (
        <li key={link.name}>
          <a
            onClick={() => {
              scrollToElement(link.href)
            }}
          >
            {link.name}
          </a>
        </li>
      )
    })

    return (
      <div>
        <Base {...this.props}>
          <Flex>
            <Box px={2} width={[1, 1 / 3, 2 / 6]}>
              <Name />
            </Box>
            <img src={logoCorn}class="style4btn" onClick={this.handleOnClick}/>
            <Box px={2} width={[0, 2 / 3, 4 / 6]}>
              <ul>{links}</ul>
            </Box>
          </Flex>
        </Base>
        
        <div class="style4div" ref={ref => {
            this.movingdiv = ref;
          }}>
            <ul class="style4ul"ref={ref => {
            this.movinglist = ref;
          }}>
              <li class="style4li">
                  <a>Members</a>
              </li>
              <li class="style4li">
                <details>
                  <summary>Project</summary>
                    <ul>
                      <li class="style4li">Network</li>
                      <li class="style4li">Hardware</li>
                      <li class="style4li">Irrigation</li>
                      <li class="style4li">Data</li>
                    </ul>
                </details>
              </li>
              <li class="style4li">
                  <a href="">Github Blog</a>
              </li>
            </ul>
        </div>
      </div>
    )
  }
}

export default NavBar

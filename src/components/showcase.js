import React from 'react'
import styled, { css } from 'styled-components'
import {Flex, Box} from '@rebass/grid'

const Base = styled.div `
  height: fit-contents;
  padding: 0;
  background: #292929;
`

class Showcase extends React.Component {
  render() {
    return (
      <Flex flexWrap='wrap' >
         <div style={{'padding': '25px'}}>
            <h5>Front-end:</h5>
            <ul>
              <li>JavaScript (ES6)</li>
              <li>Typescript</li>
              <li>React</li>
              <li> Angular 7</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </div>
          <div style={{'padding': '25px'}}>
            <h5>Back-end:</h5>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>GraphQl</li>
            </ul>
          </div>
          <div style={{'padding': '25px'}}>
            <h5>Other:</h5>
            <ul>
              <li>Git</li>
              <li>Webpack</li>
              <li>Babel</li>
              <li>ESLint & Prettier</li>
            </ul>
          </div>
      </Flex>
    )
  }
}

export default Showcase
import React from 'react'
import styled, {css} from 'styled-components'
import Typist from 'react-typist';

import { media } from '../utils/style'

const StyledTypist = styled(Typist)`
color: #fff;
letter-spacing: 13px;
max-width: 100%;
font-size: 30px;
line-height: 50px;
font-weight: 300;
text-transform: uppercase;
font-family: 'Raleway';
position: absolute;
top: 50%;
left: 50%;
${ media.md`
  left: 25%;
  top: 40%;
` }
${ media.xs`
  left: 3%;
  top: 15%;
  letter-spacing: 12px;
` }
`

class HeroText extends React.Component {
  render() {
    if(this.props.text) {
      return (
        <Typist>
          <StyledTypist {...this.props}>
            <strong>{this.props.text.split(' ').slice(0,1)}<br /></strong>{this.props.text.split(' ').slice(1).join(' ')}
          </StyledTypist>
       </Typist>
      )
    } else {
      return (
        <StyledTypist cursor={{show: false}} {...this.props}>
          <strong>I Am  Navi Marella</strong> 
          <p><br/></p>
          <span> React|Angular Developer</span>
         
          <Typist.Backspace count={24} delay={500} />
          <span> OpenSource Contributor</span>
          <Typist.Backspace count={22} delay={500} />
          <span> Trainer</span>
          <Typist.Backspace count={8} delay={400} />
          <span>Front End Developer</span>
       </StyledTypist>
      )
    }
  }
}

export default HeroText
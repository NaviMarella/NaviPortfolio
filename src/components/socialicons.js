import React from 'react'
import styled, { css } from 'styled-components'
import FontAwesome from 'react-fontawesome'
import { FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa'

class Icon extends React.Component {
  render() {
    const { name, href } = this.props;
    return (
      <a href={href}>
        { (name === 'twitter') && <FaTwitterSquare style={{"width": "50px", "height": "50px"}}/>}
        { (name === 'linkedin') && <FaLinkedin style={{"width": "50px", "height": "50px"}}/>}
        { (name === 'github') && <FaGithubSquare style={{"width": "50px", "height": "50px"}}/>}
      </a>
    );
  }
}

const Base = styled.div`
  margin: 20px 0;
  text-align: center;
  & a {
    display: inline-block;
    margin 5px;
    color: #fff;
  }
  & a span {
    transition: color .2s ease-in;
  }
  & a:hover {
    text-decoration: none;
  }
  & a:hover span.fa-linkedin {
    color: #4875b4;
  }
  & a:hover span.fa-twitter {
    color: #3cf;
  }
  & a:hover span.fa-github-alt {
    color: #fc6d26;
  }
`

class SocialIcons extends React.Component {
  render() {
    const icons = this.props.icons.map(function(icon){
      return <Icon key={icon.name} name={icon.name} href={icon.href} />;
    })
    return (
      <Base {...this.props}>
        {icons}
      </Base>
    );
  }
}

export default SocialIcons
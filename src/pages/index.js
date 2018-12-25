import React from 'react'
import Link from 'gatsby-link'
import { Flex, Box } from '@rebass/grid'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import FlickrHero from 'react-flickr-hero'
import Footer from "../components/Footer"
import { media } from '../utils/style'
import Showcase from "../components/showcase"
import Button from '../components/button'
import Bar from '../components/bar'
import Breadcrumb from '../components/breadcrumb'
import Carousel from '../components/carousel'
import NavBar from '../components/navbar'
import HeroText from '../components/heroText'
import SocialIcons from '../components/socialIcons'
import Portfolio from '../components/portfolio'
import Card from "../components/card"


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
  ${props => props.small && css`
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
  h1, h2, h3, h4, h5, h6 {
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
  ${props => props.center && css`
    text-align: left;
    & > * {
      margin-left: 30vw;
    }
     h4 {
       margin-left: 20vw;
     }
    ${ media.xs`
        & > div {
          margin-left: 3vw !important;
        }
    ` }
  `}
  ${props => props.dark && css`
    background: #292929;
     * {
       color: #eee;
     }
     span {
      text-align: left;
      font-size: 16px;
      line-height: 28px;
      font-weight: 400;
      opacity: .5;
     }
     span, p {
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
  span, p {
    font-size: 13px;
    line-height: 24px;
    color: #666;
  }
  span {
    opacity: .75;
    float: right;
    text-transform: uppercase;
  }
  p {
    margin-bottom: 24px;
    opacity: 0.5;
  }
  ${ media.xs`
    width: 90%;
  ` }
`

class IndexPage extends React.Component {
  render() {
    const content = (
      <Content>
        <FlickrHero api_key='1b4e5b0203fab0d5731afe68f0a543e1' user_id='132343752@N06' album_id='72157694825254121' fillPage />
        <HeroText />
        <SocialIcons style={{position: 'absolute', margin: '0 auto', left: 0, right: 0, bottom: 16}} icons={[
            {
              name: 'twitter',
              href: 'https://twitter.com/navimarella'
            }, {
              name: 'github',
              href: 'https://github.com/navimarella'
            }, {
              name: 'linkedin',
              href: 'https://ie.linkedin.com/in/navimarella'
            }
          ]}/>
        <a id='about-me'>About Me</a>
        <Section>
          <Title>About Me</Title>
          <Flex alignItems='center' flexDirection='column'>
            <Box px={2} width={[ 1 , 1 / 2 ]}>
              <p style={{'text-align': 'left', 'line-height': '40px'}}>Currently working as a software developer at <a href='https://certiport.pearsonvue.com/'>Certiport, Pearson Vue</a> focusing on the exam development platform.

               <br/>  
               <br/>            
                <span> ➕ As of this time I am highly involved in the thriving JavaScript ecosystem. </span>
                <span> ➕ 5 years of experience in developing Single Page (SPA’s) and mobile related applications.</span>
                <span> ➕ Highly expertise in libraries, frameworks - ReactJs, Angular7, NodeJs, ES6, Typescript. </span>
                <span> ➕ Passionate about coding and design. I like building libraries from scratch. </span>
                <span> ➕ Freelancer on Angular and NativeScript projects. </span>
              </p>
            </Box>
          </Flex>
        </Section>
        <a id='portfolio'>Portfolio</a>
        <Section dark>
          <h4>Portfolio</h4>
          <Flex justifyContent='center' px={1} flexWrap='wrap'>
            <Card
              title="Adobe Certification Exam"
              link="https://certiport.pearsonvue.com/Certifications/Adobe/ACA/Overview"
              description="Adobe Certfication is an exam application built with Angular to certify any student/user as Adobe Certified Professional."
            />
            <Card
              title="Digital Status fullfilment"
              link="https://icomplete.wellsfargo.com/oas/status/auth"
              description="Digital Status fullfillment is an application built with React to check the status for various types of loans applied."
            />
            <Card
              title="Mobile Metrics"
              link="https://www.inrhythm-inc.com/mobilemetrics.html"
              description="MobileMetrics is a powerful dashboarding tool that works with any data for creating visually appealing dashboards and reports/charts."
            />
          </Flex>
        </Section>
        <a id='experience'>Experience</a>
        <Section center>
          <h4>Experience</h4>
          <span>Where I've worked.</span>
          <Item>
            <span>Mar 2018 - CURRENT</span>
            <h6>Certiport, Pearson Vue</h6>
            <p>Software Engineer</p>
          </Item>
          <Item>
            <span>Sep 2017 - Mar 2018</span>
            <h6>Wells Fargo</h6>
            <p>React Developer</p>
          </Item>
          <Item>
            <span>May 2017 - Aug 2017</span>
            <h6>Certiport, Pearson Vue</h6>
            <p>Angular Developer</p>
          </Item>
          <Item>
            <span>Dec 2016 - April 2016</span>
            <h6>JVR Systems inc</h6>
            <p>Developer Intern</p>
          </Item>
          <Item>
            <span>Jan 2013 - Dec 2015</span>
            <h6>InRhythm inc</h6>
            <p>Junior Software developer</p>
          </Item>
        </Section>
        <a id='tech'>Tech</a>
        <Section center dark>
          <h4>Tech</h4>
          <span>Technologies I enjoy working with.</span>
          <Showcase />
        </Section>
        <a id='education'>Education</a>
        <Section center>
          <h4>EDUCATION</h4>
          <span>Education I've recieved.</span>
          <Item>
            <span>Jan 2016 - Dec 2016</span>
            <h6>Masters in COMPUTER SCIENCE</h6>
            <p>University of Central Missouri</p>
          </Item>
          <Item>
            <span>Aug 2009 -  Apr 2013</span>
            <h6>Bachelors in Computer Science</h6>
            <p>JNTU University</p>
          </Item>
        </Section>
        <a id='honoursAndAwards'>Honours & Awards</a>
        <Section center dark>
          <h4>HONORS & AWARDS</h4>
          <span>A list of honors and awards I have recieved for my work.</span>
          <Item>
            <span>2013</span>
            <h6>Topped in Final Exams for whole department</h6>
            <p>Jntu University</p>
          </Item>
          <Item>
            <span>2015</span>
            <h6>Best Employee Award</h6>
            <p>InRhythm Inc</p>
          </Item>
        </Section>
        <a id='contact'>Contact</a>
        <Section>
        <h4>Get in touch with me!</h4>
          <Flex alignItems='center' flexDirection='column'>
            <p>Just email me directly at <a href="mailto:navi.marella@gmail.com" target="_blank"><strong>navi.marella@gmail.com</strong></a>.</p>
          </Flex>
        </Section>
      </Content>
    )
    return (
      <div>
        <NavBar main children={content.props.children} />
        {content}
        <Footer />
      </div>
    );
  }
}
export default IndexPage

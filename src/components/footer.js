import React from 'react'
import styled from 'styled-components'
import {Flex, Box} from '@rebass/grid'
import scrollToElement from 'scroll-to-element'

import Name from './name'
import Button from './button'
import SocialIcons from './socialicons'

const Base = styled.div `
  height: fit-contents;
  padding: 0;
  background: #292929;
`

const SocialIconsStyled = styled(SocialIcons)`
  margin-left: -8px;
  text-align: left;
`

const CenteredButtonBox = styled(Box)`
  margin: 2em auto;
`

class Footer extends React.Component {
  render() {
    return (<Base {...this.props}>
      <Flex flexWrap='wrap' justifyContent='space-around'>
        <Box px={2} width={[1, 1 / 2, 1 / 3, 1 / 6]}>
          <Flex flexDirection="column">
            <Box>
              <Name block/>
            </Box>
            <Box>
              <SocialIconsStyled icons={[
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
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex justifyContent='center' flexDirection="column">
            <CenteredButtonBox>
              <Button onClick={() => {scrollToElement('html')}} small="small" dark="dark" opaque="opaque">Top</Button>
            </CenteredButtonBox>
          </Flex>
        </Box>
      </Flex>
    </Base>);
  }
}

export default Footer
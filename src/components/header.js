import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, logo }) => (
  <div>
  {{siteTitle}}
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  logo: PropTypes.string.isRequired
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

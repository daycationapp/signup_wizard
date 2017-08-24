import React, { PropTypes } from 'react'
import './LandingLayout.scss'

class LandingLayout extends React.Component {

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

LandingLayout.propTypes = {
  children: PropTypes.node
}

export default LandingLayout

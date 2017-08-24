import React from 'react'

class Landing extends React.Component {
  constructor (...args) {
    super(...args)

    this.state = {
      backgroundImage: '/imgs/background1440.png'
    }

    this.handleResize = this.handleResize.bind(this)
  }

  handleResize () {
    var backgroundImage
    if (window.innerWidth < 1440 && window.innerWidth > 425) {
      backgroundImage = '/imgs/background1440.png'
    } else if (window.innerWidth <= 425) {
      backgroundImage = '/imgs/background425.png'
    }
    this.setState({
      backgroundImage: backgroundImage
    })
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize, true)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize, true)
  }

  render () {
    return (
      <div>
        <div id='DaycationHeader' className='visible_desktop flex flexcolumn-nowrap text-center'>
          <img src='/imgs/DaycationSymbol.RGB.Orange.png' alt='pineapple' />
          Daycation. Generate ancillary revenue for your hotels, at $0 extra cost.
        </div>
        <div id='DaycationHotelsLanding'>
          <div className='DaycationLandingBackground' style={{ backgroundImage: 'url(' + this.state.backgroundImage + ')' }}>
          </div>
          <div className='TypeformContainer flexrow-nowrap flex'>
            <iframe id='my_typeform' src='https://daycationapp.typeform.com/to/EIZ2Px'></iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing

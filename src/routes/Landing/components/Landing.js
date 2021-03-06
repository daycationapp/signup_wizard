import React from 'react'
import './landing.scss'

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
    if (window.innerWidth >= 992) {
      backgroundImage = '/imgs/background1440.png'
    } else if (window.innerWidth < 992 && window.innerWidth > 768) {
      backgroundImage = '/imgs/background992.png'
    } else if (window.innerWidth <= 768 && window.innerWidth > 500) {
      backgroundImage = '/imgs/background768.png'
    } else if (window.innerWidth <= 500) {
      backgroundImage = '/imgs/background425.png'
    }
    this.setState({
      backgroundImage: backgroundImage
    })
  }

  componentDidMount () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize, true)
    if (typeof window.typeform === 'function') {
      window.typeform()
    }
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize, true)
  }

  render () {
    return (
      <div id='Landing' style={{ backgroundColor: 'white' }}>
        <nav className='DaycationNav flex flexrow-nowrap'>
          <div className='DaycationNav__Left'>
            <img src="/imgs/DaycationSymbol.RGB.Orange.png" alt='Daycation Pineapple' />
          </div>
          <div className='DaycationNav__Right'>
            <a href='#typeform'>Get Started</a>
          </div>
        </nav>
        <div id='DaycationHotelsLanding'>
          <div className='DaycationLandingBackground' style={{ backgroundImage: 'url(' + this.state.backgroundImage + ')' }}>
          </div>
          <div className='DaycationLandingContent flex flexcolumn-nowrap'>
            <div className='DaycationHeader text-center'>
              <div className='DaycationHeader__Big'><b>Daycation</b><br /></div>{/* <br /> */}
              <b>Ancillary Revenue For Your Hotel.</b> Made Easy.<br />{/* <br /> */}
              <div className='DaycationHeader__Sub'>Join Hyatt, SBE, Denihan and others.</div>
            </div>
            <a className='DesktopOnly' href='#typeform'><button className='LearnMore'>Learn More</button></a>
            <a className='LearnMore button MobileOnly'
              href='https://daycationapp.typeform.com/to/EIZ2Px'
              data-mode='popup'
              target='_blank'>Learn More
            </a>
          </div>
          <div className='TypeformContainer flexrow-nowrap flex'>
            <a name='typeform'></a>
            <iframe id='my_typeform' className='DesktopOnly' src='https://daycationapp.typeform.com/to/EIZ2Px'></iframe>
          </div>
          <hr id='BeforeContactUs' style={{ border: '1px solid #FF6e61', width: '60%' }} />
          <div className='ContactUsContainer flex flexrow-nowrap'>
            {/* <div className='ContactUs__Header'>If you want to get in touch, </div> */}
            <a href='mailto:hotels@daycationapp.com'><button className='EmailButton'>Contact Us</button></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing

// We only need to import the modules necessary for initial render
import PageLayoutContainer from '../layouts/PageLayout/PageLayoutContainer'
import LandingLayout from '../layouts/LandingLayout/LandingLayout'
import Landing from './Landing'
import Home from './Home'
import DayPassesRoute from './DayPasses'
import CabanasRoute from './Cabanas'
import AgreementRoute from './Agreement'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/',
  component   : LandingLayout,
  indexRoute  : Landing,
  childRoutes : [
    AgreementRoutes(store),
  ]
})

const AgreementRoutes = (store) => ({
  path        : '/agreement',
  component   : PageLayoutContainer,
  indexRoute  : Home(store),
  childRoutes : [
    DayPassesRoute(store),
    CabanasRoute(store),
    AgreementRoute(store),
  ]
})

export default createRoutes

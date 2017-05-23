// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/PageLayout/PageLayout';
import Home from './Home';
import DayPassesRoute from './DayPasses';
import CabanasRoute from './Cabanas';

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home(store),
  childRoutes : [
    DayPassesRoute(store),
    CabanasRoute(store)
  ]
});

export default createRoutes;

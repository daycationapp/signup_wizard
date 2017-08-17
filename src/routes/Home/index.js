import { injectReducer } from '../../store/reducers';

export default (store) => ({
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const HotelInfo = require('./containers/HotelInfoContainer').default
      const reducer = require('./modules/hotelInfo.js').default

      /*  Add the reducer to the store on key 'dayPasses'  */
      injectReducer(store, { key: 'hotelInfo', reducer })

      /*  Return getComponent   */
      cb(null, HotelInfo)

    /* Webpack named bundle   */
    }, 'hotelInfo')
  }
})

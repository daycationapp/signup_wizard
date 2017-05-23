import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'cabanas',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Cabanas = require('./containers/CabanasContainer').default
      const reducer = require('./modules/cabanas').default

      /*  Add the reducer to the store on key 'dayPasses'  */
      injectReducer(store, { key: 'cabanas', reducer })

      /*  Return getComponent   */
      cb(null, Cabanas)

    /* Webpack named bundle   */
    }, 'cabanas')
  }
})

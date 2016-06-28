import { createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'

const middleware = routerMiddleware(browserHistory)

export default function configureStore (initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(middleware))

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    )
  }

  return store
}

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from '../store/configureStore'
import Project from '../modules/Project'
import App from './App'
import CategoryList from './CategoryList'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

export default class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={App}>
            <Route path='/' component={CategoryList} />
            <Route path='/project' component={Project} />
            <Route path='/project/:id' component={Project} />
          </Route>
        </Router>
      </Provider>
    )
  }
}

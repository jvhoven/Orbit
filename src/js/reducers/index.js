import { combineReducers } from 'redux'
import categories from './categories'
import projects from './projects'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  categories,
  projects,
  routing: routerReducer
})

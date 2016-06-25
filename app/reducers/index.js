import {
  combineReducers
}
from 'redux'
import categories from './categories'
import projects from './projects'

export default combineReducers({
  categories,
  projects
})

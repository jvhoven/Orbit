import {
  CREATE_PROJECT, DELETE_PROJECT, EDIT_PROJECT
}
from '../constants/ActionTypes'

const initialState = [
  {
    id: 0,
    category: 0,
    image: 'assets/img/project-1.png',
    title: 'Bacchus'
  },
  {
    id: 1,
    category: 0,
    image: 'assets/img/project-2.png',
    title: 'Drone Project'
  },
  {
    id: 2,
    category: 0,
    image: 'assets/img/project-3.png',
    title: 'Fitness App'
  }
]

const project = (state, action) => {
  switch(action.type) {
    case CREATE_PROJECT:
      return {
        id: action.id,
        category: action.category,
        image: action.image,
        title: action.title
      }
  }
}

export default function projects(state = initialState, action) {
  switch(action.type) {
    case CREATE_PROJECT:
      return [
        ...state,
        project(undefined, action)
      ]
    case DELETE_PROJECT:
      return state.filter((project) => {
        if(action.id == project.id)
          return false
      });
    default:
      return state
   }
}

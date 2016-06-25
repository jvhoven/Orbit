import {
  ADD_PROJECT, DELETE_PROJECT, EDIT_PROJECT
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
  },
  {
    id: 3,
    category: 1,
    image: 'assets/img/project-4.png',
    title: 'Test'
  },
  {
    id: 4,
    category: 1,
    image: 'assets/img/project-5.png',
    title: 'Another'
  },
  {
    id: 5,
    category: 1,
    image: 'assets/img/project-6.png',
    title: 'Another'
  },
  {
    id: 6,
    category: 0,
    image: 'assets/img/project-2.png',
    title: 'Amazing'
  }
]

export default function projects(state = initialState, action) {
  switch(action.type) {
    case ADD_PROJECT:
      return [{
          id: state.reduce((maxId, project) => Math.max(project.id, maxId), -1) + 1,
          title: action.title,
          category: action.category,
          image: action.image
        },
        ...state
      ]

    case DELETE_PROJECT:
      return state.filter((project) => {
        if(action.id == project.id)
          return false
      });


    case EDIT_PROJECT:
      return state.map(project =>
        project.id === action.id ?
        Object.assign({}, project, {
          title: action.title,
          image: action.image,
          category: action.category
        }) :
        project
      )
    default:
      return state
   }
}

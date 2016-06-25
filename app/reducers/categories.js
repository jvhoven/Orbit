import {
  ADD_CATEGORY, DELETE_CATEGORY, RENAME_CATEGORY, RESIZE_CATEGORY
}
from '../constants/ActionTypes'

const initialState = [{
  title: 'Cool projects',
  style: 'sixtysix',
  id: 0
}]

export default function categories(state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORY:
      return [{
          id: state.reduce((maxId, category) => Math.max(category.id, maxId), -1) + 1,
          title: action.title,
          style: action.style
        },
        ...state
      ]

    case DELETE_CATEGORY:
      return state.filter(category =>
        category.id !== action.id
      )

    case RENAME_CATEGORY:
      console.log("RENAMED")
      return state.map(category =>
        category.id === action.id ?
        Object.assign({}, category, {
          title: action.title
        }) :
        category
      )

    default:
      return state
  }
}

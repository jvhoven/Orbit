
import * as types from '../constants/ActionTypes'

export function addCategory (title, style) {
  return { type: types.ADD_CATEGORY, title, style }
}

export function deleteCategory (id) {
  return { type: types.DELETE_CATEGORY, id }
}

export function editCategory (id, title, style) {
  return { type: types.EDIT_CATEGORY, id, title, style }
}

export function addProject (title, category, image) {
  return { type: types.ADD_PROJECT, title, category, image }
}

export function deleteProject (id) {
  return { type: types.DELETE_PROJECT, id }
}

export function editProject (id, title, category, image) {
  return { type: types.EDIT_PROJECT, id, title, category, image }
}

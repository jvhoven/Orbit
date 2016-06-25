
import * as types from '../constants/ActionTypes'

export function addCategory (title, style) {
  return { type: types.ADD_CATEGORY, title, style }
}

export function deleteCategory (id) {
  return { type: types.DELETE_CATEGORY, id }
}

export function resizeCategory (id, direction) {
  return { type: types.RESIZE_CATEGORY, id, direction }
}

export function renameCategory (id, title) {
  return { type: types.RENAME_CATEGORY, id, title }
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

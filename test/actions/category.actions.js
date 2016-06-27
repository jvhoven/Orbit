/* eslint-env mocha */
import expect from 'expect'
import * as actions from '../../src/js/actions'
import * as types from '../../src/js/constants/ActionTypes'

describe('category actions', () => {
  it('should create a dispatch to add a category', () => {
    const category = {
      title: 'A new category',
      style: 'sixtysix'
    }

    const expectedAction = {
      type: types.ADD_CATEGORY,
      title: 'A new category',
      style: 'sixtysix'
    }

    expect(actions.addCategory(category.title, category.style)).toEqual(expectedAction)
  })

  it('should create a dispatch to delete a category', () => {
    const id = 0

    const expectedAction = {
      type: types.DELETE_CATEGORY,
      id: id
    }

    expect(actions.deleteCategory(id)).toEqual(expectedAction)
  })

  it('should create a dispatch to edit a category', () => {
    const editCat = {
      id: 0,
      title: 'New title',
      style: 'fifty'
    }

    const expectedAction = {
      type: types.EDIT_CATEGORY,
      id: 0,
      title: 'New title',
      style: 'fifty'
    }

    expect(actions.editCategory(editCat.id, editCat.title, editCat.style)).toEqual(expectedAction)
  })
})

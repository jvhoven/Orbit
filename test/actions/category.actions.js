/* eslint-env mocha */
import expect from 'expect'
import * as actions from '../../app/actions'
import * as types from '../../app/constants/ActionTypes'

describe('category actions', () => {
  it('should create a dispatch to add a category', () => {
    const category = {
      title: 'A new category',
      style: 'sixtysix'
    }

    const expectedAction = {
      type: types.ADD_CATEGORY,
      title: category.title,
      style: category.style
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

  it('should create a dispatch to rename a category', () => {
    const editCat = {
      id: 0,
      title: 'New title'
    }

    const expectedAction = {
      type: types.RENAME_CATEGORY,
      id: editCat.id,
      title: editCat.title
    }

    expect(actions.renameCategory(editCat.id, editCat.title)).toEqual(expectedAction)
  })
})

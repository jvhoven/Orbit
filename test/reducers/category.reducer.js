/* eslint-env mocha */
import expect from 'expect'
import categories from '../../src/js/reducers/categories'
import * as types from '../../src/js/constants/ActionTypes'
import deepFreeze from 'deep-freeze'

describe('categories reducer', () => {
  it('should add a new category to the state', () => {
    const stateBefore = []
    const action = {
      type: types.ADD_CATEGORY,
      title: 'New category',
      style: 'fifty'
    }
    const stateAfter = [{
      id: 0,
      title: 'New category',
      style: 'fifty'
    }]

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(
      categories(stateBefore, action)
    ).toEqual(stateAfter)
  })

  it('should add a new category to the existing state', () => {
    const stateBefore = [{
      id: 0,
      title: 'New category',
      style: 'fifty'
    }]
    const action = {
      type: types.ADD_CATEGORY,
      title: 'Another category',
      style: 'thirtythree'
    }
    const stateAfter = [{
      id: 1,
      title: 'Another category',
      style: 'thirtythree'
    }, {
      id: 0,
      title: 'New category',
      style: 'fifty'
    }]

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(
      categories(stateBefore, action)
    ).toEqual(stateAfter)
  })

  it('should delete a category from the existing state', () => {
    const stateBefore = [{
      id: 0,
      title: 'New category',
      style: 'fifty'
    }]
    const action = {
      type: types.DELETE_CATEGORY,
      id: 0
    }
    const stateAfter = []

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(
      categories(stateBefore, action)
    ).toEqual(stateAfter)
  })

  it('should edit a category in the existing state', () => {
    const stateBefore = [{
      id: 0,
      title: 'Dumb category name',
      style: 'fifty'
    }]
    const action = {
      type: types.EDIT_CATEGORY,
      id: 0,
      title: 'A cool category name',
      style: 'thirtythree'
    }
    const stateAfter = [{
      id: 0,
      title: 'A cool category name',
      style: 'thirtythree'
    }]

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(
      categories(stateBefore, action)
    ).toEqual(stateAfter)
  })
})

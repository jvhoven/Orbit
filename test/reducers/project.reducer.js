/* eslint-env mocha */
import expect from 'expect'
import projects from '../../app/reducers/projects'
import * as types from '../../app/constants/ActionTypes'
import deepFreeze from 'deep-freeze'

describe('projects reducer', () => {
  it('should add a new project to the state', () => {
    const stateBefore = []
    const action = {
      type: types.ADD_PROJECT,
      category: 0,
      title: 'New project',
      image: 'image.jpg'
    }
    const stateAfter = [{
      id: 0,
      category: 0,
      title: 'New project',
      image: 'image.jpg'
    }]

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(
      projects(stateBefore, action)
    ).toEqual(stateAfter)
  })

  it('should add a new project to the existing state', () => {
    const stateBefore = [{
      id: 0,
      category: 0,
      title: 'New project',
      image: 'image.jpg'
    }]
    const action = {
      type: types.ADD_PROJECT,
      category: 0,
      title: 'Another project',
      image: 'image.png'
    }
    const stateAfter = [{
      id: 1,
      category: 0,
      title: 'Another project',
      image: 'image.png'
    }, {
      id: 0,
      category: 0,
      title: 'New project',
      image: 'image.jpg'
    }]

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(
      projects(stateBefore, action)
    ).toEqual(stateAfter)
  })

  it('should delete a project from the existing state', () => {
    const stateBefore = [{
      id: 0,
      category: 0,
      title: 'New project',
      image: 'image.jpg'
    }]
    const action = {
      type: types.DELETE_PROJECT,
      id: 0
    }
    const stateAfter = []

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(
      projects(stateBefore, action)
    ).toEqual(stateAfter)
  })

  it('should edit a project in the existing state', () => {
    const stateBefore = [{
      id: 0,
      category: 0,
      title: 'Dumb project name',
      image: 'image.jpg'
    }]
    const action = {
      type: types.EDIT_PROJECT,
      id: 0,
      category: 0,
      title: 'A cool project name',
      image: 'anotherimage.jpg'
    }
    const stateAfter = [{
      id: 0,
      category: 0,
      title: 'A cool project name',
      image: 'anotherimage.jpg'
    }]

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(
      projects(stateBefore, action)
    ).toEqual(stateAfter)
  })
})

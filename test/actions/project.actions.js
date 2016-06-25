/* eslint-env mocha */
import expect from 'expect'
import * as actions from '../../app/actions'
import * as types from '../../app/constants/ActionTypes'

describe('project actions', () => {
  it('should create a dispatch to add a project', () => {
    const project = {
      title: 'A new project',
      category: 0,
      image: 'image.jpeg'
    }

    const expectedAction = {
      type: types.ADD_PROJECT,
      title: project.title,
      category: project.category,
      image: project.image
    }

    expect(actions.addProject(project.title, project.category, project.image)).toEqual(expectedAction)
  })

  it('should create a dispatch to delete a project', () => {
    const projectId = 0

    const expectedAction = {
      type: types.DELETE_PROJECT,
      id: projectId
    }

    expect(actions.deleteProject(projectId)).toEqual(expectedAction)
  })

  it('should create a dispatch to edit a project', () => {
    const editProject = {
      id: 0,
      title: 'A edited project',
      category: 1,
      image: 'image.png'
    }

    const expectedAction = {
      type: types.EDIT_PROJECT,
      id: editProject.id,
      title: editProject.title,
      category: editProject.category,
      image: editProject.image
    }

    expect(actions.editProject(editProject.id, editProject.title, editProject.category, editProject.image)).toEqual(expectedAction)
  })
})

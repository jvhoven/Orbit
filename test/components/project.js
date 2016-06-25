import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Project from '../../app/components/Project'

function setup () {
  let props = {
    id: 0,
    title: 'A project title',
    image: 'project-1.png'
  }

  let renderer = TestUtils.createRenderer()
  renderer.render(<Project {...props} />)
  let output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

describe('components', () => {
  describe('Category', () => {
    it('should render correctly', () => {
      const { output } = setup()

      expect(output.type).toBe('div')
      expect(output.props.className).toBe('project')
    })
  })
})

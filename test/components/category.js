/* eslint-env mocha */
import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Category from '../../app/components/Category'

function setup () {
  let props = {
    id: 0,
    title: 'A category title',
    style: 'sixtysix'
  }

  let renderer = TestUtils.createRenderer()
  renderer.render(<Category {...props} />)
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
      expect(output.props.className).toBe('category sixtysix')
    })
  })
})

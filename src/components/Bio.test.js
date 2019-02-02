import React from 'react'
import renderer from 'react-test-renderer'
import Bio from './Bio'

describe('Bio', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Bio />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

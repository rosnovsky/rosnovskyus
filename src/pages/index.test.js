import React from 'react'
import renderer from 'react-test-renderer'
import BlogIndex from '../pages/index'

describe('BlogIndex', () => {
  it('renders correctly', () => {
    const location = {
      pathname: '/',
    }

    const tree = renderer.create(<BlogIndex location={location} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

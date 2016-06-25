import React, { Component, PropTypes } from 'react'

export default class Project extends Component {
  render () {
    const { image, title } = this.props

    return (
      <div className='project'>
        <img src={image} alt=''/>
        <span>
          {title}
        </span>
      </div>
    )
  }
}

Project.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

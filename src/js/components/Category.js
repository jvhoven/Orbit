import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'
import ProjectList from '../containers/ProjectList'

export default class Category extends Component {
  render () {
    const { id, style, title } = this.props
    let classes = classNames('category', style)
    return (
      <div className={classes}>
        <div className='title'>
          <span>{title}</span>
          <a href='#'>
            <i className='fa fa-bars'></i>
          </a>
        </div>
        <div className='contents'>
          <ProjectList categoryId={id} />
        </div>
      </div>
    )
  }
}

Category.propTypes = {
  style: PropTypes.oneOf(['sixtysix', 'fifty', 'thirtythree', 'hundred']).isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

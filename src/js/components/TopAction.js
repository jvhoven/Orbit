import React, { Component, PropTypes } from 'react'

export default class TopAction extends Component {
  render () {
    const { action, icon, type } = this.props
    let element

    if (type === 'notification') {
      const { count } = this.props
      element = (
        <a href='#' onClick={action} className={type}>
          <i className={icon}></i>
          <span>{count}</span>
        </a>
      )
    } else {
      element = (
        <a href='#' onClick={action} className={type}>
          <i className={icon}></i>
        </a>
      )
    }

    return element
  }
}

TopAction.propTypes = {
  action: PropTypes.func.isRequried,
  icon: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  count: PropTypes.number
}

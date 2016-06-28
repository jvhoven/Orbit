import React, { Component } from 'react'
import CategoryList from '../containers/CategoryList'

export default class Main extends Component {
  render () {
    const { children } = this.props

    if (children) {
      return (
        <main>{this.props.children}</main>
      )
    } else {
      return (
        <main><CategoryList /></main>
      )
    }
  }
}

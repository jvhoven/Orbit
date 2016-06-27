import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'
import ProjectList from '../containers/ProjectList'
import CategoryEditable from './CategoryEditable'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editCategory } from '../actions'

export class Category extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      active: false
    }
  }

  save (id, title, style) {
    const { editCategory } = this.props
    editCategory(id, title, style)

    this.setState({
      active: false
    })
  }

  toggleActive () {
    this.setState({
      active: true
    })
  }

  render () {
    const { id, style, title } = this.props
    let classes = classNames('category', style)
    let element

    if (!this.state.active) {
      element = (
        <div className={classes}>
          <div className='title' onClick={() => this.toggleActive()}>
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
    } else {
      element = <CategoryEditable {...this.props} onSave={(title, style) => this.save(id, title, style)} />
    }

    return element
  }
}

Category.propTypes = {
  style: PropTypes.oneOf(['sixtysix', 'fifty', 'thirtythree', 'hundred']).isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  editCategory: PropTypes.func.isRequired
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ editCategory }, dispatch)
}

export default connect(null, mapDispatchToProps)(Category)

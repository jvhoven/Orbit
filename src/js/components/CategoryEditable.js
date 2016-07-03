import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import ProjectList from '../containers/ProjectList'

export default class CategoryEditable extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      title: this.props.title || '',
      style: this.props.style
    }
  }

  submit (e) {
    if (e.which === 13 || e.which === 27) {
      const { onSave } = this.props
      onSave(this.state.title, this.state.style)
    }
  }

  setTitle (e) {
    this.setState({ title: e.target.value })
  }

  setStyle (e) {
    this.setState({ style: e.target.value })
    const { onSave } = this.props
    onSave(this.state.title, e.target.value)
  }

  render () {
    const { id, style } = this.props
    let classes = classNames('category', style, 'active')

    return (
      <div className={classes}>
        <div className='title'>
          <input autoFocus type='text' defaultValue={this.state.title}
            onChange={(e) => this.setTitle(e)}
            onKeyDown={(e) => this.submit(e)}
          />
          <select onChange={(e) => this.setStyle(e)} defaultValue={style}>
            <option value='thirtythree'>33%</option>
            <option value='fifty'>50%</option>
            <option value='sixtysix'>66%</option>
            <option value='hundred'>100%</option>
          </select>
        </div>
        <div className='contents'>
          <ProjectList categoryId={id} />
        </div>
      </div>
    )
  }
}

CategoryEditable.propTypes = {
  style: PropTypes.oneOf(['sixtysix', 'fifty', 'thirtythree', 'hundred']).isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onSave: PropTypes.func.isRequired
}

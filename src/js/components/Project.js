import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

export class Project extends Component {
  /*
  * TODO: Implement correct route
  */
  gotoProject (e, id) {
    const { push } = this.props
    push('/project')
  }

  render () {
    const { image, title } = this.props

    return (
      <div onClick={(e, id) => this.gotoProject(e, this.props.id)} className='project'>
        <img src={image} alt=''/>
        <span>
          {title}
        </span>
      </div>
    )
  }
}

Project.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ push }, dispatch)
}

export default connect(null, mapDispatchToProps)(Project)

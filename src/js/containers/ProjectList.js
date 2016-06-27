import React, { Component, PropTypes } from 'react'
import Project from '../components/Project'
import { connect } from 'react-redux'
import { makeGetProjectsByCategory } from '../selectors'

export class ProjectList extends Component {
  render () {
    const { projects } = this.props

    return (
      <div className='container'>
        {projects.map(this.renderProject)}
      </div>
    )
  }

  renderProject (attr) {
    return (
      <Project key={attr.id} {...attr} />
    )
  }
}

ProjectList.propTypes = {
  categoryId: PropTypes.number,
  projects: PropTypes.array.isRequired
}

function makeMapStateToProps (state, props) {
  const getProjectsByCategory = makeGetProjectsByCategory()
  const mapStateToProps = (state, props) => {
    return {
      projects: getProjectsByCategory(state, props)
    }
  }

  return mapStateToProps
}

export default connect(makeMapStateToProps)(ProjectList)

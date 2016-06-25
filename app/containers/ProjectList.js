import React, { Component, PropTypes } from 'react';
import Project from '../components/Project'
import { connect } from 'react-redux'

class ProjectList extends Component {
  render() {
    const { categoryId, projects } = this.props

    return (
      <div>
        {projects.map(this.renderProject)}
      </div>
    )
  }

  renderProject(attr) {
    return (
      <Project key={attr.id} {...attr} />
    )
  }
}

ProjectList.propTypes = {
  categoryId: PropTypes.number,
  projects: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
  if(ownProps.categoryId) {
    let projects = state.projects.filter(project => {
      return project.category === ownProps.id
    })

    return { projects: projects }
  } else {
    return { projects: state.projects }
  }
}

export default connect(mapStateToProps)(ProjectList)

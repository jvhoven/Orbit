import React, { Component, PropTypes } from 'react';
import Project from '../components/Project'
import { connect } from 'react-redux'

export class ProjectList extends Component {
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
  if(ownProps.categoryId >= 0) {
    let projects = state.projects.filter(project => {
      if(project.category === ownProps.categoryId) {
        return project
      }
    })

    return { projects: projects }
  } else {
    return { projects: state.projects }
  }
}

export default connect(mapStateToProps)(ProjectList)

import { createSelector } from 'reselect'

const getProjects = (state) => state.projects
const getCategoryId = (state, props) => props.categoryId

export const makeGetProjectsByCategory = () => {
  return createSelector(
    [ getProjects, getCategoryId ],
    (projects, categoryId) => projects.filter(
      project => project.category === categoryId
    )
  )
}

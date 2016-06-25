import React, { Component, PropTypes } from 'react';
import Category from '../components/Category'
import { connect } from 'react-redux'

class CategoryList extends Component {
  render() {
    const { categories } = this.props
    return (
      <div>
        {categories.map(this.renderCategory)}
      </div>
    )
  }

  renderCategory(attr) {
    return (
      <Category key={attr.id} {...attr} />
    )
  }
}

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return { categories: state.categories }
}

export default connect(mapStateToProps)(CategoryList)

import React, { Component, PropTypes } from 'react'
import TopAction from '../components/TopAction'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCategory } from '../actions'
import { push } from 'react-router-redux'

export class Top extends Component {
  dummyAction () {
    // console.log('Im an action')
  }

  addCategory () {
    const { addCategory } = this.props
    addCategory('New category', 'thirtythree')
  }

  addProject () {
    const { push } = this.props
    push('project')
  }

  closeMenu () {
    let menu = document.getElementsByTagName('aside')[0]
    let main = document.getElementsByTagName('main')[0]
    let top = document.getElementsByClassName('top')[0]

    if (menu.className === 'small') {
      menu.className = ''
      top.className = 'top'
      main.className = ''
    } else {
      menu.className += 'small'
      top.className += ' small'
      main.className += 'small'
    }
  }

  render () {
    return (
      <section className='top'>
        <section className='top-left'>
          <div className='menu-collapse'>
            <TopAction action={() => this.closeMenu()} icon='fa fa-navicon' type='' />
          </div>
          <div className='search'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search for a project...'/>
          </div>
        </section>
        <section className='top-right'>
          <div className='notifications'>
            <TopAction action={() => this.dummyAction()} icon='fa fa-inbox' type='notification' count={4} />
            <TopAction action={() => this.dummyAction()} icon='fa fa-envelope' type='notification' count={2} />
            <TopAction action={() => this.dummyAction()} icon='fa fa-calendar' type='notification' count={7} />
          </div>
          <div className='actions'>
            <TopAction action={() => this.addProject()} icon='fa fa-plus' type='action' />
            <TopAction action={() => this.addCategory()} icon='fa fa-plus-square-o' type='action' />
            <TopAction action={() => this.dummyAction()} icon='fa fa-download' type='action' />
          </div>
        </section>
      </section>
    )
  }
}

Top.propTypes = {
  addCategory: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ addCategory, push }, dispatch)
}

export default connect(null, mapDispatchToProps)(Top)

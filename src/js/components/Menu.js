import React, { Component } from 'react'
import { Link } from 'react-router'

class Menu extends Component {

  render () {
    const { pathname } = window.location
    const active = (url) => url === pathname ? 'active' : ''

    return (
      <aside>
        <div className='user'>
          <img src='public/img/github-prof.jpg' className='img round' alt=''/>
          <div className='user-attr'>
            <span className='location'>The Netherlands</span>
            <span className='username'>jvhoven</span>
          </div>
        </div>
        <nav>
          <ul>
            <li className={active('/')}>
              <Link to='/'>
                <i className='fa fa-home'></i>
                Dashboard
              </Link>
            </li>
            <li className={active('/project')}>
              <Link to='/project'>
                <i className='fa fa-list'></i>
                Project
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    )
  }
}

export default Menu

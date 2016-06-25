import React from 'react'

const Menu = () => (
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
        <li className='active'>
          <a href='#'>
            <i className='fa fa-home'></i>
            Dashboard</a>
        </li>
        <li>
          <a href='#'>
            <i className='fa fa-list'></i>
            Projects</a>
        </li>
      </ul>
    </nav>
  </aside>
)

export default Menu

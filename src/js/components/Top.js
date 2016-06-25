import React from 'react'

const Top = () => (
  <section className='top'>
    <section className='top-left'>
      <div className='menu-collapse'>
        <a href='#'>
          <i className='fa fa-navicon'></i>
        </a>
      </div>
      <div className='search'>
        <i className='fa fa-search'></i>
        <input type='text' placeholder='Search for a project...'/>
      </div>
    </section>
    <section className='top-right'>
      <div className='notifications'>
        <a href='#' alt='View messages' className='notification'>
          <i className='fa fa-inbox'></i>
          <span>4</span>
        </a>
        <a href='#' alt='View e-mails' className='notification'>
          <i className='fa fa-envelope'></i>
          <span>2</span>
        </a>
        <a href='#' alt='View deadlines' className='notification'>
          <i className='fa fa-calendar'></i>
          <span>7</span>
        </a>
      </div>
      <div className='actions'>
        <a href='#' className='action'>
          <i className='fa fa-plus'></i>
        </a>
        <a href='#' className='action'>
          <i className='fa fa-plus-square-o'></i>
        </a>
        <a href='#' className='action'>
          <i className='fa fa-download'></i>
        </a>
      </div>
    </section>
  </section>
)

export default Top

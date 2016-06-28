import React, { Component } from 'react'
import Menu from '../components/Menu'
import Main from '../components/Main'
import Top from './Top'

class App extends Component {
  render () {
    return (
      <div>
          <Top />
          <Menu />
          <Main>
              {this.props.children}
          </Main>
      </div>
    )
  }
}

export default App

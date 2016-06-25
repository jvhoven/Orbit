import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Root from './app/containers/Root'
import configureStore from './app/store/configureStore';

const store = configureStore()

render(
    <Root store={store}></Root>,
    document.getElementById('app')
)

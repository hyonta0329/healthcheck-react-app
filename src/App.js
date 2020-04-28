import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './components/home'
import List from './components/list'

const App = () => (
  <BrowserRouter>
    <div>
        <ul class="sidebarMenuInner">
          <li class="nav-item"><Link to='/home'>ほーむ</Link></li>
          <li class="nav-item"><Link to='/list'>いちらん</Link></li>
        </ul>
      <hr />
      <Route exact path='/home' component={Home} />
      <Route exact path='/index.html' component={Home} />
      <Route path='/list' component={List} />
    </div>
  </BrowserRouter>
)

export default App

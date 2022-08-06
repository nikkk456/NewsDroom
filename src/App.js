
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state={
    progress: 0
  }

  setProgress= (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        />
        <Routes>
          <Route path='/' element={<News setProgress={this.setProgress} key="general" pageSize={20} country="in" category="general"/>}></Route>
          <Route path='/buisness' element={<News setProgress={this.setProgress} key="buisness" pageSize={20} country="in" category="buisness"/>}></Route>
          <Route path='/entertainment' element={<News setProgress={this.setProgress} key="entertainment" pageSize={20} country="in" category="entertainment"/>}></Route>
          <Route path='/health' element={<News setProgress={this.setProgress} key="health" pageSize={20} country="in" category="health"/>}></Route>
          <Route path='/science' element={<News setProgress={this.setProgress} key="science" pageSize={20} country="in" category="science"/>}></Route>
          <Route path='/sports' element={<News setProgress={this.setProgress} key="sports" pageSize={20} country="in" category="sports"/>}></Route>
          <Route path='/technology' element={<News setProgress={this.setProgress} key="technology" pageSize={20} country="in" category="technology"/>}></Route>
        </Routes>
        

        </Router>
      </div>
    )
  }
}


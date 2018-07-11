import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Sidebar from './Sidebar';
import HotelView from './HotelView';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Content>
            <Sidebar/>
            <HotelView/>
          </Content>
      </div>
    );
  }
}

export default App;

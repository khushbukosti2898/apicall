import React from 'react';
import './App.css';
import './style.scss'
import Title from './title.js'
import UserList from './UserList.js'
import UserDetail from './userdetail';

function App() {
  return (
    <div className="App">
      <div className="main">
      <Title />
      <div className="content">
      <UserList />
      <UserDetail />
      </div>
      </div>
    </div>
  );
}

export default App;

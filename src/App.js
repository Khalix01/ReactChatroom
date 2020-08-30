import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/Join'
import Chat from './components/Chat'

import logo from './logo.svg';
import './App.css';

const App = () => (
  <Router>
    <Route path="/ReactChatroom/" exact component={Join} />
    <Route path="/ReactChatroom/chat" component={Chat} />
  </Router>
);

export default App;
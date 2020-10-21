import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Dashboad from './components/Dashboad'
import Navbar from './Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <Navbar />
        <Dashboad />
      </Provider>
    </div>
  );
}

export default App;

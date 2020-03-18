import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import { ghibliReducer as reducer } from './reducers/ghibliReducer';
import GhibliList from './components/GhibliList';
import GhibliForm from './components/GhibliForm';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Studio Ghibli Movies</h1>
        <GhibliForm />
        <GhibliList />
      </div>
    </Provider>
  );
}

export default App;

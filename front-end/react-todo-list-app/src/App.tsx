import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import Home from './components/home/Home'

import { ApolloProvider } from '@apollo/client';
import { Route, BrowserRouter } from "react-router-dom";

import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});








function App() {
  return (
    <div className="main-container">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
        </BrowserRouter>

      </ApolloProvider>
    </div>

  );
}

export default App;

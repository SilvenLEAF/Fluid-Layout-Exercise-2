import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import StoryDetails from './components/stories/StoryDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path= "/" component= { Dashboard } />
          <Route exact path= "/story/:id" component= { StoryDetails } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

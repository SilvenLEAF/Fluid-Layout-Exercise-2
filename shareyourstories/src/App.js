import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import StoryDetails from './components/stories/StoryDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateStory from './components/stories/CreateStory';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path= "/" component= { Dashboard } />
          <Route exact path= "/story/:id" component= { StoryDetails } />
          <Route exact path= "/signin" component= { SignIn } />
          <Route exact path= "/signup" component= { SignUp } />
          <Route exact path= "/create" component= { CreateStory } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

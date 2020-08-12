import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrimaryAppBar from './PrimaryAppBar';
import Biography from './components/biography/Biography';
import Landing from './components/landing/Landing';

const App = () => {
  
  return (
    <div>
      <PrimaryAppBar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/biography" component={Biography} />
      </Switch>
    </div>
  );
}

export default App;

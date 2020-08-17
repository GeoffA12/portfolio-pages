import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrimaryAppBar from './common/components/PrimaryAppBar';
import AboutMe from './components/about/AboutMe';
import Landing from './components/landing/Landing';
import Experience from './components/experience/Experience';

const App = () => {
  return (
    <div>
      <PrimaryAppBar />
      <Switch>
        <Route exact path="/portfolio-pages" component={Landing} />
        <Route exact path="/aboutMe" component={AboutMe} />
        <Route exact path="/experience" component={Experience} />
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrimaryAppBar from './common/components/PrimaryAppBar';
import AboutMe from './components/about/AboutMe';
import Landing from './components/landing/Landing';
import Experience from './components/experience/Experience';

const App = () => {
  return (
    <div>
      <PrimaryAppBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  );
}

export default App;

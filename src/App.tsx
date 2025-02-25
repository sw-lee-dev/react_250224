import React from 'react';
import Component, { CalssComponent, FunctionalComponent } from './component/Component';
import './App.css';
import CurlyBraces from './component/CurlyBraces';
import Properties from './component-manage/Properties';
import Profile from './component-manage/example/Example2';
import Gallery from './component-manage/example/Example1';
import ConditionRender from './component-manage/ConditionRender';

function App() {
  return (
    <div>
      {/* <CalssComponent />
      <FunctionalComponent />
      <Component /> */}
      {/* <CurlyBraces /> */}
      {/* <Properties /> */}
      {/* <Gallery /> */}
      {/* <Profile /> */}
      <ConditionRender />
    </div>
  );
}

export default App;

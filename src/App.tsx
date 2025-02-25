import React from 'react';
import Component, { CalssComponent, FunctionalComponent } from './component/Component';
import './App.css';
import CurlyBraces from './component/CurlyBraces';
import Properties from './component-manage/Properties';
import Profile from './component-manage/example/Example2';
import Gallery from './component-manage/example/Example1';
import ConditionRender from './component-manage/ConditionRender';
import ListRender from './component-manage/ListRender';
import EventComponent from './interaction/EventComponent';
import StateComponent from './interaction/StateComponent';

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
      {/* <ConditionRender /> */}
      {/* <ListRender /> */}
      {/* <EventComponent /> */}
      <StateComponent />
    </div>
  );
}

export default App;

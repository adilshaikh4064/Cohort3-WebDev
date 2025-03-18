import {RecoilRoot} from 'recoil';
import './App.css'
import BasicRecoil from './BasicRecoil'
import TodoList from './Todo';
import AsyncDataQueries from './AsyncDataQueries';
import { Component, Suspense } from 'react';
import ContextvsRecoil from './ContextvsRecoil';
import AdvancedRecoil from './AdvancedRecoil';



function App() {
  return (
  <RecoilRoot>
    <h2>hello world</h2>
    <TodoList/>
  </RecoilRoot>
  );
}

export default App

import {RecoilRoot} from 'recoil';
import './App.css'
import BasicRecoil from './BasicRecoil'
import TodoList from './Todo';
import AsyncDataQueries from './AsyncDataQueries';
import { Component, Suspense } from 'react';


class ErrorBoundary extends Component {
  constructor(props) {
      super(props);
      this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
      return { hasError: true };
  }

  componentDidCatch(error, info) {
      console.error("Error caught:", error, info);
  }

  render() {
      if (this.state.hasError) {
          return <h1>Something went wrong.</h1>;
      }

      return this.props.children; 
  }
}

const BuggyComponent = () => {
  throw new Error("I crashed!");
};


function App() {
  return (
    <RecoilRoot>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <AsyncDataQueries/>
        </Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  )
}

export {ErrorBoundary}
export default App

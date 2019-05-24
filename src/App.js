import React, { Component, lazy, Suspense } from "react";
import { Provider } from "react-redux";
import configureStore from "./components/ReduxSaga/store";
import "./App.css";
import CallApplyBindClosure from "./components/ES6/CallApplyBindClosure";
import PureComponents from "./components/PureComponent/PureComponents";
import HOC from "./components/HOC/OneButton";
import MemoizeFunction from "./components/MemoizeFunction/Container";
import Hook from "./components/Hook/Hook";
import ErrorBoundaryFunction from "./components/ErrorBoundary/ErrorBoundaryFunction";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Generator from "./components/ES6/Generator";
import TestView from "./components/ReduxSaga/TestView";
//import LazyComponent from './components/Lazy/LazyComponent';
const LazyComponent = lazy(() => import("./components/Lazy/LazyComponent"));
const store = configureStore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <CallApplyBindClosure/> */}
        {/* <PureComponents/> */}
        {/* <HOC disable/> */}
        {/* <MemoizeFunction/> */}

        {/* <Suspense fallback={<div>Loading....</div>}>        
        <LazyComponent/>
        </Suspense> */}

        {/* <Hook/> */}

        {/* <ErrorBoundary>
          <ErrorBoundaryFunction testName="error" />
        </ErrorBoundary> */}

        {/* <Generator/> */}

        <Provider store={store}>
          <TestView />
        </Provider>
      </header>
    </div>
  );
}

export default App;

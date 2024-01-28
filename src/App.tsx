import React from 'react';
import MatrixBody from './components/MatrixBody/MatrixBody';
import { matrixParams } from './utils/constants';
import "./App.css"

function App(): JSX.Element {
  return (
    <div className=".App">
      <MatrixBody params={matrixParams} />
    </div>
  );
}

export default App;

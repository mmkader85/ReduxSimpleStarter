import React from 'react';
import ReactDOM from 'react-dom';

//Create component that produces HTML
const App = () => {
  return <div>Hi!</div>;
};

ReactDOM.render(<App />, document.querySelector('.container'));

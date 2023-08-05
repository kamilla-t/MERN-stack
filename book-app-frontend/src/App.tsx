import React from 'react';
import "./App.css";
import BookApp from './components/BookApp/BookApp';

class App extends React.Component {

  render(): React.ReactNode {
    return (
      <div>
        <header>BookApp</header>
        <BookApp />
      </div>
    );
  }
  
}

export default App;

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bug Tracker</h1>
      </header>
      <main>
        <div className="bug-list">
          <h2>Open Bugs</h2>
          {/* Bug items will be listed here */}
        </div>
        <div className="bug-form">
          <h2>Report a New Bug</h2>
          <form>
            <input type="text" placeholder="Bug Title" />
            <textarea placeholder="Describe the bug"></textarea>
            <button type="submit">Submit Bug</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;

import React from "react";
import Groups from "./components/Groups"; // Make sure this path is correct

function App() {
  return (
    <div className="App">
      <h1>App Component</h1> {/* Add this to confirm App.js is rendering */}
      <Groups /> {/* This should render the Groups component */}
    </div>
  );
}

export default App;

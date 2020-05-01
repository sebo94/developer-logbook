import React, { Component } from "react";
import Blog from "./Blog/Blog";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ minHeight: "100vh", width: "100%", padding: "20px" }}>
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

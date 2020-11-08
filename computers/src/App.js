import React from "react";
import './App.css';
import Header from "./components/header.component/header.component";
import Main from "./components/main.component/main.component";
import Footer from "./components/footer.component/footer.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import Card from "./components/Card.jsx";

function App() {
  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">Introduction to React</h1>
      </header>
      <main className="app__main">
        <div className="cards">
          <Card title="Titre1" >
              Content 1
          </Card>

          <Card title="Titre2" >
              Content 2
          </Card>
          <Card title="Titre3" >
              Content 3
          </Card>
          <Card title="Titre4" >
              Content 4
          </Card>
        </div>
      </main>

      <footer className="app__footer footer">footer</footer>
    </div>
  );
}

export default App;

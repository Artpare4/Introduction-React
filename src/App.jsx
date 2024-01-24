import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import Card from "./components/Card.jsx";
import Button from "./components/Button.jsx";

function App() {
  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">Introduction to React</h1>
      </header>
      <main className="app__main">
        <div className="cards">
          <Card title="Titre1">
            <div>Content 1</div>
            <Button className="btn">
              <FontAwesomeIcon icon={faHeart} />
            </Button>
          </Card>

          <Card title="Titre2">
            <div>Content 2</div>
            <Button className="btn">
              <FontAwesomeIcon icon={faStar} />
            </Button>
          </Card>
          <Card title="Titre3">
            <div>Content 3</div>
          </Card>
          <Card title="Titre4">
            <div>Content 4</div>
          </Card>
        </div>
      </main>

      <footer className="app__footer footer">footer</footer>
    </div>
  );
}

export default App;

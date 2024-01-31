import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import Card from "./components/Card.jsx";
import Button from "./components/Button.jsx";
import Counter from "./components/Counter.jsx";
function App() {
  /*const [cpt, addOne] = useState(0);
  const clickHandler = () => {
    addOne(cpt + 1);
  };*/

  const[counts]=useState({
    heart: 0,
    star: 0,
  });
  const [somme,sum]=useState(counts.star+counts.star);
  const ClickSum = () => {
    sum(counts.star+counts.heart);
  };
  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">Introduction to React</h1>
      </header>
      <main className="app__main">
        <div className="cards">
          <Card title="Titre1">
            <div>Content 1</div>
              <Counter onChange={(ctp)=>{
                counts.heart=ctp
                ClickSum()
              }} className={"btn"} after={<FontAwesomeIcon icon={faHeart} />}/>
          </Card>

          <Card title="Titre2">
            <div>Content 2</div>
              <Counter  onChange={(ctp)=>{
                counts.star=ctp
                ClickSum()
              }} className={"btn"} after={<FontAwesomeIcon icon={faStar} />}/>
          </Card>
          <Card title="Titre3">
            <div>Content 3</div>
            <div>Somme: {somme}</div>
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

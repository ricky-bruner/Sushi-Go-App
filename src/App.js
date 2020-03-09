import React, { Component } from 'react';
import wasabi from './img/wasabi.png';
import wasabiSingle from './img/wasabi-single.png';
import sashimi from './img/sashimi.png';
import sashimiSingle from './img/sashimi-single.png';
import tempura from './img/tempura.png';
import tempuraSingle from './img/tempura-single.png';
import dumpling from './img/dumpling.png';
import dumplingSingle from './img/dumpling-single.png';
import pudding from './img/pudding.png';
import puddingSingle from './img/pudding-single.png';
import chopsticks from './img/chopsticks.png';
import chopsticksSingle from './img/chopsticks-single.png';
import './App.css';
import PlayingCard from './components/PlayingCard';

export default class App extends Component {
  state = {
    cards: [
      {
        name: "wasabi",
        img: wasabi,
        smallImg: wasabiSingle,
        cardClass: "card wasabi-card"
      },
      {
        name: "sashimi",
        img: sashimi,
        smallImg: sashimiSingle,
        cardClass: "card sashimi-card"
      },
      {
        name: "tempura",
        img: tempura,
        smallImg: tempuraSingle,
        cardClass: "card tempura-card"
      },
      {
        name: "dumpling",
        img: dumpling,
        smallImg: dumplingSingle,
        cardClass: "card dumpling-card"
      },
      {
        name: "pudding",
        img: pudding,
        smallImg: puddingSingle,
        cardClass: "card pudding-card"
      },
      {
        name: "chopsticks",
        img: chopsticks,
        smallImg: chopsticksSingle,
        cardClass: "card chopsticks-card"
      }
    ]
  };
  
  
  render(){
    return (
      <div className="App">
        <h1>Testing</h1>
        <div className="card-container">
          {/* <div className="card wasabi-card">
              <img src={wasabiSingle} className="top-left-card-img" alt="wasabi-single" />
              <img src={wasabi} className="main-card-img" alt="wasabi" />
          </div> */}
          {
            this.state.cards.map(c => <PlayingCard name={c.name} cardClass={c.cardClass} img={c.img} smallImg={c.smallImg} />)
          }
          {/* <PlayingCard cardClass="card wasabi-card" img={wasabi} smallImg={wasabiSingle} /> */}
        </div>
        <div className="conveyor-belt"></div>
      </div>
    );
  }
}


import React, { Component } from 'react';
import './App.css';
import PlayingCard from './components/PlayingCard';
import Clock from './components/Clock';
import SpecialsImageManager from './modules/imageManagers/SpecialsImageManager';
import CardManager from './modules/cardManagers/CardManager';

export default class App extends Component {
    state = {
        cards: []
    };

    componentDidMount(){
        let cards = [];
        CardManager.getAppetizers().forEach(c => cards.push(c));
        CardManager.getSpecials().forEach(c => cards.push(c));
        CardManager.getDesserts().forEach(c => cards.push(c));
        CardManager.getRolls().forEach(c => cards.push(c));
        CardManager.getNigiris().forEach(c => cards.push(c));

        this.setState({ cards: cards });
    }

    generateUniqueCards = (card) => {
        let cards = [];

        card.uniqueIterations.forEach(uI => {
            for(let i = 1; i <= uI.count; i++){
                let cardIteration = card;
                
                cardIteration.selectedIterationImgCount = uI.smallImgCount;
                cards.push(cardIteration);
            }
        })

        return cards;
    }

    render() {
        return (
            <div className="App">
                <Clock />
                <h1>Testing</h1>
                <div className="card-container">
                    {
                        this.state.cards.map(c => this.generateUniqueCards(c).map(nC => <PlayingCard card={nC} />))
                    }
                </div>
                <div className="conveyor-belt"></div>
            </div>
        );
    }
}


import React, { Component } from 'react';
import wasabi from './img/wasabi-bottom-sized.png';
import wasabiSingle from './img/wasabi-single.png';
import sashimi from './img/sashimi-bottom-sized.png';
import sashimiSingle from './img/sashimi-single.png';
import tempura from './img/tempura-bottom-sized.png';
import tempuraSingle from './img/tempura-single.png';
import dumpling from './img/dumpling-bottom-sized.png';
import dumplingSingle from './img/dumpling-single.png';
import pudding from './img/pudding-bottom-sized.png';
import puddingSingle from './img/pudding-single.png';
import chopsticks from './img/chopsticks-bottom-sized.png';
import chopsticksSingle from './img/chopsticks-single.png';
import eggNigiri from './img/eggnigiri-bottom-sized.png';
import eggNigiriSingle from './img/eggnigiri-single.png';
import salmonNigiri from './img/salmonnigiri-bottom-sized.png';
import salmonNigiriSingle from './img/salmonnigiri-single.png';
import squidNigiri from './img/squidnigiri-bottom-sized.png';
import squidNigiriSingle from './img/squidnigiri-single.png';
import maki from './img/maki-bottom-sized.png';
import makiSingle from './img/maki-single.png';
import './App.css';
import PlayingCard from './components/PlayingCard';
import Clock from './components/Clock';

export default class App extends Component {
    state = {
        cards: [
            {
                name: "wasabi",
                img: wasabi,
                smallImg: wasabiSingle,
                cardClass: "card wasabi-card",
                modifierText: "NEXT NIGIRI x3",
                modifierSubText: "",
                totalCount: 1,
                uniqueIterations: [
                    {
                        count: 1,
                        smallImgCount: 1
                    }
                ]
            },
            {
                name: "sashimi",
                img: sashimi,
                smallImg: sashimiSingle,
                cardClass: "card sashimi-card",
                modifierText: "x3=10",
                modifierSubText: "",
                totalCount: 1,
                uniqueIterations: [
                    {
                        count: 1,
                        smallImgCount: 1
                    }
                ]
            },
            {
                name: "tempura",
                img: tempura,
                smallImg: tempuraSingle,
                cardClass: "card tempura-card",
                modifierText: "x2=5",
                modifierSubText: "",
                totalCount: 1,
                uniqueIterations: [
                    {
                        count: 1,
                        smallImgCount: 1
                    }
                ]
            },
            {
                name: "dumpling",
                img: dumpling,
                smallImg: dumplingSingle,
                cardClass: "card dumpling-card",
                modifierText: "1 3 6 10 15",
                modifierSubText: "",
                totalCount: 1,
                uniqueIterations: [
                    {
                        count: 1,
                        smallImgCount: 1
                    }
                ]

            },
            {
                name: "pudding",
                img: pudding,
                smallImg: puddingSingle,
                cardClass: "card pudding-card",
                modifierText: "",
                modifierSubText: "MOST 6|LEAST -6",
                totalCount: 1,
                uniqueIterations: [
                    {
                        count: 1,
                        smallImgCount: 1
                    }
                ]
            },
            {
                name: "chopsticks",
                img: chopsticks,
                smallImg: chopsticksSingle,
                cardClass: "card chopsticks-card",
                modifierText: "SWAP|FOR 2",
                modifierSubText: "",
                totalCount: 1,
                uniqueIterations: [
                    {
                        count: 1,
                        smallImgCount: 1
                    }
                ]
            },
            {
                name: "egg nigiri",
                img: eggNigiri,
                smallImg: eggNigiriSingle,
                cardClass: "card nigiri-card",
                modifierText: "1",
                modifierSubText: "",
                totalCount: 1,
                uniqueIterations: [
                    {
                        count: 1,
                        smallImgCount: 1
                    }
                ]
            },
            {
                name: "salmon nigiri",
                img: salmonNigiri,
                smallImg: salmonNigiriSingle,
                cardClass: "card nigiri-card",
                modifierText: "2",
                modifierSubText: "",
                totalCount: 1,
                uniqueIterations: [
                    {
                        count: 1,
                        smallImgCount: 1
                    }
                ]
            },
            {
                name: "squid nigiri",
                img: squidNigiri,
                smallImg: squidNigiriSingle,
                cardClass: "card nigiri-card",
                modifierText: "3",
                modifierSubText: "",
                totalCount: 1,
                uniqueIterations: [
                    {
                        count: 1,
                        smallImgCount: 1
                    }
                ]
            },
            {
                name: "maki",
                img: maki,
                smallImg: makiSingle,
                cardClass: "card maki-card",
                modifierText: "MOST:",
                modifierSubText: "2-5P: 6/3|6-8P: 6/4/2",
                totalCount: 12,
                uniqueIterations: [
                    {
                        count: 5,
                        smallImgCount: 2
                    },
                    {
                        count: 3,
                        smallImgCount: 3
                    },
                    {
                        count: 4,
                        smallImgCount: 1
                    }
                ]
            }
        ]
    };

    generateUniqueCards = (card) => {
        let cards = [];

        card.uniqueIterations.forEach(uI => {
            for(let i = 1; i <= uI.count; i++){
                let cardIteration = card;
                
                cardIteration.selectedIterationImgCount = uI.smallImgCount;
                cards.push(cardIteration);
            }
        })
        
        // console.log(cards);

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


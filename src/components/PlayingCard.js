import React, { Component } from "react";
import cardBack from "../img/card-backing.png";

export default class PlayingCard extends Component {
    state = {
        hidden: false
    };

    flipCard = () => {
        this.setState({ hidden: !this.state.hidden})
    }

    getArray = (count) => {
        console.log(count);
        // console.log(Array.from({length: count}, (v, i) => i))
        return Array.from({length: count}, (v, i) => i);
    }


    render(){
        return(
            <div>
                {
                    !this.state.hidden &&
                    <div className={this.props.card.cardClass} onClick={() => this.flipCard()}>
                        <div className="card-top-img-container">
                            {
                                this.getArray(this.props.card.selectedIterationImgCount).map(i => <img src={this.props.card.smallImg} className="top-left-card-img" alt="wasabi-single" />)
                            }
                            {/* <img src={this.props.card.smallImg} className="top-left-card-img" alt="wasabi-single" /> */}
                        </div>
                        <img src={this.props.card.img} className="main-card-img" alt="wasabi" />
                        <div className="card-footer-text">
                            <div className="title-text">{this.props.card.name}</div>
                            <div className="modifier-text">
                                {
                                    this.props.card.modifierText.split("|").length > 1 &&
                                    this.props.card.modifierText.split("|").map(t => <div className="modifier-subtext">{t}</div>)
                                }
                                {
                                    this.props.card.modifierText.split("|").length === 1  &&
                                    <div>{this.props.card.modifierText}</div>
                                }
                            </div>
                            <div className="modifier-text">
                                {
                                    this.props.card.modifierSubText.split("|").map(t => <div className="modifier-subtext">{t}</div>)
                                }
                            </div>
                        </div>
                    </div>
                }
                {
                    this.state.hidden &&
                    <div className="card-backing" onClick={() => this.flipCard()}>
                        <img src={cardBack} alt="card-back" />
                    </div>
                }

            </div>
        );
    }
}
import React, { Component } from "react";
import cardBack from "../img/card-backing.png";

export default class PlayingCard extends Component {
    state = {
        hidden: false
    };

    flipCard = () => {
        this.setState({ hidden: !this.state.hidden})
    }

    render(){
        return(
            <div>
                {
                    !this.state.hidden &&
                    <div className={this.props.cardClass} onClick={() => this.flipCard()}>
                        <img src={this.props.smallImg} className="top-left-card-img" alt="wasabi-single" />
                        <img src={this.props.img} className="main-card-img" alt="wasabi" />
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
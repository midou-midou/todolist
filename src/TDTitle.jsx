import React, { Component, Fragment } from 'react'
import './static/title.css'

class TDTitle extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: 0,
            sayToMother: '',
            talkToMother: [
                "WRITE YOUR WORK :",
                "写下你想要做的 :"
            ],
            talkArrItemIndex: 0,
            talkArrIndex: 0
        }   
        this.inMyLifeToSay = this.inMyLifeToSay.bind(this);
        this.Iamgrowing = this.Iamgrowing.bind(this);
        this.Iamgrowing();
    }

    render(){
        return (
            <Fragment>
                <h1>
                    <span id="title" className="spanfont">{this.state.sayToMother}</span>
                    <span id="cursor" className="cursor">|</span>
                </h1>            
            </Fragment>
        )
    }

    Iamgrowing(){
        setInterval(() => {
            if(this.state.talkArrItemIndex <= this.state.talkToMother[this.state.talkArrIndex].length){
                this.setState({
                    talkArrItemIndex: this.state.talkArrItemIndex + 1
                })
                this.inMyLifeToSay();
            }
            if(this.state.talkArrItemIndex === this.state.talkToMother[this.state.talkArrIndex].length + 1){
                this.setState({
                    talkArrItemIndex: 0,
                    talkArrIndex: this.state.talkArrIndex + 1,
                    id: this.state.id + 5
                })
                this.inMyLifeToSay()
            }
            if(this.state.talkArrIndex === this.state.talkToMother.length){
                this.setState({
                    talkArrItemIndex: 0,
                    talkArrIndex: 0,
                    id: 0
                })
            }
        }, 300)
    }

    inMyLifeToSay(){
        switch(this.state.id){
            case 0:
                this.setState({
                    sayToMother: this.state.talkToMother[this.state.talkArrIndex].slice(0, this.state.talkArrItemIndex)
                });     
               break;
            case 5:
               this.setState({
                   sayToMother: this.state.talkToMother[this.state.talkArrIndex].slice(0, this.state.talkArrItemIndex)
               });
               break;
            default:
        }
    };
}

export default TDTitle;
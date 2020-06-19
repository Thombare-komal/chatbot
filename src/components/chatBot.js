import React, { Component } from "react";
import QuestionComponent from "./questionComponent";
import MicroPhone from "./microPhone";
import { MDBRow, MDBCol } from "mdbreact";
import AnswerComponent from "./answerComponent";


export class ChatBot extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isWaiting : false,
        reqdData : props.reqdData,
        counter : 1
    
        };
        this.onTypingDone = this.onTypingDone.bind(this);
        this.onAnswerDone = this.onAnswerDone.bind(this);
  }
  onTypingDone(){
      this.setState({
          isWaiting:true,
          counter :this.state.counter + 1
      })
  }
  onAnswerDone(){
    this.setState({
        isWaiting:false,
        counter :this.state.counter + 1
    })
  }
   loadQuestionAnswer = () =>{
    return this.state.reqdData.slice(0,this.state.counter).map(
        (obj) => {
            return obj.type === 'question' ? <QuestionComponent questionOver={this.onTypingDone} question = {obj.text} isWaiting={this.state.isWaiting}/>
            : <AnswerComponent  isWaiting={this.state.isWaiting} answerOver = {this.onAnswerDone} answer = {obj.text}/>
        }
    )
   }
  render() {

    return (
      <>
      <MDBRow>
            <div className="container">
                    <MDBRow>
                        <MDBCol xl="6" lg="12" md="6" sm="12" xs="12">
                        {this.loadQuestionAnswer()}
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol xl="4" lg="12" md="3" sm="12" xs="12"></MDBCol>
                        <MDBCol xl="4" lg="12" md="3" sm="12" xs="12"></MDBCol>
                        <MDBCol xl="4" lg="12" md="3" sm="12" xs="12">
                            <MicroPhone isWaiting= {this.state.isWaiting} /> 
                        </MDBCol>
                    </MDBRow>
            </div>
        </MDBRow>
        
      </>
    );
  }
}
export default ChatBot;

import React, { Component } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import { Input } from "antd";
import Typist from 'react-typist';

export const showQuestionComponent = (question,Typingdone) => {
  return (
    <div>
              <MDBRow>
            <MDBCol xl="6" lg="12" md="6" sm="12" xs="12">
                <img src={require('../assets/hdfc-logo.png')} className="icon-logo"/>
              </MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol xl="6" lg="12" md="6" sm="12" xs="12">
                <div className="question-margin">
                <Typist show={false} ms={500} onTypingDone={() => Typingdone()} cursor={{ element : "" }}>
                  <p className="questions">{question}</p>
                  </Typist>
                </div>
              </MDBCol>
            </MDBRow>
        
    </div>
  );
};

class QuestionComponent extends Component {
  constructor() {
    super();
    this.state = {
    }
    this.Typingdone = this.Typingdone.bind(this);
  }

  Typingdone = item => {
    this.props.questionOver();
  }


  render() {
     
    return showQuestionComponent(this.props.question,this.Typingdone)
  }
}

export default QuestionComponent;



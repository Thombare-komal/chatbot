import React, { Component } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import { Input } from "antd";
import Typist from 'react-typist';

const { Search } = Input;


export const showAnswerCompnent = (answer,answerOver) => {
    setTimeout(answerOver,2000)
  return (
    <div className="answer-margin">
              <MDBRow>
                <MDBCol xl="6" lg="12" md="6" sm="12" xs="12">
                    <img src={require('../assets/user-logo.svg')} className="icon-logo"/>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol xl="6" lg="12" md="6" sm="12" xs="12">
                    
                    <p className="answers">{answer}</p>
                    
                </MDBCol>
            </MDBRow>
    </div>
  );
};

class AnswerComponent extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return showAnswerCompnent(this.props.answer, this.props.answerOver);

  }
}

export default AnswerComponent;



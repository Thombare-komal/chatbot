import React, { Component } from "react";


export class MicroPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
        };
  }
  render() {

    return (
      <>
           {
               (!this.props.isWaiting)?
                   <div className="microphone-question-container"><img src={require('../assets/microphone-on.jpg')} className="microphone"/></div>
               :   <div className="microphone-answer-container"><img src={require('../assets/microphone-off.jpg')} className="microphone" /></div>
            
           }
      </>
    );
  }
}
export default MicroPhone;
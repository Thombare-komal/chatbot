import React from 'react';
import './App.css';
import Chatbot from "./components/chatBot"

function App() {
  return (
    <div className="App">
      <Chatbot reqdData={reqdData}/>
    </div>
  );
}

const reqdData = [
  {
    text : 'Hi,I am your assistant.I am here to help you in LIC Policy.What is your full name ?',
    type : 'question'
  },
  {
    text : 'Hi,My name is suresh.',
    type : 'answer'
  },
  {
    text : 'What is your birthdate?',
    type : 'question'
  }
  // {
  //   text : 'My birthdate is 4th sep,1994',
  //   type : 'answer'
  // },
  // {
  //   text : 'Where you stay?',
  //   type : 'question'
  // },
  // {
  //   text : 'Mumbai',
  //   type : 'answer'
  // }

]

export default App;

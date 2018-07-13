import React from "react";
import ReactDOM from "react-dom";
import { Message } from "./components/Message.js";
import { WriteMsg } from "./components/WriteMsg.js";
import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import "./styles.css";
var Scroll = require("react-scroll");
var scroll = Scroll.animateScroll;
var data = [ 
          'how are you',
           ' nice ',
          'do you know who are you',
          
          'machine or human',
          'are you doctor',
          
          'just prediction',
          'tell what you do now',
          
          'are you stupied ?',
          'answer me',
          ' nice ',
          ' nice to meet you , bye bye' , 
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: ["Hi"],

      senders: ["Me"],
      counter: 0
    };
  }
  
  onPushMessage(newMsg ) {
    this.setState({
      messages: [...this.state.messages, newMsg],
      senders: [...this.state.senders, "You"]
    });

    scroll.scrollToBottom();
    setTimeout(
      function () {
        this.setState({
          messages: [...this.state.messages, data[this.state.counter]],
          senders: [...this.state.senders, "Me"]
        });
      }
        .bind(this),
      3000
    );
    if( this.state.counter +1 < data.length){
      this.state.counter++;

    }
    
  }

  render() {
    return (
      <div className="container App">
        <Header />
        <Message
          allMessages={this.state.messages}
          allSenders={this.state.senders}
        />

        <WriteMsg pushMessage={this.onPushMessage.bind(this)} />

        <Footer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

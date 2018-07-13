import React from "react";
//var scrollIntoView = require('scroll-into-view');
import ScrollIntoView from 'react-scroll-into-view';

var wrap = require("wordwrap")(15);
export class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      senders: props.allSenders,
      colors: ['list-group-item list-group-item-warning', 'list-group-item list-group-item-info'],
    };
  }
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.el.scrollIntoView({ selector: '#need_to_scroll' });
  }
  render() {
    return (
      

      <div className="messages" >
      
        
        <ul className="list-group" 
         >
          {this.props.allMessages.map((msg, index) => (
             
            <li id="need_to_scroll"
              ref={el => { this.el = el; }}
               className={ this.state.colors[index %2]} key={index}>
              <p> {wrap(msg)}</p>
              <small className="badge float-right sender" key={index}>
                {this.props.allSenders[index]}
              </small>
            </li>
            
          ))}
        </ul>
        
      </div>
      
    );
  }
}


import React from "react";

export class Header extends React.Component {

  render() {
    return (

      <div >
        <h1 className="header_title">Welcome to Private Chat</h1>

        <p className="description">
          star your chat with <span className="description_word">Me</span> in
          secret mode!
        </p>
      </div>

    );
  }

}
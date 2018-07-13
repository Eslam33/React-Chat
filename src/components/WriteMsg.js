import React from "react";
//import Bootstrap from "bootstrap";
export class WriteMsg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
     
    };
  }

  onhandlechange(e) {
    this.setState({
      text: e.target.value.trim()
    });
  }
  _handleKeyPress(e) {
    
    if (e.key === "Enter" && this.state.text !== "") {
      
      this.props.pushMessage(this.state.text);
      e.target.value = '';
      this.setState({
        text: ""
      });
    }
  }

  
      
  render() {
    return (
      <div className="writemsg">
        <div className="input-group">
          <input
            type="text"
            onChange={e => this.onhandlechange(e)}
            onKeyPress={e => this._handleKeyPress(e)}
            className="form-control"
            placeholder="Type Message"
            aria-describedby="basic-addon2"
            
          />
          <span className="input-group-addon" id="basic-addon2">
            {" "}
          </span>
        </div>
       
      </div>
    );
  }
}

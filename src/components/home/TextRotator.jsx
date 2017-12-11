import React, { Component } from 'react';
import '../../styles/TextRotatorStyle.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class TextRotator extends Component {

  constructor(props) {
    super(props);
    const messages = this.props.children.split(this.props.dataSeparator);


    this.state = {
      currentMessage: messages[0],
      messageIndex: 0,
      messages,
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {

      const index = (this.state.messageIndex + 1 >= this.state.messages.length) ? 0 : this.state.messageIndex + 1;
      // this.setState({
      //   currentMessage: '',
      //   messageIndex: index+1,
      // })
      this.setState({
        currentMessage: this.state.messages[index],
        messageIndex: index})
      
      
    }, 3000);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>

        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={100}  
          transitionLeave={false}        
          transitionAppear={true}
          transitionAppearTimeout={1000}
        >
          <div key={this.state.messageIndex} className="font">{this.state.currentMessage}</div>
        </ReactCSSTransitionGroup>
      </div>
    )
  }

}
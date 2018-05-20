import React, { Component } from 'react';

class WindowScrollTop extends Component{
  componentDidMount(){
    window.scrollTo(0,0)
  }

  render(){
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default WindowScrollTop;
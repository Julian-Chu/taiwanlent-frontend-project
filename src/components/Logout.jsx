import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions/logout';

class Logout extends Component{
  componentDidMount(){
    window.scrollTo(0, 0);
    this.props.setHeaderNontransparent();
    this.props.logout();
  }
  render(){
    return(
      <div className="center page-section">
         <h1>Bye Bye!</h1>

             @Taiwanlent
      </div>
    )
  }
}


export default connect(null, {logout})(Logout);

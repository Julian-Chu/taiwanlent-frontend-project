import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

export default function(ComponentNeedAuth){
  class Authentication extends Component{
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount(){
      if(!this.props.authenticated){
        console.log(this.props);
        this.props.history.push("/login");
      }
    }

    componentWillUpdate(nextProps){
      if(!nextProps.authenticated){
        this.props.history.push("/login");
      }    
    }

    render(){
      console.log(this.context);
      return <ComponentNeedAuth {...this.props}/>
    }
  }

  function mapStateToProps(state){
    console.log('Auth',state);
    return {authenticated: state.authenticated}
  }

  return connect(mapStateToProps)(withRouter(Authentication));
}
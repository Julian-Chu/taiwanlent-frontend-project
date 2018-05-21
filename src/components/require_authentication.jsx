import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function(ComponentNeedAuth){
  class Authentication extends Component{
    static contextTypes = {
      router: PropTypes.object
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
      return <ComponentNeedAuth {...this.props}/>
    }
  }

  function mapStateToProps(state){
    return {authenticated: state.authenticated}
  }

  return connect(mapStateToProps)(withRouter(Authentication));
}
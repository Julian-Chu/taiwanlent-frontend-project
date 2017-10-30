import React, { Component } from 'react';

export default class EmailSubscribe extends Component {
  constructor(props){
    super(props);

    this.state = {
      term: '',
      buttonDisabled: true
    };

    this.styles = {
      borderColor: '',
      warning : {
        display:'none'
      }
    }    
  }

  onInputChange(event){
      // console.log(event.target.value);
      // console.log(this.validateEmail(event.target.value));

      this.setState({term:event.target.value});
      this.styles.borderColor= this.validateEmail(event.target.value)? '':'red';
      this.styles.warning.display= this.validateEmail(event.target.value)? 'none':'';
      
      if(event.target.value.length === 0) {
        this.styles.borderColor ='';
        this.styles.warning.display = 'none';
      }      
  }

  validateEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  render() {
    return (
      <div id="section-subscribe"className="container clearfix">
          <div className="divcenter center" style={{maxWidth: '900px'}}>
              <h2 className="nobottommargin t300 ls1">訂閱電子報</h2>
              <div className="widget-subscribe-form-result"></div>
              <form id="widget-subscribe-form" action="include/subscribe.php" role="form" method="post" className="nobottommargin">
                  <input type="email" 
                         id="widget-subscribe-form-email" 
                         name="widget-subscribe-form-email" 
                         className="form-control input-lg not-dark required email" 
                         style={this.styles}
                         placeholder="Your Email Address" 
                         value={this.state.term}
                         onChange={(event)=> this.onInputChange(event)}
                         ></input>
                         <div className="alert alert-danger" role="alert" style={this.styles.warning} >
                            <span className="glyphicon glyphicon-remove"></span>
                            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span className="sr-only">Error:</span>
                            Enter a valid email address
                        </div>
                  <div className="widget subscribe-widget clearfix">
                  
                      <button className="button button-border button-circle topmargin-md " 
                              type="submit"
                              disabled={true} >
                              訂閱
                      </button>
                  </div>
              </form>
          </div>
      </div>
    );
  }
}

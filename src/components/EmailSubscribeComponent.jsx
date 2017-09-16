import React, { Component } from 'react';

export default class EmailSubscribe extends Component {
  constructor(props){
    super(props);

    this.state = {
      term: ''
    };

    
  }

  onInputChange(event){
      console.log(event.target.value);
      this.setState({term:event.target.value});
  }

  render() {
    return (
      <div className="container clearfix">
          <div className="divcenter center" style={{maxWidth: '900px'}}>
              <h2 className="nobottommargin t300 ls1">訂閱電子報</h2>
              <div className="widget-subscribe-form-result"></div>
              <form id="widget-subscribe-form" action="include/subscribe.php" role="form" method="post" className="nobottommargin">
                  <input type="email" 
                         id="widget-subscribe-form-email" 
                         name="widget-subscribe-form-email" 
                         className="form-control input-lg not-dark required email" 
                         placeholder="Your Email Address" 
                         value={this.state.term}
                         onChange={(event)=> this.onInputChange(event)}
                         ></input>
                  <div className="widget subscribe-widget clearfix">
                      <button className="button button-border button-circle topmargin-md " type="submit">訂閱</button>
                  </div>
              </form>
          </div>
      </div>
    );
  }
}
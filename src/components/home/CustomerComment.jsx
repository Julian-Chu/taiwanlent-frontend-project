import React, { Component } from 'react';
import '../../styles/CustomerComment.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class CustomerComment extends Component {
  constructor() {
    super();

    let contents = [
      {
        comment: "InterPack展時, 雇用了Taiwanlent推薦的展場翻譯, \n非常認真負責, 合作很愉快 !",
        customer: "陳小姐",
        city: "台北"
      },
      {
        comment: "紐倫堡寵物展時, 請了一名專業翻譯, \n使本司與客戶的會議非常成功, 非常推薦!",
        customer: "陳先生",
        city: "台中"
      },
      {
        comment: "杜賽包裝展時請了一名翻譯來幫忙監工場佈,\n 廠商都很滿意 !",
        customer: "李先生",
        city: "高雄"
      }]
    this.state = {
      contents,
      content: contents[0],
      index: 0
    }
  }

  componentDidMount() {
    this.setSliderRunning();
  }

  setSliderRunning() {
    this.Timer = setInterval(() => {
      let contents = this.state.contents;
      const newIndex = this.state.index + 1 >= contents.length ? 0 : this.state.index + 1;
      this.setState(
        {
          content: contents[newIndex],
          index: newIndex
        }
      )
    }, 6000);
  }

  setSpecificContent(index) {
    this.setState({
      index,
      content: this.state.contents[index]
    })
    clearInterval(this.Timer);
    this.setSliderRunning();

  }

  render() {
    return (
      <div className="section parallax nomargin dark" style={{ backgroundImage: "url('images/page/testimonials.jpg')", padding: '150px 0' }} data-stellar-background-ratio="0.3">
        <div className="container clearfix">
          <div className="col_two_fifth nobottommargin">&nbsp;</div>
          <div className="col_three_fifth nobottommargin col_last">
            <ReactCSSTransitionGroup
              transitionName="slide"
              transitionEnterTimeout={500}
              transitionLeave={false}
            >
                <div className="content" key={this.state.index} >
                  <p className="comment display-linebreak">{this.state.content.comment}</p>
                  <div className="customer" >
                    - {this.state.content.customer}
                    <span className="city">{this.state.content.city}</span>
                  </div>
                </div>
            </ReactCSSTransitionGroup>
            <ol className="nav">
              <li>
                <button onClick={() => this.setSpecificContent(0)} className={this.state.index === 0 ? 'active' : ''} >1</button>
              </li>
              <li>
                <button onClick={() => this.setSpecificContent(1)} className={this.state.index === 1 ? 'active' : ''} >2</button>
              </li>
              <li>
                <button onClick={() => this.setSpecificContent(2)} className={this.state.index === 2 ? 'active' : ''} >3</button>
              </li>
            </ol>
          </div>
        </div>
      </div>
    )
  }
}


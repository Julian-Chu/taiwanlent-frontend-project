import React, { Component } from 'react';
import '../../styles/talents/talent.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';



class Talent extends Component {

  addToList() {
    if (this.props.candidates.length < 5)  {this.props.addCandidate();}    
  };

  removeFromList() {
    if (this.props.candidates.length > 0) {this.props.removeCandidate();}
  }

  render() {
    return (
      <div className="product clearfix pf-dress">
        <div className="product-image ">
          <a href="# "><img src={this.props.photo} alt={this.props.name}></img></a>
          <div className={this.props.qualified ? "sale-flash" : ""}> {this.props.qualified ? 'Qualified' : ''} </div>
          <div className={this.props.experienced ? "sale-flash" : ""}> {this.props.experienced ? 'Experienced' : ''}</div>
          <div className="product-overlay ">
            <button className="item-quick-view "><i className="icon-zoom-in2 "></i><span> 查看資料</span></button>
          </div>
        </div>
        <div className="product-desc ">
          <div className="product-title ">
            <h3><a href="# ">{this.props.name}</a></h3>
          </div>
          <div className="product-price ">
            <div>語言:<span>{this.props.lang}</span></div>
            <div>專業背景:<span>{this.props.subject}</span></div>
          </div>
          <div className="product-rating ">
            {!this.props.selected ?
              <button type="button" className="button button-3d button-rounded" onClick={() => this.addToList()} style={{ backgroundColor: '#0ebb99' }}>
                <i className="icon-bookmark2"></i>
                加入詢問清單</button>
              :
              <button type="button" className="button button-3d button-rounded" onClick={() => this.removeFromList()} style={{ backgroundColor: '#7CBAB7' }}>
                <i className="icon-bookmark2"></i>
                移除詢問清單</button>}
          </div>
        </div>
      </div>
    )
  }
}

Talent.propTypes = {
  name: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  qualified: PropTypes.bool.isRequired,
  experienced: PropTypes.bool.isRequired,
  photo: PropTypes.string,
  id: PropTypes.number.isRequired
};


function mapStateToProps(state) {
  return { candidates: state.candidates }
}

export default connect(mapStateToProps)(Talent);
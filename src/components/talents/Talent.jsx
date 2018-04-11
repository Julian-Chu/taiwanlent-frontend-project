import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../styles/talents/talent.css';

class Talent extends Component {
  addToList() {
    if (this.props.candidates.length < 5) {
      this.props.addCandidate();
    }
  }

  removeFromList() {
    if (this.props.candidates.length > 0) {
      this.props.removeCandidate();
    }
  }

  render() {
    return (
      <div className="product clearfix pf-dress">
        <div className="product-image ">
          <a href="# "><img src={this.props.photo?this.props.photo:(this.props.gender === "male"?'images/male.png':'images/female.png')} alt={this.props.name} /></a>
          <div className={this.props.qualified ? 'sale-flash' : ''}> {this.props.qualified ? 'Qualified' : ''} </div>
          <div className={this.props.experienced ? 'sale-flash' : ''}> {this.props.experienced ? 'Experienced' : ''}</div>
          <div className="product-overlay ">
            <button className="item-quick-view" onClick={this.props.authenticated?()=>this.props.enableDetail(this.props.id): alert('Please log in')}>
              <i className="icon-zoom-in2 " />
              <span> 查看資料</span>
            </button>
          </div>
        </div>
        <div className="product-desc ">
          <div className="product-title ">
            <h3><a href="# ">{this.props.name}</a></h3>
          </div>
          <div className="product-price ">
            <div>語言:<span>{this.props.langs}</span></div>
            <div>專業背景:<span>{this.props.subjectCategory}</span></div>
            <div>所在地:<span>{this.props.region}</span></div>
          </div>
          <div className="product-rating ">
            {!this.props.selected ?
              <button type="button" className="button button-3d button-rounded" onClick={() => { this.addToList(); }} style={{ backgroundColor: '#0ebb99' }}>
                <i className="icon-bookmark2" />
                加入詢問清單
              </button>
              :
              <button type="button" className="button button-3d button-rounded" onClick={() => { this.removeFromList(); }} style={{ backgroundColor: '#7CBAB7' }}>
                <i className="icon-bookmark2" />
                移除詢問清單
              </button>}
          </div>
        </div>
      </div>
    );
  }
}

Talent.propTypes = {
  name: PropTypes.string.isRequired,
  langs: PropTypes.string.isRequired,
  subjectCategory: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  qualified: PropTypes.bool.isRequired,
  experienced: PropTypes.bool.isRequired,
  addCandidate: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  photo: PropTypes.string.isRequired,
  removeCandidate: PropTypes.func.isRequired,
  candidates: PropTypes.arrayOf(PropTypes.number),
};

Talent.defaultProps = {
  candidates: [],
};

function mapStateToProps(state) {
  return { 
    candidates: state.candidates,
    authenticated:state.authenticated
  };
}

export default connect(mapStateToProps)(Talent);

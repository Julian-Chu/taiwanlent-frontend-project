import React, { Component } from 'react';
import '../../styles/talents/talents.css';
import Filter from '../talents/Filter';
import Talent from './Talent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeAllCandidates, addCandidate, removeCandidate } from '../../actions/index';


class Talents extends Component {

  constructor(props){
    super(props);
    var selectedStatus = this.props.talents.slice();
    selectedStatus.fill(false);
    this.state = {
      selectedList: this.props.candidates,
      selectedStatus,
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  removeAllCandidatesFromList() {
    this.props.removeAllCandidates();
    let newSelectedStatus = this.state.selectedStatus.slice().fill(false);    
    this.setState({
      selectedStatus: newSelectedStatus,
    })
  }  

  add(id){
    this.props.addCandidate(id);
    let newSelectedStatus = this.state.selectedStatus.slice();    
    newSelectedStatus[id-1] = true;
    this.setState({selectedStatus:newSelectedStatus});
  }

 remove(id){
    this.props.removeCandidate(id);
    let newSelectedStatus = this.state.selectedStatus.slice();    
    newSelectedStatus[id-1] = false;
    this.setState({selectedStatus:newSelectedStatus});
  }

  renderTalentList() {
    let talents = this.props.talents;
    return talents.map(t => <Talent key={t.id} selected={ this.state.selectedStatus[t.id - 1]} addCandidate={()=>this.add(t.id)} removeCandidate={()=>this.remove(t.id)}  {...t} />);
  }

  render() {
    return (
      <div>
        <div className="filter-body-overlay">
          <div className="product clearfix pf-dress detailView">
            <div className="closeDetailView"><button className="button button-mini button-circle button-red"><i className="icon-off"></i>Close</button></div>
            <div className="detailView-image ">
              <a href="# "><img src="images/shop/dress/1.jpg " alt="Checked Short Dress "></img></a>
              <div className="sale-flash">Qualified<br />Experienced</div>
            </div>
            <div className="product-desc center">
              <div className="product-title ">
                <h3><a href="# ">CLAIRE CHANG</a></h3>
              </div>
              <div className="product-price ">
                <div>語言:<span>德語/英語/中文</span></div>
                <div>專業背景:<span>化學</span></div>
              </div>
              <div className="product-rating ">
                <button className="button button-3d button-rounded" style={{ backgroundColor: '#7CBAB7' }}>
                  <i className="icon-bookmark2"></i>
                  加入詢問清單</button>
              </div>
            </div>
          </div>
        </div>

        <section id="content">
          <div className="content-wrap">
            <div className="container clearfix">
              <Filter />

              <div className="fixedWin">
                <p>{this.props.candidates.length}/5</p>
                <button className="button button-mini button-border button-circle button-dark"><i className="icon-ok"></i>批量詢問</button>
                <button type="button" className="button button-mini button-border button-circle button-dark" onClick={() => this.removeAllCandidatesFromList()}><i className="icon-repeat"></i>重置清單</button>
              </div>

              <div className="clear "></div>

              <div id="shop " className="shop grid-container clearfix ">
                {this.renderTalentList()}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

function getFilteredTalents(talents, filter) {
  // Filter region
  let tempArray = (filter[0] && filter[0].length > 0) ? talents.filter(t => filter[0].some(filterRegion => filterRegion.label.includes(t.region))) : talents;
  // Filter language
  tempArray = (filter[1] && filter[1].length > 0) ? talents.filter(t => t.lang.includes(filter[1][0].label)) : tempArray;
  // Filter subject
  tempArray = (filter[2] && filter[2].length > 0) ? talents.filter(t => filter[2].some(filterSubject => filterSubject.label.includes(t.subject))) : tempArray;

  return tempArray;
}

function mapStateToProps(state) {
  return {
    talents: getFilteredTalents(state.talents, state.filter),
    // talents: state.talents
    candidates: state.candidates
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeAllCandidates, addCandidate, removeCandidate }, dispatch);

}
export default connect(mapStateToProps, mapDispatchToProps)(Talents);
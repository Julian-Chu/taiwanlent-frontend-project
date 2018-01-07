import React, { Component } from 'react';
import '../../styles/talents/talents.css';
import Filter from '../talents/Filter';
import Talent from './Talent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeAllCandidates, addCandidate, removeCandidate } from '../../actions/index';
import Detail from './Detail';


class Talents extends Component {
  constructor(props) {
    super(props);
    const selectedStatus = this.props.talents.slice();
    selectedStatus.fill(false);
    this.state = {
      selectedList: this.props.candidates,
      selectedStatus,
      detailIsEnabled: false,
      detailId: null,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  removeAllCandidatesFromList() {
    this.props.removeAllCandidates();
    const newSelectedStatus = this.state.selectedStatus.slice().fill(false);
    this.setState({
      selectedStatus: newSelectedStatus,
    });
  }

  add(id) {
    this.props.addCandidate(id);
    const newSelectedStatus = this.state.selectedStatus.slice();
    newSelectedStatus[id - 1] = true;
    this.setState({ selectedStatus: newSelectedStatus });
  }

  remove(id) {
    this.props.removeCandidate(id);
    const newSelectedStatus = this.state.selectedStatus.slice();
    newSelectedStatus[id - 1] = false;
    this.setState({ selectedStatus: newSelectedStatus });
  }

  renderTalentList() {
    const talents = this.props.talents;
    return talents.map(t => { return <Talent key={t.id} enableDetail={(id)=>this.enableDetail(id)} selected={this.state.selectedStatus[t.id - 1]} addCandidate={() => this.add(t.id)} removeCandidate={() => this.remove(t.id)}  {...t} /> });
  }

  renderDetail() {
    return (this.state.detailIsEnabled ? <Detail {...this.props.talents[this.state.detailId - 1]} disableDetail={()=>this.disableDetail()}/> : null);
  }

  enableDetail(id) {
    console.log(id);
    console.log(this);
    this.setState({
      detailIsEnabled: true,
      detailId: id,
    })
  }

  disableDetail() {
    this.setState({
      detailIsEnabled: false,
      detailId:null,
    })
  }

  render() {
    return (
      <div>
        {this.renderDetail()}
        <section id="content">
          <div className="content-wrap">
            <div className="container clearfix">
              <Filter />

              <div className="fixedWin">
                <p>{this.props.candidates.length}/5</p>
                <button className="button button-mini button-border button-circle button-dark"><i className="icon-ok" />批量詢問</button>
                <button type="button" className="button button-mini button-border button-circle button-dark" onClick={() => { return this.removeAllCandidatesFromList() }}><i className="icon-repeat" />重置清單</button>
              </div>

              <div className="clear " />

              <div id="shop " className="shop grid-container clearfix ">
                {this.renderTalentList()}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

function getFilteredTalents(talents, filter) {
  // Filter region
  let tempArray = (filter[0] && filter[0].length > 0) ? talents.filter(t => { return filter[0].some(filterRegion => filterRegion.label.includes(t.region)) }) : talents;
  // Filter language
  tempArray = (filter[1] && filter[1].length > 0) ? talents.filter(t => { return t.lang.includes(filter[1][0].label) }) : tempArray;
  // Filter subject
  tempArray = (filter[2] && filter[2].length > 0) ? talents.filter(t => { return filter[2].some(filterSubject => filterSubject.label.includes(t.subject)) }) : tempArray;

  return tempArray;
}

function mapStateToProps(state) {
  return {
    talents: getFilteredTalents(state.talents, state.filter),
    // talents: state.talents
    candidates: state.candidates,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeAllCandidates, addCandidate, removeCandidate }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Talents);
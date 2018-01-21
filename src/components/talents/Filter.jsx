import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {setFilters} from '../../actions/index';
import regions from '../common/regions';
import subjects from '../common/subjects';
import languages from '../common/languages';



class Filter extends Component {
  constructor(props) {
    super(props);
    this.langOptions = languages;
    this.regionOptions = regions;
    this.subjectOptions = subjects;
    this.state = {
      selectedLanguages: [],
      selectAllLangsIsChecked: false,
      selectedRegions: [],
      selectAllRegionsIsChecked: false,
      selectedSubjects: [],
      selectAllSubjectsIsChecked: false,
    }
  }

  langsChange(val) {
    this.setState({
      selectedLanguages: val,
      selectAllLangsIsChecked: false
    })
  }

  selectAllLangs() {
    if (this.state.selectAllLangsIsChecked) {
      this.setState({
        selectedLanguages: [],
        selectAllLangsIsChecked: false
      })
    } else {
      this.setState({
        selectedLanguages: this.langOptions,
        selectAllLangsIsChecked: true
      })
    }
  }

  regionsChange(val) {
    this.setState({
      selectedRegions: val,
      selectAllRegionsIsChecked:false
    })
  }

  selectAllRegions() {
    if (this.state.selectAllRegionsIsChecked) {
      this.setState({
        selectedRegions: [],
        selectAllRegionsIsChecked: false
      })
    } else {
      this.setState({
        selectedRegions: this.regionOptions,
        selectAllRegionsIsChecked: true
      })
    }
  }

  subjectsChange(val) {
    this.setState({
      selectedSubjects: val,
      selectAllSubjectsIsChecked: false
    })
  }

  selectAllSubjects() {
    if (this.state.selectAllSubjectsIsChecked) {
      this.setState({
        selectedSubjects: [],
        selectAllSubjectsIsChecked: false
      })
    } else {
      this.setState({
        selectedSubjects: this.subjectOptions,
        selectAllSubjectsIsChecked: true
      })
    }
  }

  submitFilters(event) {
    event.preventDefault()
    let filters = [this.state.selectedRegions, this.state.selectedLanguages, this.state.selectedSubjects];
    this.props.setFilters(filters);
  }

  render() {
    return (
      <form onSubmit={(e) => this.submitFilters(e)}>
        <div>
          <div style={{ display: 'inline-block', maxWidth: '400px', minWidth: '300px'}}>
            <Select
              multi
              options={this.regionOptions}
              onChange={(val) => this.regionsChange(val)}
              placeholder="Select regions"
              closeOnSelect={false}
              value={this.state.selectedRegions}
              // style={{ width: '400px', maxHeight: '20px', overflow: 'hidden' }}
              style={{ maxWidth: '300px' }}
            />
            <label htmlFor="" className="checkbox">
              <input type="checkbox" name="selectAllRegions" checked={this.state.selectAllRegionsIsChecked} onChange={() => this.selectAllRegions()} />
              <span className="checkbox-label">全選</span>
            </label>
          </div>

          <div style={{ display: 'inline-block', maxWidth: '400px', minWidth: '200px' }}>
            <Select
              multi
              options={this.langOptions}
              style={{ maxWidth: '250px' }}
              onChange={(val) => this.langsChange(val)}
              placeholder="Select languages"
              closeOnSelect={false}
              value={this.state.selectedLanguages}
            />
            <label htmlFor="" className="checkbox">
              <input type="checkbox" name="selectAllLangs" checked={this.state.selectAllLangsIsChecked} onChange={() => this.selectAllLangs()} />
              <span className="checkbox-label">全選</span>
            </label>
          </div>

          <div style={{ display: 'inline-block', maxWidth: '400px', minWidth: '200px' }}>
            <Select
              multi
              options={this.subjectOptions}
              style={{ maxWidth: '250px' }}
              onChange={(val) => this.subjectsChange(val)}
              placeholder="Select subjects"
              closeOnSelect={false}
              value={this.state.selectedSubjects}
            />
            <label htmlFor="" className="checkbox">
              <input type="checkbox" name="selectAllsubjects" checked={this.state.selectAllSubjectsIsChecked} onChange={() => this.selectAllSubjects()} />
              <span className="checkbox-label">全選</span>
            </label>
          </div>
          <button type="submit" className="btn btn-default" >Filter</button>
        </div>
      </form>
    )
  }
}

// function mapStateToProps(state) {
//   return {
//     filters:state.filters
//   };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setFilters }, dispatch);
}

export default connect(null, mapDispatchToProps)(Filter);
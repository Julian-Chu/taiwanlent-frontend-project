import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {setFilters} from '../../actions/index';



class Filter extends Component {
  constructor(props) {
    super(props);

    this.langOptions = [
      { value: 'de', label: '德文' },
      { value: 'en', label: '英文' },
      { value: 'ch', label: '中文' }
    ];

    this.regionOptions = [
      { value: 'BW', label: 'Baden-Württemberg 巴登-符騰堡' },
      { value: 'BE', label: 'Berlin 柏林' },
      { value: 'BY', label: 'Bavaria 巴伐利亞' },
      { value: 'HB', label: 'Bremen 布萊梅' },
      { value: 'BB', label: 'Brandenburg 布蘭登堡' },
      { value: 'HH', label: 'Hamburg 漢堡' },
      { value: 'HE', label: 'Hessen 黑森' },
      { value: 'NI', label: 'Lower Saxony 下薩克森' },
      { value: 'SL', label: 'Saarland 薩爾蘭' },
      { value: 'SN', label: 'Saxony 薩克森' },
      { value: 'ST', label: 'Saxony-Anhalt 薩克森-安哈特' },
      { value: 'TH', label: 'Thuringia 圖林根' },
      { value: 'RP', label: 'Rhineland-Palatinate 萊茵蘭-普法茲' },
      { value: 'SH', label: 'Schleswig-Holstein 史列斯威-霍爾斯' },
      { value: 'NW', label: 'North Rhine-Westphalia 北萊茵-西法冷' },
      { value: 'MV', label: 'Mecklenburg-Western Pomerania 梅克倫堡-西波美恩' },
    ];

    this.subjectOptions = [
      { value: 'etit', label: '電子資訊' },
      { value: 'ch', label: '化學化工' },
      { value: 'mame', label: '材料機械' },
      { value: 'soci', label: '社會學科' },
      { value: 'lang', label: '語言專業' },
      { value: 'art', label: '藝術' },
      { value: 'biomed', label: '生物醫學' },
      { value: 'etc', label: '其他' },
    ]


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
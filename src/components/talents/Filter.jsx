import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';



export default class Filter extends Component {
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
    ]


    this.state = {
      selectedLanguages: [],
      selectAllLangsIsChecked: false,
      selectedRegions: [],
      selectAllRegionsIsChecked: false,
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

  render() {
    return (
      <div>
      <div style={{ display: 'inline-block', width: '400px', maxHeight:'20px' }}>
        <Select
          multi
          options={this.regionOptions}
          onChange={(val) => this.regionsChange(val)}
          placeholder="Select regions"
          closeOnSelect={false}
          value={this.state.selectedRegions}
          style={{ width: '400px', maxHeight:'20px', overflow:'hidden' }}
        />
        <label htmlFor="">
          <input type="checkbox" name="selectAllRegions" checked={this.state.selectAllRegionsIsChecked} onChange={() => this.selectAllRegions()} />
          <span className="checkbox-label">全選</span>
        </label>
        </div>

        <div style={{ display: 'inline-block', maxWidth: '400px' }}>
        <Select
          multi
          options={this.langOptions}
          style={{ maxWidth: '250px' }}
          onChange={(val) => this.langsChange(val)}
          placeholder="Select items"
          closeOnSelect={false}
          value={this.state.selectedLanguages}
        />
        <label htmlFor="" className="checkbox">
          <input type="checkbox" name="selectAllLangs" checked={this.state.selectAllLangsIsChecked} onChange={() => this.selectAllLangs()} />
          <span className="checkbox-label">全選</span>
        </label>
        </div>



        {/* <ul id="portfolio-filter" className="portfolio-filter clearfix">
          
          <li><span>&nbsp</span></li>

          <li>
            <div>
              <select name="" id="selectSubject" multiple="multiple">
                <option value="all">all</option>
                <option value="etit">電子資訊</option>
                <option value="ch">化學化工</option>
                <option value="mame">材料機械</option>
                <option value="soci">社會學科</option>
                <option value="lang">語言專業</option>
                <option value="art">藝術</option>
                <option value="biomed">生物醫學</option>
              </select>
            </div>
          </li>
        </ul> */}
      </div>
    )
  }
}
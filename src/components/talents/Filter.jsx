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

    this.state={
        selectedLanguages:'',
        selectAllLangsIsChecked: false,
    }
  }

  logChange(val) {
    console.log('Selected: ', val);
    this.setState({
      selectedLanguages: val,
    })
  }

  selectAllLangs(){
    console.log(this.state.selectAllLangsIsChecked);

    if(this.state.selectAllLangsIsChecked){
      this.setState({
        selectedLanguages: [],
        selectAllLangsIsChecked: false
      })
    }else{
      this.setState({
        selectedLanguages: this.langOptions,
        selectAllLangsIsChecked: true
      })
    }
   
  }

  render() {
    return (
      <div>
        <Select          
          multi
          options={this.langOptions}
          style={{ maxWidth: '250px' }}
          onChange={ (val)=>this.logChange(val)}
          placeholder="Select items"
          closeOnSelect={false}
          rtl={false}
          value={this.state.selectedLanguages}
        />
        <label htmlFor="" className="checkbox">
          <input type="checkbox" name="selectAllLangs" checked={this.state.selectAllLangsIsChecked} onChange={(val)=>this.selectAllLangs(val)}/>
          <span className="checkbox-label">全選</span>
        </label>
        <ul id="portfolio-filter" className="portfolio-filter clearfix">
          <li style={{ minWidth: '50px' }}>

          </li>

          <li><span>&nbsp</span></li>
          {/* <li>
          <select name="multicheckbox[]" id="selectRegion" multiple="multiple" style={{ display: 'inline-block', width: '90%' }}>
            <option value="all">all</option>
            <option value="BW">Baden-Württemberg<br /> 巴登-符騰堡</option>
            <option value="BE">Berlin柏林</option>
            <option value="BY">Bavaria (lozengy)巴伐利亞 </option>
            <option value="HB">Bremen布萊梅</option>
            <option value="BB">Brandenburg布蘭登堡 </option>
            <option value="HH">Hamburg 漢堡</option>
            <option value="HE">Hessen 黑森 </option>
            <option value="NI">Lower Saxony 下薩克森 </option>
            <option value="SL">Saarland 薩爾蘭</option>
            <option value="SN">Saxony 薩克森</option>
            <option value="ST">Saxony-Anhalt 薩克森-安哈特</option>
            <option value="TH">Thuringia 圖林根</option>
            <option value="RP">Rhineland-Palatinate 萊茵蘭-普法茲</option>
            <option value="SH">Schleswig-Holstein 史列斯威-霍爾斯坦</option>
            <option value="NW">North Rhine-Westphalia 北萊茵-西法冷</option>
            <option value="MV">Mecklenburg-Western Pomerania 梅克倫堡-西波美恩</option>
          </select>
        </li> */}
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
        </ul>
      </div>
    )
  }
}
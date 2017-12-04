import React, { Component } from 'react';
import '../../styles/talents/talents.css';
import Filter from '../talents/Filter';
import Talent from './Talent';
import { connect } from 'react-redux';


class Talents extends Component {
  componentDidMount(){
    window.scrollTo(0,0);
  }

  renderTalentList(){
      return this.props.talents.map(t => <Talent key={t.id} {...t}/>);
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
                <button className="button button-3d button-rounded" style={{backgroundColor:'#7CBAB7'}}>
                  <i className="icon-bookmark2"></i>
                  加入詢問清單</button>
              </div>
            </div>
          </div>
        </div>

        <section id="content">
                <div className="content-wrap">
                    <div className="container clearfix">
                        <Filter/>
           
                        <div className="fixedWin">
                            <p>0/10</p>
                            <button className="button button-mini button-border button-circle button-dark"><i className="icon-ok"></i>批量詢問</button>
                            <button className="button button-mini button-border button-circle button-dark"><i className="icon-repeat"></i>重置清單</button>
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

function getFilteredTalents(talents, filter){
  return talents.include(filter[0]).include(filter[1]).include(filter[2]);
}

function mapStateToProps(state){
  return {
    talents: getFilteredTalents(state.talents, state.filter)
  };
}
export default connect(mapStateToProps)(Talents);
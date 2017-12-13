import React, {Component} from 'react';

export default class Detail extends Component{
 
  render(){
    return(
      <div className="filter-body-overlay filter-body-overlay-open">
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
    )
  }
}
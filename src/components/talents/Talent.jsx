import React from 'react';

const Talent = (props) => {
  console.log(props);
  console.log(props.qualified);
  return (
    <div className="product clearfix pf-dress ">
      <div className="product-image ">
        <a href="# "><img src="images/shop/dress/1.jpg " alt="Checked Short Dress "></img></a>
        <div className="sale-flash">{props.qualified?'Qualified':''}<br />{props.experienced? 'Experienced':'' }</div>
        <div className="product-overlay ">
          <a href="# " className="add-to-cart "><i className="icon-bookmark2 "></i><span> 加入詢問清單</span></a>
          <button className="item-quick-view "><i className="icon-zoom-in2 "></i><span> 查看資料</span></button>
        </div>
      </div>
      <div className="product-desc ">
        <div className="product-title ">
          <h3><a href="# ">{props.name}</a></h3>
        </div>
        <div className="product-price ">
          <div>語言:<span>{props.lang}</span></div>
          <div>專業背景:<span>{props.subject}</span></div>
        </div>
        <div className="product-rating ">
          <button className="button button-3d button-rounded" style={{ backgroundColor: '#7CBAB7' }}>
            <i className="icon-bookmark2"></i>
            加入詢問清單</button>
        </div>
      </div>
    </div>    
  )
}

Talent.propTypes = {
  name: React.PropTypes.string.isRequired,
  lang: React.PropTypes.string.isRequired,
  subject: React.PropTypes.string.isRequired,
  qualified: React.PropTypes.bool.isRequired,
  experienced: React.PropTypes.bool.isRequired
};

export default Talent;
import React from 'react';
import  '../../styles/talents/talent.css';
import PropTypes from 'prop-types';

const Talent = (props) => {
  return (
    <div className="product clearfix pf-dress">
      <div className="product-image ">
        <a href="# "><img src={props.photo} alt={props.name}></img></a>
        <div className={props.qualified ? "sale-flash" : ""}> {props.qualified ? 'Qualified' : ''} </div>
        <div className={props.experienced ? "sale-flash" : ""}> {props.experienced ? 'Experienced' : ''}</div>
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
  name: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  qualified: PropTypes.bool.isRequired,
  experienced: PropTypes.bool.isRequired,
  photo: PropTypes.string,
  id: PropTypes.number.isRequired
};

export default Talent;
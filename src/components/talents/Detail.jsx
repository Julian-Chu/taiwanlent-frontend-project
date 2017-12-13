import React from 'react';
import PropTypes from 'prop-types';

const Detail = (props) => {
  return (
    <div className="filter-body-overlay filter-body-overlay-open">
      <div className="product clearfix pf-dress detailView">
        <div className="closeDetailView">
          <button className="button button-small button-circle button-red" onClick={()=>props.disableDetail()}>
            <i className="icon-off">Close</i>
          </button>
        </div>
        <div className="detailView-image ">
          <a href="# "><img src={props.photo} alt="Checked Short Dress " /></a>
          <div className={props.qualified ? 'sale-flash' : ''}> {props.qualified ? 'Qualified' : ''} </div>
          <div className={props.experienced ? 'sale-flash' : ''}> {props.experienced ? 'Experienced' : ''}</div>
        </div>
        <div className="product-desc center">
          <div className="product-title ">
            <h3><a href="# ">{props.name}</a></h3>
          </div>
          <div className="product-price ">
            <div>語言:<span>{props.lang}</span></div>
            <div>專業背景:<span>{props.subject}</span></div>
            <div>所在地:<span>{props.region}</span></div>
          </div>
          <div className="product-rating ">
            {/* <button className="button button-3d button-rounded" style={{ backgroundColor: '#7CBAB7' }}>
              <i className="icon-bookmark2" />
              加入詢問清單
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  qualified: PropTypes.bool.isRequired,
  experienced: PropTypes.bool.isRequired,
  photo: PropTypes.string.isRequired,

};

export default Detail;

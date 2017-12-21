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
            <div>姓名:<span>{props.name}</span></div>
            <div>所在區域:<span>{props.region}</span></div>
            <div>現居城市:<span>{props.city}</span></div>
            <div>專業背景:<span>{props.subject}</span></div>
            <div>在學/畢業學校<span>{props.school}</span></div>
            <div>職業:<span>{props.jobPosition}</span></div>
            <div>語言:<span>{props.lang}</span></div>
            <div>在德時間:<span>{props.yearsInGermany}年</span></div>
            <div>自我介紹:<span>{props.selfIntroduce}</span></div>
            <div>工作經歷:<span>{props.workingExperience.map( (e,index)=> <div key={index}>{index}:{e}</div>)}</span></div>
            <div>駕照:<span>{props.driverLicence? "O":"" }</span></div>
            <div>願意到其他城市工作:<span>{props.willingToMove? "O":"" }</span></div>
            
            
            
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

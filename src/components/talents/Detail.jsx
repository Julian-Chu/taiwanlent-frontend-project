import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/talents/Detail.css';

const Detail = (props) => {
  return (
    <div className="filter-body-overlay filter-body-overlay-open">
      <div className="product clearfix pf-dress detailView-whitebackground">
        <div className="detailView-content">
          <div className="detailView-closeButton">
            <button className="button button-small button-circle button-red" onClick={() => props.disableDetail()}>
              <i className="icon-off"></i>
            </button>
          </div>
          <div className="detailView-image ">
            <a href="# "><img src={props.photo} alt="Checked Short Dress " /></a>
            <div className={props.qualified ? 'sale-flash' : ''}> {props.qualified ? 'Qualified' : ''} </div>
            <div className={props.experienced ? 'sale-flash' : ''}> {props.experienced ? 'Experienced' : ''}</div>
          </div>
          <div className="detailView-info ">
            <div className="detailView-ownername ">
              <h3><a href="# ">{props.name}</a></h3>
            </div>
            {/* <div>所在區域:<span>{props.region}</span></div>
            <div>現居城市:<span>{props.city}</span></div>
            <div>專業背景:<span>{props.subject}</span></div>
            <div>在學/畢業學校<span>{props.school}</span></div>
            <div>職業:<span>{props.jobPosition}</span></div>
            <div>語言:<span>{props.lang}</span></div>
            <div>在德時間:<span>{props.yearsInGermany}年</span></div> */}
            <table className="detailView-infotable">
              <tr>
                <td>所在區域</td>
                <td>{props.region}</td>
              </tr>
              <tr>
                <td>現居城市</td>
                <td>{props.city}</td>
              </tr>
              <tr>
                <td>在學/畢業學校</td>
                <td>{props.school}</td>
              </tr>
              <tr>
                <td>職業:</td>
                <td>{props.jobPosition}</td>
              </tr>
              <tr>
                <td>語言:</td>
                <td>{props.lang}</td>
              </tr>
              <tr>
                <td>在德時間:</td>
                <td>{props.yearsInGermany}年</td>
              </tr>
            </table>
          </div>
        </div>
        <br />
        <div className="product-desc  after-image detailView-description">
          {/* <div>自我介紹:<br/><span>{props.selfIntroduce}</span></div>
          <div>工作經歷:<span>{props.workingExperience.map((e, index) => <div key={index}>{index}:{e}</div>)}</span></div>
          <div>駕照:<span>{props.driverLicence ? "O" : ""}</span></div>
          <div>願意到其他城市工作:<span>{props.willingToMove ? "O" : ""}</span></div> */}
          <table>
            <tr>
              <th>自我介紹</th>
            </tr>
            <tr >
              <th className="addline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            </tr>
            <tr>
              <td>{props.selfIntroduce}</td>
            </tr>
            <br />
            <tr>
              <th>工作經歷</th>
            </tr>
            <tr >
              <th className="addline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            </tr>
            <tr>
              <td>{props.workingExperience.map((e, index) => <div key={index}>{index+1}.{e}</div>)}</td>
            </tr>
            <br />
          </table>
          <table>
            <tr>
              <td>駕照:</td> <td>&nbsp;{props.driverLicence ? "O" : ""}</td>
            </tr>
            <tr>
              <td>願意到其他城市工作:</td><td>&nbsp;{props.willingToMove ? "O" : ""}</td>
            </tr>
          </table>
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

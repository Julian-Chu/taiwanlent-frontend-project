import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/talents/Detail.css';

const Detail = (props) => {
  console.log(props);
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
            <a href="# "><img src={props.photo?props.photo: ( props.gender === "male"? 'images/male.png':'images/female.png')} alt="Checked Short Dress " /></a>
            <div className={props.qualified ? 'sale-flash' : ''}> {props.qualified ? 'Qualified' : ''} </div>
            <div className={props.experienced ? 'sale-flash' : ''}> {props.experienced ? 'Experienced' : ''}</div>
          </div>
          <div className="detailView-info ">
            <div className="detailView-ownername ">
              <h3><a href="# ">{props.name}</a></h3>
            </div>
            <table className="detailView-infotable">
            <tbody>
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
                <td>{props.uni}</td>
              </tr>
              <tr>
                <td>職業:</td>
                <td>{props.occupation}</td>
              </tr>
              <tr>
                <td>語言:</td>
                <td>{props.langs}</td>
              </tr>
              <tr>
                <td>在德時間:</td>
                <td>{props.livingYearsInGermany}年</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="product-desc  after-image detailView-description">
            <table>
              <tbody>
              <tr>
                <th>自我介紹</th>
              </tr>
              <tr >
                <th className="addline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
              </tr>
              <tr>
                <td>{props.selfIntroduction}</td>
              </tr>
              <tr><th>&nbsp;</th></tr>
              <tr>
                <th>工作經歷</th>
              </tr>
              <tr >
                <th className="addline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
              </tr>
              <tr>
                <td>{props.workingExperiences.map((e, index) => <div key={index}>{index + 1}.{e}</div>)}</td>
              </tr>
          
              </tbody>
            </table>
            <br/>
            <table>
              <tbody>
              <tr>
                <td>駕照:</td> <td>&nbsp;{props.drivingLicence ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td>願意到其他城市工作:</td><td>&nbsp;{props.willingToRelocate ? "Yes" : "No"}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  langs: PropTypes.string.isRequired,
  subjectCategory: PropTypes.string.isRequired,
  qualified: PropTypes.bool.isRequired,
  experienced: PropTypes.bool.isRequired,
  photo: PropTypes.string.isRequired,
  uni: PropTypes.string.isRequired,
  willingToRelocate: PropTypes.bool.isRequired,
  occupation: PropTypes.string.isRequired

};

export default Detail;

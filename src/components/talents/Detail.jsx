import React from "react";
import PropTypes from "prop-types";
import "../../styles/talents/Detail.css";
import regions from "../common/regions";

const Detail = props => {
  console.log(props);
  let talent = props.talent;
  return (
    <div className="filter-body-overlay filter-body-overlay-open">
      <div className="product clearfix pf-dress detailView-whitebackground">
        <div className="detailView-content">
          <div className="detailView-closeButton">
            <button
              className="button button-small button-circle button-red"
              onClick={() => props.disableDetail()}
            >
              <i className="icon-off" />
            </button>
          </div>
          <div className="detailView-image ">
            <a href="# ">
              <img
                src={
                  talent.photo
                    ? talent.photo
                    : talent.gender === "male"
                      ? "images/male.png"
                      : "images/female.png"
                }
                alt=""
              />
            </a>
            <div className={props.qualified ? "sale-flash" : ""}>
              {" "}
              {props.qualified ? "Qualified" : ""}{" "}
            </div>
            <div className={props.experienced ? "sale-flash" : ""}>
              {" "}
              {props.experienced ? "Experienced" : ""}
            </div>
          </div>
          <div className="detailView-info ">
            <div className="detailView-ownername ">
              <h3>
                <a href="# ">{talent.name}</a>
              </h3>
            </div>
            <table className="detailView-infotable">
              <tbody>
                <tr>
                  <td>所在區域</td>
                  <td>
                    {
                      regions.find(region => region.value === talent.region)
                        .label
                    }
                  </td>
                </tr>
                <tr>
                  <td>現居城市</td>
                  <td>{talent.city}</td>
                </tr>
                <tr>
                  <td>在學/畢業學校</td>
                  <td>{talent.school}</td>
                </tr>
                <tr>
                  <td>職業:</td>
                  <td>{talent.occupation}</td>
                </tr>
                <tr>
                  <td>語言:</td>
                  <td>
                    {talent.english ? "英文" : ""}
                    {talent.english && (talent.german || talent.chinese)
                      ? "/"
                      : ""}
                    {talent.german ? "德文" : ""}
                    {talent.german && talent.chinese ? "/" : ""}
                    {talent.chinese ? "中文" : ""}
                  </td>
                </tr>
                <tr>
                  <td>在德時間:</td>
                  <td>{talent.livingYearsInGermany}年</td>
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
                <tr>
                  <th className="addline">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </th>
                </tr>
                <tr>
                  <td>{talent.selfIntroduction}</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                </tr>
                <tr>
                  <th>工作經歷</th>
                </tr>
                <tr>
                  <th className="addline">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </th>
                </tr>
                <tr>
                  {/* <td>{talent.workExperience_1}</td>
                  <td>{talent.workExperience_2}</td>
                  <td>{talent.workExperience_3}</td> */}
                  <ul>
                    <li>{talent.workExperience_1}</li>
                    <li>{talent.workExperience_2}</li>
                    <li>{talent.workExperience_3}</li>
                  </ul>
                </tr>
              </tbody>
            </table>
            <br />
            <table>
              <tbody>
                <tr>
                  <td>駕照:</td>{" "}
                  <td>
                    &nbsp;
                    {talent.licence ? "Yes" : "No"}
                  </td>
                </tr>
                <tr>
                  <td>願意到其他城市工作:</td>
                  <td>
                    &nbsp;
                    {talent.relocation ? "Yes" : "No"}
                  </td>
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

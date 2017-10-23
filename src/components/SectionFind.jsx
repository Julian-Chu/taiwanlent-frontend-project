import React, { Component } from 'react';

export default class SectionFind extends Component {
  render() {
    return (
      <div id="section-find" className="page-section notoppadding" >
        <div className="section nomargin">
          <div className="container clearfix">
            <div className="divcenter center" style={{ maxWidth: '900px' }}>
              <h2 className="nobottommargin t300 ls1">Taiwanlent 提供您各領域的專業人才</h2>
            </div>
          </div>
          <div className="row topmargin-lg divcenter" style={{ maxWidth: '1000px' }}>

            <div className="col-sm-4 bottommargin">

              <div className="team">
                <div className="team-image">
                  <img src="images/team/Taiwanlent-Liu.jpg" alt="Taiwanlent-Liu"></img>
                  <div className="team-overlay">

                  </div>
                </div>
                <div className="team-desc team-desc-bg">
                  <div className="team-title">
                    <h4>Liu Li-Tse</h4><span>Leipzig</span></div>
                </div>
              </div>
            </div>

            <div className="col-sm-4 bottommargin">
              <div className="team">
                <div className="team-image">
                  <img src="images/team/2.jpg" alt="Taiwanlent Huang"></img>
                  <div className="team-overlay">
                  </div>
                </div>
                <div className="team-desc team-desc-bg">
                  <div className="team-title">
                    <h4>Claire Chang</h4><span>Frankfurt</span></div>
                </div>
              </div>
            </div>

            <div className="col-sm-4 bottommargin">
              <div className="team">
                <div className="team-image">
                  <img src="images/team/3.jpg" alt="Taiwanlent Huang"></img>
                  <div className="team-overlay">
                  </div>
                </div>
                <div className="team-desc team-desc-bg">
                  <div className="team-title">
                    <h4>Eric Lee</h4><span>Berlin</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="topmargin center"><a href="./shop-filter.html" className="button button-border button-circle t600">進入人才資料庫</a></div>
        </div>
      </div>
    )
  }
}
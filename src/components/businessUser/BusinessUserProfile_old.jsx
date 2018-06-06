import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GetBusinessUserData } from '../../actions/businessuser';
import BusinessUserRegister from './BusinessUserRegister';

class BusinessUserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modifyData: false
    }
  }
  componentDidMount() {
    this.props.GetBusinessUserData();
  }
  renderField(field) {
    return (
      <div>
        <label htmlFor="">{field.title}</label>
        <label htmlFor="">{field.value}</label>
      </div>
    )
  }

  renderUserData() {
    return (
      <div>
        <div className="col_half">
          <label>使用者名稱:</label>
          <p>{this.props.userdata.username}</p>
          <label>Email:</label>
          <p>{this.props.userdata.email}</p>
          <label>聯絡電話:</label>
          <p>{this.props.userdata.phone}</p>
          <label>部門名稱:</label>
          <p>{this.props.userdata.department}</p>
          <label>公司所在城市:</label>
          <p>{this.props.userdata.companyLocation}</p>
          <label>地址:</label>
          <p>{this.props.userdata.address}</p>
        </div>
        <div className="col_half col_last">
          <label>真實姓名:</label>
          <p>{this.props.userdata.name}</p>

          <label>性別:</label>
          <p>{this.props.userdata.gender}</p>
          <label>公司名稱/個人委託:</label>
          <p>{this.props.userdata.companyName}</p>
          <label>產業類別:</label>
          <p>{this.props.userdata.industry}</p>
          <label>產品簡介:</label>
          <p>{this.props.userdata.productIntroduction}</p>
        </div>
        <button onClick={() => this.setState({ modifyData: true })}>修改資料</button>

      </div>
    )
  }
  render() {
    return (
      <div className="container">
        <h1>用戶資料</h1>
        {this.state.modifyData? <BusinessUserRegister/>: this.renderUserData()}
      </div>

    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { userdata: state.businessUserData }
};

// const mapDispatchToProps = dispatch =>(
//   {
//     GetBusinessUserData:()=>dispatch(businessUserActions.GetBusinessUserData())
//   }
// )
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ GetBusinessUserData }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BusinessUserProfile);
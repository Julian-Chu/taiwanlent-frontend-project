import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {GetBusinessUserData} from '../../actions/businessuser';

class BusinessUserProfile extends Component{
  constructor(props){
    super(props);
    this.props.GetBusinessUserData();
  }
  // componentWillMount(){
  //   this.props.GetBusinessUserData();
  // }
  componentDidMount(){
    console.log(this.props.userdata);
    // this.props.GetBusinessUserData();
    setTimeout(()=>{
      console.log('timer');
    console.log(this.props.userdata);
      
      this.setState({})
    }, 2000)
  }
  renderField(field){
    return(
      <div>
        <label htmlFor="">{field.title}</label>
        <label htmlFor="">{field.value}</label>
      </div>
    )
  }
  render(){
    return(
      <div className="container">
        <h1>Test</h1>
        <div className="col_half">
          <label htmlFor="">使用者名稱:{this.props.userdata.username}</label>
          <br/>
          <label htmlFor="">性別:</label>
          <label htmlFor="">{this.props.userdata.gender}</label>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state){
  console.log(state);
  return {userdata: state.businessUserData}
};

// const mapDispatchToProps = dispatch =>(
//   {
//     GetBusinessUserData:()=>dispatch(businessUserActions.GetBusinessUserData())
//   }
// )
function mapDispatchToProps(dispatch) {
  return bindActionCreators({GetBusinessUserData}, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(BusinessUserProfile);
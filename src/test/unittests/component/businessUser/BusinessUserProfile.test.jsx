
import React from 'react';
import { shallow} from 'enzyme';
import { BusinessUserProfile } from '../../../../components/businessUser/BusinessUserProfile';

describe("BusinessUserProfile",()=>{
  const props = {
    handleSubmit: fn=>fn,
    pristine: true,
    submittung: false,
    initialValues:{}
  }
  const app = shallow(<BusinessUserProfile {...props}/>);

  it("check snapshot", ()=>{
    expect(app).toMatchSnapshot();
  })

  it("form is disabled initially",()=>{
    expect(app.state().disabled).toBeTruthy();
  })

  it("execute toggleChangeInput, form will be enabled",()=>{
    app.instance().toggleChangeInput(false);
    expect(app.state().disabled).toBeFalsy();
  })
})
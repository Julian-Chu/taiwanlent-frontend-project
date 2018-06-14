
import React from 'react';
import { shallow} from 'enzyme';
import { BusinessUserProfile } from '../../../../components/businessUser/BusinessUserProfile';

describe("BusinessUserProfile",()=>{
  const app = shallow(<BusinessUserProfile></BusinessUserProfile>);

  it("check snapshot", ()=>{
    expect(app).toMatchSnapshot();
  })
})
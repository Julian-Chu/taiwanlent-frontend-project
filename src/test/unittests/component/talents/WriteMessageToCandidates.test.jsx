import React from "react";
import { shallow } from "enzyme";
import { WriteMessageToCandidates } from "../../../../components/talents/WriteMessageToCandidates";

describe("WriteMessageToCandidates", () => {
  const props = {
    GetBusinessUserData: jest.fn(),
    writeMessageToCandidates: jest.fn(),
    toggleMessageWin: jest.fn(),
    candidates: [{ name: "candidate1" }, { name: "candidate2" }],
    businessUserData: {
      email: "businessUser@test.com"
    }
  };

  const app = shallow(<WriteMessageToCandidates {...props} />);
  it("count of candidates is correct", () => {
    expect(app.find("li").length).toBe(2);
  });

  it("sender is correct", () => {
    expect(app.find("#sender").text()).toMatch(props.businessUserData.email);
  });

  it("test click Submit button", () => {
    app.find("#submit").simulate("click");
    expect(props.writeMessageToCandidates.mock.calls.length).toBe(1);
  });

  it("test click Back button", () => {
    app.find("#back").simulate("click");
    expect(props.toggleMessageWin.mock.calls.length).toBe(1);
  });
});

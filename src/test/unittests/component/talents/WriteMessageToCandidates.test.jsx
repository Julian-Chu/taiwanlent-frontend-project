import React from "react";
import { shallow } from "enzyme";
import { WriteMessageToCandidates } from "../../../../components/talents/WriteMessageToCandidates";

describe("WriteMessageToCandidates", () => {
  const props = {
    GetBusinessUserData: fn => fn,
    writeMessageToCandidates: fn => fn,
    toggleMessageWin: fn => fn,
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
});

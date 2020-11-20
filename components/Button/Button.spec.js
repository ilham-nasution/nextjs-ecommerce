import { shallow } from "enzyme";
import Button from "./index";

describe("Button", () => {
  it("should render children", () => {
    const wrapper = shallow(<Button>Click me!</Button>);

    expect(wrapper.text()).toBe("Click me!");
  });
});

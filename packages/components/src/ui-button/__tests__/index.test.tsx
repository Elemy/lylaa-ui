import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import UiButton from "../UiButton.vue";

describe("Button", () => {
  it("按钮渲染", () => {
    const wrapper = mount({
      render() {
        return <UiButton>hello Lylaa ui</UiButton>;
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.text()).toBe("hello Lylaa ui");
  });
  it("按钮点击", () => {
    const onClick = vi.fn();
    const wrapper = mount({
      render() {
        return <UiButton onClick={onClick}>按钮点击</UiButton>;
      },
    });

    wrapper.trigger("click");
    expect(onClick).toHaveBeenCalledWith();
  });
  it("按钮禁用不可点击", () => {
    const onClick = vi.fn();
    const wrapper = mount({
      render() {
        return (
          <UiButton disabled={true} onClick={onClick}>
            按钮点击
          </UiButton>
        );
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
    wrapper.trigger("click");
    expect(onClick).not.toHaveBeenCalledWith();
  });
});

import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import UiTooltip from "../UiTooltip.vue";

// const waitRAF = () => new Promise((resolve) => requestAnimationFrame(resolve));
// beforeEach(() => {
//   vi.spyOn(window, "requestAnimationFrame").mockImplementation(
//     (cb: FrameRequestCallback): number => {
//       cb(0);
//       return 0;
//     }
//   );
// });

// afterEach(() => {
// window.requestAnimationFrame.mockRestore();
// });

describe("Button", () => {
  it("鼠标移入", async () => {
    const wrapper = mount({
      render() {
        return (
          <UiTooltip title="hello lyla ui">
            <div id="hello" class="hello-class">
              hello Lylaa ui
            </div>
          </UiTooltip>
        );
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
    await wrapper.find("#hello").trigger("mouseenter");
    await new Promise((resolve) => setTimeout(resolve, 200));
    expect(wrapper.find("#hello").classes()).toContain("testui-tooltip-open");
  });
});

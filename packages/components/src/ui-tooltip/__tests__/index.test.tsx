import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import UiTooltip from "../UiTooltip.vue";

vi.useFakeTimers();

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
  it("鼠标移入", async () =>
    // new Promise((done) => {

    // }));
    {
      const wrapper = mount({
        // stubs: {
        //   transition: true,
        // },
        render() {
          return (
            <UiTooltip>
              <div id="hello" class="hello-class">
                hello Lylaa ui
              </div>
            </UiTooltip>
          );
        },
      });
      expect(wrapper.html()).toMatchSnapshot();
      await wrapper.find("#hello").trigger("mouseenter");
      // await wrapper.vm.$nextTick();
      // await waitRAF();
      // vi.runAllTimers();
      console.log(wrapper.find("#hello").classes());
      expect(wrapper.find("#hello").classes()).toContain("testui-tooltip-open");
    });
});

import type { App } from "vue";
import UiButton from "./ui-button/UiButton.vue";
import UiTooltip from "./ui-tooltip/UiTooltip.vue";
import "./style/index.less";

export default {
  install(app: App) {
    app.component("UiButton", UiButton);
    app.component("UiTooltip", UiTooltip);
  },
};

export { UiButton, UiTooltip };

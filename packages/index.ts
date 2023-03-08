// 对项目中写的所有组件进行整合
import { App } from "vue";
import Button from "./components/button";
import Icon from "./components/icon";

const components = [
  // 全局引入
  Button,
  Icon,
];
// 全局动态添加组件
export const install = (app: App) => {
  components.map((component) => {
    app.component(component.name, component);
  });
};
// 全局注册 use.(dough-ui)
export { Button, Icon };
export default {
  install,
};

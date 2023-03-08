// 每个组件中的入口文件
// 导出button文件，是.vue文件类型 需要通过.d.ts文件进行解析
import { App } from 'vue';
import Button from './src/button.vue';

// install()第一个参数是vue的实例：app
Button.install = (app: App) => {
  // 注册组件
  app.component(Button.name, Button);
};

// 暴露出去
export default Button;

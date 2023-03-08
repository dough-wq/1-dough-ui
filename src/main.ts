import { createApp } from 'vue';
import App from './App.vue';

// 引入组件 全局
import DoughUI from '../packages'
import "theme-chalk/index.scss"
const app = createApp(App);
app.use(DoughUI);
app.mount('#app');
// createApp(App).use(doughUi).mount("#app")

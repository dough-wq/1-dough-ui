import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
// 引入组件 全局
import DoughUI from '../packages'
// import "theme-chalk"
import "../packages/theme-chalk/index.scss"
const app = createApp(App);
app.use(router)
app.use(DoughUI);

app.mount('#app');
// createApp(App).use(doughUi).mount("#app")

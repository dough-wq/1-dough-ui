// // 处理解析 ts 中的声明文件，如vue
// declare module '*.vue' {
//   // 所有的通过ts引入（import *** from ‘***.vue’）的文件都要通过此方法才能被解析
//   import { App, defineComponent } from 'vue';
//   // ReturnType<typeof defineComponent> —— 表示defineComponent组件类型的返回值
//   const component: ReturnType<typeof defineComponent> & {
//     install(app: App): any;
//   };
//   // 导出组件
//   export default component;
// }
declare module '*.vue' {
  import { defineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent>;
  export default component;
}

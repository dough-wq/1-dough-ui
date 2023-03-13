import DoughUI from '../../../packages'
import '../../../packages/theme-chalk/index.scss'
import theme from 'vitepress/dist/client/theme-default/index'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

export default {
  ...theme,
    enhanceApp({ app }) {
        app.use(DoughUI)
    app.component('demo-preview', AntDesignContainer)
  }
}
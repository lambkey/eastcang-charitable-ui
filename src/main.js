import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css'; // 引入Bootstrap的CSS文件
import 'bootstrap/dist/js/bootstrap.js'; // 引入Bootstrap的JavaScript文件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)


app.use(router)
app.mount('#app')
app.use(ElementPlus)


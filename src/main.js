import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 全局指令注册
import { lazyPlugin } from "@/directives";

import App from './App.vue'
import router from './router'
// 引入全局组件插件
import { componentPlugin } from '@/components'

//引入pinia数据持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const app = createApp(App)
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(componentPlugin)
app.use(router)
app.use(lazyPlugin)
app.mount('#app')

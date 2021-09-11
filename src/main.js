import { createApp } from 'vue'
import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { createHead } from '@vueuse/head'
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import './styles/main.css'
import 'virtual:windi-utilities.css'
import 'virtual:windi-devtools'
import App from './App.vue'

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes,
})

const head = createHead()
const app = createApp(App)

app.use(head)
app.use(router)
app.mount('#app')

import {createApp} from "vue";
import App from "@/App.vue";
import router from "@/router/router";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import cmDirectives from 'cm-directives';

const app = createApp(App);
app.use(router)
app.use(ElementPlus)
app.use(cmDirectives)

const whiteList = ['/', '/demo']

router.beforeEach((to, from,next) => {
    if (whiteList.includes(to.path) || localStorage.getItem('token')){
        next()
    }else{
        next('/')
    }
})
app.mount('#app')
import vueRouter from "vue-router";
import vue from 'vue';


import Index from './views/Index';
import About from "./views/About";

vue.use(vueRouter);


const routes = [
    {
        path:"/",
        component:Index
    },
    {
        path:'/about',
        component: About
    },
];



export default new vueRouter({
    mode:'history',
    routes
});


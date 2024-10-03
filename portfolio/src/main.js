import { createApp } from 'vue';
import App from './App.vue';
import MainPage from './pages/MainPage.vue';
import Index from './pages/Index.vue';
import Contacts from './pages/Contacts.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: MainPage },
    { path: '/index', component: Index },
    { path: '/contacts', component: Contacts }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import MainPage from './pages/MainPage.vue';
import Projects from './pages/Projects.vue';
import Contacts from './pages/Contacts.vue';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    { 
        path: '/', 
        name: 'main',
        component: MainPage 
    },
    { 
        path: '/projects', 
        name: 'projects',
        component: Projects 
    },
    { 
        path: '/contacts', 
        name: 'contacts',
        component: Contacts 
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');

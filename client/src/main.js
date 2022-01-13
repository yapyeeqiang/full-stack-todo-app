import { createApp } from 'vue';
import App from './App.vue';
import { generateID } from './utils/id';

const app = createApp(App);

app.provide('id', generateID(1));

app.mount('#app');

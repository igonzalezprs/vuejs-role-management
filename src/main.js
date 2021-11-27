import { createApp } from 'vue';
import store from './store';

import App from './App.vue';
import boot from './db/boot';
import './index.css';

boot();

createApp(App)
  .use(store)
  .mount('#app');

import { createWebHistory, createRouter } from 'vue-router';

import RoleList from '../pages/RoleList.vue';
import RoleCreate from '../pages/RoleCreate.vue';
import RoleEdit from '../pages/RoleEdit.vue';
import NotFound from '../pages/NotFound.vue';

const routes = [
  { path: '/', component: RoleList },
  { path: '/create', component: RoleCreate },
  { path: '/:id/edit', component: RoleEdit },
  { path: '/:catchAll(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

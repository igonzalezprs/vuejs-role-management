import { createWebHistory, createRouter } from 'vue-router';

import RoleList from '../pages/RoleList.vue';
import RoleCreate from '../pages/RoleCreate.vue';
import RoleEdit from '../pages/RoleEdit.vue';
import NotFound from '../pages/NotFound.vue';

const routes = [
  { path: '/', name: 'RoleList', component: RoleList },
  { path: '/create', name: 'RoleCreate', component: RoleCreate },
  { path: '/:roleId/edit', name: 'RoleEdit', component: RoleEdit },
  { path: '/:catchAll(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

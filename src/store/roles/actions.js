import apiInstance from '../../db';

export default {
  async action_fetchRoleList({ commit }) {
    const { data } = await apiInstance.get('/roles');
    commit('SET_ROLES', data);
  },

  async action_createRole(_, roleData) {
    const { data } = await apiInstance.post('/roles', roleData);
    return data;
  },

  async action_getRole(roleId) {
    const { data } = await apiInstance.get(`/roles/${roleId}`);
    return data;
  },

  async action_updateRole(roleId, roleData) {
    const { data } = await apiInstance.put(`/roles/${roleId}`, roleData);
    return data;
  },

  async action_deleteRole(roleId) {
    const { data } = await apiInstance.delete(`/roles/${roleId}`);
    return data;
  },
};

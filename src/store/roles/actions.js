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

  async action_getRole(_, roleId) {
    const { data } = await apiInstance.get(`/roles/${roleId}`);
    return data;
  },

  async action_updateRole(_, { roleId, roleData }) {
    const { data } = await apiInstance.put(`/roles/${roleId}`, roleData);
    return data;
  },

  async action_deleteRole(_, roleId) {
    const { data } = await apiInstance.delete(`/roles/${roleId}`);
    return data;
  },
};

import apiInstance from '../../db';

export default {
  async fetchRoleList({ commit }) {
    const { data } = await apiInstance.get('/roles');
    commit('SET_ROLES', data);
  },

  async createRole(_, roleData) {
    const { data } = await apiInstance.post('/roles', roleData);
    return data;
  },

  async getRole(roleId) {
    const { data } = await apiInstance.get(`/roles/${roleId}`);
    return data;
  },

  async updateRole(roleId, roleData) {
    const { data } = await apiInstance.put(`/roles/${roleId}`, roleData);
    return data;
  },

  async deleteRole(roleId) {
    const { data } = await apiInstance.delete(`/roles/${roleId}`);
    return data;
  },
};

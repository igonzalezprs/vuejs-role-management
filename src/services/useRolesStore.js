import { createNamespacedHelpers } from 'vuex-composition-helpers';

export default () => {
  const { useGetters, useActions } = createNamespacedHelpers('roles');

  const { getRoles } = useGetters(['getRoles']);

  const {
    fetchRoleList,
    createRole,
    getRole,
    updateRole,
    deleteRole,
  } = useActions([
    'fetchRoleList',
    'createRole',
    'getRole',
    'updateRole',
    'deleteRole',
  ]);

  return {
    // getters
    getRoles,

    // actions
    fetchRoleList,
    createRole,
    getRole,
    updateRole,
    deleteRole,
  };
};

import { createNamespacedHelpers } from 'vuex-composition-helpers';

export default () => {
  const { useGetters, useActions } = createNamespacedHelpers('roles');

  const { getRoles } = useGetters(['getRoles']);

  const {
    action_fetchRoleList,
    action_createRole,
    action_getRole,
    action_updateRole,
    action_deleteRole,
  } = useActions([
    'action_fetchRoleList',
    'action_createRole',
    'action_getRole',
    'action_updateRole',
    'action_deleteRole',
  ]);

  return {
    // getters
    getRoles,

    // actions
    action_fetchRoleList,
    action_createRole,
    action_getRole,
    action_updateRole,
    action_deleteRole,
  };
};

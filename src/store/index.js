import { createStore } from 'vuex';
import roles from './roles';

const store = createStore({
  modules: {
    roles,
  },
});

export default store;

/* eslint-disable eqeqeq */
/* eslint-disable prefer-promise-reject-errors */
import moment from 'moment';
import initialRoles from './user_roles';

let roles = localStorage.mockData
  ? JSON.parse(localStorage.mockData)
  : initialRoles;

const updateStorage = () => {
  localStorage.mockData = JSON.stringify(roles);
};

const TIMEOUT = 500;

const mockSuccess = (data) => new Promise((resolve) => {
  setTimeout(() => resolve({
    status: 200,
    data,
  }), TIMEOUT);
});

const mockError = (status, data) => new Promise((resolve, reject) => {
  setTimeout(() => reject({
    status,
    data,
  }), TIMEOUT);
});

const getAll = () => mockSuccess(roles);

const getOne = (id) => {
  const role = roles.find((_role) => _role.id == id);
  return role ? mockSuccess(role) : mockError(404, 'Role not found');
};

const createOne = (data) => {
  const { id } = roles[roles.length - 1];
  const role = { id: id + 1, ...data };
  roles.push({
    ...role,
    created_on: moment().format('YYYY-MM-DD'),
  });
  updateStorage();
  return mockSuccess(role);
};

const updateOne = (id, data) => {
  if (roles.find((role) => role.id == id)) {
    roles = roles.map((role) => (role.id == id ? { ...data, modified_on: moment().format('YYYY-MM-DD') } : role));
    updateStorage();
    return mockSuccess({ id, ...data });
  }
  return mockError(404, 'Role not found');
};

const deleteOne = (id) => {
  if (roles.find((role) => role.id == id)) {
    roles = roles.filter((role) => role.id != id);
    updateStorage();
    return mockSuccess({ message: 'SUCCESS' });
  }
  return mockError(404, 'Role not found');
};

// Mock api instance
const routeRegex = /\/roles\/(.+)$/;

export default {
  get: (route) => {
    if (route === '/roles') return getAll();
    if (routeRegex.test(route)) return getOne(route.match(routeRegex)[1]);
    return mockError(404, 'Operation not found');
  },
  post: (route, data) => {
    if (route === '/roles') return createOne(data);
    return mockError(404, 'Operation not found');
  },
  put: (route, data) => {
    if (routeRegex.test(route)) return updateOne(route.match(routeRegex)[1], data);
    return mockError(404, 'Operation not found');
  },
  delete: (route) => {
    if (routeRegex.test(route)) return deleteOne(route.match(routeRegex)[1]);
    return mockError(404, 'Operation not found');
  },
};

import initialRoles from './user_roles';

// Set persistent mock data storage

export default () => {
  if (!localStorage.mockData) {
    localStorage.mockData = JSON.stringify(initialRoles);
  }
};

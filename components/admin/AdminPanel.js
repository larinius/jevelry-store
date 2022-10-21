import { Admin, Resource, ListGuesser } from "react-admin";
import Dashboard from "/components/admin/Dashboard";
import authProvider from "/components/admin/authProvider";
import simpleRestProvider from 'ra-data-simple-rest';

const AdminPanel = () => {
  return (
    <>
      <Admin
        dashboard={Dashboard}
        authProvider={authProvider}
        dataProvider={simpleRestProvider('/api/a/')}
        requireAuth
      >
        <Resource name="product" list={ListGuesser} />
      </Admin>
    </>
  );
};

export default AdminPanel;

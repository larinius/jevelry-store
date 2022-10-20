import { Admin, Resource, ListGuesser } from "react-admin";
import Dashboard from "/components/admin/Dashboard";
import authProvider from "/components/admin/authProvider"
import jsonServerProvider from "ra-data-json-server";
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");


const AdminPanel = () => {
  return (
    <>
      <Admin
        dashboard={Dashboard}
        authProvider={authProvider}
        dataProvider={dataProvider}
      >
        <Resource name="users" list={ListGuesser} />
      </Admin>
    </>
  );
};

export default AdminPanel;

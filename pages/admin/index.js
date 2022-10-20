import Layout from "/components/layout/Layout";
import LayoutAdmin from "/components/layout/LayoutAdmin";

import dynamic from "next/dynamic";
const AdminNoSSR = dynamic(() => import("/components/admin/AdminPanel"), {
  ssr: false,
});

const adminpanel = () => {
  return (
    <>
      <AdminNoSSR />
    </>
  );
};

export default adminpanel;

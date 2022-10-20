import SidebarAdmin from "./SidebarAdmin";

const LayoutAdmin = ({ children }) => {
  return (
    <>
      <>
        <SidebarAdmin />
        <main>{children}</main>
      </>
    </>
  );
};

export default LayoutAdmin;

import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";
import BreadcrumbArea from "../ui/BreadcrumbArea";
import styles from "../../styles/Layout.module.css";

import dynamic from "next/dynamic";
const OffcanvasCartNoSSR = dynamic(() => import("../ui/OffcanvasCart"), {
  ssr: false,
});

const Layout = ({ children }) => {



  return (
    <>
      <Meta />
      <>
        <Header />
        <main>
          <BreadcrumbArea />
          {children}

        </main>
        <Footer />
        <OffcanvasCartNoSSR/>
      </>
    </>
  );
};

export default Layout;

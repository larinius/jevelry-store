import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import styles from '../../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </>
    </>
  )
}

export default Layout



// import Meta from 'components/Meta'
// import Footer from 'components/Footer'

// const DefaultLayout = ({ children }) => (
//   <div>
//     <Meta />
//     <main>{children}</main>
//     <Footer />
//   </div>
// );

// export default DefaultLayout;
import Header from '../components/Header';
import Footer from '../components/Footer'; // Create a similar Footer component

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

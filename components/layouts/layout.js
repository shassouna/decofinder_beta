import Menu from "./Menu";
import Footer from "./Footer";
import BannerPub from "../elements/BannerPub";
import styles from "./Layout.module.css";
const Layout = ({ children }) => {
  return (
    <div className={styles.index1}>
      <BannerPub />
      <Menu />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

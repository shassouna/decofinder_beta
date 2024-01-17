import styles from "./index.module.css";
import SuperUniversList from "../components/elements/SuperUniversList";
import FourLinksHomePage from "../components/elements/FourLinksHomePage";
import ProductsList from "../components/elements/ProductsList";
import Pub from "../components/elements/Pub";
import InspirationsList from "../components/elements/InspirationsList";
import CommuniquesDePresseList from "../components/elements/CommuniquesDePresseList";
import DescriptionHomePage from "../components/elements/DescriptionHomePage";
import BigPicture from "../components/elements/BigPicture";
import FreeSection from "../components/elements/FreeSection";

const Index = () => {
  return (
    <>
      <section className={styles.bigpicture}>
        <BigPicture />
      </section>
      <section className={styles.fourlinks}>
        <FourLinksHomePage />
      </section>
      <section className={styles.megaunivers}>
        <SuperUniversList />
      </section>
      <section className={styles.pub}>
        <Pub />
      </section>
      <section className={styles.products}>
        <ProductsList title2={"Les Nouveautés"} />
      </section>
      <section className={styles.inspirations}>
        <InspirationsList />
      </section>
      <section>
        <DescriptionHomePage />
      </section>
      <section className={styles.pressreleases}>
        <CommuniquesDePresseList />
      </section>
      <section className={styles.div49}>
        <FreeSection></FreeSection>
      </section>
    </>
  );
};

export default Index;

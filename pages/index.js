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
import axios from "axios";

const Index = ({ Superuniverss, Nouveautes }) => {
  return (
    <>
      <section className={styles.bigpicture}>
        <BigPicture />
      </section>
      <section className={styles.fourlinks}>
        <FourLinksHomePage />
      </section>
      <section className={styles.megaunivers}>
        <SuperUniversList Superuniverss={Superuniverss} />
      </section>
      <section className={styles.pub}>
        <Pub />
      </section>
      <section className={styles.products}>
        <ProductsList title2={"Les Nouveautés"} Products={Nouveautes} />
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

export async function getStaticProps() {
  // Import qs
  const qs = require("qs");

  try {
    // QUERIES
    const querySuperunivers = qs.stringify({
      populate: ["image"],
      locale: "fr",
    });
    const queryNouveautes = qs.stringify({
      populate: [
        "images",
        "exposant.logo",
        "typeprod",
        "lienrevendeurproduits.exposant.logo",
      ],
      filters: {
        NOUVEAUTE: { $eq: 1 },
      },
      locale: "fr",
    });
    // URLS
    const apiSuperuniversUrl = `${process.env.BASE_URL_SERVER}/api/superuniverss?${querySuperunivers}`;
    const apiNouveautesUrl = `${process.env.BASE_URL_SERVER}/api/produits?${queryNouveautes}`;
    // CALLS
    const apiSuperuniversUrlRes = await axios.get(apiSuperuniversUrl);
    const apiNouveautesUrlRes = await axios.get(apiNouveautesUrl);

    return {
      props: {
        Superuniverss: apiSuperuniversUrlRes["data"]["data"],
        Nouveautes: apiNouveautesUrlRes["data"]["data"],
      },
    };
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);

    // Vous pouvez également renvoyer un objet props avec une propriété vide
    return {
      props: {
        Superuniverss: [],
        Nouveautes: [],
      },
    };
  }
}

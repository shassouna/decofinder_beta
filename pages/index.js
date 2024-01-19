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

const Index = ({
  FourLinks,
  Superuniverss,
  Nouveautes,
  Communiques,
  Selection,
  Rendezvous,
  Agendadecodesigns,
  Designers,
}) => {
  return (
    <>
      <section className={styles.bigpicture}>
        <BigPicture />
      </section>
      <section className={styles.fourlinks}>
        <FourLinksHomePage Products={FourLinks} />
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
        <CommuniquesDePresseList Communiques={Communiques} />
      </section>
      <section className={styles.div49}>
        <FreeSection
          Selection={Selection}
          Rendezvous={Rendezvous}
          Designers={Designers}
          Agendadecodesigns={Agendadecodesigns}
        ></FreeSection>
      </section>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  // Import qs
  const qs = require("qs");

  // Declaration
  const timeNowMs = Date.now();

  try {
    // QUERIES
    const queryFourProducts = qs.stringify({
      populate: ["images", "exposant.logo", "typeprod"],
      filters: {
        Afficher_dans_homepage: { $eq: true },
      },
      locale: "fr",
    });
    const querySuperunivers = qs.stringify({
      populate: ["image"],
      locale: "fr",
    });
    const queryNouveautes = qs.stringify({
      populate: ["images", "exposant.logo", "typeprod"],
      filters: {
        NOUVEAUTE: { $eq: 1 },
      },
      locale: "fr",
    });
    const queryCommuniques = qs.stringify({
      populate: ["images"],
      sort: ["createdAt:desc"],
      pagination: {
        limit: 8,
      },
      locale: "fr",
    });
    const queryRendezVous = qs.stringify({
      populate: ["image"],
      filters: {
        type: { $contains: ["r"], $contains: ["d"], $contains: ["v"] },
      },
      locale: "fr",
    });
    const queryDesigners = qs.stringify({
      populate: ["image"],
      locale: "fr",
    });
    const queryAgendadecodesign = qs.stringify({
      populate: ["image"],
      filters: {
        type: { $contains: ["a"], $contains: ["g"], $contains: ["d"] },
      },
      locale: "fr",
    });
    const querySelections = qs.stringify({
      populate: ["images"],
      filters: {
        date_debut: { $lt: timeNowMs },
        date_fin: { $gt: timeNowMs },
      },
      locale: "fr",
    });
    // URLS
    const apiFourProductsUrl = `${process.env.BASE_URL_SERVER}/api/produits?${queryFourProducts}`;
    const apiSuperuniversUrl = `${process.env.BASE_URL_SERVER}/api/superuniverss?${querySuperunivers}`;
    const apiNouveautesUrl = `${process.env.BASE_URL_SERVER}/api/produits?${queryNouveautes}`;
    const apiCommuniquesUrl = `${process.env.BASE_URL_SERVER}/api/communiques?${queryCommuniques}`;
    const apiSelectionsUrl = `${process.env.BASE_URL_SERVER}/api/selection-dfs?${querySelections}`;
    const apiRendezvousUrl = `${process.env.BASE_URL_SERVER}/api/section-libres?${queryRendezVous}`;
    const apiAgendadecodesignUrl = `${process.env.BASE_URL_SERVER}/api/section-libres?${queryAgendadecodesign}`;
    const apiDesignersUrl = `${process.env.BASE_URL_SERVER}/api/designer-mags?${queryDesigners}`;
    // CALLS
    const apiFourProductsUrlRes = await axios.get(apiFourProductsUrl);
    const apiSuperuniversUrlRes = await axios.get(apiSuperuniversUrl);
    const apiNouveautesUrlRes = await axios.get(apiNouveautesUrl);
    const apiCommuniquesUrlRes = await axios.get(apiCommuniquesUrl);
    const apiSelectionsUrlRes = await axios.get(apiSelectionsUrl);
    const apiRendezvousUrlRes = await axios.get(apiRendezvousUrl);
    const apiAgendadecodesignUrlRes = await axios.get(apiAgendadecodesignUrl);
    const apiDesignersUrlRes = await axios.get(apiDesignersUrl);

    return {
      props: {
        FourLinks: apiFourProductsUrlRes["data"]["data"],
        Superuniverss: apiSuperuniversUrlRes["data"]["data"],
        Nouveautes: apiNouveautesUrlRes["data"]["data"],
        Communiques: apiCommuniquesUrlRes["data"]["data"],
        Selection: apiSelectionsUrlRes["data"]["data"][0],
        Rendezvous: apiRendezvousUrlRes["data"]["data"][0],
        Agendadecodesigns: apiAgendadecodesignUrlRes["data"]["data"],
        Designers: apiDesignersUrlRes["data"]["data"],
      },
    };
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);

    // Vous pouvez également renvoyer un objet props avec une propriété vide
    return {
      props: {
        Superuniverss: [],
        Nouveautes: [],
        FourLinks: [],
        Communiques: [],
        Selection: [],
        Rendezvous: [],
        Agendadecodesigns: [],
        Designers: [],
      },
    };
  }
}

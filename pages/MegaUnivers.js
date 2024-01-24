import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./MegaUnivers.module.css";
import Nav from "../components/layouts/Nav";
import CategoriesList from "../components/elements/CategoriesList";
import axios from "axios";
let Items = ["Su"];

const MegaUnivers = ({ Superunivers, Univers }) => {
  const router = useRouter();

  const onCardClick = useCallback(() => {
    router.push("/Univers");
  }, [router]);

  const onCard1Click = useCallback(() => {
    router.push("/Univers");
  }, [router]);

  const onCard2Click = useCallback(() => {
    router.push("/Univers");
  }, [router]);

  const onCard3Click = useCallback(() => {
    router.push("/Univers");
  }, [router]);

  const onCard4Click = useCallback(() => {
    router.push("/Univers");
  }, [router]);

  const onCard5Click = useCallback(() => {
    router.push("/Univers");
  }, [router]);

  const onCard6Click = useCallback(() => {
    router.push("/Univers");
  }, [router]);

  const onCard7Click = useCallback(() => {
    router.push("/Univers");
  }, [router]);

  const onCard8Click = useCallback(() => {
    router.push("/Univers");
  }, [router]);

  return (
    <div className={styles.su}>
      <section className={styles.navpath}>
        <Nav Items={Items} />
      </section>
      <section className={styles.description}>
        <div className={styles.badge}>
          <div className={styles.text}>MegaUnivers</div>
        </div>
        <div className={styles.div1}>
          <div className={styles.div2}>
            <div className={styles.title}>
              <h1 className={styles.text1}>
                {Superunivers["attributes"]["LIB"]}
              </h1>
            </div>
          </div>
          <img className={styles.divChild} alt="" src="/vector-5.svg" />
          <div
            className={styles.paragraph}
            dangerouslySetInnerHTML={{
              __html: Superunivers["attributes"]["DESCR"],
            }}
          ></div>
        </div>
      </section>
      <section className={styles.universsuperunivers}>
        <div className={styles.div3}>
          <h2 className={styles.title1}>
            Les univers {Superunivers["attributes"]["LIB"]}
          </h2>
        </div>
        <div className={styles.univers}>
          {Univers.map((univer, index) => (
            <article
              key={univer["id"]}
              className={styles.card}
              onClick={onCardClick}
            >
              <div className={styles.img}>
                <img
                  className={styles.imgIcon16}
                  alt=""
                  src={
                    univer["attributes"]["image"]["data"]["attributes"]["url"]
                  }
                />
              </div>
              <div className={styles.div4}>
                <div className={styles.name}>{univer["attributes"]["LIB"]}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
      {Univers.map((univer, index) => (
        <section className={styles.universsuperunivers}>
          <CategoriesList
            title2={`Les catégories ${univer["attributes"]["LIB"]}`}
            Categories={univer["attributes"]["categories"]["data"]}
          />
        </section>
      ))}
    </div>
  );
};

export default MegaUnivers;

export async function getStaticProps() {
  // Import qs
  const qs = require("qs");

  try {
    // QUERIES
    const querySuperunivers = qs.stringify({
      populate: [
        "univers.image",
        "univers.categories.image",
        "univers.categories.typeprods",
      ],
      locale: "fr",
    });
    // URLS
    const apiSuperuniversUrl = `${process.env.BASE_URL_SERVER}/api/superuniverss/1?${querySuperunivers}`;
    // CALLS
    const apiSuperuniversUrlRes = await axios.get(apiSuperuniversUrl);

    // Logique
    const Univers =
      apiSuperuniversUrlRes["data"]["data"]["attributes"]["univers"]["data"];

    return {
      props: {
        Superunivers: apiSuperuniversUrlRes["data"]["data"],
        Univers: Univers,
      },
    };
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);

    // Vous pouvez également renvoyer un objet props avec une propriété vide
    return {
      props: {
        Superunivers: [],
        Univers: [],
      },
    };
  }
}

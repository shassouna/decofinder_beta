import { useState, useCallback } from "react";
import AlertesNouveautes from "../components/AlertesNouveautes";
import PortalPopup from "../components/PortalPopup";
import styles from "./Univers.module.css";
import Nav from "../components/layouts/Nav";
import CategoriesList from "../components/elements/CategoriesList";
import LogosExhibitors from "../components/elements/LogosExhibitors";
import Premiums from "../components/elements/Premiums";
import LeftFilters from "../components/elements/LeftFilters";
import axios from "axios";
import { extraire500MotsAvecPhrases } from "../components/Utils";

let Items = ["Su", "U"];

const Univers = ({ Univers, Categories }) => {
  const [isNewsAlertsPopupOpen, setNewsAlertsPopupOpen] = useState(false);

  const openNewsAlertsPopup = useCallback(() => {
    setNewsAlertsPopupOpen(true);
  }, []);

  const closeNewsAlertsPopup = useCallback(() => {
    setNewsAlertsPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.u}>
        <section className={styles.navpath}>
          <Nav Items={Items} />
        </section>
        <section className={styles.description}>
          <div className={styles.div1}>
            <h1 className={styles.title}>{Univers["attributes"]["LIB"]}</h1>
            <img className={styles.divChild} alt="" src="/vector-541.svg" />
            <div
              className={styles.paragraph}
              dangerouslySetInnerHTML={{
                __html: extraire500MotsAvecPhrases(
                  Univers["attributes"]["DOSSIER_TEXTE"],
                  297
                ),
              }}
            ></div>
            <div>
              <a href="#univers-description-detail" className={styles.button1}>
                <div className={styles.text32}>Lire la suite</div>
              </a>
            </div>
          </div>
          <button className={styles.button} onClick={openNewsAlertsPopup}>
            <div className={styles.div2}>
              <div className={styles.text}>Être informé des nouveautés</div>
            </div>
          </button>
        </section>
        <section className={styles.div3}>
          <div className={styles.leftfilters}>
            <LeftFilters
              Page="Univers"
              UniversName="Bricolage"
              SuperuniversName="Bricolage"
            />
          </div>
          <div className={styles.div17}>
            {
              <div className={styles.categories}>
                <CategoriesList
                  title="Dans cet univers"
                  Categories={Categories}
                />
              </div>
            }
            <div className={styles.logos}>
              <LogosExhibitors title="Les Specialistes" />
            </div>
            <div className={styles.premuims}>
              <Premiums />
            </div>
          </div>
        </section>
        <section
          className={styles.suitedesriptif}
          id="univers-description-detail"
        >
          <br />
          <div
            dangerouslySetInnerHTML={{
              __html: Univers["attributes"]["DOSSIER_TEXTE"],
            }}
          ></div>
        </section>
      </div>
      {isNewsAlertsPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNewsAlertsPopup}
        >
          <AlertesNouveautes onClose={closeNewsAlertsPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Univers;

export async function getStaticProps() {
  // Import qs
  const qs = require("qs");

  try {
    // QUERIES
    const queryUnivers = qs.stringify({
      populate: [
        "categories.image",
        "categories.typeprods.image",
        "categories.typeprods.produits",
      ],
      locale: "fr",
    });
    // URLS
    const apiUniversUrl = `${process.env.BASE_URL_SERVER}/api/universs/2?${queryUnivers}`;
    // CALLS
    const apiUniversUrlRes = await axios.get(apiUniversUrl);

    // Logique
    const Categories =
      apiUniversUrlRes["data"]["data"]["attributes"]["categories"]["data"];

    return {
      props: {
        Univers: apiUniversUrlRes["data"]["data"],
        Categories: Categories,
      },
    };
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);

    // Vous pouvez également renvoyer un objet props avec une propriété vide
    return {
      props: {
        Univers: null,
        Categories: null,
      },
    };
  }
}

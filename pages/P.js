import { useState, useCallback } from "react";
import RequestCompanyInformation from "../components/RequestCompanyInformation";
import PortalPopup from "../components/PortalPopup";
import styles from "./P.module.css";
import Nav from "../components/layouts/Nav";
import LeftFilters from "../components/elements/LeftFilters";
import ProductsList from "../components/elements/ProductsList";
import LogosExhibitors from "../components/elements/LogosExhibitors";
import Premiums from "../components/elements/Premiums";

let Items = ["Su", "U", "C", "P"];

const P = () => {
  const [
    isRequestCompanyInformationPopupOpen,
    setRequestCompanyInformationPopupOpen,
  ] = useState(false);

  const closeRequestCompanyInformationPopup = useCallback(() => {
    setRequestCompanyInformationPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.p}>
        <section className={styles.navpath}>
          <Nav Items={Items} />
        </section>
        <div className={styles.description}>
          <div className={styles.badge}>
            <div className={styles.text}>Type produit</div>
          </div>
          <div className={styles.div1}>
            <div className={styles.div2}>
              <div className={styles.title}>
                <h1 className={styles.text1}>Déboucheur - Divers Entretien</h1>
              </div>
              <div className={styles.productsnumber}>(9 produits)</div>
            </div>
            <img className={styles.divChild} alt="" src="/vector-5.svg" />
            <p className={styles.paragraph}>
              <span className={styles.decofinderVousPropose}>
                Decofinder vous propose un univers de bricolage sous l'angle du
                nettoyage, de l'entretien et des décapants. Par exemple rénover,
                retravailler ou embellir le cuir. Nous vous faisons découvrir
                des marques et des articles spécifiques pour décaper et embellir
                toutes surfaces de cuir. Assouplisseur de cuir, des cirages avec
                des fonctions différentes.
              </span>
              <span className={styles.decofinderVousPropose}>
                Dans notre rubrique bricolage / entretien, nous mettons en avant
                tous les produits qui tournent autour du bois : des produits
                hydofuges qui imperméabilisent, protègent de l'humidité;
                d'autres comme les imprégnateurs qui protègent, masquent et
                décorent en une seule couche.
              </span>
              <span className={styles.decofinderVousPropose}>
                La catégorie des saturateurs de bois protègent par exemple votre
                terrasse contre les agressions climatiques ( intempéries, UV )
                et imprègnent le bois par saturation de fibres. Choix idéal pour
                les caillebotis et terrasses, car ces saturateurs apportent une
                protection nourrissante et accompagnent le bois dans son
                évolution.
              </span>
            </p>
          </div>
        </div>
        <div className={styles.div3}>
          <div className={styles.leftfilters}>
            <LeftFilters
              Page="Typeprod"
              TypeprodName="DÉBOUCHEUR"
              CategoryName="Divers Entretien"
            />
          </div>
          <div className={styles.div17}>
            <div className={styles.products}>
              <ProductsList
                title2={`Découvrez tous les produits de la catégorie "Divers fleurs et senteurs"`}
              />
            </div>
            <div className={styles.logos}>
              <LogosExhibitors title="Les Specialistes" />
            </div>
            <div className={styles.premuims}>
              <Premiums />
            </div>
            <div className={styles.products}>
              <ProductsList
                title2={`Découvrez tous les produits de la catégorie "Divers fleurs et senteurs"`}
              />
            </div>
          </div>
        </div>
      </div>
      {isRequestCompanyInformationPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRequestCompanyInformationPopup}
        >
          <RequestCompanyInformation
            onClose={closeRequestCompanyInformationPopup}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default P;

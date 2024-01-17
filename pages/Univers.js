import { useState, useCallback } from "react";
import AlertesNouveautes from "../components/AlertesNouveautes";
import PortalPopup from "../components/PortalPopup";
import styles from "./Univers.module.css";
import Nav from "../components/layouts/Nav";
import CategoriesList from "../components/elements/CategoriesList";
import LogosExhibitors from "../components/elements/LogosExhibitors";
import Premiums from "../components/elements/Premiums";
import LeftFilters from "../components/elements/LeftFilters";

let Items = ["Su", "U"];

const Univers = () => {
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
            <h1 className={styles.title}>Univers Bricolage</h1>
            <img className={styles.divChild} alt="" src="/vector-541.svg" />
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
                décorent en une seule couche. La catégorie des saturateurs de
                bois protègent par exemple votre terrasse contre les agressions
                climatiques ( intempéries, UV ) et imprègnent le bois par
                saturation de fibres.
              </span>
              <span className={styles.decofinderVousPropose}>
                Choix idéal pour les caillebotis et terrasses, car ces
                saturateurs apportent une protection nourrissante et
                accompagnent le bois dans son évolution.
              </span>
            </p>
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
            <div className={styles.categories}>
              <CategoriesList title="Dans cet univers" nbProducts={857} />
            </div>
            <div className={styles.logos}>
              <LogosExhibitors title="Les Specialistes" />
            </div>
            <div className={styles.premuims}>
              <Premiums />
            </div>
          </div>
        </section>
        <section className={styles.suitedesriptif}>
          <div className={styles.div92}>
            <div className={styles.div93}>
              <div className={styles.textWrapper}>
                <p className={styles.text35}>
                  <span>
                    <a
                      className={styles.cielDeLit}
                      href="https://www.decofinder.com/p1920/Ciel-De-Lit.html"
                      target="_blank"
                    >
                      ciel-de-lit
                    </a>
                    <a
                      className={styles.cielDeLit}
                      href="https://www.decofinder.com/p180/Table-De-Chevet.html"
                      target="_blank"
                    >{`le chevet `}</a>
                    <a
                      className={styles.cielDeLit}
                      href="https://www.decofinder.com/p3718/Lit-De-Repos.html"
                      target="_blank"
                    >
                      le lit de repos
                    </a>
                  </span>
                </p>
              </div>
              <div className={styles.marques}>
                <div className={styles.text36}>
                  Nouvelles formes : du lit placé perpendiculairement au mur aux
                  lits de travers
                </div>
                <div className={styles.textWrapper}>
                  <p className={styles.text26}>
                    <a
                      className={styles.cielDeLit}
                      href="https://www.decofinder.com/p2079/Lit-Clos.html"
                      target="_blank"
                    >
                      le lit clos
                    </a>
                  </p>
                </div>
              </div>
              <div className={styles.marques}>
                <div className={styles.text36}>L'art tapissier</div>
                <div className={styles.textWrapper}>
                  <p className={styles.text39}>
                    <a
                      className={styles.cielDeLit}
                      href="https://www.decofinder.com/p180/Table-De-Chevet.html"
                      target="_blank"
                    >
                      table de chevet
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.div93}>
              <div className={styles.textWrapper}>
                <div className={styles.description1}>
                  <p className={styles.text26}>
                    <a
                      className={styles.cielDeLit}
                      href="https://www.decofinder.com/p1347/Lit-Double.html"
                      target="_blank"
                    >
                      le lit double
                    </a>
                    <a
                      className={styles.cielDeLit}
                      href="https://www.decofinder.com/p1347/Lit-Double.html"
                      target="_blank"
                    >
                      lit double
                    </a>
                    <a
                      className={styles.cielDeLit}
                      href="https://www.decofinder.com/p1207/Lit-Simple.html"
                      target="_blank"
                    >
                      lit simple
                    </a>
                    <a
                      className={styles.cielDeLit}
                      href="https://www.decofinder.com/p180/Table-De-Chevet.html"
                      target="_blank"
                    >
                      chevets
                    </a>
                  </p>
                </div>
              </div>
              <div className={styles.marques}>
                <div className={styles.text36}>
                  Pour en finir avec l'ornement
                </div>
                <div className={styles.textWrapper}>
                  <p className={styles.text42}>
                    <a
                      className={styles.cielDeLit}
                      href="https://www.decofinder.com/p1156/Chambre.html"
                      target="_blank"
                    >
                      la chambre à coucher
                    </a>
                  </p>
                </div>
              </div>
              <div className={styles.marques}>
                <div className={styles.text36}>
                  Ergonomie et encombrement minimum
                </div>
                <div className={styles.textWrapper}>
                  <p className={styles.text26}>
                    <a
                      className={styles.cielDeLit}
                      href="https://www.decofinder.com/p1846/Lits-Superposes.html"
                      target="_blank"
                    >
                      lits superposés
                    </a>
                    <a
                      className={styles.cielDeLit}
                      href="https://www.decofinder.com/p1178/Lit-Mezzanine.html"
                      target="_blank"
                    >
                      mezzanines
                    </a>
                    <a
                      className={styles.cielDeLit}
                      href="https://www.decofinder.com/p1289/Lits-Gigognes.html"
                      target="_blank"
                    >
                      lits-gigognes
                    </a>
                    <a
                      className={styles.cielDeLit}
                      href="https://www.decofinder.com/p304/Lit-D-Appoint-Gonflable.html"
                      target="_blank"
                    >
                      lits gonflables
                    </a>
                    <a
                      className={styles.cielDeLit}
                      href="https://www.decofinder.com/p4624/Banquette-Clic-Clac.html"
                      target="_blank"
                    >
                      la banquette clic-clac
                    </a>
                    <a
                      className={styles.cielDeLit}
                      href="https://www.decofinder.com/p1151/Banquette-Lit.html"
                      target="_blank"
                    >
                      banquette-lit
                    </a>
                    <a
                      className={styles.cielDeLit}
                      href="https://www.decofinder.com/p1317/Lit-Escamotable.html"
                      target="_blank"
                    >
                      lit escamotable
                    </a>
                    <a
                      className={styles.cielDeLit}
                      href="https://www.decofinder.com/p4028/Lit-A-Tiroirs.html"
                      target="_blank"
                    >
                      lits à tiroirs
                    </a>
                    <a
                      className={styles.cielDeLit}
                      href="https://www.decofinder.com/p3725/Lit-Coffre.html"
                      target="_blank"
                    >{`lits-coffres `}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
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

import { useState, useCallback } from "react";
import ProductBuy from "../components/ProductBuy";
import PortalPopup from "../components/PortalPopup";
import DemandeInformationProduct from "../components/DemandeInformationProduct";
import styles from "./Entreprise.module.css";
import LogosExhibitors from "../components/elements/LogosExhibitors";
import ProductsList from "../components/elements/ProductsList";
import LeftFilters from "../components/elements/LeftFilters";
import Premiums from "../components/elements/Premiums";
import NewsLetters from "../components/elements/NewsLetters";

const Entreprise = () => {
  const [isProductBuyPopupOpen, setProductBuyPopupOpen] = useState(false);
  const [isProductBuyPopup1Open, setProductBuyPopup1Open] = useState(false);
  const [
    isRequestInformationProductPopupOpen,
    setRequestInformationProductPopupOpen,
  ] = useState(false);

  const onFacebookIconClick = useCallback(() => {
    window.open("https://www.facebook.com/");
  }, []);

  const onPinterestIconClick = useCallback(() => {
    window.open("https://www.instagram.com/");
  }, []);

  const openProductBuyPopup = useCallback(() => {
    setProductBuyPopupOpen(true);
  }, []);

  const closeProductBuyPopup = useCallback(() => {
    setProductBuyPopupOpen(false);
  }, []);

  const openProductBuyPopup1 = useCallback(() => {
    setProductBuyPopup1Open(true);
  }, []);

  const closeProductBuyPopup1 = useCallback(() => {
    setProductBuyPopup1Open(false);
  }, []);

  const onLinkWebsiteContainerClick = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  const closeRequestInformationProductPopup = useCallback(() => {
    setRequestInformationProductPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.pp}>
        <section className={styles.div}>
          <div className={styles.informations}>
            <div className={styles.div1}>
              <div className={styles.div2}>
                <img
                  className={styles.logoIcon}
                  alt=""
                  src="/frame-754421@2x.jpg"
                />
                <div className={styles.socialnetworks}>
                  <img
                    className={styles.facebookIcon}
                    alt=""
                    src="/socials31@2x.png"
                    onClick={onFacebookIconClick}
                  />
                  <img
                    className={styles.pinterestIcon}
                    alt=""
                    src="/socials21.svg"
                    onClick={onPinterestIconClick}
                  />
                </div>
              </div>
              <div className={styles.contactdetails}>
                <div className={styles.title}>Coordonnées</div>
                <div className={styles.adress}>
                  <img className={styles.icon} alt="" src="/frame241.svg" />
                  <span className={styles.text}>Le Bourg</span>
                </div>
                <div className={styles.adress}>
                  <img className={styles.divIcon} alt="" />
                  <span className={styles.text}>71120</span>
                </div>
                <div className={styles.adress}>
                  <img className={styles.divIcon} alt="" />
                  <span className={styles.text}>Vendenesse-lès-Charolles</span>
                </div>
                <div className={styles.adress}>
                  <img className={styles.icon} alt="" src="/frame261.svg" />
                  <span className={styles.text}>France</span>
                </div>
                <div className={styles.adress}>
                  <img className={styles.icon} alt="" src="/frame271.svg" />
                  <span className={styles.text}>+33 (0)3 85 88 28 28</span>
                </div>
                <div className={styles.seethemap}>
                  <a className={styles.text5}>Voir le plan</a>
                  <img className={styles.icon} alt="" src="/frame141.svg" />
                </div>
              </div>
            </div>
            <div className={styles.buttons}>
              <div
                className={styles.documentation}
                onClick={openProductBuyPopup}
              >
                <img className={styles.icon} alt="" src="/frame13.svg" />
                <div className={styles.text6}>Documentation</div>
              </div>
              <div className={styles.contact} onClick={openProductBuyPopup1}>
                <img className={styles.icon} alt="" src="/frame12.svg" />
                <div className={styles.text6}>Contacter l’entreprise</div>
              </div>
              <div
                className={styles.linkwebsite}
                onClick={onLinkWebsiteContainerClick}
              >
                <div className={styles.nextpreview}>
                  <img className={styles.icon} alt="" src="/frame11.svg" />
                  <div className={styles.text6}>Visiter le site</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.exploration}>
            <div className={styles.contactdetails}>
              <div className={styles.div5}>
                <div className={styles.div6}>
                  <div className={styles.name}>
                    <h1 className={styles.text9}>Beltima</h1>
                  </div>
                  <div className={styles.activity}>Fabricant</div>
                </div>
                <button className={styles.followproduct}>
                  <div className={styles.button}>
                    <div className={styles.div7}>
                      <img className={styles.icon} alt="" src="/frame201.svg" />
                      <div className={styles.text10}>Suivre le produit</div>
                    </div>
                  </div>
                </button>
              </div>
              <p className={styles.description}>
                Beltima a été créée en 1978: au fil du temps, ce fabricant
                d’étains est devenu un fabricant et distributeur en gros de
                cadres et de luminaires, et plus tard également de meubles, de
                serres et d’autres articles de décoration.
              </p>
            </div>
            <div className={styles.premuims}>
              <Premiums />
            </div>
          </div>
        </section>
        <section className={styles.div14}>
          <div className={styles.nav}>
            <button className={styles.products}>
              <img className={styles.icon} alt="" src="/frame281.svg" />
              <div className={styles.text22}>Produits</div>
            </button>
            <button className={styles.brands}>
              <img className={styles.icon} alt="" src="/frame291.svg" />
              <div className={styles.text23}>Marques</div>
            </button>
            <button className={styles.brands}>
              <img className={styles.icon} alt="" src="/frame301.svg" />
              <div className={styles.text23}>Newsletter</div>
            </button>
            <button className={styles.brands}>
              <img className={styles.icon} alt="" src="/frame311.svg" />
              <div className={styles.text23}>Vidéos</div>
            </button>
          </div>
          <div className={styles.description1}>
            <div className={styles.newsletters1}>
              <NewsLetters />
            </div>
            <div className={styles.logos}>
              <LogosExhibitors />
            </div>
            <div className={styles.section}>
              <div className={styles.leftfilters}>
                <LeftFilters />
              </div>
              <div className={styles.products1}>
                <ProductsList />
              </div>
            </div>
          </div>
        </section>
      </div>
      {isProductBuyPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeProductBuyPopup}
        >
          <ProductBuy onClose={closeProductBuyPopup} />
        </PortalPopup>
      )}
      {isProductBuyPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeProductBuyPopup1}
        >
          <ProductBuy onClose={closeProductBuyPopup1} />
        </PortalPopup>
      )}
      {isRequestInformationProductPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRequestInformationProductPopup}
        >
          <DemandeInformationProduct
            onClose={closeRequestInformationProductPopup}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default Entreprise;

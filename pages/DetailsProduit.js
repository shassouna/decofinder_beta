import { useState, useCallback } from "react";
import AlertesNouveautes from "../components/AlertesNouveautes";
import PortalPopup from "../components/PortalPopup";
import DemandeInformationProduct from "../components/DemandeInformationProduct";
import MapProduct from "../components/MapProduct";
import { useRouter } from "next/router";
import styles from "./DetailsProduit.module.css";
import Nav from "../components/layouts/Nav";
import ProductsList from "../components/elements/ProductsList";
import CategoriesList from "../components/elements/CategoriesList";

let Items = ["Su", "U", "C", "P", "Z"];

const DetailsProduit = () => {
  const [isNewsAlertsPopupOpen, setNewsAlertsPopupOpen] = useState(false);
  const [
    isRequestInformationProductPopupOpen,
    setRequestInformationProductPopupOpen,
  ] = useState(false);
  const [isMapProductPopupOpen, setMapProductPopupOpen] = useState(false);
  const router = useRouter();

  const onLogoImageClick = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const openNewsAlertsPopup = useCallback(() => {
    setNewsAlertsPopupOpen(true);
  }, []);

  const closeNewsAlertsPopup = useCallback(() => {
    setNewsAlertsPopupOpen(false);
  }, []);

  const onWebsiteContainerClick = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  const openRequestInformationProductPopup = useCallback(() => {
    setRequestInformationProductPopupOpen(true);
  }, []);

  const closeRequestInformationProductPopup = useCallback(() => {
    setRequestInformationProductPopupOpen(false);
  }, []);

  const openMapProductPopup = useCallback(() => {
    setMapProductPopupOpen(true);
  }, []);

  const closeMapProductPopup = useCallback(() => {
    setMapProductPopupOpen(false);
  }, []);

  const onXIconClick = useCallback(() => {
    window.open("https://www.twitter.com/decofinder");
  }, []);

  const onFacebookIconClick = useCallback(() => {
    window.open("https://www.facebook.com/decofinder");
  }, []);

  const onPinterestIconClick = useCallback(() => {
    window.open("https://www.pinterest.fr/decofinder");
  }, []);

  const onResellerContainerClick = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  const onResellerContainer1Click = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  const onResellerContainer2Click = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  return (
    <>
      <div className={styles.z}>
        <section className={styles.navpath}>
          <Nav Items={Items} />
        </section>
        <section className={styles.div1}>
          <div className={styles.div2}>
            <div className={styles.images}>
              <img
                className={styles.imageproduitIcon}
                alt=""
                src="/imgprodut@2x.jpg"
              />
              <div className={styles.autresimagesproduit}>
                <img className={styles.imgIcon} alt="" src="/img7@2x.jpg" />
                <img className={styles.imgIcon} alt="" src="/img8@2x.jpg" />
                <img className={styles.imgIcon} alt="" src="/img9@2x.jpg" />
                <img className={styles.imgIcon} alt="" src="/img7@2x.jpg" />
                <img className={styles.imgIcon} alt="" src="/img8@2x.jpg" />
                <img className={styles.imgIcon} alt="" src="/img10@2x.jpg" />
              </div>
            </div>
            <div className={styles.div3}>
              <div className={styles.description}>
                <div className={styles.titre}>
                  <div className={styles.text}>Description</div>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/frame191.svg"
                  />
                </div>
                <div className={styles.name}>Contour 13</div>
                <p className={styles.text1}>
                  Minimalisme intemporel. Caractérisé par sa simplicité, ses
                  lignes épurées et sa palette de couleurs monochromatiques.
                  Contour embrasse la technologie GlammFire Crea7ionEVOPlus Fire
                  Round, permettant aux utilisateurs d'apprécier ce qui compte
                  vraiment : le confort et la chaleur des flammes. Cette pièce
                  minimaliste contribue à la sérénité tranquille d'un salon. Au
                  lieu d'exiger l'attention, elle complète son environnement et
                  aide à créer une ambiance calme et relaxante. Dimensions //
                  584 Ø x 2500-2700 h mm | 23" Ø x 98.4"-106.3" h Poids // 180
                  kg | 396.8 lbs, Accessoires // Verre tubulaire (haute
                  température) - inclus, Brûleur // Crea7ionEVOPlus Fire Round
                </p>
                <img
                  className={styles.descriptionChild}
                  alt=""
                  src="/vector-6.svg"
                />
              </div>
              <div className={styles.characteristics}>
                <div className={styles.title}>
                  <div className={styles.text}>Caractéristiques</div>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/frame191.svg"
                  />
                </div>
                <div className={styles.div4}>
                  <div className={styles.characteristic}>
                    <div className={styles.title1}>Origine</div>
                    <div className={styles.text3}>France</div>
                  </div>
                  <div className={styles.characteristic}>
                    <div className={styles.title1}>Style</div>
                    <div className={styles.text3}>Contemporain</div>
                  </div>
                  <div className={styles.characteristic}>
                    <div className={styles.title1}>Matériaux</div>
                    <div className={styles.text3}>Céramique</div>
                  </div>
                  <div className={styles.characteristic}>
                    <div className={styles.title1}>Couleur</div>
                    <div className={styles.text3}>Vert</div>
                  </div>
                  <div className={styles.characteristic}>
                    <div className={styles.title1}>Ref. Fab.</div>
                    <div className={styles.text3}>LD035000</div>
                  </div>
                  <div className={styles.characteristic}>
                    <div className={styles.title1}>Dimensions</div>
                    <div className={styles.text3}>130 mm x Ø 110 mm</div>
                  </div>
                </div>
                <img
                  className={styles.descriptionChild}
                  alt=""
                  src="/vector-6.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.div5}>
            <div className={styles.div6}>
              <img
                className={styles.logoIcon}
                alt=""
                src="/frame-7598@2x.jpg"
                onClick={onLogoImageClick}
              />
              <button className={styles.button} onClick={openNewsAlertsPopup}>
                <div className={styles.titreWrapper}>
                  <div className={styles.titre1}>
                    <img
                      className={styles.divIcon}
                      alt=""
                      src="/frame201.svg"
                    />
                    <div className={styles.text9}>Suivre le produit</div>
                  </div>
                </div>
              </button>
            </div>
            <div className={styles.div7}>
              <div className={styles.typeprodExposant}>
                <h1 className={styles.text10}>
                  Abat Jour - Housse en céramique faite à la main pour Poldina
                </h1>
              </div>
              <div className={styles.typeprod}>Abat Jour</div>
              <div className={styles.price}>148 €</div>
            </div>
            <div className={styles.bouttons}>
              <div className={styles.website} onClick={onWebsiteContainerClick}>
                <div className={styles.div8}>
                  <img className={styles.divIcon} alt="" src="/frame11.svg" />
                  <div className={styles.text11}>Site web</div>
                </div>
              </div>
              <button
                className={styles.question}
                onClick={openRequestInformationProductPopup}
              >
                <img className={styles.divIcon} alt="" src="/frame12.svg" />
                <div className={styles.text12}>Une questions ou un devis ?</div>
              </button>
              <button className={styles.bookmark}>
                <div className={styles.div8}>
                  <img className={styles.divIcon} alt="" src="/frame211.svg" />
                  <div className={styles.text9}>Mettre en favoris</div>
                </div>
              </button>
              <button
                className={styles.pointsofsale}
                onClick={openMapProductPopup}
              >
                <img className={styles.divIcon} alt="" src="/frame221.svg" />
                <div className={styles.text12}>Points de vente</div>
              </button>
            </div>
            <div className={styles.socialsnetwork}>
              <div className={styles.div10}>
                <img
                  className={styles.xIcon}
                  alt=""
                  src="/socials.svg"
                  onClick={onXIconClick}
                />
                <img
                  className={styles.xIcon}
                  alt=""
                  src="/socials11.svg"
                  onClick={onFacebookIconClick}
                />
                <img
                  className={styles.xIcon}
                  alt=""
                  src="/socials21.svg"
                  onClick={onPinterestIconClick}
                />
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.text11}>Acheter en ligne</div>
              <div
                className={styles.reseller}
                onClick={onResellerContainerClick}
              >
                <img
                  className={styles.logoIcon1}
                  alt=""
                  src="/frame-7577@2x.jpg"
                />
                <img className={styles.divIcon4} alt="" src="/frame231.svg" />
              </div>
              <div
                className={styles.reseller}
                onClick={onResellerContainer1Click}
              >
                <img
                  className={styles.logoIcon1}
                  alt=""
                  src="/frame-7577@2x.jpg"
                />
                <img className={styles.divIcon4} alt="" src="/frame231.svg" />
              </div>
              <div
                className={styles.reseller}
                onClick={onResellerContainer2Click}
              >
                <img
                  className={styles.logoIcon1}
                  alt=""
                  src="/frame-7577@2x.jpg"
                />
                <img className={styles.divIcon4} alt="" src="/frame231.svg" />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.products}>
          <ProductsList />
        </section>
        <section className={styles.categories}>
          <CategoriesList />
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
      {isMapProductPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMapProductPopup}
        >
          <MapProduct onClose={closeMapProductPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default DetailsProduit;

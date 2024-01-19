import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "../../pages/index.module.css";

const FourLinksHomePage = ({ Products }) => {
  const router = useRouter();

  const onImgImageClick = useCallback(() => {
    router.push("/DetailsProduit");
  }, [router]);

  const onExposantNameContainerClick = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const onTypeproductNameTextClick = useCallback(() => {
    router.push("/P");
  }, [router]);

  const onImgImage1Click = useCallback(() => {
    router.push("/DetailsProduit");
  }, [router]);

  const onExposantNameContainer1Click = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const onTypeproductNameText1Click = useCallback(() => {
    router.push("/P");
  }, [router]);

  const onImgImage2Click = useCallback(() => {
    router.push("/DetailsProduit");
  }, [router]);

  const onExposantNameContainer2Click = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const onTypeproductNameText2Click = useCallback(() => {
    router.push("/P");
  }, [router]);

  const onImgImage3Click = useCallback(() => {
    router.push("/DetailsProduit");
  }, [router]);

  const onExposantNameContainer3Click = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const onTypeproductNameText3Click = useCallback(() => {
    router.push("/P");
  }, [router]);

  return (
    <>
      <div className={styles.div3}>
        {Products.map((product, index) => (
          <article key={product["id"]} className={styles.selections}>
            <img
              className={styles.imgIcon}
              alt=""
              src="/img1@2x.jpg"
              onClick={onImgImageClick}
            />
            <div className={styles.badge_fourproducts}>
              {product["attributes"]["SELECTION"] === 1 ? (
                <img className={styles.laurelIcon} alt="" src="/laurel.svg" />
              ) : product["attributes"]["COUP_DE_COEUR"] === 1 ? (
                <img className={styles.laurelIcon} alt="" src="/frame31.svg" />
              ) : product["attributes"]["ACHAT_EN_LIGNE"] === 1 ? (
                <img className={styles.laurelIcon} alt="" src="/icon3.svg" />
              ) : product["attributes"]["PROMOTION"] === 1 ? (
                <img
                  className={styles.laurelIcon}
                  alt=""
                  src="/promotion.svg"
                />
              ) : null}
            </div>
            <div className={styles.informations}>
              <div
                className={styles.exposantname}
                onClick={onExposantNameContainerClick}
              >
                <div className={styles.text3}>
                  {product["attributes"]["exposant"]["data"] &&
                    product["attributes"]["exposant"]["data"]["attributes"][
                      "NOM"
                    ]}
                </div>
              </div>
              <div
                className={styles.typeproductname}
                onClick={onTypeproductNameTextClick}
              >
                {product["attributes"]["typeprod"]["data"] &&
                  product["attributes"]["typeprod"]["data"]["attributes"][
                    "LIB"
                  ]}
              </div>
            </div>
            {product["attributes"]["SELECTION"] === 1 ? (
              <div className={styles.boutons1}>
                <div className={styles.div4}>
                  <img className={styles.laurelIcon} alt="" src="/laurel.svg" />
                  <div className={styles.text4}>Les sélections du jury</div>
                </div>
                <img className={styles.icon} alt="" src="/frame14.svg" />
              </div>
            ) : product["attributes"]["COUP_DE_COEUR"] === 1 ? (
              <div className={styles.boutons2}>
                <div className={styles.div4}>
                  <img
                    className={styles.laurelIcon}
                    alt=""
                    src="/frame31.svg"
                  />
                  <div className={styles.text4}>Les coups de coeur</div>
                </div>
                <img className={styles.icon} alt="" src="/frame14.svg" />
              </div>
            ) : product["attributes"]["ACHAT_EN_LIGNE"] === 1 ? (
              <div className={styles.boutons3}>
                <div className={styles.div4}>
                  <img className={styles.laurelIcon} alt="" src="/icon3.svg" />
                  <div className={styles.text4}>Les achats en ligne</div>
                </div>
                <img className={styles.icon} alt="" src="/frame14.svg" />
              </div>
            ) : product["attributes"]["PROMOTION"] === 1 ? (
              <div className={styles.boutons4}>
                <div className={styles.div4}>
                  <img
                    className={styles.laurelIcon}
                    alt=""
                    src="/promotion.svg"
                  />
                  <div className={styles.text4}>Les promotions</div>
                </div>
                <img className={styles.icon} alt="" src="/frame14.svg" />
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </>
  );
};
export default FourLinksHomePage;

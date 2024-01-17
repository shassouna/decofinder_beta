import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "../../pages/index.module.css";

const FourLinksHomePage = () => {
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
        <article className={styles.selections}>
          <img
            className={styles.imgIcon}
            alt=""
            src="/img1@2x.jpg"
            onClick={onImgImageClick}
          />
          <div className={styles.badge}>
            <div className={styles.text2}>New</div>
          </div>
          <div className={styles.informations}>
            <div
              className={styles.exposantname}
              onClick={onExposantNameContainerClick}
            >
              <div className={styles.text3}>Deetjen Orfevre</div>
            </div>
            <div
              className={styles.typeproductname}
              onClick={onTypeproductNameTextClick}
            >
              Porte-bûches
            </div>
          </div>
          <div className={styles.boutons1}>
            <div className={styles.div4}>
              <img className={styles.laurelIcon} alt="" src="/laurel.svg" />
              <div className={styles.text4}>Les sélections du jury</div>
            </div>
            <img className={styles.icon} alt="" src="/frame14.svg" />
          </div>
        </article>
        <article className={styles.selections}>
          <img
            className={styles.imgIcon}
            alt=""
            src="/img1@2x.jpg"
            onClick={onImgImage1Click}
          />
          <div className={styles.badge}>
            <div className={styles.text2}>New</div>
          </div>
          <div className={styles.informations}>
            <div
              className={styles.exposantname}
              onClick={onExposantNameContainer1Click}
            >
              <div className={styles.text3}>Deetjen Orfevre</div>
            </div>
            <div
              className={styles.typeproductname}
              onClick={onTypeproductNameText1Click}
            >
              Porte-bûches
            </div>
          </div>
          <div className={styles.boutons2}>
            <div className={styles.div4}>
              <img className={styles.laurelIcon} alt="" src="/frame31.svg" />
              <div className={styles.text4}>Les coups de coeur</div>
            </div>
            <img className={styles.icon} alt="" src="/frame14.svg" />
          </div>
        </article>
        <article className={styles.selections}>
          <img
            className={styles.imgIcon}
            alt=""
            src="/img1@2x.jpg"
            onClick={onImgImage2Click}
          />
          <div className={styles.badge}>
            <div className={styles.text2}>New</div>
          </div>
          <div className={styles.informations}>
            <div
              className={styles.exposantname}
              onClick={onExposantNameContainer2Click}
            >
              <div className={styles.text3}>Deetjen Orfevre</div>
            </div>
            <div
              className={styles.typeproductname}
              onClick={onTypeproductNameText2Click}
            >
              Porte-bûches
            </div>
          </div>
          <div className={styles.boutons3}>
            <div className={styles.div4}>
              <img className={styles.laurelIcon} alt="" src="/icon3.svg" />
              <div className={styles.text4}>Les achats en ligne</div>
            </div>
            <img className={styles.icon} alt="" src="/frame14.svg" />
          </div>
        </article>
        <article className={styles.selections}>
          <img
            className={styles.imgIcon}
            alt=""
            src="/img1@2x.jpg"
            onClick={onImgImage3Click}
          />
          <div className={styles.badge}>
            <div className={styles.text2}>New</div>
          </div>
          <div className={styles.informations}>
            <div
              className={styles.exposantname}
              onClick={onExposantNameContainer3Click}
            >
              <div className={styles.text3}>Deetjen Orfevre</div>
            </div>
            <div
              className={styles.typeproductname}
              onClick={onTypeproductNameText3Click}
            >
              Porte-bûches
            </div>
          </div>
          <div className={styles.boutons4}>
            <div className={styles.div4}>
              <img className={styles.laurelIcon} alt="" src="/promotion.svg" />
              <div className={styles.text4}>Les promotions</div>
            </div>
            <img className={styles.icon} alt="" src="/frame14.svg" />
          </div>
        </article>
      </div>
    </>
  );
};
export default FourLinksHomePage;

import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "../../pages/Univers.module.css";

const LogosExhibitors = ({ title }) => {
  const router = useRouter();

  const onLogoImageClick = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const onLogoImage1Click = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const onLogoImage2Click = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const onLogoImage3Click = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const onLogoImage4Click = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  return (
    <>
      <div className={styles.title20}>
        <div className={styles.text20}>
          <span>
            <span className={styles.marquesRevendues}>{title}</span>
            <span className={styles.span}>{` `}</span>
          </span>
          {/*<span className={styles.span}>
            <span>(1 marque)</span>
  </span>*/}
        </div>
        <div className={styles.div83}>
          <img className={styles.divIcon14} alt="" src="/div@2x.png" />
          <div className={styles.div84}>
            <img className={styles.divIcon15} alt="" src="/div@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.div85}>
        <img
          className={styles.logoIcon}
          alt=""
          src="/frame-75441@2x.jpg"
          onClick={onLogoImageClick}
        />
        <img
          className={styles.logoIcon}
          alt=""
          src="/frame-75441@2x.jpg"
          onClick={onLogoImage1Click}
        />
        <img
          className={styles.logoIcon}
          alt=""
          src="/frame-75441@2x.jpg"
          onClick={onLogoImage2Click}
        />
        <img
          className={styles.logoIcon}
          alt=""
          src="/frame-75441@2x.jpg"
          onClick={onLogoImage3Click}
        />
        <img
          className={styles.logoIcon}
          alt=""
          src="/frame-75441@2x.jpg"
          onClick={onLogoImage4Click}
        />
      </div>
    </>
  );
};
export default LogosExhibitors;

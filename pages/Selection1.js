import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./Selection1.module.css";

const Selection1 = () => {
  const router = useRouter();

  const onHomeLinkClick = useCallback(() => {
    router.push("/Accueil1");
  }, [router]);

  const onSuperuniversLinkClick = useCallback(() => {
    router.push("/MegaUnivers");
  }, [router]);

  const onUniversLinkClick = useCallback(() => {
    router.push("/Univers");
  }, [router]);

  return (
    <div className={styles.selection}>
      <div className={styles.navpath}>
        <div className={styles.div}>
          <span className={styles.homelink} onClick={onHomeLinkClick}>
            Accueil
          </span>
          <img className={styles.icon} alt="" src="/frame16.svg" />
          <span className={styles.homelink} onClick={onSuperuniversLinkClick}>
            Bricolage
          </span>
          <img className={styles.icon} alt="" src="/frame16.svg" />
          <span className={styles.homelink} onClick={onUniversLinkClick}>
            Outillage
          </span>
          <img className={styles.icon} alt="" src="/frame16.svg" />
          <span className={styles.categorylink}>Imprégnateur...</span>
          <img className={styles.icon} alt="" src="/frame16.svg" />
          <span className={styles.categorylink}>Imprégnateur...</span>
          <img className={styles.icon} alt="" src="/frame16.svg" />
          <span className={styles.categorylink}>Imprégnateur...</span>
        </div>
      </div>
    </div>
  );
};

export default Selection1;

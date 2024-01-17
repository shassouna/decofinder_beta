import { useCallback } from "react";
import styles from "../../pages/index.module.css";

const BigPicture = () => {
  const onBoutonsContainerClick = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  return (
    <>
      <div className={styles.div}>
        <div className={styles.div1}>
          <h1 className={styles.text}>Faites le plein avant l’été</h1>
          <div className={styles.boutons} onClick={onBoutonsContainerClick}>
            <div className={styles.viewpressreleases}>
              <div className={styles.text1}>Découvrir</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BigPicture;

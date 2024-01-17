import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "../../pages/index.module.css";

const CommuniquesDePresseList = () => {
  const router = useRouter();

  const onPressReleasClick = useCallback(() => {
    router.push("/Cpp");
  }, [router]);

  const onPressReleas1Click = useCallback(() => {
    router.push("/Cpp");
  }, [router]);

  const onPressReleas2Click = useCallback(() => {
    router.push("/Cpp");
  }, [router]);

  const onPressReleas3Click = useCallback(() => {
    router.push("/Cpp");
  }, [router]);

  const onPressReleas4Click = useCallback(() => {
    router.push("/Cpp");
  }, [router]);

  const onPressReleas5Click = useCallback(() => {
    router.push("/Cpp");
  }, [router]);

  const onPressReleas6Click = useCallback(() => {
    router.push("/Cpp");
  }, [router]);

  const onPressReleas7Click = useCallback(() => {
    router.push("/Cpp");
  }, [router]);

  const onBoutonsContainer6Click = useCallback(() => {
    router.push("/Cpp");
  }, [router]);

  return (
    <>
      <div className={styles.title2}>
        <h2 className={styles.text27}>Derniers communiqués de presse</h2>
      </div>
      <div className={styles.div8}>
        <article className={styles.pressreleas} onClick={onPressReleasClick}>
          <img className={styles.imgIcon37} alt="" src="/img6@2x.jpg" />
          <div className={styles.div41}>
            <div className={styles.text15}>
              Moulin à Poivre Peugeot / Roellinger
            </div>
            <p className={styles.text83}>
              Le partenariat entre Peugeot et Olivier Rœllinger a démarré il y a
              18 ans. "Avec la designer Sylvie Amar, ils ont su moderniser
            </p>
          </div>
        </article>
        <article className={styles.pressreleas} onClick={onPressReleas1Click}>
          <img className={styles.imgIcon37} alt="" src="/img6@2x.jpg" />
          <div className={styles.div41}>
            <div className={styles.text15}>
              Moulin à Poivre Peugeot / Roellinger
            </div>
            <p className={styles.text83}>
              Le partenariat entre Peugeot et Olivier Rœllinger a démarré il y a
              18 ans. "Avec la designer Sylvie Amar, ils ont su moderniser
            </p>
          </div>
        </article>
        <article className={styles.pressreleas} onClick={onPressReleas2Click}>
          <img className={styles.imgIcon37} alt="" src="/img6@2x.jpg" />
          <div className={styles.div41}>
            <div className={styles.text15}>
              Moulin à Poivre Peugeot / Roellinger
            </div>
            <p className={styles.text83}>
              Le partenariat entre Peugeot et Olivier Rœllinger a démarré il y a
              18 ans. "Avec la designer Sylvie Amar, ils ont su moderniser
            </p>
          </div>
        </article>
        <article className={styles.pressreleas} onClick={onPressReleas3Click}>
          <img className={styles.imgIcon37} alt="" src="/img6@2x.jpg" />
          <div className={styles.div41}>
            <div className={styles.text15}>
              Moulin à Poivre Peugeot / Roellinger
            </div>
            <p className={styles.text83}>
              Le partenariat entre Peugeot et Olivier Rœllinger a démarré il y a
              18 ans. "Avec la designer Sylvie Amar, ils ont su moderniser
            </p>
          </div>
        </article>
        <article className={styles.pressreleas} onClick={onPressReleas4Click}>
          <img className={styles.imgIcon37} alt="" src="/img6@2x.jpg" />
          <div className={styles.div41}>
            <div className={styles.text15}>
              Moulin à Poivre Peugeot / Roellinger
            </div>
            <p className={styles.text83}>
              Le partenariat entre Peugeot et Olivier Rœllinger a démarré il y a
              18 ans. "Avec la designer Sylvie Amar, ils ont su moderniser
            </p>
          </div>
        </article>
        <article className={styles.pressreleas} onClick={onPressReleas5Click}>
          <img className={styles.imgIcon37} alt="" src="/img6@2x.jpg" />
          <div className={styles.div41}>
            <div className={styles.text15}>
              Moulin à Poivre Peugeot / Roellinger
            </div>
            <p className={styles.text83}>
              Le partenariat entre Peugeot et Olivier Rœllinger a démarré il y a
              18 ans. "Avec la designer Sylvie Amar, ils ont su moderniser
            </p>
          </div>
        </article>
        <article className={styles.pressreleas} onClick={onPressReleas6Click}>
          <img className={styles.imgIcon37} alt="" src="/img6@2x.jpg" />
          <div className={styles.div41}>
            <div className={styles.text15}>
              Moulin à Poivre Peugeot / Roellinger
            </div>
            <p className={styles.text83}>
              Le partenariat entre Peugeot et Olivier Rœllinger a démarré il y a
              18 ans. "Avec la designer Sylvie Amar, ils ont su moderniser
            </p>
          </div>
        </article>
        <article className={styles.pressreleas} onClick={onPressReleas7Click}>
          <img className={styles.imgIcon37} alt="" src="/img6@2x.jpg" />
          <div className={styles.div41}>
            <div className={styles.text15}>
              Moulin à Poivre Peugeot / Roellinger
            </div>
            <p className={styles.text83}>
              Le partenariat entre Peugeot et Olivier Rœllinger a démarré il y a
              18 ans. "Avec la designer Sylvie Amar, ils ont su moderniser
            </p>
          </div>
        </article>
      </div>
      <div className={styles.boutons6} onClick={onBoutonsContainer6Click}>
        <div className={styles.viewpressreleases}>
          <div className={styles.text4}>Tous les communiqués de presse</div>
        </div>
      </div>
    </>
  );
};
export default CommuniquesDePresseList;

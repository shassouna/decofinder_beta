import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "../../pages/index.module.css";

const SuperUniversList = () => {
  const router = useRouter();

  const onSuperuniversClick = useCallback(() => {
    router.push("/MegaUnivers");
  }, [router]);

  return (
    <>
      <div className={styles.title}>
        <h2 className={styles.text14}>Les Megas Univers</h2>
      </div>
      <div className={styles.div8}>
        <article className={styles.superunivers} onClick={onSuperuniversClick}>
          <img className={styles.imgIcon4} alt="" src="/img2@2x.jpg" />
          <div className={styles.name}>
            <div className={styles.text15}>Arts de la table</div>
          </div>
        </article>
        <article className={styles.superunivers} onClick={onSuperuniversClick}>
          <img className={styles.imgIcon4} alt="" src="/img2@2x.jpg" />
          <div className={styles.name}>
            <div className={styles.text15}>Arts de la table</div>
          </div>
        </article>
        <article className={styles.superunivers} onClick={onSuperuniversClick}>
          <img className={styles.imgIcon4} alt="" src="/img2@2x.jpg" />
          <div className={styles.name}>
            <div className={styles.text15}>Arts de la table</div>
          </div>
        </article>
        <article className={styles.superunivers} onClick={onSuperuniversClick}>
          <img className={styles.imgIcon4} alt="" src="/img2@2x.jpg" />
          <div className={styles.name}>
            <div className={styles.text15}>Arts de la table</div>
          </div>
        </article>
        <article className={styles.superunivers} onClick={onSuperuniversClick}>
          <img className={styles.imgIcon4} alt="" src="/img2@2x.jpg" />
          <div className={styles.name}>
            <div className={styles.text15}>Arts de la table</div>
          </div>
        </article>
        <article className={styles.superunivers} onClick={onSuperuniversClick}>
          <img className={styles.imgIcon4} alt="" src="/img2@2x.jpg" />
          <div className={styles.name}>
            <div className={styles.text15}>Arts de la table</div>
          </div>
        </article>
        <article className={styles.superunivers} onClick={onSuperuniversClick}>
          <img className={styles.imgIcon4} alt="" src="/img2@2x.jpg" />
          <div className={styles.name}>
            <div className={styles.text15}>Arts de la table</div>
          </div>
        </article>
        <article className={styles.superunivers} onClick={onSuperuniversClick}>
          <img className={styles.imgIcon4} alt="" src="/img2@2x.jpg" />
          <div className={styles.name}>
            <div className={styles.text15}>Arts de la table</div>
          </div>
        </article>
        <article className={styles.superunivers} onClick={onSuperuniversClick}>
          <img className={styles.imgIcon4} alt="" src="/img2@2x.jpg" />
          <div className={styles.name}>
            <div className={styles.text15}>Arts de la table</div>
          </div>
        </article>
        <article className={styles.superunivers} onClick={onSuperuniversClick}>
          <img className={styles.imgIcon4} alt="" src="/img2@2x.jpg" />
          <div className={styles.name}>
            <div className={styles.text15}>Arts de la table</div>
          </div>
        </article>
        <article className={styles.superunivers} onClick={onSuperuniversClick}>
          <img className={styles.imgIcon4} alt="" src="/img2@2x.jpg" />
          <div className={styles.name}>
            <div className={styles.text15}>Arts de la table</div>
          </div>
        </article>
        <article className={styles.superunivers} onClick={onSuperuniversClick}>
          <img className={styles.imgIcon4} alt="" src="/img2@2x.jpg" />
          <div className={styles.name}>
            <div className={styles.text15}>Arts de la table</div>
          </div>
        </article>
      </div>
    </>
  );
};
export default SuperUniversList;

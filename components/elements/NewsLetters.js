import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "../../pages/Entreprise.module.css";

const NewsLetters = () => {
  const router = useRouter();

  const onLearnMoreClick = useCallback(() => {
    router.push("/MegaUnivers");
  }, [router]);

  const onLearnMore1Click = useCallback(() => {
    router.push("/MegaUnivers");
  }, [router]);

  const onLearnMore2Click = useCallback(() => {
    router.push("/MegaUnivers");
  }, [router]);

  const onLearnMore3Click = useCallback(() => {
    router.push("/MegaUnivers");
  }, [router]);

  const onLearnMore4Click = useCallback(() => {
    router.push("/MegaUnivers");
  }, [router]);

  const onLearnMore5Click = useCallback(() => {
    router.push("/MegaUnivers");
  }, [router]);

  return (
    <>
      <div className={styles.filter}>
        <h3 className={styles.text26}>
          <span>
            <span className={styles.newsletter}>Newsletter</span>
            <span className={styles.span}>{` `}</span>
          </span>
          <span className={styles.span}>
            <span>(1)</span>
          </span>
        </h3>
        <div className={styles.div16}>
          <img className={styles.divIcon4} alt="" src="/div@2x.png" />
          <div className={styles.div17}>
            <img className={styles.divIcon5} alt="" src="/div@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.div18}>
        <article className={styles.newsletter1}>
          <img className={styles.imgIcon} alt="" src="/frame-75445@2x.jpg" />
          <div className={styles.div19}>
            <div className={styles.title3}>Spécial rentrée</div>
            <div className={styles.date}>08/2017</div>
            <a
              className={styles.learnmore}
              href="https://www.google.com"
              onClick={onLearnMoreClick}
            >
              <div className={styles.text27}>En savoir plus</div>
              <img className={styles.icon12} alt="" src="/frame321.svg" />
            </a>
          </div>
        </article>
        <article className={styles.newsletter1}>
          <img className={styles.imgIcon} alt="" src="/frame-75445@2x.jpg" />
          <div className={styles.div19}>
            <div className={styles.title3}>Spécial rentrée</div>
            <div className={styles.date}>08/2017</div>
            <a
              className={styles.learnmore}
              href="https://www.google.com"
              onClick={onLearnMore1Click}
            >
              <div className={styles.text27}>En savoir plus</div>
              <img className={styles.icon12} alt="" src="/frame321.svg" />
            </a>
          </div>
        </article>
        <article className={styles.newsletter1}>
          <img className={styles.imgIcon} alt="" src="/frame-75445@2x.jpg" />
          <div className={styles.div19}>
            <div className={styles.title3}>Spécial rentrée</div>
            <div className={styles.date}>08/2017</div>
            <a
              className={styles.learnmore}
              href="https://www.google.com"
              onClick={onLearnMore2Click}
            >
              <div className={styles.text27}>En savoir plus</div>
              <img className={styles.icon12} alt="" src="/frame321.svg" />
            </a>
          </div>
        </article>
        <article className={styles.newsletter1}>
          <img className={styles.imgIcon} alt="" src="/frame-75445@2x.jpg" />
          <div className={styles.div19}>
            <div className={styles.title3}>Spécial rentrée</div>
            <div className={styles.date}>08/2017</div>
            <a
              className={styles.learnmore}
              href="https://www.google.com"
              onClick={onLearnMore3Click}
            >
              <div className={styles.text27}>En savoir plus</div>
              <img className={styles.icon12} alt="" src="/frame321.svg" />
            </a>
          </div>
        </article>
        <article className={styles.newsletter1}>
          <img className={styles.imgIcon} alt="" src="/frame-75445@2x.jpg" />
          <div className={styles.div19}>
            <div className={styles.title3}>Spécial rentrée</div>
            <div className={styles.date}>08/2017</div>
            <a
              className={styles.learnmore}
              href="https://www.google.com"
              onClick={onLearnMore4Click}
            >
              <div className={styles.text27}>En savoir plus</div>
              <img className={styles.icon12} alt="" src="/frame321.svg" />
            </a>
          </div>
        </article>
        <article className={styles.newsletter1}>
          <img className={styles.imgIcon} alt="" src="/frame-75445@2x.jpg" />
          <div className={styles.div19}>
            <div className={styles.title3}>Spécial rentrée</div>
            <div className={styles.date}>08/2017</div>
            <a
              className={styles.learnmore}
              href="https://www.google.com"
              onClick={onLearnMore5Click}
            >
              <div className={styles.text27}>En savoir plus</div>
              <img className={styles.icon12} alt="" src="/frame321.svg" />
            </a>
          </div>
        </article>
      </div>
    </>
  );
};

export default NewsLetters;

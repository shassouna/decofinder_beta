import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "../../pages/index.module.css";

const InspirationsList = () => {
  const router = useRouter();

  const onInspirationClick = useCallback(() => {
    router.push("/A");
  }, [router]);

  return (
    <>
      <div className={styles.title1}>
        <h2 className={styles.text27}>Inspirations</h2>
      </div>
      <div className={styles.div8}>
        <article className={styles.inspiration} onClick={onInspirationClick}>
          <img className={styles.imgIcon25} alt="" src="/32105420-1@2x.jpg" />
          <div className={styles.badge13}>
            <div className={styles.text2}>Inspiration</div>
          </div>
          <div className={styles.name12}>
            <div className={styles.text15}>Radiateur - équipement</div>
            <div className={styles.seemorelink}>
              <div className={styles.text1}>En savoir plus</div>
              <img className={styles.icon} alt="" src="/frame15.svg" />
            </div>
          </div>
        </article>
        <article className={styles.inspiration} onClick={onInspirationClick}>
          <img className={styles.imgIcon25} alt="" src="/32105420-1@2x.jpg" />
          <div className={styles.badge13}>
            <div className={styles.text2}>Inspiration</div>
          </div>
          <div className={styles.name12}>
            <div className={styles.text15}>Radiateur - équipement</div>
            <div className={styles.seemorelink}>
              <div className={styles.text1}>En savoir plus</div>
              <img className={styles.icon} alt="" src="/frame15.svg" />
            </div>
          </div>
        </article>
        <article className={styles.inspiration} onClick={onInspirationClick}>
          <img className={styles.imgIcon25} alt="" src="/32105420-1@2x.jpg" />
          <div className={styles.badge13}>
            <div className={styles.text2}>Inspiration</div>
          </div>
          <div className={styles.name12}>
            <div className={styles.text15}>Radiateur - équipement</div>
            <div className={styles.seemorelink}>
              <div className={styles.text1}>En savoir plus</div>
              <img className={styles.icon} alt="" src="/frame15.svg" />
            </div>
          </div>
        </article>
        <article className={styles.inspiration} onClick={onInspirationClick}>
          <img className={styles.imgIcon25} alt="" src="/32105420-1@2x.jpg" />
          <div className={styles.badge13}>
            <div className={styles.text2}>Inspiration</div>
          </div>
          <div className={styles.name12}>
            <div className={styles.text15}>Radiateur - équipement</div>
            <div className={styles.seemorelink}>
              <div className={styles.text1}>En savoir plus</div>
              <img className={styles.icon} alt="" src="/frame15.svg" />
            </div>
          </div>
        </article>
        <article className={styles.inspiration} onClick={onInspirationClick}>
          <img className={styles.imgIcon25} alt="" src="/32105420-1@2x.jpg" />
          <div className={styles.badge13}>
            <div className={styles.text2}>Inspiration</div>
          </div>
          <div className={styles.name12}>
            <div className={styles.text15}>Radiateur - équipement</div>
            <div className={styles.seemorelink}>
              <div className={styles.text1}>En savoir plus</div>
              <img className={styles.icon} alt="" src="/frame15.svg" />
            </div>
          </div>
        </article>
        <article className={styles.inspiration} onClick={onInspirationClick}>
          <img className={styles.imgIcon25} alt="" src="/32105420-1@2x.jpg" />
          <div className={styles.badge13}>
            <div className={styles.text2}>Inspiration</div>
          </div>
          <div className={styles.name12}>
            <div className={styles.text15}>Radiateur - équipement</div>
            <div className={styles.seemorelink}>
              <div className={styles.text1}>En savoir plus</div>
              <img className={styles.icon} alt="" src="/frame15.svg" />
            </div>
          </div>
        </article>
        <article className={styles.inspiration} onClick={onInspirationClick}>
          <img className={styles.imgIcon25} alt="" src="/32105420-1@2x.jpg" />
          <div className={styles.badge13}>
            <div className={styles.text2}>Inspiration</div>
          </div>
          <div className={styles.name12}>
            <div className={styles.text15}>Radiateur - équipement</div>
            <div className={styles.seemorelink}>
              <div className={styles.text1}>En savoir plus</div>
              <img className={styles.icon} alt="" src="/frame15.svg" />
            </div>
          </div>
        </article>
        <article className={styles.inspiration} onClick={onInspirationClick}>
          <img className={styles.imgIcon25} alt="" src="/32105420-1@2x.jpg" />
          <div className={styles.badge13}>
            <div className={styles.text2}>Inspiration</div>
          </div>
          <div className={styles.name12}>
            <div className={styles.text15}>Radiateur - équipement</div>
            <div className={styles.seemorelink}>
              <div className={styles.text1}>En savoir plus</div>
              <img className={styles.icon} alt="" src="/frame15.svg" />
            </div>
          </div>
        </article>
      </div>
      <div className={styles.boutons5}>
        <div className={styles.viewpressreleases}>
          <div className={styles.text4}>Tout découvrir</div>
        </div>
      </div>
    </>
  );
};
export default InspirationsList;

import { useState, useCallback } from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const [frameInputValue, setFrameInputValue] = useState("");

  const onSocialsIconClick = useCallback(() => {
    window.open("https://twitter.com/decofinder");
  }, []);

  const onSocialsIcon1Click = useCallback(() => {
    window.open("https://www.facebook.com/decofinder");
  }, []);

  const onSocialsIcon3Click = useCallback(() => {
    window.open("https://www.instagram.com/decofinder/");
  }, []);

  return (
    <div className={styles.footer}>
      <img className={styles.footerChild} alt="" src="/vector-6.svg" />
      <div className={styles.footerInner}>
        <div className={styles.frameParent}>
          <div className={styles.textParent}>
            <div className={styles.text}>Inscrivez-vous à nos newsletters</div>
            <form className={styles.frameGroup}>
              <input
                className={styles.frameChild}
                placeholder="Entrez votre adresse mail"
                type="email"
                value={frameInputValue}
                onChange={(event) => setFrameInputValue(event.target.value)}
              />
              <button className={styles.boutons} autoFocus={true}>
                <div className={styles.text1}>Explorer maintenant</div>
                <img className={styles.frameIcon} alt="" src="/frame.svg" />
              </button>
            </form>
          </div>
          <div className={styles.socialsParent}>
            <img
              className={styles.socialsIcon}
              alt=""
              src="/socials.svg"
              onClick={onSocialsIconClick}
            />
            <img
              className={styles.socialsIcon}
              alt=""
              src="/socials1.svg"
              onClick={onSocialsIcon1Click}
            />
            <img className={styles.socialsIcon2} alt="" src="/socials2.svg" />
            <img
              className={styles.socialsIcon}
              alt=""
              src="/socials3.svg"
              onClick={onSocialsIcon3Click}
            />
          </div>
        </div>
      </div>
      <img className={styles.footerChild} alt="" src="/vector-5.svg" />
      <div className={styles.frameDiv}>
        <div className={styles.frameContainer}>
          <div className={styles.frameParent1}>
            <img className={styles.frameItem} alt="" src="/frame-7846@2x.jpg" />
            <div className={styles.text2}>© 2023 Decofinder</div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.textGroup}>
              <div className={styles.text3}>À PROPOS</div>
              <div className={styles.textContainer}>
                <div className={styles.text4}>- À propos</div>
                <div className={styles.text4}>- Équipe</div>
                <div className={styles.text4}>- Audience et visitorat</div>
                <div className={styles.text4}>- Revue de presse</div>
                <div className={styles.text4}>- Sondage OpinionWay</div>
                <div className={styles.text4}>- Contacts</div>
                <div className={styles.text4}>- Recrutement</div>
                <div className={styles.text4}>- Mentions légales</div>
              </div>
            </div>
            <div className={styles.textGroup}>
              <div className={styles.textParent1}>
                <div className={styles.text3}>EXPOSER</div>
                <div className={styles.textContainer}>
                  <div className={styles.text4}>- Utile pour l’exposant</div>
                  <div className={styles.text4}>- Témoignage exposant</div>
                  <div className={styles.text4}>- FAQ Exposant</div>
                  <div className={styles.text4}>
                    - Conditions générales de vente
                  </div>
                  <div className={styles.text17}>Sondage OpinionWay</div>
                  <div className={styles.text17}>Contacts</div>
                  <div className={styles.text17}>Recrutement</div>
                  <div className={styles.text17}>Mentions légales</div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.textParent3}>
                  <div className={styles.text21}>
                    Enregistrez votre entreprise
                  </div>
                  <div className={styles.boutons1}>
                    <div className={styles.text22}>En savoir plus</div>
                    <img
                      className={styles.frameIcon1}
                      alt=""
                      src="/frame1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.textGroup}>
              <div className={styles.text3}>VENDRE</div>
              <div className={styles.textContainer}>
                <div className={styles.text4}>
                  - Vendre plus grâce à Décofinder
                </div>
                <div className={styles.text17}>Témoignage exposant</div>
                <div className={styles.text17}>FAQ Exposant</div>
                <div className={styles.text17}>
                  Conditions générales de vente
                </div>
                <div className={styles.text17}>Sondage OpinionWay</div>
                <div className={styles.text17}>Contacts</div>
                <div className={styles.text17}>Recrutement</div>
                <div className={styles.text17}>Mentions légales</div>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.textParent6}>
                  <div className={styles.text3}>Référencez vos produits</div>
                  <div className={styles.boutons1}>
                    <div className={styles.text22}>En savoir plus</div>
                    <img
                      className={styles.frameIcon1}
                      alt=""
                      src="/frame1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.textGroup}>
              <div className={styles.text3}>ACHETER</div>
              <div className={styles.textContainer}>
                <div className={styles.text4}>- Utile pour l’acheteur</div>
                <div className={styles.text4}>- Témoignages acheteurs</div>
                <div className={styles.text4}>- FAQ Acheteurs</div>
              </div>
              <div className={styles.frameWrapper2}>
                <div className={styles.frameWrapper3}>
                  <div className={styles.textParent6}>
                    <div className={styles.text3}>Les articles du mag déco</div>
                    <div className={styles.boutons1}>
                      <div className={styles.text22}>En savoir plus</div>
                      <img
                        className={styles.frameIcon1}
                        alt=""
                        src="/frame2.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

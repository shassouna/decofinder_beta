import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "../../pages/index.module.css";

const Index = ({
  Rendezvous,
  Freesections,
  Designers,
  Agendadecodesigns,
  Selection,
}) => {
  const router = useRouter();

  const onBoutonsContainerClick = useCallback(() => {
    router.push("/Nouvellesmarques");
  }, [router]);

  const onCalendarContainerClick = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  const onDcouvrirAgendaLinkClick = useCallback(() => {
    window.open("https//www.google.com");
  }, []);

  const onFixedAspectRatioSpacerVar127Click = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  const onFixedAspectRatioSpacerVar128Click = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  const onFixedAspectRatioSpacerVar129Click = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  const onFixedAspectRatioSpacerVar130Click = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  const onFixedAspectRatioSpacerVar131Click = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  const onFixedAspectRatioSpacerVar132Click = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  const onFixedAspectRatioSpacerVar133Click = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  const onFixedAspectRatioSpacerVar134Click = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  return (
    <>
      <div className={styles.div50}>
        <div className={styles.selections1}>
          <img className={styles.divIcon} alt="" src="/div1@2x.jpg" />
          <div className={styles.div54}>
            <div className={styles.text92}>
              {Selection["attributes"]["titre"]}
            </div>
            <div className={styles.boutons8} onClick={onBoutonsContainerClick}>
              <div className={styles.div4}>
                <img className={styles.laurelIcon} alt="" src="/frame31.svg" />
                <div className={styles.text4}>Voir la sélection</div>
              </div>
              <img className={styles.icon} alt="" src="/frame17.svg" />
            </div>
          </div>
        </div>
        <div className={styles.newexposants}>
          <div className={styles.div51}>
            <img className={styles.divIcon} alt="" src="/div@2x.jpg" />
            <div className={styles.div52}>
              <div className={styles.text92}>
                Nouvelles entreprises référencées
              </div>
              <div
                className={styles.boutons7}
                onClick={onBoutonsContainerClick}
              >
                <div className={styles.div4}>
                  <img
                    className={styles.laurelIcon}
                    alt=""
                    src="/frame31.svg"
                  />
                  <div className={styles.text4}>Découvrir ces marques</div>
                </div>
                <img className={styles.icon} alt="" src="/frame14.svg" />
              </div>
            </div>
          </div>
        </div>
        {Freesections.map((freesection, index) => (
          <div className={styles.div56}>
            <div className={styles.div51}>
              <img className={styles.divIcon} alt="" src="/div3@2x.jpg" />
              <div className={styles.div52}>
                <div className={styles.text92}>
                  {freesection["attributes"]["titre"]}
                </div>
                <div
                  className={styles.boutons9}
                  onClick={onBoutonsContainerClick}
                >
                  <div className={styles.div4}>
                    <img
                      className={styles.laurelIcon}
                      alt=""
                      src="/frame31.svg"
                    />
                    <div className={styles.text4}>Découvrir</div>
                  </div>
                  <img className={styles.icon} alt="" src="/frame14.svg" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.div60}>
        <div className={styles.div61}>
          <div className={styles.div62}>
            <div className={styles.text98}>L’AgendaDecoDesign</div>
            <img className={styles.divItem} alt="" src="/vector-521.svg" />
            <div className={styles.div63}>
              <div className={styles.div64}>
                {Agendadecodesigns.map((Agendadecodesign) => (
                  <div
                    className={styles.calendar}
                    onClick={onCalendarContainerClick}
                  >
                    <div className={styles.text99}>
                      {`${Agendadecodesign["attributes"]["date_debut"]} → ${Agendadecodesign["attributes"]["date_fin"]}`}
                    </div>
                    <div className={styles.text100}>
                      {Agendadecodesign["attributes"]["titre"]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <a
              className={styles.dcouvriragendalink}
              href="http://www.agendadecodesign.com/"
              target="_blank"
              onClick={onDcouvrirAgendaLinkClick}
            >
              <div className={styles.text1}>Découvrir l’agenda</div>
              <img className={styles.laurelIcon} alt="" src="/frame141.svg" />
            </a>
          </div>
        </div>
        <div className={styles.div66}>
          <img
            className={styles.fixedAspectRatioSpacerVar126}
            alt=""
            src="/-fixed-aspect-ratio-spacer-variants2@2x.jpg"
          />
          <div className={styles.div67}>
            <div className={styles.text108}>
              {`Du ${Rendezvous["attributes"]["date_debut"]} au ${Rendezvous["attributes"]["date_fin"]}`}
            </div>
            <div className={styles.text109}>Le Rendez-vous</div>
            <div className={styles.text109}>
              {Rendezvous["attributes"]["titre"]}
            </div>
            <p className={styles.text110}>
              {Rendezvous["attributes"]["description"]}
            </p>
            <div className={styles.boutons10} onClick={onBoutonsContainerClick}>
              <div className={styles.text1}>Lire la suite</div>
              <img className={styles.laurelIcon} alt="" src="/Icon.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.div68}>
        <div className={styles.designers}>
          <div className={styles.text108}>
            <span className={styles.portraitDeDesigner}>
              Portrait de designer
            </span>
            <span> - Le mag déco</span>
          </div>
          <div className={styles.div69}>
            {Designers.map((designer, index) => (
              <img
                className={styles.fixedAspectRatioSpacerVar127}
                alt=""
                src={
                  designer["attributes"]["image"]["data"]["attributes"]["url"]
                }
                onClick={onFixedAspectRatioSpacerVar127Click}
              />
            ))}
          </div>
        </div>
        <div className={styles.div70}>
          <img className={styles.imgIcon45} alt="" src="/-316292872@2x.jpg" />
          <img className={styles.divInner} alt="" src="/vector-531.svg" />
          <div className={styles.div71}>
            <div className={styles.text108}>
              Retrouvez les exposants des salons de la décoration.
            </div>
            <div className={styles.plusinformationslink}>
              <div className={styles.text4}>Plus d’information</div>
              <img className={styles.icon} alt="" src="/frame181.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

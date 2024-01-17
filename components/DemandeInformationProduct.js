import styles from "./DemandeInformationProduct.module.css";

const DemandeInformationProduct = ({ onClose }) => {
  return (
    <div className={styles.requestinformationproduct}>
      <div className={styles.div}>
        <div className={styles.logodecofinder}>
          <img className={styles.logo1Icon} alt="" src="/logo-1@2x.png" />
        </div>
        <img className={styles.mediaIcon} alt="" src="/media--icon@2x.png" />
      </div>
      <div className={styles.requestinformation}>
        <div className={styles.text}>Demande d’informations</div>
      </div>
      <img
        className={styles.requestinformationproductChild}
        alt=""
        src="/vector-6@2x.png"
      />
      <div className={styles.product}>
        <div className={styles.name}>
          <div className={styles.text}>Lum’art</div>
        </div>
        <div className={styles.div1}>
          <img className={styles.imgIcon} alt="" src="/1399209-1@2x.png" />
          <div className={styles.div2}>
            <div className={styles.name1}>Lum’art</div>
            <div className={styles.series}>
              <div className={styles.text2}>Série n°2</div>
            </div>
            <div className={styles.div}>
              <div className={styles.name}>
                <div className={styles.text}>Quantité envisagée :</div>
              </div>
              <div className={styles.quantitynumber}>
                <div className={styles.prcisezVotreDemande}>1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.requestinformationproductChild}
        alt=""
        src="/vector-6@2x.png"
      />
      <div className={styles.checkboxes}>
        <div className={styles.documentation}>
          <div className={styles.checkbox} />
          <div className={styles.text5}>
            Je souhaite recevoir votre documentation
          </div>
        </div>
        <div className={styles.documentation}>
          <div className={styles.checkbox} />
          <div className={styles.text5}>
            Je souhaite obtenir le prix (public TTC)
          </div>
        </div>
        <div className={styles.documentation}>
          <div className={styles.checkbox} />
          <div className={styles.text5}>
            Je souhaite recevoir la liste des points de vente
          </div>
        </div>
        <div className={styles.documentation}>
          <div className={styles.checkbox} />
          <div className={styles.text5}>Je souhaite être contacté</div>
        </div>
      </div>
      <div className={styles.textarea}>
        <div className={styles.prcisezVotreDemande}>
          Précisez votre demande (Facultatif)
        </div>
      </div>
      <div className={styles.individualorprofessional}>
        <div className={styles.text9}>Vous êtes un</div>
        <div className={styles.individual}>
          <div className={styles.checkbox} />
          <div className={styles.prcisezVotreDemande}>Particulier</div>
        </div>
        <div className={styles.individual}>
          <div className={styles.checkbox} />
          <div className={styles.prcisezVotreDemande}>Professionnel</div>
        </div>
      </div>
    </div>
  );
};

export default DemandeInformationProduct;

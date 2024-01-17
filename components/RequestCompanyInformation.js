import styles from "./RequestCompanyInformation.module.css";

const RequestCompanyInformation = ({ onClose }) => {
  return (
    <div className={styles.requestcompanyinformation}>
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
        className={styles.requestcompanyinformationChild}
        alt=""
        src="/vector-6@2x.png"
      />
      <div className={styles.checkboxes}>
        <div className={styles.documentation}>
          <div className={styles.checkbox} />
          <div className={styles.text1}>
            Je souhaite recevoir votre documentation
          </div>
        </div>
        <div className={styles.documentation}>
          <div className={styles.checkbox} />
          <div className={styles.text1}>
            Je souhaite recevoir la liste des points de vente
          </div>
        </div>
        <div className={styles.documentation}>
          <div className={styles.checkbox} />
          <div className={styles.text1}>Je souhaite être contacté</div>
        </div>
      </div>
      <div className={styles.textarea}>
        <div className={styles.prcisezVotreDemande}>
          Précisez votre demande (Facultatif)
        </div>
      </div>
      <div className={styles.individualorprofessional}>
        <div className={styles.text4}>Vous êtes un</div>
        <div className={styles.individual}>
          <div className={styles.checkbox} />
          <div className={styles.prcisezVotreDemande}>Particulier</div>
        </div>
        <div className={styles.individual}>
          <div className={styles.checkbox} />
          <div className={styles.prcisezVotreDemande}>Professionnel</div>
        </div>
      </div>
      <div className={styles.email}>
        <div className={styles.prcisezVotreDemande}>
          Votre email (Obligatoire)
        </div>
      </div>
      <div className={styles.boutons}>
        <div className={styles.next}>
          <img
            className={styles.promotionIcon}
            alt=""
            src="/promotion@2x.png"
          />
          <div className={styles.text7}>Suivant</div>
        </div>
        <img className={styles.icon} alt="" src="/icon@2x.png" />
      </div>
    </div>
  );
};

export default RequestCompanyInformation;

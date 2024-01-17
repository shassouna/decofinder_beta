import styles from "./AlertesNouveautes.module.css";

const AlertesNouveautes = ({ onClose }) => {
  return (
    <div className={styles.newsalerts}>
      <div className={styles.div}>
        <div className={styles.logodecofinder}>
          <img className={styles.logo1Icon} alt="" src="/logo-1@2x.png" />
        </div>
        <img className={styles.mediaIcon} alt="" src="/media--icon@2x.png" />
      </div>
      <div className={styles.title}>
        <div className={styles.text}>Alerte nouveautés</div>
      </div>
      <div className={styles.beinformedofnewproducts}>
        <div className={styles.checkbox} />
        <div className={styles.text1}>
          Je souhaite être tenu informé des nouveaux produits de cette
          entreprise
        </div>
      </div>
      <div className={styles.div1}>
        <div className={styles.civilityinput}>
          <div className={styles.title1}>Civilité</div>
          <img className={styles.icon} alt="" src="/icon@2x.png" />
        </div>
        <div className={styles.firsnameinput}>
          <div className={styles.title1}>Prénom</div>
        </div>
      </div>
      <div className={styles.div1}>
        <div className={styles.firsnameinput}>
          <div className={styles.title1}>Nom</div>
        </div>
        <div className={styles.firsnameinput}>
          <div className={styles.title1}>Email</div>
        </div>
      </div>
      <div className={styles.individualorprofessional}>
        <div className={styles.text2}>Vous êtes un</div>
        <div className={styles.professional}>
          <div className={styles.checkbox} />
          <div className={styles.title1}>Un professionnel de la déco</div>
        </div>
        <div className={styles.professional}>
          <div className={styles.checkbox} />
          <div className={styles.title1}>Un particulier</div>
        </div>
      </div>
      <div className={styles.text5}>
        Decofinder sélectionne pour vous les meilleures offres de ses
        partenaires. Profitez de ventes privées, d'invitations personnelles aux
        événements déco et design ou d'offres promotionnelles exclusives.
      </div>
      <div className={styles.beinformedofnewproducts}>
        <div className={styles.checkbox} />
        <div className={styles.text1}>
          Je souhaite également recevoir par email les bons plans de la déco et
          du design des partenaires de Decofinder.com.
        </div>
      </div>
      <div className={styles.boutons}>
        <div className={styles.div3}>
          <img
            className={styles.promotionIcon}
            alt=""
            src="/promotion@2x.png"
          />
          <div className={styles.text7}>Valider</div>
        </div>
        <img className={styles.icon1} alt="" src="/frame@2x.png" />
      </div>
    </div>
  );
};

export default AlertesNouveautes;

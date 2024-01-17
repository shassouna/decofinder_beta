import { useState } from "react";
import styles from "./ProductBuy.module.css";

const ProductBuy = ({ onClose }) => {
  const [boutonPrincipalValue, setBoutonPrincipalValue] = useState("");
  const [boutonPrincipal1Value, setBoutonPrincipal1Value] = useState("");
  const [boutonPrincipal2Value, setBoutonPrincipal2Value] = useState("");
  const [boutonPrincipal3Value, setBoutonPrincipal3Value] = useState("");
  const [boutonPrincipal6Value, setBoutonPrincipal6Value] = useState("");
  return (
    <div className={styles.productBuy}>
      <div className={styles.frameParent}>
        <div className={styles.logo1Wrapper}>
          <img className={styles.logo1Icon} alt="" src="/logo-11@2x.jpg" />
        </div>
        <img
          className={styles.mediaIcon}
          alt=""
          src="/media--icon1.svg"
          onClick={onClose}
        />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.textParent}>
          <span className={styles.text}>Vous allez accéder au site de</span>
          <img className={styles.frameChild} alt="" src="/frame-75442@2x.jpg" />
        </div>
        <p className={styles.text1}>
          Un seul formulaire suffit pour effectuer toutes vos demandes. Seules
          les entreprises que vous contacterez auront accès à ces informations.
        </p>
      </div>
      <div className={styles.boutonPrincipalParent}>
        <input
          className={styles.boutonPrincipal}
          placeholder="Nom"
          type="text"
          value={boutonPrincipalValue}
          onChange={(event) => setBoutonPrincipalValue(event.target.value)}
        />
        <input
          className={styles.boutonPrincipal}
          placeholder="Prénom"
          type="text"
          value={boutonPrincipal1Value}
          onChange={(event) => setBoutonPrincipal1Value(event.target.value)}
        />
      </div>
      <div className={styles.boutonPrincipalParent}>
        <input
          className={styles.boutonPrincipal}
          placeholder="Email"
          type="email"
          value={boutonPrincipal2Value}
          onChange={(event) => setBoutonPrincipal2Value(event.target.value)}
        />
        <input
          className={styles.boutonPrincipal}
          placeholder="Téléphone"
          type="tel"
          value={boutonPrincipal3Value}
          onChange={(event) => setBoutonPrincipal3Value(event.target.value)}
        />
      </div>
      <div className={styles.boutonPrincipalParent}>
        <select className={styles.boutonPrincipal4} required={true}>
          <option value="Algérie">Algérie</option>
          <option value="France">France</option>
        </select>
        <select className={styles.boutonPrincipal4} required={true}>
          <option value="Particulier">Particulier</option>
          <option value="Professionnel">Professionnel</option>
        </select>
      </div>
      <div className={styles.boutonPrincipalWrapper}>
        <input
          className={styles.boutonPrincipal}
          placeholder="Société"
          type="text"
          value={boutonPrincipal6Value}
          onChange={(event) => setBoutonPrincipal6Value(event.target.value)}
        />
      </div>
      <div className={styles.instanceParent}>
        <select className={styles.frameItem} />
        <p className={styles.text2}>
          Je souhaite également recevoir par email les bons plans de la déco et
          du design des partenaires de Decofinder.com.
        </p>
      </div>
      <button className={styles.boutons}>
        <div className={styles.promotionParent}>
          <img className={styles.promotionIcon} alt="" src="/promotion.svg" />
          <span className={styles.text3}>Envoyer</span>
        </div>
        <img className={styles.frameIcon} alt="" src="/frame25.svg" />
      </button>
    </div>
  );
};

export default ProductBuy;

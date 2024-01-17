import styles from "./Languages.module.css";

const LanguesPopup = ({ onClose }) => {
  return (
    <div class={styles.custom_select}>
      <select name="pets" id="pet_select">
        <option value="fr">Fr</option>
        <option value="gbr">Gbr</option>
        <option value="es">Es</option>
        <option value="de">De</option>
        <option value="it">It</option>
      </select>
      <div class={styles.select_styling}></div>
    </div>
  );
};

export default LanguesPopup;

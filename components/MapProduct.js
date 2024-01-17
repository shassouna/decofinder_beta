import styles from "./MapProduct.module.css";

const MapProduct = ({ onClose }) => {
  return (
    <div className={styles.mapProduct}>
      <div className={styles.div}>
        <div className={styles.div1}>
          <div className={styles.pointsofsale}>Les points de ventes de</div>
          <div className={styles.logo}>
            <img
              className={styles.solLuna1Icon}
              alt=""
              src="/solluna-1@2x.png"
            />
          </div>
        </div>
        <img
          className={styles.mediaIcon}
          alt=""
          src="/media--icon@2x.png"
          onClick={onClose}
        />
      </div>
      <img
        className={styles.imgIcon}
        alt=""
        src="/capture-decran-20231027-a-1703-1@2x.png"
      />
    </div>
  );
};

export default MapProduct;

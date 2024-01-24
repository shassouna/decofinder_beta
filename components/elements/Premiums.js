import { useCallback, useState, useEffect } from "react";
import styles from "../../pages/Univers.module.css";
import PortalPopup from "../PortalPopup";
import RequestCompanyInformation from "../RequestCompanyInformation";
const Premiums = () => {
  const images = [
    "/-fixed-aspect-ratio-spacer-variants15@2x.jpg",
    "/Oeuf-Bureau-Enfant-69495.jpg",
    "/Kocot-Kids-Bureau-Enfant-107229.jpg",
    // Add more image paths as needed
  ];
  // States
  const [
    isRequestCompanyInformationPopupOpen,
    setRequestCompanyInformationPopupOpen,
  ] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  // Effects
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length ? 1 : prevIndex + 1
      );
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  // Functions
  const onFixedAspectRatioSpacerVarClick = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  const onButtonContainerClick = useCallback(() => {
    window.open("https://www.google.com");
  }, []);

  const openRequestCompanyInformationPopup = useCallback(() => {
    setRequestCompanyInformationPopupOpen(true);
  }, []);

  const closeRequestCompanyInformationPopup = useCallback(() => {
    setRequestCompanyInformationPopupOpen(false);
  }, []);

  const handlePrevClick = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 1 ? images.length : prevIndex - 1
    );
  }, []);

  const handleNextClick = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length ? 1 : prevIndex + 1
    );
  }, []);

  const handlePaginationClick = useCallback((index) => {
    setCurrentImageIndex(index);
  }, []);

  return (
    <>
      <div className={styles.title21}>
        <div className={styles.text24}>Sélection - Nouveauté - Bestseller</div>
      </div>
      <div style={{ backgroundColor: "white", padding: "10px" }}>
        <div className={styles.slider}>
          <div className={styles.imageFrame}>
            <img
              className={styles.fixedAspectRatioSpacerVar}
              alt=""
              src={images[currentImageIndex - 1]}
              onClick={onFixedAspectRatioSpacerVarClick}
            />
            <img
              className={styles.centeredImage}
              alt=""
              src="/frame-75442@2x.jpg"
            />
          </div>
        </div>
        <div className={styles.description1}>
          <p className={styles.text26}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio non orci suscipit, id cursus odio ultrices. Sed vel
            massa eget ex elementum consectetur. In eget semper nunc.
            Pellentesque quis ligula vel nunc consectetur ullamcorper. Fusce
            dignissim arcu in suscipit tincidunt. Sed vel est eu urna euismod
            aliquet. Nullam ut justo ut libero scelerisque consequat.
          </p>
        </div>
        <div className={styles.nextpreview}>
          <img
            className={styles.previewIcon}
            alt=""
            src="/frame-7750.svg"
            onClick={handlePrevClick}
          />
          <div className={styles.pagination}>
            {images.map((image, index) => (
              <div
                key={index}
                className={styles.div86}
                onClick={() => handlePaginationClick(index + 1)}
              >
                <div
                  className={
                    index + 1 === currentImageIndex
                      ? styles.text20_active
                      : styles.text20
                  }
                >
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
          <img
            className={styles.nextIcon}
            alt=""
            src="/frame-7749.svg"
            onClick={handleNextClick}
          />
        </div>
        <div className={styles.buttons}>
          <div className={styles.button1} onClick={onButtonContainerClick}>
            <img className={styles.frameIcon1} alt="" src="/frame11.svg" />
            <div className={styles.text32}>Visiter le site</div>
          </div>
          <div
            className={styles.button2}
            onClick={openRequestCompanyInformationPopup}
          >
            <img className={styles.frameIcon1} alt="" src="/frame12.svg" />
            <div className={styles.text32}>Contacter l’entreprise</div>
          </div>
          <div className={styles.button3}>
            <img className={styles.frameIcon1} alt="" src="/frame13.svg" />
            <div className={styles.text32}>Collection</div>
          </div>
        </div>
        {isRequestCompanyInformationPopupOpen && (
          <PortalPopup
            overlayColor="rgba(113, 113, 113, 0.3)"
            placement="Centered"
            onOutsideClick={closeRequestCompanyInformationPopup}
          >
            <RequestCompanyInformation
              onClose={closeRequestCompanyInformationPopup}
            />
          </PortalPopup>
        )}
      </div>
    </>
  );
};
export default Premiums;

import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "../../pages/index.module.css";

const ProductsList = ({ title, title2, nbProducts }) => {
  const router = useRouter();

  const onImgImageClick = useCallback(() => {
    router.push("/DetailsProduit");
  }, [router]);

  const onExposantNameContainer4Click = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const onText30Click = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const onTypeproductNameText4Click = useCallback(() => {
    router.push("/P");
  }, [router]);

  const onExposantNameContainer5Click = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const onText32Click = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const onTypeproductNameText5Click = useCallback(() => {
    router.push("/P");
  }, [router]);

  const onExposantNameContainer6Click = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const onText34Click = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const onTypeproductNameText6Click = useCallback(() => {
    router.push("/P");
  }, [router]);

  const onExposantNameContainer7Click = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const onText36Click = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const onTypeproductNameText7Click = useCallback(() => {
    router.push("/P");
  }, [router]);

  const onExposantNameContainer8Click = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const onText38Click = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const onTypeproductNameText8Click = useCallback(() => {
    router.push("/P");
  }, [router]);

  const onExposantNameContainer9Click = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const onText40Click = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const onTypeproductNameText9Click = useCallback(() => {
    router.push("/P");
  }, [router]);

  const onExposantNameContainer10Click = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const onText42Click = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const onTypeproductNameText10Click = useCallback(() => {
    router.push("/P");
  }, [router]);

  const onExposantNameContainer11Click = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const onText44Click = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const onTypeproductNameText11Click = useCallback(() => {
    router.push("/P");
  }, [router]);

  const onExposantNameContainer12Click = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const onText46Click = useCallback(() => {
    router.push("/Entreprise");
  }, [router]);

  const onTypeproductNameText12Click = useCallback(() => {
    router.push("/P");
  }, [router]);

  return (
    <>
      {title && (
        <div className={styles.title1}>
          <h2 className={styles.text27}>{title}</h2>
          {nbProducts && (
            <div className={styles.productsnumber}>{nbProducts}</div>
          )}
        </div>
      )}
      {title2 && <div className={styles.text28}>{title2}</div>}
      <div className={styles.div8}>
        <article className={styles.articlep}>
          <img
            className={styles.imgIcon16}
            alt=""
            src="/frame-7920-1@2x.jpg"
            onClick={onImgImageClick}
          />
          <div className={styles.badge4}>
            <div className={styles.text2}>New</div>
          </div>
          <div className={styles.informations4}>
            <div className={styles.name}>
              <div
                className={styles.exposantname4}
                onClick={onExposantNameContainer4Click}
              >
                <div className={styles.text30} onClick={onText30Click}>
                  Deetjen Orfevre
                </div>
                <img className={styles.coeurIcon} alt="" src="/coeur.svg" />
              </div>
              <div
                className={styles.typeproductname4}
                onClick={onTypeproductNameText4Click}
              >
                Porte-bûches
              </div>
              <div className={styles.priceproduct}>Prix sur demande</div>
            </div>
          </div>
        </article>
        <article className={styles.articlep}>
          <img
            className={styles.imgIcon16}
            alt=""
            src="/frame-7920-1@2x.jpg"
            onClick={onImgImageClick}
          />
          <div className={styles.badge4}>
            <div className={styles.text2}>New</div>
          </div>
          <div className={styles.informations4}>
            <div className={styles.name}>
              <div
                className={styles.exposantname4}
                onClick={onExposantNameContainer5Click}
              >
                <div className={styles.text30} onClick={onText32Click}>
                  Deetjen Orfevre
                </div>
                <img className={styles.coeurIcon} alt="" src="/coeur.svg" />
              </div>
              <div
                className={styles.typeproductname4}
                onClick={onTypeproductNameText5Click}
              >
                Porte-bûches
              </div>
              <div className={styles.priceproduct}>Prix sur demande</div>
            </div>
          </div>
        </article>
        <article className={styles.articlep}>
          <img
            className={styles.imgIcon16}
            alt=""
            src="/frame-7920-1@2x.jpg"
            onClick={onImgImageClick}
          />
          <div className={styles.badge4}>
            <div className={styles.text2}>New</div>
          </div>
          <div className={styles.informations4}>
            <div className={styles.name}>
              <div
                className={styles.exposantname4}
                onClick={onExposantNameContainer6Click}
              >
                <div className={styles.text30} onClick={onText34Click}>
                  Deetjen Orfevre
                </div>
                <img className={styles.coeurIcon} alt="" src="/coeur.svg" />
              </div>
              <div
                className={styles.typeproductname4}
                onClick={onTypeproductNameText6Click}
              >
                Porte-bûches
              </div>
              <div className={styles.priceproduct}>Prix sur demande</div>
            </div>
          </div>
        </article>
        <article className={styles.articlep}>
          <img
            className={styles.imgIcon16}
            alt=""
            src="/frame-7920-1@2x.jpg"
            onClick={onImgImageClick}
          />
          <div className={styles.badge4}>
            <div className={styles.text2}>New</div>
          </div>
          <div className={styles.informations4}>
            <div className={styles.name}>
              <div
                className={styles.exposantname4}
                onClick={onExposantNameContainer7Click}
              >
                <div className={styles.text30} onClick={onText36Click}>
                  Deetjen Orfevre
                </div>
                <img className={styles.coeurIcon} alt="" src="/coeur.svg" />
              </div>
              <div
                className={styles.typeproductname4}
                onClick={onTypeproductNameText7Click}
              >
                Porte-bûches
              </div>
              <div className={styles.priceproduct}>Prix sur demande</div>
            </div>
          </div>
        </article>
        <article className={styles.articlep}>
          <img
            className={styles.imgIcon16}
            alt=""
            src="/frame-7920-1@2x.jpg"
            onClick={onImgImageClick}
          />
          <div className={styles.badge4}>
            <div className={styles.text2}>New</div>
          </div>
          <div className={styles.informations4}>
            <div className={styles.name}>
              <div
                className={styles.exposantname4}
                onClick={onExposantNameContainer8Click}
              >
                <div className={styles.text30} onClick={onText38Click}>
                  Deetjen Orfevre
                </div>
                <img className={styles.coeurIcon} alt="" src="/coeur.svg" />
              </div>
              <div
                className={styles.typeproductname4}
                onClick={onTypeproductNameText8Click}
              >
                Porte-bûches
              </div>
              <div className={styles.priceproduct}>Prix sur demande</div>
            </div>
          </div>
        </article>
        <article className={styles.articlep}>
          <img
            className={styles.imgIcon16}
            alt=""
            src="/frame-7920-1@2x.jpg"
            onClick={onImgImageClick}
          />
          <div className={styles.badge4}>
            <div className={styles.text2}>New</div>
          </div>
          <div className={styles.informations4}>
            <div className={styles.name}>
              <div
                className={styles.exposantname4}
                onClick={onExposantNameContainer9Click}
              >
                <div className={styles.text30} onClick={onText40Click}>
                  Deetjen Orfevre
                </div>
                <img className={styles.coeurIcon} alt="" src="/coeur.svg" />
              </div>
              <div
                className={styles.typeproductname4}
                onClick={onTypeproductNameText9Click}
              >
                Porte-bûches
              </div>
              <div className={styles.priceproduct}>Prix sur demande</div>
            </div>
          </div>
        </article>
        <article className={styles.articlep}>
          <img
            className={styles.imgIcon16}
            alt=""
            src="/frame-7920-1@2x.jpg"
            onClick={onImgImageClick}
          />
          <div className={styles.badge4}>
            <div className={styles.text2}>New</div>
          </div>
          <div className={styles.informations4}>
            <div className={styles.name}>
              <div
                className={styles.exposantname4}
                onClick={onExposantNameContainer10Click}
              >
                <div className={styles.text30} onClick={onText42Click}>
                  Deetjen Orfevre
                </div>
                <img className={styles.coeurIcon} alt="" src="/coeur.svg" />
              </div>
              <div
                className={styles.typeproductname4}
                onClick={onTypeproductNameText10Click}
              >
                Porte-bûches
              </div>
              <div className={styles.priceproduct}>Prix sur demande</div>
            </div>
          </div>
        </article>
        <article className={styles.articlep}>
          <img
            className={styles.imgIcon16}
            alt=""
            src="/frame-7920-1@2x.jpg"
            onClick={onImgImageClick}
          />
          <div className={styles.badge4}>
            <div className={styles.text2}>New</div>
          </div>
          <div className={styles.informations4}>
            <div className={styles.name}>
              <div
                className={styles.exposantname4}
                onClick={onExposantNameContainer11Click}
              >
                <div className={styles.text30} onClick={onText44Click}>
                  Deetjen Orfevre
                </div>
                <img className={styles.coeurIcon} alt="" src="/coeur.svg" />
              </div>
              <div
                className={styles.typeproductname4}
                onClick={onTypeproductNameText11Click}
              >
                Porte-bûches
              </div>
              <div className={styles.priceproduct}>Prix sur demande</div>
            </div>
          </div>
        </article>
        <article className={styles.articlep}>
          <img
            className={styles.imgIcon16}
            alt=""
            src="/frame-7920-1@2x.jpg"
            onClick={onImgImageClick}
          />
          <div className={styles.badge4}>
            <div className={styles.text2}>New</div>
          </div>
          <div className={styles.informations4}>
            <div className={styles.name}>
              <div
                className={styles.exposantname4}
                onClick={onExposantNameContainer12Click}
              >
                <div className={styles.text30} onClick={onText46Click}>
                  Deetjen Orfevre
                </div>
                <img className={styles.coeurIcon} alt="" src="/coeur.svg" />
              </div>
              <div
                className={styles.typeproductname4}
                onClick={onTypeproductNameText12Click}
              >
                Porte-bûches
              </div>
              <div className={styles.priceproduct}>Prix sur demande</div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};
export default ProductsList;

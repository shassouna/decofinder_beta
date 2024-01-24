import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "../../pages/MegaUnivers.module.css";

const CategoriesList = ({ title, title2, nbProducts, Categories }) => {
  const router = useRouter();

  const onImgImageClick = useCallback(() => {
    router.push("/DetailsProduit");
  }, [router]);

  const onTitleTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onDivContainerClick = useCallback(() => {
    router.push("/P");
  }, [router]);

  return (
    <>
      {title && (
        <div className={styles.div13}>
          <h2 className={styles.title2}>{title}</h2>
          {nbProducts && (
            <div className={styles.productsnumber1}>
              ({nbProducts} produits)
            </div>
          )}
        </div>
      )}
      {title2 && (
        <div className={styles.text11}>
          <h3>{title2}</h3>
        </div>
      )}
      <div className={styles.univers}>
        {Categories.map((Category, index) => (
          <article key={Category["id"]} className={styles.card9}>
            <img
              className={styles.imgIcon}
              alt=""
              src={`${Category["attributes"]["image"]["data"]["attributes"]["url"]}`}
              onClick={onImgImageClick}
            />
            <div className={styles.div15}>
              <div className={styles.div16}>
                <div className={styles.div17}>
                  <div className={styles.title3} onClick={onTitleTextClick}>
                    {Category["attributes"]["LIB"]}
                  </div>
                  {Category["attributes"]["typeprods"]["data"].map(
                    (typeprod, index) => (
                      <div
                        key={typeprod["id"]}
                        className={styles.div18}
                        onClick={onDivContainerClick}
                      >
                        <img
                          className={styles.divItem}
                          alt=""
                          src={"/ellipse-6.svg"}
                        />
                        <div className={styles.typeprod}>
                          {`${typeprod["attributes"]["LIB"]} (${typeprod["attributes"]["produits"]["data"].length})`}
                        </div>
                      </div>
                    )
                  )}
                </div>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector-16.svg"
                />
                {nbProducts && (
                  <div className={styles.productsnumber2}>100 produits</div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};
export default CategoriesList;

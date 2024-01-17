import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "../../pages/MegaUnivers.module.css";

const CategoriesList = ({ title, title2, nbProducts }) => {
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
        <article className={styles.card9}>
          <img
            className={styles.imgIcon}
            alt=""
            src="/img12@2x.jpg"
            onClick={onImgImageClick}
          />
          <div className={styles.div15}>
            <div className={styles.div16}>
              <div className={styles.div17}>
                <div className={styles.title3} onClick={onTitleTextClick}>
                  Deetjen Orfevre
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
              </div>
              <img className={styles.vectorIcon} alt="" src="/vector-16.svg" />
              <div className={styles.productsnumber2}>100 produits</div>
            </div>
          </div>
        </article>
        <article className={styles.card9}>
          <img
            className={styles.imgIcon}
            alt=""
            src="/img12@2x.jpg"
            onClick={onImgImageClick}
          />
          <div className={styles.div15}>
            <div className={styles.div16}>
              <div className={styles.div17}>
                <div className={styles.title3} onClick={onTitleTextClick}>
                  Deetjen Orfevre
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
              </div>
              <img className={styles.vectorIcon} alt="" src="/vector-16.svg" />
              <div className={styles.productsnumber2}>100 produits</div>
            </div>
          </div>
        </article>
        <article className={styles.card9}>
          <img
            className={styles.imgIcon}
            alt=""
            src="/img12@2x.jpg"
            onClick={onImgImageClick}
          />
          <div className={styles.div15}>
            <div className={styles.div16}>
              <div className={styles.div17}>
                <div className={styles.title3} onClick={onTitleTextClick}>
                  Deetjen Orfevre
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
              </div>
              <img className={styles.vectorIcon} alt="" src="/vector-16.svg" />
              <div className={styles.productsnumber2}>100 produits</div>
            </div>
          </div>
        </article>
        <article className={styles.card9}>
          <img
            className={styles.imgIcon}
            alt=""
            src="/img12@2x.jpg"
            onClick={onImgImageClick}
          />
          <div className={styles.div15}>
            <div className={styles.div16}>
              <div className={styles.div17}>
                <div className={styles.title3} onClick={onTitleTextClick}>
                  Deetjen Orfevre
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
              </div>
              <img className={styles.vectorIcon} alt="" src="/vector-16.svg" />
              <div className={styles.productsnumber2}>100 produits</div>
            </div>
          </div>
        </article>
        <article className={styles.card9}>
          <img
            className={styles.imgIcon}
            alt=""
            src="/img12@2x.jpg"
            onClick={onImgImageClick}
          />
          <div className={styles.div15}>
            <div className={styles.div16}>
              <div className={styles.div17}>
                <div className={styles.title3} onClick={onTitleTextClick}>
                  Deetjen Orfevre
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
              </div>
              <img className={styles.vectorIcon} alt="" src="/vector-16.svg" />
              <div className={styles.productsnumber2}>100 produits</div>
            </div>
          </div>
        </article>
        <article className={styles.card9}>
          <img
            className={styles.imgIcon}
            alt=""
            src="/img12@2x.jpg"
            onClick={onImgImageClick}
          />
          <div className={styles.div15}>
            <div className={styles.div16}>
              <div className={styles.div17}>
                <div className={styles.title3} onClick={onTitleTextClick}>
                  Deetjen Orfevre
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
              </div>
              <img className={styles.vectorIcon} alt="" src="/vector-16.svg" />
              <div className={styles.productsnumber2}>100 produits</div>
            </div>
          </div>
        </article>
        <article className={styles.card9}>
          <img
            className={styles.imgIcon}
            alt=""
            src="/img12@2x.jpg"
            onClick={onImgImageClick}
          />
          <div className={styles.div15}>
            <div className={styles.div16}>
              <div className={styles.div17}>
                <div className={styles.title3} onClick={onTitleTextClick}>
                  Deetjen Orfevre
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
              </div>
              <img className={styles.vectorIcon} alt="" src="/vector-16.svg" />
              <div className={styles.productsnumber2}>100 produits</div>
            </div>
          </div>
        </article>
        <article className={styles.card9}>
          <img
            className={styles.imgIcon}
            alt=""
            src="/img12@2x.jpg"
            onClick={onImgImageClick}
          />
          <div className={styles.div15}>
            <div className={styles.div16}>
              <div className={styles.div17}>
                <div className={styles.title3} onClick={onTitleTextClick}>
                  Deetjen Orfevre
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
              </div>
              <img className={styles.vectorIcon} alt="" src="/vector-16.svg" />
              <div className={styles.productsnumber2}>100 produits</div>
            </div>
          </div>
        </article>
        <article className={styles.card9}>
          <img
            className={styles.imgIcon}
            alt=""
            src="/img12@2x.jpg"
            onClick={onImgImageClick}
          />
          <div className={styles.div15}>
            <div className={styles.div16}>
              <div className={styles.div17}>
                <div className={styles.title3} onClick={onTitleTextClick}>
                  Deetjen Orfevre
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
                <div className={styles.div18} onClick={onDivContainerClick}>
                  <img className={styles.divItem} alt="" src="/ellipse-6.svg" />
                  <div className={styles.typeprod}>Déboucheur (16)</div>
                </div>
              </div>
              <img className={styles.vectorIcon} alt="" src="/vector-16.svg" />
              <div className={styles.productsnumber2}>100 produits</div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};
export default CategoriesList;

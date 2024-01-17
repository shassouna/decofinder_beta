import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./MegaUnivers.module.css";
import Nav from "../components/layouts/Nav";
import CategoriesList from "../components/elements/CategoriesList";

let Items = ["Su"];

const MegaUnivers = () => {
  const router = useRouter();

  const onCardClick = useCallback(() => {
    router.push("/Univers");
  }, [router]);

  const onCard1Click = useCallback(() => {
    router.push("/Univers");
  }, [router]);

  const onCard2Click = useCallback(() => {
    router.push("/Univers");
  }, [router]);

  const onCard3Click = useCallback(() => {
    router.push("/Univers");
  }, [router]);

  const onCard4Click = useCallback(() => {
    router.push("/Univers");
  }, [router]);

  const onCard5Click = useCallback(() => {
    router.push("/Univers");
  }, [router]);

  const onCard6Click = useCallback(() => {
    router.push("/Univers");
  }, [router]);

  const onCard7Click = useCallback(() => {
    router.push("/Univers");
  }, [router]);

  const onCard8Click = useCallback(() => {
    router.push("/Univers");
  }, [router]);

  return (
    <div className={styles.su}>
      <section className={styles.navpath}>
        <Nav Items={Items} />
      </section>
      <section className={styles.description}>
        <div className={styles.badge}>
          <div className={styles.text}>MegaUnivers</div>
        </div>
        <div className={styles.div1}>
          <div className={styles.div2}>
            <div className={styles.title}>
              <h1 className={styles.text1}>
                Imprégnateurs saturateurs - bricolage
              </h1>
            </div>
            <div className={styles.productsnumber}>(9 produits)</div>
          </div>
          <img className={styles.divChild} alt="" src="/vector-5.svg" />
          <p className={styles.paragraph}>
            <span className={styles.decofinderVousPropose}>
              Decofinder vous propose un univers de bricolage sous l'angle du
              nettoyage, de l'entretien et des décapants. Par exemple rénover,
              retravailler ou embellir le cuir. Nous vous faisons découvrir des
              marques et des articles spécifiques pour décaper et embellir
              toutes surfaces de cuir. Assouplisseur de cuir, des cirages avec
              des fonctions différentes.
            </span>
            <span className={styles.decofinderVousPropose}>
              Dans notre rubrique bricolage / entretien, nous mettons en avant
              tous les produits qui tournent autour du bois : des produits
              hydofuges qui imperméabilisent, protègent de l'humidité; d'autres
              comme les imprégnateurs qui protègent, masquent et décorent en une
              seule couche.
            </span>
            <span className={styles.decofinderVousPropose}>
              La catégorie des saturateurs de bois protègent par exemple votre
              terrasse contre les agressions climatiques ( intempéries, UV ) et
              imprègnent le bois par saturation de fibres. Choix idéal pour les
              caillebotis et terrasses, car ces saturateurs apportent une
              protection nourrissante et accompagnent le bois dans son
              évolution.
            </span>
          </p>
        </div>
      </section>
      <section className={styles.universsuperunivers}>
        <div className={styles.div3}>
          <h2 className={styles.title1}>Les univers bricolage</h2>
        </div>
        <div className={styles.univers}>
          <article className={styles.card} onClick={onCardClick}>
            <div className={styles.img}>
              <img
                className={styles.fixedAspectRatioSpacerVar}
                alt=""
                src="/-fixed-aspect-ratio-spacer-variants6@2x.jpg"
              />
              <div className={styles.badge1}>
                <div className={styles.text}>Inspiration</div>
              </div>
            </div>
            <div className={styles.div4}>
              <div className={styles.name}>Bricolage</div>
            </div>
          </article>
          <article className={styles.card} onClick={onCard1Click}>
            <div className={styles.img}>
              <img
                className={styles.fixedAspectRatioSpacerVar}
                alt=""
                src="/-fixed-aspect-ratio-spacer-variants6@2x.jpg"
              />
              <div className={styles.badge1}>
                <div className={styles.text}>Inspiration</div>
              </div>
            </div>
            <div className={styles.div4}>
              <div className={styles.name}>Bricolage</div>
            </div>
          </article>
          <article className={styles.card} onClick={onCard2Click}>
            <div className={styles.img}>
              <img
                className={styles.fixedAspectRatioSpacerVar}
                alt=""
                src="/-fixed-aspect-ratio-spacer-variants6@2x.jpg"
              />
              <div className={styles.badge1}>
                <div className={styles.text}>Inspiration</div>
              </div>
            </div>
            <div className={styles.div4}>
              <div className={styles.name}>Bricolage</div>
            </div>
          </article>
          <article className={styles.card} onClick={onCard3Click}>
            <div className={styles.img}>
              <img
                className={styles.fixedAspectRatioSpacerVar}
                alt=""
                src="/-fixed-aspect-ratio-spacer-variants6@2x.jpg"
              />
              <div className={styles.badge1}>
                <div className={styles.text}>Inspiration</div>
              </div>
            </div>
            <div className={styles.div4}>
              <div className={styles.name}>Bricolage</div>
            </div>
          </article>
          <article className={styles.card} onClick={onCard4Click}>
            <div className={styles.img}>
              <img
                className={styles.fixedAspectRatioSpacerVar}
                alt=""
                src="/-fixed-aspect-ratio-spacer-variants7@2x.jpg"
              />
              <div className={styles.badge1}>
                <div className={styles.text}>Inspiration</div>
              </div>
            </div>
            <div className={styles.div4}>
              <div className={styles.name}>Bricolage</div>
            </div>
          </article>
          <article className={styles.card} onClick={onCard5Click}>
            <div className={styles.img}>
              <img
                className={styles.fixedAspectRatioSpacerVar}
                alt=""
                src="/-fixed-aspect-ratio-spacer-variants7@2x.jpg"
              />
              <div className={styles.badge1}>
                <div className={styles.text}>Inspiration</div>
              </div>
            </div>
            <div className={styles.div4}>
              <div className={styles.name}>Bricolage</div>
            </div>
          </article>
          <article className={styles.card} onClick={onCard6Click}>
            <div className={styles.img}>
              <img
                className={styles.fixedAspectRatioSpacerVar}
                alt=""
                src="/-fixed-aspect-ratio-spacer-variants7@2x.jpg"
              />
              <div className={styles.badge1}>
                <div className={styles.text}>Inspiration</div>
              </div>
            </div>
            <div className={styles.div4}>
              <div className={styles.name}>Bricolage</div>
            </div>
          </article>
          <article className={styles.card} onClick={onCard7Click}>
            <div className={styles.img}>
              <img
                className={styles.fixedAspectRatioSpacerVar}
                alt=""
                src="/-fixed-aspect-ratio-spacer-variants7@2x.jpg"
              />
              <div className={styles.badge1}>
                <div className={styles.text}>Inspiration</div>
              </div>
            </div>
            <div className={styles.div4}>
              <div className={styles.name}>Bricolage</div>
            </div>
          </article>
          <article className={styles.card} onClick={onCard8Click}>
            <div className={styles.img}>
              <img
                className={styles.fixedAspectRatioSpacerVar}
                alt=""
                src="/-fixed-aspect-ratio-spacer-variants8@2x.jpg"
              />
              <div className={styles.badge1}>
                <div className={styles.text}>Inspiration</div>
              </div>
            </div>
            <div className={styles.div4}>
              <div className={styles.name}>Bricolage</div>
            </div>
          </article>
        </div>
      </section>
      <section className={styles.universsuperunivers}>
        <CategoriesList
          title="COUTELLERIE"
          nbProducts={1061}
          title2="Les catégories"
        />
      </section>
      <section className={styles.universsuperunivers}>
        <CategoriesList
          title="ACCESSOIRES DE TABLE (1373 Produits)"
          nbProducts={2049}
          title2="Les catégories"
        />
      </section>
      <section className={styles.universsuperunivers}>
        <CategoriesList
          title="VAISSELLE (3147 Produits)"
          nbProducts={6871}
          title2="Les catégories"
        />
      </section>
    </div>
  );
};

export default MegaUnivers;

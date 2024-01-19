import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "../../pages/index.module.css";

const CommuniquesDePresseList = ({ Communiques }) => {
  const router = useRouter();

  const onPressReleasClick = useCallback(() => {
    router.push("/Cpp");
  }, [router]);

  const onPressReleas1Click = useCallback(() => {
    router.push("/Cpp");
  }, [router]);

  const onPressReleas2Click = useCallback(() => {
    router.push("/Cpp");
  }, [router]);

  const onPressReleas3Click = useCallback(() => {
    router.push("/Cpp");
  }, [router]);

  const onPressReleas4Click = useCallback(() => {
    router.push("/Cpp");
  }, [router]);

  const onPressReleas5Click = useCallback(() => {
    router.push("/Cpp");
  }, [router]);

  const onPressReleas6Click = useCallback(() => {
    router.push("/Cpp");
  }, [router]);

  const onPressReleas7Click = useCallback(() => {
    router.push("/Cpp");
  }, [router]);

  const onBoutonsContainer6Click = useCallback(() => {
    router.push("/Cpp");
  }, [router]);

  return (
    <>
      <div className={styles.title2}>
        <h2 className={styles.text27}>Derniers communiqués de presse</h2>
      </div>
      <div className={styles.div8}>
        {Communiques.map((communique, index) => (
          <article
            key={communique["id"]}
            className={styles.pressreleas}
            onClick={onPressReleasClick}
          >
            <img className={styles.imgIcon37} alt="" src="/img6@2x.jpg" />
            <div className={styles.div41}>
              <div
                className={styles.text15}
                style={{ color: "black" }}
                dangerouslySetInnerHTML={{
                  __html: communique["attributes"]["titre"],
                }}
              />
              <div
                className={styles.text83}
                dangerouslySetInnerHTML={{
                  __html: communique["attributes"]["description"],
                }}
              />
            </div>
          </article>
        ))}
      </div>
      <div className={styles.boutons6} onClick={onBoutonsContainer6Click}>
        <div className={styles.viewpressreleases}>
          <div className={styles.text4}>Tous les communiqués de presse</div>
        </div>
      </div>
    </>
  );
};
export default CommuniquesDePresseList;

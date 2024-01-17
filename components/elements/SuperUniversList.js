import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "../../pages/index.module.css";

const SuperUniversList = ({ Superuniverss }) => {
  const router = useRouter();

  const onSuperuniversClick = useCallback(() => {
    router.push("/MegaUnivers");
  }, [router]);

  return (
    <>
      <div className={styles.title}>
        <h2 className={styles.text14}>Les Megas Univers</h2>
      </div>
      <div className={styles.div8}>
        {Superuniverss.map((superunivers, index) => (
          <article
            key={superunivers["id"]}
            className={styles.superunivers}
            onClick={onSuperuniversClick}
          >
            <img
              className={styles.imgIcon4}
              alt=""
              src={
                superunivers["attributes"]["image"]["data"]["attributes"]["url"]
              }
            />
            <div className={styles.name}>
              <div className={styles.text15}>
                {superunivers["attributes"]["LIB"]}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};
export default SuperUniversList;

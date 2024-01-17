import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "../../pages/MegaUnivers.module.css";

const Nav = ({ Items }) => {
  const router = useRouter();

  const onHomeLinkTextClick = useCallback(() => {
    router.push("/Accueil1");
  }, [router]);

  const onSuperuniversLinkTextClick = useCallback(() => {
    router.push("/MegaUnivers");
  }, [router]);

  const onUniversLinkTextClick = useCallback(() => {
    router.push("/Univers");
  }, [router]);

  const onCategoryLinkTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onTypeprodLinkTextClick = useCallback(() => {
    router.push("/P");
  }, [router]);

  const onProductLinkTextClick = useCallback(() => {
    router.push("/DetailsProduit");
  }, [router]);

  return (
    <div className={styles.div}>
      <>
        <div
          className={Items.length < 1 ? styles.categorylink : styles.homelink}
          onClick={onHomeLinkTextClick}
        >
          Accueil
        </div>
        {Items.length < 1 ? null : (
          <img className={styles.icon} alt="" src="/frame16.svg" />
        )}
      </>
      {Items.length > 0 && (
        <>
          <div
            className={Items.length < 2 ? styles.categorylink : styles.homelink}
            onClick={onSuperuniversLinkTextClick}
          >
            {Items[0]}
          </div>
          {Items.length < 2 ? null : (
            <img className={styles.icon} alt="" src="/frame16.svg" />
          )}
        </>
      )}
      {Items.length > 1 && (
        <>
          <div
            className={Items.length < 3 ? styles.categorylink : styles.homelink}
            onClick={onUniversLinkTextClick}
          >
            {Items[1]}
          </div>
          {Items.length < 3 ? null : (
            <img className={styles.icon} alt="" src="/frame16.svg" />
          )}
        </>
      )}
      {Items.length > 2 && (
        <>
          <div
            className={Items.length < 4 ? styles.categorylink : styles.homelink}
            onClick={onCategoryLinkTextClick}
          >
            {Items[2]}
          </div>
          {Items.length < 4 ? null : (
            <img className={styles.icon} alt="" src="/frame16.svg" />
          )}
        </>
      )}
      {Items.length > 3 && (
        <>
          <div
            className={Items.length < 5 ? styles.categorylink : styles.homelink}
            onClick={onTypeprodLinkTextClick}
          >
            {Items[3]}
          </div>
          {Items.length < 5 ? null : (
            <img className={styles.icon} alt="" src="/frame16.svg" />
          )}
        </>
      )}
      {Items.length > 4 && (
        <div
          className={Items.length < 6 ? styles.categorylink : styles.homelink}
          onClick={onProductLinkTextClick}
        >
          {Items[4]}
        </div>
      )}
    </div>
  );
};
export default Nav;

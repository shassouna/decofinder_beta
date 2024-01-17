import { useState, useCallback } from "react";
import styles from "./Menu.module.css";
import PortalPopup from "../PortalPopup";
import Langues from "../Languages";

const Menu = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const onFrameImageClick = useCallback(() => {
    // Please sync "su" to the project
  }, []);

  const onTextContainerClick = useCallback(() => {
    // Please sync "a" to the project
  }, []);

  const onTextContainer1Click = useCallback(() => {
    window.open("https://mag.decofinder.com");
  }, []);

  const onTextContainer2Click = useCallback(() => {
    // Please sync "a" to the project
  }, []);

  const onMenuContainerClick = useCallback(() => {
    // Please sync "su" to the project
  }, []);

  const onMenuContainer1Click = useCallback(() => {
    // Please sync "su" to the project
  }, []);

  const onMenuContainer2Click = useCallback(() => {
    // Please sync "su" to the project
  }, []);

  const onMenuContainer3Click = useCallback(() => {
    // Please sync "su" to the project
  }, []);

  const onMenuContainer4Click = useCallback(() => {
    // Please sync "su" to the project
  }, []);

  const onMenuContainer5Click = useCallback(() => {
    // Please sync "su" to the project
  }, []);

  const onMenuContainer6Click = useCallback(() => {
    // Please sync "su" to the project
  }, []);

  const onMenuContainer7Click = useCallback(() => {
    // Please sync "su" to the project
  }, []);

  const onMenuContainer8Click = useCallback(() => {
    // Please sync "su" to the project
  }, []);

  const onMenuContainer9Click = useCallback(() => {
    // Please sync "su" to the project
  }, []);

  const onMenuContainer10Click = useCallback(() => {
    // Please sync "su" to the project
  }, []);

  const onMenuContainer11Click = useCallback(() => {
    // Please sync "su" to the project
  }, []);

  const onText15Click = useCallback(() => {
    // Please sync "u" to the project
  }, []);

  const onText16Click = useCallback(() => {
    // Please sync "c" to the project
  }, []);

  const onText31Click = useCallback(() => {
    // Please sync "u" to the project
  }, []);

  const onText40Click = useCallback(() => {
    // Please sync "u" to the project
  }, []);

  const onText54Click = useCallback(() => {
    // Please sync "u" to the project
  }, []);

  const onText59Click = useCallback(() => {
    // Please sync "u" to the project
  }, []);

  const onText64Click = useCallback(() => {
    // Please sync "u" to the project
  }, []);

  const onFrameContainer12Click = useCallback(() => {
    // Please sync "selection" to the project
  }, []);

  const onFrameContainer13Click = useCallback(() => {
    // Please sync "selection" to the project
  }, []);

  const onFrameContainer14Click = useCallback(() => {
    // Please sync "selection" to the project
  }, []);

  const onFrameContainer15Click = useCallback(() => {
    // Please sync "selection" to the project
  }, []);

  return (
    <div className={styles.menu} onMouseLeave={() => setShowMenu(false)}>
      <div className={styles.navParent}>
        <header className={styles.nav} onMouseEnter={() => setShowMenu(false)}>
          <img
            className={styles.navChild}
            alt=""
            src="/frame-7846@2x.jpg"
            onClick={onFrameImageClick}
          />
          <div className={styles.searchParent}>
            <img className={styles.iconeMenu} alt="" src="/search-icon.svg" />
            <input
              className={styles.search}
              placeholder="Recherchez dans plus de 300 000 produits et entreprises"
              type="text"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
            <div className={styles.frameParent}>
              <div className={styles.textParent}>
                <div className={styles.text} onClick={onTextContainerClick}>
                  <div className={styles.text1}>Inspiration</div>
                </div>

                <div className={styles.text} onClick={onTextContainer1Click}>
                  <div className={styles.text1}>Le mag</div>
                </div>
                <div className={styles.text} onClick={onTextContainer2Click}>
                  <div className={styles.text1}>Nouveauté</div>
                </div>
              </div>
              <div className={styles.clocheParent}>
                <div className={styles.cloche}>
                  <img
                    className={styles.iconeMenu}
                    alt=""
                    src="/icone-menu.svg"
                  />
                </div>
                <div className={styles.iconWorld}>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/frame-world.svg"
                  />
                </div>

                <div className={styles.iconWorld}>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/frame-love.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
        <nav className={styles.menu1}>
          <div className={styles.nav1}>
            <div className={styles.menuParent}>
              <div className={styles.menu2} onClick={onMenuContainerClick}>
                <div
                  className={styles.text6}
                  onMouseEnter={() => setShowMenu(true)}
                >
                  Arts de la table
                </div>
                <img
                  className={styles.frameIcon2}
                  alt=""
                  src="/line-header.svg"
                />
              </div>
              <div className={styles.menu2} onClick={onMenuContainer1Click}>
                <div
                  className={styles.text6}
                  onMouseEnter={() => setShowMenu(true)}
                >
                  Bricolage
                </div>
                <img
                  className={styles.frameIcon2}
                  alt=""
                  src="/line-header.svg"
                />
              </div>
              <div className={styles.menu2} onClick={onMenuContainer2Click}>
                <div
                  className={styles.text6}
                  onMouseEnter={() => setShowMenu(true)}
                >{`Cuisine & bain`}</div>
                <img
                  className={styles.frameIcon2}
                  alt=""
                  src="/line-header.svg"
                />
              </div>
              <div className={styles.menu2} onClick={onMenuContainer3Click}>
                <div
                  className={styles.text6}
                  onMouseEnter={() => setShowMenu(true)}
                >
                  Décoration
                </div>
                <img
                  className={styles.frameIcon2}
                  alt=""
                  src="/line-header.svg"
                />
              </div>
              <div className={styles.menu6} onClick={onMenuContainer4Click}>
                <div
                  className={styles.text10}
                  onMouseEnter={() => setShowMenu(true)}
                >
                  Enfant
                </div>
                <img
                  className={styles.frameIcon2}
                  alt=""
                  src="/line-header.svg"
                />
              </div>
              <div className={styles.menu2} onClick={onMenuContainer5Click}>
                <div
                  className={styles.text6}
                  onMouseEnter={() => setShowMenu(true)}
                >
                  Équipement
                </div>
                <img
                  className={styles.frameIcon2}
                  alt=""
                  src="/line-header.svg"
                />
              </div>
              <div className={styles.menu2} onClick={onMenuContainer6Click}>
                <div
                  className={styles.text6}
                  onMouseEnter={() => setShowMenu(true)}
                >
                  Extérieur
                </div>
                <img
                  className={styles.frameIcon2}
                  alt=""
                  src="/line-header.svg"
                />
              </div>
              <div className={styles.menu6} onClick={onMenuContainer7Click}>
                <div
                  className={styles.text10}
                  onMouseEnter={() => setShowMenu(true)}
                >
                  High-tech
                </div>
                <img
                  className={styles.frameIcon2}
                  alt=""
                  src="/line-header.svg"
                />
              </div>
              <div className={styles.menu6} onClick={onMenuContainer8Click}>
                <div
                  className={styles.text6}
                  onMouseEnter={() => setShowMenu(true)}
                >
                  Luminaire
                </div>
                <img
                  className={styles.frameIcon2}
                  alt=""
                  src="/line-header.svg"
                />
              </div>
              <div className={styles.menu6} onClick={onMenuContainer9Click}>
                <div
                  className={styles.text6}
                  onMouseEnter={() => setShowMenu(true)}
                >{`Mur plafond & sol`}</div>
                <img
                  className={styles.frameIcon2}
                  alt=""
                  src="/line-header.svg"
                />
              </div>
              <div className={styles.menu6} onClick={onMenuContainer10Click}>
                <div
                  className={styles.text6}
                  onMouseEnter={() => setShowMenu(true)}
                >
                  Mobilier
                </div>
                <img
                  className={styles.frameIcon2}
                  alt=""
                  src="/line-header.svg"
                />
              </div>
              <div className={styles.menu6} onClick={onMenuContainer11Click}>
                <div
                  className={styles.text6}
                  onMouseEnter={(e) => {
                    setShowMenu(true);
                    e.target.style.color = "black";
                  }}
                >
                  Textile
                </div>
                <img
                  className={styles.frameIcon2}
                  alt=""
                  src="/line-header.svg"
                />
              </div>
            </div>
          </div>
          <img className={styles.menuChild} alt="" src="/vector-1.svg" />
        </nav>
      </div>
      {showMenu && (
        <div className={styles.menu14}>
          <img className={styles.menuChild} alt="" src="/vector-1.svg" />
          <div className={styles.nav2}>
            <div className={styles.textGroup}>
              <div className={styles.text18} onClick={onText15Click}>
                Accessoires de table
              </div>
              <img
                className={styles.frameChild}
                alt=""
                src="/line-header.svg"
              />
              <div className={styles.text19}>
                <div className={styles.text20} onClick={onText16Click}>
                  • Autour du thé
                </div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Autour du vin</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Bouchons</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Cloches</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Cocktail et apéritif</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Corbeilles</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Dessous de plats</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>
                  • Divers Accessoires de table
                </div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Décors de table</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Épices</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Marques</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Pinces et piques</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Rafraichir</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Servir et Maintenir Chaud</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Tire-bouchons</div>
              </div>
            </div>
            <div className={styles.textGroup}>
              <div className={styles.text49} onClick={onText31Click}>
                Coutellerie
              </div>
              <img
                className={styles.frameChild}
                alt=""
                src="/line-header.svg"
              />
              <div className={styles.text19}>
                <div className={styles.text22}>• Couteaux</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Couverts</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Cuillères</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Divers Coutellerie</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Fouchettes</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Louches</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Pelles</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Pinces</div>
              </div>
            </div>
            <div className={styles.textGroup}>
              <div className={styles.text49} onClick={onText40Click}>
                Vaisselle
              </div>
              <img
                className={styles.frameChild}
                alt=""
                src="/line-header.svg"
              />
              <div className={styles.text19}>
                <div className={styles.text22}>• Assiettes</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Beurriers</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Bols</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Cafetières et théières</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Contenants divers</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Coquetiers</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Coupes et coupelles</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Divers Vaisselle</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Plats</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Pots</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Saladier</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Services de table</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Tasses</div>
              </div>
            </div>
            <div className={styles.textGroup}>
              <div className={styles.text18} onClick={onText54Click}>
                Verrerie
              </div>
              <img
                className={styles.frameChild}
                alt=""
                src="/line-header.svg"
              />
              <div className={styles.text19}>
                <div className={styles.text22}>• Carafes</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Divers Table Verrerie</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Services de verres</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Verres</div>
              </div>
            </div>
            <div className={styles.textGroup}>
              <div className={styles.text18} onClick={onText59Click}>
                Verrerie
              </div>
              <img
                className={styles.frameChild}
                alt=""
                src="/line-header.svg"
              />
              <div className={styles.text19}>
                <div className={styles.text22}>• Carafes</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Divers Table Verrerie</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Services de verres</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Verres</div>
              </div>
            </div>
            <div className={styles.textGroup}>
              <div className={styles.text18} onClick={onText64Click}>
                Verrerie
              </div>
              <img
                className={styles.frameChild}
                alt=""
                src="/line-header.svg"
              />
              <div className={styles.text19}>
                <div className={styles.text22}>• Carafes</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Divers Table Verrerie</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Services de verres</div>
              </div>
              <div className={styles.text19}>
                <div className={styles.text22}>• Verres</div>
              </div>
            </div>
            <div className={styles.textParent4}>
              <div className={styles.text120}>Trouver un :</div>
              <img
                className={styles.frameChild}
                alt=""
                src="/line-header.svg"
              />
              <div
                className={styles.frameGroup}
                onClick={onFrameContainer12Click}
              >
                <img className={styles.frameIcon14} alt="" src="/frame.svg" />
                <div className={styles.text121}>Créateur Designer</div>
              </div>
              <div
                className={styles.frameGroup}
                onClick={onFrameContainer13Click}
              >
                <img className={styles.frameIcon14} alt="" src="/frame.svg" />
                <div className={styles.text121}>Fabricant</div>
              </div>
              <div
                className={styles.frameGroup}
                onClick={onFrameContainer14Click}
              >
                <img className={styles.frameIcon14} alt="" src="/frame.svg" />
                <div className={styles.text121}>Importateur</div>
              </div>
              <div
                className={styles.frameGroup}
                onClick={onFrameContainer15Click}
              >
                <img className={styles.frameIcon14} alt="" src="/frame.svg" />
                <div className={styles.text121}>Distributeur</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;

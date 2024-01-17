import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../pages/Univers.module.css";

const domainess = [
  { text: "Adgo Sklep", checked: false },
  { text: "Bexalt", checked: false },
  { text: "Cmorgrad", checked: false },
  { text: "Dnjou Tolerie", checked: false },
];

const Nav = ({
  Page,
  SuperuniversName,
  UniversName,
  CategoryName,
  TypeprodName,
}) => {
  // States
  const [showDomaines, setShowDomaines] = useState(true);
  const [showMarques, setShowMarques] = useState(true);
  const [showDesigners, setShowDesigners] = useState(true);
  const [showStyles, setShowStyles] = useState(true);
  const [showCouleurs, setShowCouleurs] = useState(true);
  const [showMotifs, setShowMotifs] = useState(true);
  const [showMateriaux, setShowMateriaux] = useState(true);
  const [showPrix, setShowPrix] = useState(true);
  const [showCategoriesOfUnivers, setShowCategoriesOfUnivers] = useState(true);
  const [showUniversOfSuperunivers, setShowUniversOfSuperunivers] =
    useState(true);
  const [showTypeprodsOfCategory, setShowTypeprodsOfCategory] = useState(true);

  const [domaines, setDomaines] = useState([...domainess]);
  const [marques, setMarques] = useState([...domainess]);
  const [designers, setDesigners] = useState([...domainess]);
  const [styless, setStyles] = useState([...domainess]);
  const [couleurs, setCouleurs] = useState([...domainess]);
  const [motifs, setMotifs] = useState([...domainess]);
  const [materiaux, setMateriaux] = useState([...domainess]);

  const [inputValueDomaines, setInputValueDomaines] = useState("");
  const [inputValueMarques, setInputValueMarques] = useState("");
  const [inputValueDesigners, setInputValueDesigners] = useState("");
  const [inputValueStyles, setInputValueStyles] = useState("");
  const [inputValueCouleurs, setInputValueCouleurs] = useState("");
  const [inputValueMotifs, setInputValueMotifs] = useState("");
  const [inputValueMateriaux, setInputValueMateriaux] = useState("");
  const [InputValueMinimumPrice, setInputValueMinimumPrice] = useState();
  const [InputValueMaximumPrice, setInputValueMaximumPrice] = useState();

  // Routers
  const router = useRouter();

  // Functions
  const onFilterContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onFilterContainer1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onFilterContainer2Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const handleShowFilters = useCallback(
    (filterName) => {
      if (filterName === "Domaines") {
        setShowDomaines(!showDomaines);
      } else if (filterName === "Marques") {
        setShowMarques(!showMarques);
      } else if (filterName === "Designers") {
        setShowDesigners(!showDesigners);
      } else if (filterName === "Styles") {
        setShowStyles(!showStyles);
      } else if (filterName === "Couleurs") {
        setShowCouleurs(!showCouleurs);
      } else if (filterName === "Motifs") {
        setShowMotifs(!showMotifs);
      } else if (filterName === "Materiaux") {
        setShowMateriaux(!showMateriaux);
      } else if (filterName === "Prix") {
        setShowPrix(!showPrix);
      } else if (filterName === "TypeprodsOfCategory") {
        setShowTypeprodsOfCategory(!showTypeprodsOfCategory);
      } else if (filterName === "CategoriesOfUnivers") {
        setShowCategoriesOfUnivers(!showCategoriesOfUnivers);
      } else if (filterName === "UniversOfSuperunivers") {
        setShowUniversOfSuperunivers(!showUniversOfSuperunivers);
      }
    },
    [
      showDomaines,
      showMarques,
      showDesigners,
      showStyles,
      showCouleurs,
      showMotifs,
      showMateriaux,
      showPrix,
      showTypeprodsOfCategory,
      showCategoriesOfUnivers,
      showUniversOfSuperunivers,
    ]
  );

  const handleSearchFilters = useCallback((event, filterName) => {
    if (filterName === "Domaines") {
      setInputValueDomaines(event.target.value.trim().toLowerCase());
    } else if (filterName === "Marques") {
      setInputValueMarques(event.target.value.trim().toLowerCase());
    } else if (filterName === "Designers") {
      setInputValueDesigners(event.target.value.trim().toLowerCase());
    } else if (filterName === "Styles") {
      setInputValueStyles(event.target.value.trim().toLowerCase());
    } else if (filterName === "Couleurs") {
      setInputValueCouleurs(event.target.value.trim().toLowerCase());
    } else if (filterName === "Motifs") {
      setInputValueMotifs(event.target.value.trim().toLowerCase());
    } else if (filterName === "Materiaux") {
      setInputValueMateriaux(event.target.value.trim().toLowerCase());
    } else if (filterName === "MinPrix") {
      setInputValueMinimumPrice(event.target.value);
    } else if (filterName === "MaxPrix") {
      setInputValueMaximumPrice(event.target.value);
    }
  }, []);

  const handleCheckBoxes = useCallback(
    (filterName, filterText) => {
      if (filterName === "Domaines") {
        const domainesLocal = domaines.map((item) =>
          item.text === filterText ? { ...item, checked: !item.checked } : item
        );
        setDomaines(domainesLocal);
      } else if (filterName === "Marques") {
        const marquesLocal = marques.map((item) =>
          item.text === filterText ? { ...item, checked: !item.checked } : item
        );
        setMarques(marquesLocal);
      } else if (filterName === "Designers") {
        const designersLocal = designers.map((item) =>
          item.text === filterText ? { ...item, checked: !item.checked } : item
        );
        setDesigners(designersLocal);
      } else if (filterName === "Styles") {
        const stylesLocal = styless.map((item) =>
          item.text === filterText ? { ...item, checked: !item.checked } : item
        );
        setStyles(stylesLocal);
      } else if (filterName === "Couleurs") {
        const couleursLocal = couleurs.map((item) =>
          item.text === filterText ? { ...item, checked: !item.checked } : item
        );
        setCouleurs(couleursLocal);
      } else if (filterName === "Motifs") {
        const motifsLocal = motifs.map((item) =>
          item.text === filterText ? { ...item, checked: !item.checked } : item
        );
        setMotifs(motifsLocal);
      } else if (filterName === "Materiaux") {
        const materiauxLocal = materiaux.map((item) =>
          item.text === filterText ? { ...item, checked: !item.checked } : item
        );
        setMateriaux(materiauxLocal);
      }
    },
    [domaines, marques, designers, styles, couleurs, motifs, materiaux]
  );

  return (
    <>
      {
        /* Case Univers Page  */
        Page === "Univers" && (
          <>
            <div className={styles.catgories}>
              <div className={styles.title1}>
                <div className={styles.text1}>
                  Catégories de l'Univers {UniversName}
                </div>
                <img
                  className={styles.divIcon}
                  alt=""
                  src={showCategoriesOfUnivers ? "/frame8.svg" : "/frame6.svg"}
                  onClick={() => handleShowFilters("CategoriesOfUnivers")}
                />
              </div>
              {showCategoriesOfUnivers && (
                <>
                  <div className={styles.contenus}>
                    <div className={styles.textParent}>
                      <div className={styles.text2}>Divers entretien</div>
                      <div className={styles.productsnumber}>(99)</div>
                    </div>
                    <img
                      className={styles.frameIcon}
                      alt=""
                      src="/frame@2x.png"
                    />
                  </div>
                  <div
                    className={styles.filter}
                    onClick={onFilterContainerClick}
                  >
                    <div className={styles.textParent}>
                      <div className={styles.text2}>
                        Imprégnateurs saturateurs
                      </div>
                      <div className={styles.productsnumber}>(9)</div>
                    </div>
                    <img className={styles.divIcon1} alt="" src="/frame7.svg" />
                  </div>
                  <div
                    className={styles.filter}
                    onClick={onFilterContainer1Click}
                  >
                    <div className={styles.textParent}>
                      <div className={styles.text2}>Laver nettoyer</div>
                      <div className={styles.productsnumber}>(176)</div>
                    </div>
                    <img className={styles.divIcon1} alt="" src="/frame7.svg" />
                  </div>
                  <div
                    className={styles.filter}
                    onClick={onFilterContainer2Click}
                  >
                    <div className={styles.textParent}>
                      <div className={styles.text2}>Nettoyants - décapants</div>
                      <div className={styles.productsnumber}>(143)</div>
                    </div>
                    <img className={styles.divIcon1} alt="" src="/frame7.svg" />
                  </div>
                </>
              )}
            </div>
            <img
              className={styles.leftfiltersChild}
              alt=""
              src="/vector-81.svg"
            />
            <div className={styles.catgories}>
              <div className={styles.title1}>
                <div className={styles.text1}>
                  Les autres univers de {SuperuniversName}
                </div>
                <img
                  className={styles.divIcon}
                  alt=""
                  src={
                    showUniversOfSuperunivers ? "/frame8.svg" : "/frame6.svg"
                  }
                  onClick={() => handleShowFilters("UniversOfSuperunivers")}
                />
              </div>
              {showUniversOfSuperunivers && (
                <>
                  <div className={styles.contenus}>
                    <div className={styles.textParent}>
                      <div className={styles.text2}>Quincaillerie</div>
                      <div className={styles.productsnumber}>(99)</div>
                    </div>
                    <img
                      className={styles.frameIcon}
                      alt=""
                      src="/frame@2x.png"
                    />
                  </div>
                  <div
                    className={styles.filter}
                    onClick={onFilterContainerClick}
                  >
                    <div className={styles.textParent}>
                      <div className={styles.text2}>Outillage</div>
                      <div className={styles.productsnumber}>(9)</div>
                    </div>
                    <img className={styles.divIcon1} alt="" src="/frame7.svg" />
                  </div>
                  <div
                    className={styles.filter}
                    onClick={onFilterContainer1Click}
                  >
                    <div className={styles.textParent}>
                      <div className={styles.text2}>Bricolage</div>
                      <div className={styles.productsnumber}>(176)</div>
                    </div>
                    <img className={styles.divIcon1} alt="" src="/frame7.svg" />
                  </div>
                  <div
                    className={styles.filter}
                    onClick={onFilterContainer2Click}
                  >
                    <div className={styles.textParent}>
                      <div className={styles.text2}>Nettoyants - décapants</div>
                      <div className={styles.productsnumber}>(143)</div>
                    </div>
                    <img className={styles.divIcon1} alt="" src="/frame7.svg" />
                  </div>
                </>
              )}
            </div>
            <img
              className={styles.leftfiltersChild}
              alt=""
              src="/vector-81.svg"
            />
          </>
        )
      }
      {
        /* Case Category Page  */
        Page === "Category" && (
          <>
            <div className={styles.catgories}>
              <div className={styles.title1}>
                <div className={styles.text1}>
                  Type-Produits de la catégorie {CategoryName}
                </div>
                <img
                  className={styles.divIcon}
                  alt=""
                  src={showTypeprodsOfCategory ? "/frame8.svg" : "/frame6.svg"}
                  onClick={() => handleShowFilters("TypeprodsOfCategory")}
                />
              </div>
              {showTypeprodsOfCategory && (
                <>
                  <div className={styles.contenus}>
                    <div className={styles.textParent}>
                      <div className={styles.text2}>Type produit 1</div>
                      <div className={styles.productsnumber}>(99)</div>
                    </div>
                    <img
                      className={styles.frameIcon}
                      alt=""
                      src="/frame@2x.png"
                    />
                  </div>
                  <div
                    className={styles.filter}
                    onClick={onFilterContainerClick}
                  >
                    <div className={styles.textParent}>
                      <div className={styles.text2}>Type produit 2</div>
                      <div className={styles.productsnumber}>(9)</div>
                    </div>
                    <img className={styles.divIcon1} alt="" src="/frame7.svg" />
                  </div>
                  <div
                    className={styles.filter}
                    onClick={onFilterContainer1Click}
                  >
                    <div className={styles.textParent}>
                      <div className={styles.text2}>Type produit 3</div>
                      <div className={styles.productsnumber}>(176)</div>
                    </div>
                    <img className={styles.divIcon1} alt="" src="/frame7.svg" />
                  </div>
                  <div
                    className={styles.filter}
                    onClick={onFilterContainer2Click}
                  >
                    <div className={styles.textParent}>
                      <div className={styles.text2}>Nettoyants - décapants</div>
                      <div className={styles.productsnumber}>(143)</div>
                    </div>
                    <img className={styles.divIcon1} alt="" src="/frame7.svg" />
                  </div>
                </>
              )}
            </div>
            <img
              className={styles.leftfiltersChild}
              alt=""
              src="/vector-81.svg"
            />
            <div className={styles.catgories}>
              <div className={styles.title1}>
                <div className={styles.text1}>
                  Les autres categories de {UniversName}
                </div>
                <img
                  className={styles.divIcon}
                  alt=""
                  src={showCategoriesOfUnivers ? "/frame8.svg" : "/frame6.svg"}
                  onClick={() => handleShowFilters("CategoriesOfUnivers")}
                />
              </div>
              {showCategoriesOfUnivers && (
                <>
                  <div className={styles.contenus}>
                    <div className={styles.textParent}>
                      <div className={styles.text2}>Catégorie 1</div>
                      <div className={styles.productsnumber}>(99)</div>
                    </div>
                    <img
                      className={styles.frameIcon}
                      alt=""
                      src="/frame@2x.png"
                    />
                  </div>
                  <div
                    className={styles.filter}
                    onClick={onFilterContainerClick}
                  >
                    <div className={styles.textParent}>
                      <div className={styles.text2}>Catégorie 2</div>
                      <div className={styles.productsnumber}>(9)</div>
                    </div>
                    <img className={styles.divIcon1} alt="" src="/frame7.svg" />
                  </div>
                  <div
                    className={styles.filter}
                    onClick={onFilterContainer1Click}
                  >
                    <div className={styles.textParent}>
                      <div className={styles.text2}>Catégorie 3</div>
                      <div className={styles.productsnumber}>(176)</div>
                    </div>
                    <img className={styles.divIcon1} alt="" src="/frame7.svg" />
                  </div>
                  <div
                    className={styles.filter}
                    onClick={onFilterContainer2Click}
                  >
                    <div className={styles.textParent}>
                      <div className={styles.text2}>Catégorie 4</div>
                      <div className={styles.productsnumber}>(143)</div>
                    </div>
                    <img className={styles.divIcon1} alt="" src="/frame7.svg" />
                  </div>
                </>
              )}
            </div>
            <img
              className={styles.leftfiltersChild}
              alt=""
              src="/vector-81.svg"
            />
          </>
        )
      }
      {
        /* Case Typeprod Page  */
        Page === "Typeprod" && (
          <>
            <div className={styles.catgories}>
              <div className={styles.title1}>
                <div className={styles.text1}>
                  Les autres type produits de {CategoryName}
                </div>
                <img
                  className={styles.divIcon}
                  alt=""
                  src={showTypeprodsOfCategory ? "/frame8.svg" : "/frame6.svg"}
                  onClick={() => handleShowFilters("TypeprodsOfCategory")}
                />
              </div>
              {showTypeprodsOfCategory && (
                <>
                  <div className={styles.contenus}>
                    <div className={styles.textParent}>
                      <div className={styles.text2}>Typeprod 1</div>
                      <div className={styles.productsnumber}>(99)</div>
                    </div>
                    <img
                      className={styles.frameIcon}
                      alt=""
                      src="/frame@2x.png"
                    />
                  </div>
                  <div
                    className={styles.filter}
                    onClick={onFilterContainerClick}
                  >
                    <div className={styles.textParent}>
                      <div className={styles.text2}>Typeprod 2</div>
                      <div className={styles.productsnumber}>(9)</div>
                    </div>
                    <img className={styles.divIcon1} alt="" src="/frame7.svg" />
                  </div>
                  <div
                    className={styles.filter}
                    onClick={onFilterContainer1Click}
                  >
                    <div className={styles.textParent}>
                      <div className={styles.text2}>Typeprod 3</div>
                      <div className={styles.productsnumber}>(176)</div>
                    </div>
                    <img className={styles.divIcon1} alt="" src="/frame7.svg" />
                  </div>
                  <div
                    className={styles.filter}
                    onClick={onFilterContainer2Click}
                  >
                    <div className={styles.textParent}>
                      <div className={styles.text2}>Typeprod 4</div>
                      <div className={styles.productsnumber}>(143)</div>
                    </div>
                    <img className={styles.divIcon1} alt="" src="/frame7.svg" />
                  </div>
                </>
              )}
            </div>
            <img
              className={styles.leftfiltersChild}
              alt=""
              src="/vector-81.svg"
            />
          </>
        )
      }
      <div className={styles.marques}>
        <div className={styles.domaines}>
          <div className={styles.text1}>Domaines</div>
          <img
            className={styles.divIcon}
            alt=""
            src={showDomaines ? "/frame8.svg" : "/frame6.svg"}
            onClick={() => handleShowFilters("Domaines")}
          />
        </div>
        {showDomaines && (
          <>
            <div className={styles.wrapperInput}>
              <input
                className={styles.input}
                placeholder="Rechercher un domaine"
                type="text"
                onChange={(event) => handleSearchFilters(event, "Domaines")}
              />
            </div>
            <div className={styles.filters}>
              <div className={styles.div7}>
                {domaines.map(
                  (item, index) =>
                    item.text.toLowerCase().startsWith(inputValueDomaines) && (
                      <div className={styles.domaines} key={index}>
                        <input
                          className={styles.checkbox}
                          type="checkbox"
                          checked={item.checked}
                          onChange={() =>
                            handleCheckBoxes("Domaines", item.text)
                          }
                        />
                        <div className={styles.textParent}>
                          <div className={styles.text2}>{item.text}</div>
                          <div className={styles.productsnumber}>(2)</div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </>
        )}
      </div>
      <img className={styles.leftfiltersChild} alt="" src="/vector-81.svg" />
      <div className={styles.marques}>
        <div className={styles.domaines}>
          <div className={styles.text1}>Marques</div>
          <img
            className={styles.divIcon}
            alt=""
            src={showMarques ? "/frame8.svg" : "/frame6.svg"}
            onClick={() => handleShowFilters("Marques")}
          />
        </div>
        {showMarques && (
          <>
            <div className={styles.wrapperInput}>
              <input
                className={styles.input}
                placeholder="Rechercher une marque"
                type="text"
                onChange={(event) => handleSearchFilters(event, "Marques")}
              />
            </div>
            <div className={styles.filters}>
              <div className={styles.div7}>
                {marques.map(
                  (item, index) =>
                    item.text.toLowerCase().startsWith(inputValueMarques) && (
                      <div className={styles.domaines} key={index}>
                        <input
                          className={styles.checkbox}
                          type="checkbox"
                          checked={item.checked}
                          onChange={() =>
                            handleCheckBoxes("Marques", item.text)
                          }
                        />
                        <div className={styles.textParent}>
                          <div className={styles.text2}>{item.text}</div>
                          <div className={styles.productsnumber}>(2)</div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </>
        )}
      </div>
      <img className={styles.leftfiltersChild} alt="" src="/vector-81.svg" />
      <div className={styles.marques}>
        <div className={styles.domaines}>
          <div className={styles.text1}>Prix</div>
          <img
            className={styles.divIcon}
            alt=""
            src={showPrix ? "/frame8.svg" : "/frame6.svg"}
            onClick={() => handleShowFilters("Prix")}
          />
        </div>
        {showPrix && (
          <div className={styles.filterprice}>
            <div className={styles.text20}>De</div>
            <input
              className={styles.minimumpriceinput}
              placeholder="50 €"
              type="number"
              onChange={(event) => handleSearchFilters(event, "MinPrix")}
            />
            <div className={styles.text20}>à</div>
            <input
              className={styles.minimumpriceinput}
              placeholder="1000 €"
              type="number"
              onChange={(event) => handleSearchFilters(event, "MaxPrix")}
            />
          </div>
        )}
      </div>
      <img className={styles.leftfiltersChild} alt="" src="/vector-81.svg" />
      <div className={styles.marques}>
        <div className={styles.domaines}>
          <div className={styles.text1}>Designers</div>
          <img
            className={styles.divIcon}
            alt=""
            src={showDesigners ? "/frame8.svg" : "/frame6.svg"}
            onClick={() => handleShowFilters("Designers")}
          />
        </div>
        {showDesigners && (
          <>
            <div className={styles.wrapperInput}>
              <input
                className={styles.input}
                placeholder="Rechercher un designer"
                type="text"
                onChange={(event) => handleSearchFilters(event, "Designers")}
              />
            </div>
            <div className={styles.filters}>
              <div className={styles.div7}>
                {designers.map(
                  (item, index) =>
                    item.text.toLowerCase().startsWith(inputValueDesigners) && (
                      <div className={styles.domaines} key={index}>
                        <input
                          className={styles.checkbox}
                          type="checkbox"
                          checked={item.checked}
                          onChange={() =>
                            handleCheckBoxes("Designers", item.text)
                          }
                        />
                        <div className={styles.textParent}>
                          <div className={styles.text2}>{item.text}</div>
                          <div className={styles.productsnumber}>(2)</div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </>
        )}
      </div>
      <img className={styles.leftfiltersChild} alt="" src="/vector-81.svg" />
      <div className={styles.marques}>
        <div className={styles.domaines}>
          <div className={styles.text1}>Styles</div>
          <img
            className={styles.divIcon}
            alt=""
            src={showStyles ? "/frame8.svg" : "/frame6.svg"}
            onClick={() => handleShowFilters("Styles")}
          />
        </div>
        {showStyles && (
          <>
            <div className={styles.wrapperInput}>
              <input
                className={styles.input}
                placeholder="Rechercher un style"
                type="text"
                onChange={(event) => handleSearchFilters(event, "Styles")}
              />
            </div>
            <div className={styles.filters}>
              <div className={styles.div7}>
                {styless.map(
                  (item, index) =>
                    item.text.toLowerCase().startsWith(inputValueStyles) && (
                      <div className={styles.domaines} key={index}>
                        <input
                          className={styles.checkbox}
                          type="checkbox"
                          checked={item.checked}
                          onChange={() => handleCheckBoxes("Styles", item.text)}
                        />
                        <div className={styles.textParent}>
                          <div className={styles.text2}>{item.text}</div>
                          <div className={styles.productsnumber}>(2)</div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </>
        )}
      </div>
      <img className={styles.leftfiltersChild} alt="" src="/vector-81.svg" />
      <div className={styles.marques}>
        <div className={styles.domaines}>
          <div className={styles.text1}>Couleurs</div>
          <img
            className={styles.divIcon}
            alt=""
            src={showCouleurs ? "/frame8.svg" : "/frame6.svg"}
            onClick={() => handleShowFilters("Couleurs")}
          />
        </div>
        {showCouleurs && (
          <>
            <div className={styles.wrapperInput}>
              <input
                className={styles.input}
                placeholder="Rechercher une couleur"
                type="text"
                onChange={(event) => handleSearchFilters(event, "Couleurs")}
              />
            </div>
            <div className={styles.filters}>
              <div className={styles.div7}>
                {couleurs.map(
                  (item, index) =>
                    item.text.toLowerCase().startsWith(inputValueCouleurs) && (
                      <div className={styles.domaines} key={index}>
                        <input
                          className={styles.checkbox}
                          type="checkbox"
                          checked={item.checked}
                          onChange={() =>
                            handleCheckBoxes("Couleurs", item.text)
                          }
                        />
                        <div className={styles.textParent}>
                          <div className={styles.text2}>{item.text}</div>
                          <div className={styles.productsnumber}>(2)</div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </>
        )}
      </div>
      <img className={styles.leftfiltersChild} alt="" src="/vector-81.svg" />
      <div className={styles.marques}>
        <div className={styles.domaines}>
          <div className={styles.text1}>Motifs</div>
          <img
            className={styles.divIcon}
            alt=""
            src={showMotifs ? "/frame8.svg" : "/frame6.svg"}
            onClick={() => handleShowFilters("Motifs")}
          />
        </div>
        {showMotifs && (
          <>
            <div className={styles.wrapperInput}>
              <input
                className={styles.input}
                placeholder="Rechercher un motif"
                type="text"
                onChange={(event) => handleSearchFilters(event, "Motifs")}
              />
            </div>
            <div className={styles.filters}>
              <div className={styles.div7}>
                {motifs.map(
                  (item, index) =>
                    item.text.toLowerCase().startsWith(inputValueMotifs) && (
                      <div className={styles.domaines} key={index}>
                        <input
                          className={styles.checkbox}
                          type="checkbox"
                          checked={item.checked}
                          onChange={() => handleCheckBoxes("Motifs", item.text)}
                        />
                        <div className={styles.textParent}>
                          <div className={styles.text2}>{item.text}</div>
                          <div className={styles.productsnumber}>(2)</div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </>
        )}
      </div>
      <img className={styles.leftfiltersChild} alt="" src="/vector-81.svg" />
      <div className={styles.marques}>
        <div className={styles.domaines}>
          <div className={styles.text1}>Matériaux</div>
          <img
            className={styles.divIcon}
            alt=""
            src={showMateriaux ? "/frame8.svg" : "/frame6.svg"}
            onClick={() => handleShowFilters("Materiaux")}
          />
        </div>
        {showMateriaux && (
          <>
            <div className={styles.wrapperInput}>
              <input
                className={styles.input}
                placeholder="Rechercher un materiau"
                type="text"
                onChange={(event) => handleSearchFilters(event, "Materiaux")}
              />
            </div>
            <div className={styles.filters}>
              <div className={styles.div7}>
                {materiaux.map(
                  (item, index) =>
                    item.text.toLowerCase().startsWith(inputValueMateriaux) && (
                      <div className={styles.domaines} key={index}>
                        <input
                          className={styles.checkbox}
                          type="checkbox"
                          checked={item.checked}
                          onChange={() =>
                            handleCheckBoxes("Materiaux", item.text)
                          }
                        />
                        <div className={styles.textParent}>
                          <div className={styles.text2}>{item.text}</div>
                          <div className={styles.productsnumber}>(2)</div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Nav;

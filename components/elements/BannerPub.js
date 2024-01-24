const BannerPub = ({ bannieres }) => {
  return bannieres.map((banniere, index) => (
    <aside
      key={banniere["id"]}
      id="bannerPub"
      className="top-banniere"
      style={{ background: "#FEFEFE" }}
    >
      <figure className="figure_vignette">
        <span>
          <picture className="vignette_picture">
            <img
              src={banniere["attributes"]["image"]["data"]["attributes"]["url"]}
              alt=""
              className="vignette_image ls-is-cached lazyloaded"
              loading="lazy"
            />
          </picture>
        </span>
      </figure>
    </aside>
  ));
};

export default BannerPub;

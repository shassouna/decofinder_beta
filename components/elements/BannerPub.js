const BannerPub = () => {
  return (
    <aside
      id="bannerPub"
      className="top-banniere"
      style={{ background: "#FEFEFE" }}
    >
      <figure className="figure_vignette">
        <span
          className="lazyload unProduitGo web blank"
          title="Paris Deco Off "
        >
          <picture className="vignette_picture">
            <img
              src="https://s3.decofinder.com/0/0/bdpBanner/_bandeaux/135/135693/.jpg"
              alt="Paris Deco Off "
              className="vignette_image ls-is-cached lazyloaded"
              loading="lazy"
            />
          </picture>
        </span>
      </figure>
    </aside>
  );
};

export default BannerPub;

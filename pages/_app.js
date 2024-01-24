import { Fragment } from "react";
import Head from "next/head";
import "./global.css";
import Layout from "../components/layouts/layout.js";
import axios from "axios";
MyApp.getInitialProps = async (context) => {
  // Declaration
  const timeNowMs = Date.now();

  // import qs
  const qs = require("qs");

  // Query (Selection) Banniere
  const querySelection = qs.stringify({
    populate: ["image"],
    filters: {
      date_debut: { $lt: timeNowMs },
      date_fin: { $gt: timeNowMs },
      Afficher_dans_homepage: { $eq: false },
    },
    locale: context["router"]["locale"],
  });
  const resBannieres = await axios.get(
    `${process.env.BASE_URL_SERVER}/api/bannieres?${querySelection}`
  );

  return {
    bannieres: resBannieres.data.data,
  };
};

function MyApp({ Component, pageProps, bannieres }) {
  return (
    <Fragment>
      <Head>
        <title>decofinder</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Layout bannieres={bannieres}>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;

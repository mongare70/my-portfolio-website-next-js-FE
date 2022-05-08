import "../styles/globals.css";
import "../styles/Header.css";
import { Fragment } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Hillary Mongare Portfolio</title>
        <link rel="icon" href="/hillary-oyaro-mongare-logo.jpg" />
        <meta
          name="image"
          property="og:image"
          content="/hillary-oyaro-mongare-logo.jpg"
        />
        <meta property="og:title" content="Hillary Oyaro Mongare Portfolio" />
        <meta
          property="og:description"
          name="description"
          content="Hi there, I'm Hillary Oyaro Mongare. Full-stack developer ready to turn your ideas into functional &amp; beautiful experiences"
        />
        <meta name="author" content="Hillary Oyaro Mongare" />
        <meta property="og:url" content="https://hillary-mongare.vercel.app/" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;

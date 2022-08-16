import { Fragment, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import * as ga from "../lib/ga";
import "../styles/globals.css";
import "../styles/Header.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };

    // When component is mounted, subscribe to router changes
    // and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // if the component is unmounted, unsubscribe
    // from the event with the 'off' method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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

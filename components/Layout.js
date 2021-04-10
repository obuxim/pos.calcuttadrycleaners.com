import React from "react";
import Head from "next/head";
import Sidebar from "./Sidebar";
import Topnav from "./Topnav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <title>Calcutta Dry Cleaners</title>
        {/* Favicon */}
        <link
          rel="icon"
          href="/assets/img/brand/favicon.png"
          type="image/png"
        />
        {/* Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
        />
        {/* Icons */}
        <link
          rel="stylesheet"
          href="/assets/vendor/nucleo/css/nucleo.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
          type="text/css"
        />
        {/* Page plugins */}
        {/* Argon CSS */}
        <link
          rel="stylesheet"
          href="/assets/css/argon.css?v=1.2.0"
          type="text/css"
        />
      </Head>
      <Sidebar />
      <div className="main-content" id="panel">
        <Topnav />
        <div className="container-fluid mt-6">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;

import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src="../images/star.jpg">
      </StaticImage>
    </Layout>
  );
};

export default IndexPage;
import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <meta name="keywords" content={keywords}></meta>
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to Comfy maxers",
  description: "We sell the best shoes at affordable and cheap price",
  keywords: "shoes, foot wears, footwears, slides, sneakers, canvas, buy shoes",
};

export default Meta;

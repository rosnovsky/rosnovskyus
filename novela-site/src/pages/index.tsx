import React from "react";

import Layout from "../components/Layout";
import Section from "../components/Section";
import SEO from "../components/SEO";
import Headings from "../components/Headings";
import Articles from "../templates/articles.template"
import GridLayoutProvider from "../sections/articles/Articles.List.Context" 

function Index(data) {
  console.log(data)
  return (
    <GridLayoutProvider>
        <Articles pageContext={data} location={data} />
    </GridLayoutProvider>
  );
}

export default Index;

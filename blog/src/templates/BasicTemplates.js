import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

function BasicTemplates({ children }) {
  return (
    <div className="BasicTemplates">
      <section className={"HeaderSection"}>
        <Header />
      </section>
      <section className={"Body"}>{children}</section>
      <section className={"FooterSection"}>
        <Footer />
      </section>
    </div>
  );
}

export default BasicTemplates;

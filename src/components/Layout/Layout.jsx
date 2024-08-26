import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div className="Layout" id="fullpage">
      <Menu />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

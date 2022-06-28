import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./Layout.module.css";

function Layout({ pageTitle, children }) {

  return (
      <div className={container}>
        <title>
          {pageTitle}
        </title>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/">Home</Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>

        <div>© somang-lim</div>
      </div>
  );
}

export default Layout;

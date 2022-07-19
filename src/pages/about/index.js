import React from "react";
import clsx from "clsx";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";

function About() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title="About" description={siteConfig.tagline}>
      <header className={styles.aboutHeader}>
        <h2 className="underlineColorSuccess">About me</h2>
      </header>
      <main id="main">
        <div className={styles.about}>
          <div>
            <img
              className={styles.aboutProfilePic}
              src={useBaseUrl("img/profilepic.jpg")}
            />
          </div>
          <div class={styles.aboutText}>
            <h2>👦🏻Who am I, and where I am from?</h2>
            <p>
              I am Abhay, a Software Engineer having specialization in Test
              Automation based in Bangalore, India having 15+ years of
              experience in performing Automation testing for Desktop, Web,
              Android, iOS and API (Rest and Soap) applications.
            </p>
            <p>
              I am also an active contributor on Selenium, Appium forum where I
              try answering problem shared by engineers. I have created easy to
              use test automation frameworks and share with the community, open
              source projects like{" "}
              <a href="https://github.com/abhaybharti/TestKit">TestKit</a>. I
              love building useful, and meaningful test automation solution
              things with tech, whether that be .
            </p>
            <p>
              I also like to keep my self up-to-date with latest testing tools
              and technologies. I also like learning new technologies as well
              where recently I tried my hands on ReactJS, JavaScript, Cypress,
              PlayWright and Docusaurus 2.
            </p>
            <h2>🖥️ What I am working on?</h2>
            <p>
              Currently, I am actively contributing towards TestKit which is an
              ultimate framework to Automate applications for all the available
              platforms like API, Web, Android, iOS and Performance. The main
              aim for this framework is to simplify writing test scripts to such
              extent that no project specific custom code writing is no longer
              required. Apart from this, you can also check out on all the
              projects I am working on by visiting my{" "}
              <a href="https://github.com/abhaybharti/">GitHub profile</a>.
            </p>
           
          </div>
        </div>
        <section className={styles.directory}>
          <div className="container">
            <h3>Continue exploring?</h3>
            <nav className="pagination-nav">
              <div className="pagination-nav__item">
                <Link
                  className="pagination-nav__link"
                  to={useBaseUrl("projects/")}
                >
                  <div className="pagination-nav__sublabel">Check out</div>
                  <div className="pagination-nav__label">My projects</div>
                </Link>
              </div>
              <div className="pagination-nav__item pagination-nav__item--next">
                <a
                  className="pagination-nav__link"
                  href={useBaseUrl("pdf/resume.pdf")}
                >
                  <div className="pagination-nav__sublabel">Download</div>
                  <div className="pagination-nav__label">My resume</div>
                </a>
              </div>
            </nav>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default About;

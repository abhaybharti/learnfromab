import React, { useEffect, useRef, useState } from "react";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";
import SocialLinks from "./components/_SocialLinks";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const mainRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(1536);
  const [bannerHeight, setBannerHeight] = useState(256);

  useEffect(() => {
    const tempHeaderHeight = Math.max(384, window.innerHeight);
    setHeaderHeight(tempHeaderHeight);
    setBannerHeight(Math.max(256, tempHeaderHeight / 2));
    setIsLoading(false);
    mainRef.current.hidden = false;
  }, []);

  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <header className={styles.heroBanner} style={{ minHeight: headerHeight }}>
        <div
          className={styles.heroBannerWrapper}
          style={{
            minHeight: bannerHeight,
            display: isLoading ? "none" : "block",
          }}
        >
          <p>Hi, my name is</p>
          <h1 className="colorSuccess">Abhay Bharti.</h1>
          <p>
            I am a <span className="colorWarning">Software Engineer</span>{" "}
            having specialization in Test Automation and passionate about
            <span className="colorDanger"> JavaScript development</span>.
          </p>
          <SocialLinks />
          <p>
            Find out more about me <Link to={useBaseUrl("#main")}>below</Link>!
          </p>
        </div>
      </header>
      <main id="main" ref={mainRef} hidden={true}>
        <div className={styles.aboutHeader}>
          <h2 className="underlineColorSuccess">Hello world</h2>
        </div>
        <div className={styles.about}>
          <div>
            <img
              className={styles.aboutProfilePic}
              src={useBaseUrl("img/profilepic.jpg")}
            />
          </div>
          <div class={styles.aboutText}>
            <h2>Hello, </h2>
            <p>
              I am a Full Stack Test Automation Engineer based in Bangalore,
              India having 15+ years of experience in performing manual and
              Automation testing for Desktop, Web, Android, iOS and API (Rest
              and Soap) applications.
            </p>
            <p>
              I enjoy building Test Automation Framework and useful utility{" "}
              <Link to={useBaseUrl("projects/")}></Link>.
            </p>
            <p>
              I am currently working at{" "}
              <a href="https://www.crestron.com/">Crestron Electronics</a> as a
              SDET.
            </p>
            <p>
              <h2>💪 Skills I have?</h2>
              <p>I am well versed with following tools and frameworks:</p>
              <ul>
                <li>Java</li>
                <li>JavaScript</li>
                <li>Selenium WebDriver 4</li>
                <li>Appium 2.0</li>
                <li>Rest-Assured</li>
                <li>Postman</li>
                <li>TestNG</li>
                <li>JMeter</li>
                <li>Cucumber</li>
                <li>Apache Maven</li>
                <li>Jenkins</li>
                <li>GitHub</li>
                <li>Cypress</li>
                <li>PlayWright</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>ReactJS</li>
              </ul>
            </p>
            <p>
              <h2>👨‍💼 What projects I can help with?</h2>
              <p>I am well versed with following tools and frameworks:</p>
              <ul>
                <li>
                  Creating a test automation framework for Web, Mobile, API and
                  Performance testing
                </li>
                <li>
                  Setting up of CI / CD pipeline for test automation suite
                </li>
                <li>Or, anything which involves test automation</li>
                <li>Build, train and Manage large automation team</li>
                <li>Have experience of automation large/complex products</li>
              </ul>
            </p>
            <p>
              You can read more <Link to={useBaseUrl("/about")}>about me</Link>{" "}
              or check out <Link to={useBaseUrl("/projects")}>my projects</Link>{" "}
              if you are interested.
            </p>
          </div>
        </div>
        <section className={styles.directory}>
          <div className="container">
            <h3>Continue exploring?</h3>
            <nav className="pagination-nav">
              <div className="pagination-nav__item">
                <Link className="pagination-nav__link" to={useBaseUrl("blog/")}>
                  <div className="pagination-nav__sublabel">Read</div>
                  <div className="pagination-nav__label">My blog</div>
                </Link>
              </div>
              <div className="pagination-nav__item pagination-nav__item--next">
                <Link className="pagination-nav__link" to={useBaseUrl("docs/")}>
                  <div className="pagination-nav__sublabel">Read</div>
                  <div className="pagination-nav__label">My docs</div>
                </Link>
              </div>
            </nav>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;

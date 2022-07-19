// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AB Notes",
  tagline: "Dinosaurs are cool",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Options here
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/abhaybharti/learnfromab/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/abhaybharti/learnfromab/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
    // [
    //   "@docusaurus/preset-classic",
    //   {
    //     googleAnalytics: {
    //       id: "googleAnalytics",
    //       trackingID: "UA-26863691-1",
    //       anonymizeIP: true,
    //     },
    //     sitemap: {
    //       id: "sitemap",
    //       changefreq: "weekly",
    //       priority: 0.5,
    //     },
    //   },
    // ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      id: "T",
      navbar: {
        title: "Portfolio",
        logo: {
          alt: "Portfolio",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Notes",
          },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "hireme/", label: "hireme", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Connect Me",
            items: [
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/in/abhaybharti/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/abhaybharti",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                id: "T",
                label: "Blog",
                to: "/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Notes, Inc. Built by AB.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

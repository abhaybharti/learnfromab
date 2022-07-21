const math = require("remark-math");
const katex = require("rehype-katex");
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const internetProfiles = {
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abhaybharti/",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/abhaybharti",
  },
  email: {
    label: "Email",
    href: "mailto:abhaybharti@gmail.com",
  },
  blog: {
    label: "Blog",
    to: "blog",
  },
  docs: {
    label: "Documentation",
    to: "docs",
  },
  projects: {
    label: "Projects",
    to: "projects",
  },
  about: {
    label: "About",
    to: "about",
  },

  resume: {
    label: "Resume",
    href: "https://www.linkedin.com/in/abhaybharti/overlay/1635492497824/single-media-viewer/",
  },
};

module.exports = {
  title: "Abhay Bharti",
  tagline:
    "I am a Software Engineer and Cloud Engineer passionate about solving Meaningful Problems.",
  url: "https://abhaybharti.github.io/",
  baseUrl: "/",
  projectName: "abhaybharti.github.io",
  organizationName: "abhaybharti",
  trailingSlash: false,
  onBrokenLinks: "ignore",
  favicon: "img/logo.png",
  organizationName: "",
  projectName: "Abhay-folio",
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: true,
      title: "Abhay Bharti",
      logo: {
        alt: "Abhay Bharti",
        src: "img/logo.png",
        target: "_self",
      },
      items: [
        { to: "blog/", label: "Blog", position: "left" },
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Notes",
        },
        { to: "projects/", label: "Projects", position: "left" },
        { to: "about/", label: "Support Me", position: "left" },
        {
          href: "https://www.linkedin.com/in/abhaybharti/overlay/1635492497824/single-media-viewer/",
          label: "Resume",
          position: "left",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Connect",
          items: [
            internetProfiles.linkedin,
            internetProfiles.github,
            internetProfiles.email,
          ],
        },
        {
          title: "Discover",
          items: [
            internetProfiles.blog,
            internetProfiles.projects,
            internetProfiles.about,
            internetProfiles.resume,
          ],
        },
      ],

      copyright: `<a href="https://abhaybharti.github.io/">Design by Abhay Bharti</a> • <a href="https://github.com/abhaybharti">Updated ${new Date().toLocaleDateString()}</a>`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
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
      "@docusaurus/preset-classic",
      {
        docs: {
          // sidebarPath: require.resolve("./sidebars.js"),
          // disableVersioning: false,
          // editCurrentVersion: false,
          editUrl: "https://github.com/abhaybharti/learnfromab/",
          // remarkPlugins: [math],
          // rehypePlugins: [katex],
        },
        blog: {
          //showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/abhaybharti/learnfromab/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
};

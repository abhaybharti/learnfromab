import React from "react";

const projects = [
  {
    category: "Project",
    title: "Selenium-Java-BoilerPlate",
    // slug: "#Selenium-Java-BoilerPlate",
    // imageUrl: "img/projects/mochai.png",
    subtitle:
      "An awesome Selenium+Java+Maven+TestNG template to jumpstart your QA projects!",
    period: "March 2022",
    tech: "Selenium, TestNG, Java",
    description: (
      <>
        <p>
          This is a template project to start web automation project. Everytime
          I had to write few sample tests, I had to build a Maven project from
          scratch and include all required dependencies. This template has all
          required jar files and project structure to write code on browser like
          Google Chrome, Firefox, Microsoft Edge.
        </p>
        <p></p>
        <p>
          I worked on this project to learn more about building a template
          project to start automation using{" "}
          <a href="https://mochajs.org/">Selenium</a> and{" "}
          <a href="https://www.chaijs.com/">Java</a>.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub",
        link: "https://github.com/abhaybharti/Selenium-Java-BoilerPlate",
      },
    ],
  },
];

export default projects;

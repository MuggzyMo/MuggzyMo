import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const arrowDown = <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>;
export const arrowUp = <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>;
export const linkedIn = <FontAwesomeIcon icon={faLinkedin} />;
export const github = <FontAwesomeIcon icon={faGithub} />;
export const email = <FontAwesomeIcon icon={faEnvelope} />;

export const educationHeader = "Education - University of Scranton";

export const education: JSX.Element[] = [
  <div key="ms">
    <strong>
      Master of Science in Software Engineering (08/2022 - 05/2024)
    </strong>
    <br />
    Courses: Engineering of Software Systems, Requirements Analysis and Software
    Specification, Software Project Management, Software Security, Principles
    and Applications of Software Design, Big Data, AI/ ML Special Topic
    <br />
    GPA: 3.86
  </div>,
  <div key="bs">
    <strong>Bachelor of Science in Computer Science (08/2019 - 05/2023)</strong>
    <br />
    Courses: Data Structures and Algorithms, Operating Systems, Database
    Systems, Mobile Applications Development, Capstone Project
    <br />
    GPA: 3.77
  </div>,
];

export const skillHeader = "Skills";

export const skill: JSX.Element[] = [
  <div key="languages">
    <strong>Languages:</strong> Java (Advanced), Python (Intermediate), C#
    (Intermediate), Dart (Intermediate), JavaScript (Beginner), HTML
    (Intermediate), CSS (Intermediate)
  </div>,
  <div key="development-areas">
    <strong>Development Areas:</strong> Web (Frontend and Backend), Mobile,
    RESTful API
  </div>,
  <div key="frameworks">
    <strong>Frameworks:</strong> ASP.NET Core MVC, Spring MVC, Bootstrap,
    Flutter SDK
  </div>,
  <div key="tools">
    <strong>Tools:</strong> Android Studio, Visual Studio, Visual Studio Code,
    Eclipse, IntelliJ, Postman
  </div>,
  <div key="databases">
    <strong>Databases:</strong> PostgreSQL, Microsoft SQL Server
  </div>,
  <div key="version-control">
    <strong>Version Control:</strong> Git (GitHub, GitLab)
  </div>,
  <div key="cloud-platform">
    <strong>Cloud Platform:</strong> Microsoft Azure
  </div>,
];

export const projectHeader = "Projects";

export const projectName = [
  "VaryTrade Revision and Expansion (Master's Thesis Project) - 2024",
  "VaryTrade (Capstone Project) - Spring 2023",
];

export const projectDetail = [
  [
    "Expanded VaryTrade platform to allow collectors to resell collectibles, incorporated payment options through the PayPal API, and enabled " +
      "collector credit payouts using the Hyperwallet API",
    "Implemented Google Sign-In using OAuth2.0 protocol for web and mobile applications",
    "Developed RESTful API using Spring MVC",
    "Tested RESTful API functionality with Postman",
    "Generated Json Web Tokens (JWTs) using HS256 algorithm to secure RESTful API",
    "Developed mobile app with Flutter framework following MVVM pattern",
  ],
  [
    "Developed application using Spring MVC ",
    "Employed CSS, Bootstrap, and Thymeleaf to develop UI",
    "Used PostgreSQL database for data storage",
    "Utilized Spring Security for authentication and authorization",
    "Incorporated spam and bot protection using Google’s reCAPTCHA v3 for form submissions",
  ],
];

export const workHeader = "Work Experience";

export const workName = [
  "Sample Database Programmer I at PG Forsta (08/2024 - Current)",
  "Graduate Teaching Assisting at University of Scranton (08/2022 - 05/2024)",
  "Product Development Intern at SkillSurvey (06/2022 - 10/2022)",
];

export const workDetail = [
  [
    "Leverage SQL and T-SQL expertise and an in-house ETL tool to clean, process, and manage data for both small- and large-scale projects",
    "Ensure the timely delivery of projects, consistently adhering to established quality standards and best practices",
    "Translate non-technical requirements into technical solutions, ensuring alignment with project goals",
    "Collaborate with project managers to clarify client needs and expectations, optimizing project outcomes",
    "Participate in daily standup meetings to discuss team progress and set future goals",
  ],
  [
    "Educated undergrad students in introductory computer science classes",
    "Assisted the Department of Computing Sciences with the administering and the grading of course materials",
  ],
  [
    "Developed and performed regression tests for existing software applications",
    "During regression testing, helped identify critical race condition issue which caused duplicate database records",
    "Collaborated with a team of other interns and senior developers both on the frontend and backend of a web application, which utilized C#, ASP.NET Core MVC, Entity Framework Core, and existing company RESTful APIs",
    "Engaged in code reviews with a senior developer to refine coding skills and uphold best practices",
    "Participated in various activities related to each phase of the software development lifecycle",
    "Contributed to daily standup meetings which involved discussing individual and team progress, as well as setting future goals",
  ],
];

// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';


// Experience Section Logo's
import reknot_logo from "./assets/company_logo/reknot_logo.png";
import code_clause from "./assets/company_logo/code_clause.png";


// Education Section Logo's
import ssc from './assets/education_logo/ssc.png';
import gpm from './assets/education_logo/gpm.png';
import aissmsioit from './assets/education_logo/aissmsioit.jpg';

// Project Section Logo's
import portfolio from './assets/work_logo/portfolio.png';
import csv_analyzer from "./assets/work_logo/csv_analyzer.png";
import photo_studio from "./assets/work_logo/photo_studio.png";
import eccomerce from "./assets/work_logo/eccomerce.png";



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: reknot_logo,
      role: "Web Development Intern",
      company: "Reknot Solutions Pvt Ltd",
      date: "Jan 2023 - Jun 2023 (Remote)",

      skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    },
    {
      id: 1,
      img: code_clause,
      role: "Python Development Intern",
      company: "Code Clause",
      date: "Feb 2023 - Mar 2023 (Remote)",
      skills: ["Python"],
    },
    {
      id: 2,
      img: code_clause,
      role: "Web Development Intern",
      company: "Code Clause",
      date: "Feb 2023 - Mar 2023 (Remote)",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: ssc,
      school: "Karmveer Bhaurao Patil Vidyalaya Askheda",
      date: "2019 - 2020",
      grade: "90.40%",
      degree: "SSC (10th Grade)",
    },
    {
      id: 1,
      img: gpm,
      school: "Government Polytechnic Mumbai",
      date: "2021 - 2023",
      grade: "89.33%",
      degree: "Diploma in Information Technology",
    },
    {
      id: 2,
      img: aissmsioit,
      school: "AISSMS IOIT Pune",
      date: "2023 - 2026",
      grade: "8.02 GPA",
      degree: "BTech in Computer Engineering",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Portfolio Website",
      description:
        "A responsive and modern personal portfolio built using ReactJS and styled with Tailwind CSS. It showcases my skills, projects, resume, and contact information in a clean, user-friendly layout. The website is fully responsive, fast-loading, and designed to highlight my development experience and online presence.",
      image: portfolio,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"],
      github:
        "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "Advanced CSV Data Analyzer",
      description:
        "A powerful web-based tool developed using Python and Streamlit that allows users to upload and analyze CSV files effortlessly. It provides features like data preview, summary statistics, null value detection, column-wise insights, and basic visualizations — all through an interactive and easy-to-use interface.",
      image: csv_analyzer,
      tags: [
        "Python",
        "Streamlit",
        "CSV Analysis",
        "Data Visualization",
        "Data Science",
        "Data Analysis",
        "Data Processing",
        "Data Cleaning",
      ],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Photo Studio",
      description:
        "A simple and elegant web application that allows users to browse and download high-quality photos. Built with pure HTML, CSS, and JavaScript, it features a responsive gallery layout, smooth user interface, and direct image download functionality.",
      image: photo_studio,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Ecommerce Website",
      description:
        "A frontend e-commerce website designed to showcase products in a clean, responsive layout. It includes features like product listings, category sections, and a shopping cart interface (UI only). Built using HTML, CSS, and JavaScript to simulate a real online store experience.",
      image: eccomerce,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/cmtk-email-validator",
      webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
  ];  
// Up here we import all the images we need for the project

import object from "../assets/core/3d-object-50.png";
import devIcon from "../assets/core/developer-50.png";
import uxdesign from "../assets/core/ux-design-96.png";
import webdesign from "../assets/core/web-design-50.png";
import blpIcon from "../assets/companies/blp.png";
import freelanceIcon from "../assets/companies/freelance-64.png";
import hpd from "../assets/companies/hyperiondev-logo.jpg";
import lab from "../assets/companies/lab.png";
import adobeIcon from "../assets/workflows/adobe.png";
import blenderIcon from "../assets/workflows/blender.png";
import figmaIcon from "../assets/workflows/figma.png";
import gitIcon from "../assets/workflows/git.png";
import htmlIcon from "../assets/workflows/html.png";
import jsIcon from "../assets/workflows/javascript.png";
import nodeIcon from "../assets/workflows/nodejs.png";
import tsIcon from "../assets/workflows/typescript.png";
import cssIcon from "../assets/workflows/css.png";
import mongoIcon from "../assets/workflows/mongodb.png";
import mysqlIcon from "../assets/workflows/mysql-logo.png";
import reactIcon from "../assets/workflows/reactjs.png";
import tailwindIcon from "../assets/workflows/tailwind.png";
import threeIcon from "../assets/workflows/threejs.svg";
import unityIcon from "../assets/workflows/unity.png";
import unrealIcon from "../assets/workflows/unreal-engine2.png";
import eCycles from "../assets/E-cycles_ecommerce.png";
import zenZone from "../assets/zen_zone_site.png";
import ckey from "../assets/game_keys.png";

export const navLinks = [
  {
    id: "about",
    title: "About"
  },
  {
    id: "Experience",
    title: "Experience"
  },
  {
    id: "Projects",
    title: "Projects"
  },
  {
    id: "Contact",
    title: "Contact"
  }
];

const services = [
  {
    title: "Developer",
    icon: devIcon
  },
  {
    title: "Web Designer",
    icon: uxdesign
  },
  {
    title: "Graphic Designer",
    icon: object
  }
];

const technologies = [
  {
    title: "HTML",
    icon: htmlIcon
  },
  {
    title: "CSS",
    icon: cssIcon
  },
  {
    title: "JavaScript",
    icon: jsIcon
  },
  {
    title: "TypeScript",
    icon: tsIcon
  },
  {
    title: "React",
    icon: reactIcon
  },
  {
    title: "Node",
    icon: nodeIcon
  },
  {
    title: "MongoDB",
    icon: mongoIcon
  },
  {
    title: "MySQL",
    icon: mysqlIcon
  },
  {
    title: "Git",
    icon: gitIcon
  },
  {
    title: "ThreeJS",
    icon: threeIcon
  },
  {
    title: "Figma",
    icon: figmaIcon
  },
  {
    title: "Adobe Software",
    icon: adobeIcon
  },
  {
    title: "Blender",
    icon: blenderIcon
  },
  {
    title: "Unreal Engine",
    icon: unrealIcon
  },
  {
    title: "Unity",
    icon: unityIcon
  }
];

const experience = [
  {
    title: "Web Developer",
    occupation: "Self-Employed",
    icon: freelanceIcon,
    iconBg: "#F5F5F5",
    date: "2022 - Present",
    points: [
      "Learning the ropes of web development using youtube, Udemy and freeCodeCamp",
      "Learning how different softwares work in development space",
      "Programming in different languages, learning about behavior and syntax",
      "Practiced on different projects to gain experience",
      "Helped others online with questions and problems",
      "Deployed projects on different platforms"
    ]
  },
  {
    title: "Web Developer",
    occupation: "Student",
    icon: freelanceIcon,
    iconBg: "#F5F5F5",
    date: "November 2022 - February 2023",
    points: [
      "Continued learning in a fast paced environment",
      "Being assigned projects to finish under a certain time frame",
      "Code reviewed by experts in the field to find bugs and improve code",
      "Collaborated with a online team environment to complete projects",
      "Deployed projects and refactored code to have the most efficient code possible"
    ]
  },
  {
    title: "Web Developer",
    occupation: "Freelance",
    icon: freelanceIcon,
    iconBg: "#F5F5F5",
    date: "March 2023",
    points: [
      "Helped a small business with their website",
      "Designed a webpage for local business",
      "Consulted with the business owner to find the best solution for their needs",
      "Worked together in a team environment to complete the project",
      "Finalized project ensuring that the client knows how to increase their online presence"
    ]
  }
];

const testimonials = [
  {
    testimonial:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "John Doe",
    occupation: "CEO of Company",
    company: "Company",
    image: mongoIcon
  },
  {
    testimonial:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Jane Doe",
    occupation: "CEO of Company",
    company: "Company",
    image: threeIcon
  },
  {
    testimonial:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Jane Doe",
    occupation: "CEO of Company",
    company: "Company",
    image: webdesign
  }
];

const projects = [
  {
    title: "E-Cycles",
    description: "A website for a local bike shop",
    tags: [
      {
        title: "React",
        color: "blue-text-gradient"
      },
      {
        title: "Node",
        color: "green-text-gradient"
      },
      {
        title: "MongoDB",
        color: "green-text-gradient"
      },
      {
        title: "Bootstrap",
        color: "purple-text-gradient"
      }
    ],
    image: eCycles,
    source_code_link: "https://github.com/"
  },
  {
    title: "Zen-Zone",
    description: "A website for a local yoga studio",
    tags: [
      {
        title: "React",
        color: "blue-text-gradient"
      },
      {
        title: "Node",
        color: "green-text-gradient"
      },
      {
        title: "MongoDB",
        color: "green-text-gradient"
      },
      {
        title: "tailwind",
        color: "pink-text-gradient"
      },
      {
        title: "Figma",
        color: "yellow-text-gradient"
      }
    ],
    image: zenZone,
    source_code_link: "https://github.com/"
  },
  {
    title: "Chekey Coins",
    description: "A website for game keys",
    tags: [
      {
        title: "React",
        color: "blue-text-gradient"
      },
      {
        title: "Node",
        color: "green-text-gradient"
      },
      {
        title: "CRM",
        color: "green-text-gradient"
      }
    ],
    image: ckey,
    source_code_link: "https://github.com/"
  }
];

export { technologies, experience, testimonials, projects };

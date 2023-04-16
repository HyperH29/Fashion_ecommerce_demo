import {
  backend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  gamekeys,
  threejs,
  zenzone,
  ecycles,
  lab,
  hdevIcon,
  blpIcon,
  flIcon,
  devIcon,
  uxIcon,
  object,
  mysql,
  blender,
  adobe,
  unity,
  csharp,
  unreal,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact me",
  },
];

const services = [
  {
    title: "Developer",
    icon: devIcon,
  },
  {
    title: "Web Designer",
    icon: uxIcon,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: object,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "blender",
    icon: blender,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Unreal",
    icon: unreal,
  },
  {
    name: "adobe",
    icon: adobe,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Self Taught",
    icon: lab,
    iconBg: "#383E56",
    date: "March 2022 - Nov 2022",
    points: [
      "Learning the ropes of web development using youtube, Udemy and freeCodeCamp",
      "Learning how different software's work in development space",
      "Programming in different languages, learning about behavior and syntax",
      "Practiced on different projects to gain experience",
      "Helped others online with questions and problems",
      "Deployed projects on different platforms",
    ],
  },
  {
    title: "Student Developer",
    company_name: "HyperionDev",
    icon: hdevIcon,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Feb 2023",
    points: [
      "Continued learning in a fast paced environment",
      "Being assigned projects to finish under a certain time frame",
      "Code reviewed by experts in the field to find bugs and improve code",
      "Collaborated with a online team environment to complete projects",
      "Deployed projects and refactored code to have the most efficient code possible",
    ],
  },
  {
    title: "Web Developer",
    company_name: "BLP",
    icon: blpIcon,
    iconBg: "#383E56",
    date: "March 2023",
    points: [
      "Helped a small business with their website",
      "Designed a webpage for local business",
      "Consulted with the business owner to find the best solution for their needs",
      "Worked together in a team environment to complete the project",
      "Finalized project ensuring that the client knows how to increase their online presence",
    ],
  },
  {
    title: "FreeLance Developer",
    company_name: "Self Employed",
    icon: flIcon,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-Cycles",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, " +
      "providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "gatsby",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: ecycles,
    source_code_link: "https://github.com/dashboard",
  },
  {
    name: "Cheeky Keys",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gamekeys,
    source_code_link: "https://github.com/dashboard",
  },
  {
    name: "Zenzone",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: zenzone,
    source_code_link: "https://github.com/dashboard",
  },
];

export { services, technologies, experiences, testimonials, projects };

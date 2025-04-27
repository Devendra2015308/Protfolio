import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  systaldyn,
  onitLogo,
  OniTServices,
  AIEASE,
  MaterialUI,
  OniTDashboard
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
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Systaldyn",
    icon: systaldyn,
    iconBg: "#E6DEDD",
    date: "July 2024 - Feb 2025",
    points: [
      "Developing and maintaining dynamic web applications using React.js and JavaScript, ensuring optimized performance and seamless user experiences.",
      "Collaborating closely with backend teams and cross-functional stakeholders to integrate RESTful APIs and deliver high-quality, user-centric solutions..",
      "Implementing responsive design principles and ensuring compatibility across multiple devices and browsers.",
      "Actively participating in code reviews, offering constructive feedback, and staying updated with the latest frontend technologies to continuously improve development processes",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "OniT Services",
    icon: onitLogo,
    iconBg: "#E6DEDD",
    date: "March 2025 - Present",
    points: [
      "Working as a Frontend Developer, leading the development and maintenance of the company's website, admin dashboard, and mobile application using ReactJS, Next.js, React Native, TypeScript, Redux Toolkit, and JavaScript.",
      "Designed and developed the company's website from scratch, implementing complex functionalities and ensuring a responsive, user-friendly interface across all devices.",
      "Built and enhanced the admin dashboard with advanced features, seamless API integrations, and efficient state management using Redux Toolkit.",
      "Collaborated directly with business stakeholders to align technical solutions with business needs in a service-based model similar to UrbanClap and JustDial.",
      "Managed the complete tech stack for the company, ensuring smooth operations, scalability, and consistent updates across all platforms.",
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
    name: "AI-EASE HITACHI",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: AIEASE,
    source_code_link: "https://github.com/",
  },
  {
    name: "Material-UI HITACHI",
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
    image: MaterialUI,
    source_code_link: "https://github.com/",
  },
  {
    name: "OniT Services Website",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: OniTServices,
    source_code_link: "https://github.com/AshuOniT/onit-next",
  },
  {
    name: "OniT Admin Dashboard",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: OniTDashboard,
    source_code_link: "https://github.com/AshuOniT/onit-next",
  }
];

export { services, technologies, experiences, testimonials, projects };

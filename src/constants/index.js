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
  OniTDashboard,
  JobPortal,
  E_Commerce,
  Utkarsh,
  Ashutosh,
  Ashish,
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
      "We believed creating a website this impressive would be a challenge, but Dev exceeded every expectation. He delivered a product that aligns perfectly with our vision and goes beyond what we imagined.",
    name: "Utkarsh Bisaria",
    designation: "Manager",
    company: "Systaldyn",
    image: Utkarsh,
  },
  {
    testimonial:
      "Dev’s unwavering commitment to client success, attention to detail, and passion for his work truly set him apart. His professionalism and dedication make him a standout in the competitive field of web development.",
    name: "Ashutosh Agarwal",
    designation: "Owner & Director",
    company: "OniT Services",
    image: Ashutosh,
  },
  {
    testimonial:
      "As the final year project head, I was deeply impressed by Dev's technical expertise, dedication, and attention to detail. His invaluable contributions helped ensure the project's success, and I highly recommend his work.",
    name: "Ashish Dixit",
    designation: "Professor",
    company: "AKGEC",
    image: Ashish,
  },
];

const projects = [
  {
    name: "AI-EASE HITACHI",
    description:
      "AI-EASE HITACHI is a web-based internal platform developed for Hitachi America. As a Frontend Developer, I built responsive user interfaces, integrated RESTful APIs, and added complex functionalities using ReactJS and TailwindCSS to enhance the application's performance and user experience.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: AIEASE,
    source_code_link: "https://github.com/",
  },
  {
    name: "Material-UI HITACHI",
    description:
      "Material-UI HITACHI is a web-based internal project developed for Hitachi America. As a Frontend Developer, I designed and built responsive user interfaces using ReactJS and TailwindCSS, integrated RESTful APIs, and implemented complex functionalities to enhance usability and performance.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: MaterialUI,
    source_code_link: "https://github.com/",
  },
  {
    name: "OniT Services Website",
    description:
      "OniT Services is a service-based platform offering solutions like AC repair, electrician services, digital device support, and more. I developed this website from scratch, building responsive UIs and integrating key functionalities to deliver a seamless user experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: OniTServices,
    source_code_link: "https://github.com/AshuOniT/onit-next",
  },
  {
    name: "OniT Admin Dashboard",
    description:
      "OniT Admin Dashboard is an internal platform used to manage and analyze service requests, centers, and more. I contributed by adding complex functionalities, integrating RESTful APIs, and developing new screens to enhance the dashboard’s capabilities.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
    ],
    image: OniTDashboard,
    source_code_link: "https://github.com/AshuOniT/onit-next",
  },
  {
    name: "Job Portal",
    description:
      "Job portal is a web application that allows users to log in as either recruiters or candidates. Recruiters can post job openings, while candidates can browse available jobs and apply for them. When a candidate applies, recruiters can view and manage the applications, providing a seamless hiring process.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "shadcn",
        color: "pink-text-gradient",
      },
    ],
    image: JobPortal,
    source_code_link: "https://github.com/AshuOniT/onit-next",
  },
  {
    name: "E-Commerce Admin Dashboard",
    description:
      "E-Commerce Admin Dashboard is a web application that gives administrators a centralized interface to manage product listings, inventory levels, order fulfillment, and customer accounts, while providing real-time sales analytics and reporting through dynamic, API-driven data visualizations.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: E_Commerce,
    source_code_link: "https://github.com/AshuOniT/onit-next",
  },
];

export { services, technologies, experiences, testimonials, projects };

import { StaticImageData } from "next/image";
import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  nextjs,
  graphql,
  cypress,
  sentry,
  vercel,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  tgs,
  wix,
  capitolis,
} from "../../public/assets";

export enum Sections {
  About = "About",
  Experience = "Experience",
  Tech = "Tech",
  Work = "Work",
  Feedbacks = "Feedbacks",
  Contact = "Contact",
}

export const navLinks: { id: string; title: Sections }[] = [
  {
    id: "about",
    title: Sections.About,
  },
  {
    id: "work",
    title: Sections.Work,
  },
  {
    id: "contact",
    title: Sections.Contact,
  },
];

export type Technology = {
  name: string;
  icon: StaticImageData;
};

export const technologies: Technology[] = [
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "GraphQL",
    icon: graphql,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Cypress",
    icon: cypress,
  },
  {
    name: "Sentry",
    icon: sentry,
  },
  {
    name: "Vercel",
    icon: vercel,
  },
];

export type Experience = {
  title: string;
  company_name: string;
  icon: StaticImageData;
  iconBg: string;
  date: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    title: "Front-End Developer",
    company_name: "TGS",
    icon: tgs,
    iconBg: "#383E56",
    date: "December 2018 - February 2020",
    points: [
      "Built and maintained React-based web applications as my first professional role.",
      "Implemented responsive UI components and layouts with a strong focus on usability.",
      "Worked closely with designers and backend developers to deliver production features.",
      "Gained solid foundations in clean code, component structure, and collaborative development.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Wix",
    icon: wix,
    iconBg: "#E6DEDD",
    date: "February 2020 - May 2021",
    points: [
      "Core developer of the Wix Google Calendar integration app used by thousands of Wix sites.",
      "Built scalable React interfaces and backend integrations within Wix’s internal platform.",
      "Owned features end-to-end: UI, business logic, edge cases, and production readiness.",
      "Worked in a high-scale environment with real users, performance constraints, and rapid releases.",
    ],
  },
  {
    title: "Senior Full Stack Developer",
    company_name: "Capitolis",
    icon: capitolis,
    iconBg: "#383E56",
    date: "May 2021 - Present",
    points: [
      "Leading development of complex financial SaaS dashboards used by top-tier global banks.",
      "Building high-performance React and Next.js applications with a strong emphasis on UX and reliability.",
      "Implemented end-to-end testing (Cypress), significantly reducing production bugs and regressions.",
      "Introduced Sentry error tracking and structured logging, improving observability and incident response.",
      "Owning features end-to-end across frontend and backend, reducing dependencies and shortening release cycles.",
      "Working closely with product, QA, and DevOps in a highly regulated, production-critical environment.",
    ],
  },
];


export type Feedback = {
  quote: string;
  writer: string;
  writerRole: string;
  company: string;
  image: string;
};

export const feedbacks: Feedback[] = [
  {
    quote:
      "I thought it was impossible to make a website as beautiful as our product, but Itay proved me wrong.",
    writer: "Sara Lee",
    writerRole: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    quote:
      "I've never met a web developer who truly cares about their clients' success like Itay does.",
    writer: "Chris Brown",
    writerRole: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    quote:
      "After Itay optimized our website, our traffic increased by 50%. We can't thank him enough!",
    writer: "Lisa Wang",
    writerRole: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export type Tag = {
  name: string;
  color: string;
};

export type Project = {
  name: string;
  description: string;
  tags: Tag[];
  image: StaticImageData;
  source_code_link: string;
};

export const projects = [
  {
    name: "Car Rent",
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
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
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
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export const aboutDescription =
  `I'm a full-stack web developer focused on building high-quality, production-ready web applications.
I work with modern technologies such as React, Next.js, GraphQL, and cloud platforms like Vercel
to deliver fast, scalable, and maintainable systems.

I collaborate closely with product managers and stakeholders to understand requirements, make
clear technical decisions, and deliver reliable solutions on time. I value clean architecture,
clear communication, and continuous improvement.
`;

export const workDescription =
  "Here you will find a showcase of my practical skills and experience in various web development areas, ranging from frontend and backend development to full-stack web development. Each project entry provides a brief overview of its purpose with links to code repositories and live demos in it. My projects highlight my ability to undertake complex web development tasks and deliver successful outcomes.";

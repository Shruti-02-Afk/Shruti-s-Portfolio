// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's

/*
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';
*/
// Education Section Logo's
import anms from './assets/education_logo/ANMS.jpeg'
import wpc from './assets/education_logo/WPC.png';
import jis from './assets/education_logo/JIS.jpeg';


// Project Section Logo's
import careerdock from './assets/work_logo/CareerDock.png';
import netflix from './assets/work_logo/Netflix.png';
import newsMag from './assets/work_logo/NewsMag.png';
import gemini from "./assets/work_logo/Gemini.jpg";
import cashlytic from "./assets/work_logo/Cashlytic.png";


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      //{ name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      //{ name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      //{ name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      //{ name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      //{ name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      //{ name: 'Python', logo: pythonLogo },
      //{ name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      //{ name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      //{ name: 'Postman', logo: postmanLogo },
      //{ name: 'Compass', logo: mcLogo },
      // { name: 'Vercel', logo: vercelLogo },
      //{ name: 'Netlify', logo: netlifyLogo },
      //{ name: 'Figma', logo: figmaLogo },
    ],
  },
];

/*export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Fullstack Developer",
    company: "Webverse Digital",
    date: "April 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Fullstack Engineer",
    company: "Agumentik Group of Companies",
    date: "July 2023 - March 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Frontend Intern",
    company: "Newton School",
    date: "September 2021 - August 2022",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Figma",
      "Material UI",
    ],
  },
];

*/
export const education = [
  {
    id: 0,
    img: jis,
    school: "JIS College of Engineering",
    date: "August 2023 – June 2026 (Expected)",
    grade: "8.52 CGPA (till now)",
    desc: "I am currently pursuing my Bachelor of Technology degree in Computer Science Engineering at JIS College of Engineering. Throughout my studies, I have gained a solid foundation in fundamental computer science topics such as Data Structures, Algorithms, Database Systems, Operating Systems, and Software Engineering. I actively participate in technical workshops, coding competitions, and seminars to enhance my practical skills and industry readiness. Maintaining a CGPA of 8.52, I continue to focus on both academic excellence and hands-on experience to prepare myself for a successful career in technology",
    degree: "Bachelor of Technology - B.Tech (Computer Science Engineering)",
  },
  {
    id: 1,
    img: wpc,
    school: "Women's Polytechnic Chandannagore",
    date: "July 2019 – August 2022",
    grade: "CGPA 8.3 (Distinction I)",
    desc: "Completed a Diploma in Computer Science and Technology with CGPA 8.3 (Distinction I) from Women's Polytechnic, Chandannagore. Gained practical and theoretical knowledge in programming, data structures, networks, and web development through hands-on projects and labs.",
    degree: "Diploma in Computer Science and Technology",
  },
  {
    id: 2,
    img: anms,
    school: "Authpur National Model Higher Secondary School",
    date: "Apr 2018 – Mar 2019",
    grade: "A (86%)",
    desc: "I completed my class 10 education from Authpur National Model Higher Secondary School under the ICSE board, where I studied in the Science stream.",
    degree: "ICSE (X), Science Stream",
  },
];

export const projects = [
  {
    id: 0,
    title: "Cashlytic",
    description:
      "A modern personal finance web app built with Next.js, JavaScript, and Supabase. It helps users track expenses, manage budgets, and analyze spending patterns, with AI-powered receipt scanning using the Google Gemini API. Features include secure Clerk authentication, real-time workflows with Inngest, and a sleek, responsive UI with Tailwind CSS.",
    image: cashlytic,
    tags: ["Next.js", "JavaScript", "Supabase", "Clerk", "Inngest", "Google Gemini API", "AI-powered", "Tailwind CSS", "React", "REST API"],
    github: "https://github.com/Shruti-02-Afk/Cashlytic",
    webapp: "https://cashlytic-git-main-shruti-shaws-projects.vercel.app/",
  },

  {
    id: 1,
    title: "CareerDock",
    description:
      "A full-stack job portal platform designed to connect job seekers with employers. Built with Node.js, Express, and MongoDB, CareerDock enables users to search and apply for jobs, while recruiters can post and manage job listings. It features JWT-based authentication, secure RESTful APIs, and a clean, user-friendly interface with EJS templating.",
    image: careerdock, // Replace with your image import or path
    tags: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "REST API", "EJS", "HTML", "CSS", "Full-Stack"],
    github: "https://github.com/Shruti-02-Afk/CAREER_DOCK",
    webapp: "https://careerdock.onrender.com/",
  },

  {
    id: 2,
    title: "Netflix Full-Stack Colne",
    description:
      "Built a full-stack Netflix clone website using ReactJS and Shadcn UI for a sleek, responsive interface featuring dynamic movie listings and secure user authentication. Developed backend RESTful APIs with Express and Node.js to manage users and movie data, leveraging MongoDB for efficient data persistence.",
    image: netflix,
    tags: ["React.js", "Shadcn UI", "Node.js", "Express", "MongoDB", "JavaScript", "REST API", "Full-Stack", "Authentication", "Responsive Design"]
    ,
    github: "https://github.com/Shruti-02-Afk/Netflix",
    webapp: "https://github.com/Shruti-02-Afk/Netflix",
  },
  {
    id: 3,
    title: "News Magazine Website",
    description:
      "Developed a dynamic news magazine website utilizing HTML, CSS, and JavaScript. The platform aggregates and displays the latest news articles, providing users with an engaging and informative reading experience.",
    image: newsMag,
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "News API", "Frontend"]
    ,
    github: "https://github.com/Shruti-02-Afk/News-Magazine",
    webapp: "https://github.com/Shruti-02-Afk/News-Magazine",
  },
  {
    id: 4,
    title: "Gemini AI Chatbot Clone",
    description:
      "Developed a responsive Gemini AI chatbot clone using React and Vite, integrating the Google Gemini API for real-time conversational interactions. The application features a sleek chat interface with simulated typing effects, providing users with an engaging and informative experience.",
    image: gemini,
    tags: ["React.js", "Vite", "JavaScript", "AI Chatbot", "Google Gemini API", "Responsive Design", "Frontend"],
    github: "https://github.com/Shruti-02-Afk/gemini-clone",
    webapp: "https://github.com/Shruti-02-Afk/gemini-clone",
  },

];

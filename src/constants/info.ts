import { Project } from '@/types';

export const personalInfo = {
  name: 'Jasper Fernandez',
  address: 'Tandag City, Surigao del Sur, Philippines',
  email: 'jasperfernandez322@gmail.com',
  contactNo: '+639514534742',
  role: 'Software Developer',
  whoAmI:
    "Hello there! I'm Jasper, a web artisan with 2 years of experience in Full Stack Development. I enjoy solving complex problems and creating efficient solutions. I have a strong foundation in both frontend and backend technologies, which allows me to build a maintanable and scalable applications.",
};

export const myExperience = [
  {
    id: 1,
    date: 'September 2023 - Present',
    title: 'Full Stack Web Developer Freelancer',
    description:
      'Worked on various projects for clients, including web applications and mobile apps. Gained experience in project management and client communication. Developed skills in problem-solving and debugging.',
  },
  {
    id: 2,
    date: 'October, 2024 - January 2025',
    title: 'Full Stack Developer at DEVPLE',
    description:
      'Developed a comprehensive School Management System to streamline student enrollment, class scheduling, grade tracking, and administrative tasks, enhancing overall efficiency and communication. Gained experience in cloud platforms (AWS and Digital Ocean) and deployment processes.',
  },
  {
    id: 3,
    date: 'July 6, 2023 - April 4, 2023',
    title: 'Intern at NEMSU ICT Unit',
    description:
      'Assisted in developing a web application for the university’s IGP Office, collaborating closely with senior developers and gaining hands-on experience.',
  },
  // {
  //   id: 4,
  //   date: 'June 2020',
  //   title: 'The First Hello World',
  //   description:
  //     'My first experience with programming was in C++ where I wrote my first Hell World program. I learned the basics of programming including variables, loops, functions and OOP.',
  // },
];

export const educations = [
  {
    id: 1,
    date: 'August 2020 - June 2024',
    title: 'North Eastern Mindanao State University - Tandag Campus',
    description:
      'Graduate of Bachelor of Science in Computer Science (BSCS). Completed coursework in software development, database management, and web technologies. Participated in various projects and internships to gain practical experience.',
  },
  {
    id: 2,
    date: '2018 - 2020',
    title: 'St. Michaels School of Madrid, Inc.',
    description:
      'Graduate of Senior High School with a focus on TVL-ICT track. Gained foundational knowledge in computer system servicing such as installation and configuration, networking, troubleshooting, and server setup, and maintenance repair.',
  },
];

export const links = {
  github: 'https://github.com/jasperfernandez',
  linkedin: 'https://www.linkedin.com/in/fernandezjasper',
  cv: 'https://drive.google.com/file/d/1O5t9qOCFVp0YQY8eRDRD1g_BSgbfjZyR/view?usp=sharing',
};

export const projects: Record<string, Project> = {
  evotepro: {
    key: 'evotepro',
    title: 'E-VotePro',
    description:
      "An election management system tailored for NEMSU's student elections.",
    link: '',
    repoLink: 'https://github.com/jasperfernandez',
    displayImage: '/images/evotepro/2.png',
    images: [
      '/images/evotepro/1.png',
      '/images/evotepro/2.png',
      '/images/evotepro/3.png',
      '/images/evotepro/4.png',
    ],
    stack: ['laravel', 'bootstrap', 'flutter', 'bloc', 'mysql'],
  },
  aptiquest: {
    key: 'aptiquest',
    title: 'Aptiquest',
    description:
      "A management system for student applicants and examiner's entrance exam results for NEMSU Tandag Campus Guidance Office.",
    link: '',
    repoLink: 'https://github.com/jasperfernandez',
    displayImage: '/images/aptiquest/2.png',
    images: [
      '/images/aptiquest/1.png',
      '/images/aptiquest/2.png',
      '/images/aptiquest/3.png',
      '/images/aptiquest/4.png',
    ],
    stack: ['laravel', 'bootstrap', 'mysql'],
  },
  ims: {
    key: 'ims',
    title: 'IMS',
    description:
      'An inventory management system custom built for Jelmaxx Hardware.',
    link: '',
    repoLink: 'https://github.com/jasperfernandez',
    displayImage: '/images/ims/2.png',
    images: [
      '/images/ims/1.png',
      '/images/ims/2.png',
      '/images/ims/3.png',
      '/images/ims/4.png',
      '/images/ims/5.png',
      '/images/ims/6.png',
    ],
    stack: ['laravel', 'bootstrap', 'mysql'],
  },
  bms: {
    key: 'bms',
    title: 'BMS',
    description:
      'An barangay management system custom built for Barangay Bag-ong Lunsod with chatbot powered by OpenAI GPT-3.5 Turbo.',
    link: 'https://brgybagonglungsod.site/',
    repoLink: 'https://github.com/jasperfernandez',
    displayImage: '/images/bms/2.png',
    images: [
      '/images/bms/1.png',
      '/images/bms/2.png',
      '/images/bms/3.png',
      '/images/bms/4.png',
      '/images/bms/5.png',
      '/images/bms/6.png',
      '/images/bms/7.png',
      '/images/bms/8.png',
      '/images/bms/9.png',
      '/images/bms/10.png',
      '/images/bms/11.png',
      '/images/bms/12.png',
    ],
    stack: [
      'vuejs',
      'typescript',
      'inertiajs',
      'laravel',
      'tailwindcss',
      'shadcnui',
      'mysql',
    ],
  },
  rcs: {
    key: 'rcs',
    title: 'RCS',
    description:
      'A pet management system utilizing Random Forest Algorithm for barangay rabies case/incident risk level analysis built for Tandag City Vet Office and Barangay Councils.',
    link: 'https://rabies-control-system.online',
    repoLink: 'https://github.com/jasperfernandez',
    displayImage: '/images/rcs/3.png',
    images: [
      '/images/rcs/1.png',
      '/images/rcs/2.png',
      '/images/rcs/3.png',
      '/images/rcs/4.png',
    ],
    stack: [
      'react',
      'typescript',
      'inertiajs',
      'laravel',
      'fastapi',
      'tailwindcss',
      'shadcnui',
      'zod',
      'mysql',
    ],
  },
  nembus: {
    key: 'nembus',
    title: 'NEMBUS',
    description:
      'A syllabus chatbot using OpenAI GPT-3.5 Turbo and LlamaParse for academic support.',
    link: 'https://nembus.site',
    repoLink: 'https://github.com/jasperfernandez',
    displayImage: '/images/nembus/3.png',
    images: [
      '/images/nembus/1.png',
      '/images/nembus/2.png',
      '/images/nembus/3.png',
      '/images/nembus/4.png',
      '/images/nembus/5.png',
      '/images/nembus/6.png',
      '/images/nembus/7.png',
      '/images/nembus/8.png',
      '/images/nembus/9.png',
      '/images/nembus/10.png',
    ],
    stack: [
      'react',
      'typescript',
      'inertiajs',
      'laravel',
      'tailwindcss',
      'shadcnui',
      'zod',
      'mysql',
    ],
  },
  optplus: {
    key: 'optplus',
    title: 'OPT-PLUS',
    description:
      'A system for managing child health assesments with AI analysis using OpenAI GPT 3.5 Turbo.',
    link: 'https://opt-plus.site',
    repoLink: 'https://github.com/jasperfernandez',
    displayImage: '/images/optplus/2.png',
    images: [
      '/images/optplus/1.png',
      '/images/optplus/2.png',
      '/images/optplus/3.png',
      '/images/optplus/4.png',
      '/images/optplus/5.png',
      '/images/optplus/6.png',
      '/images/optplus/7.png',
    ],
    stack: [
      'react',
      'typescript',
      'inertiajs',
      'laravel',
      'tailwindcss',
      'zod',
      'mysql',
    ],
  },
  fes: {
    key: 'fes',
    title: 'FES',
    description: 'A faculty evaluation system for NEMSU.',
    link: 'https://nemsu-fes.online',
    repoLink: 'https://github.com/jasperfernandez',
    displayImage: '/images/fes/8.png',
    images: [
      '/images/fes/1.png',
      '/images/fes/2.png',
      '/images/fes/3.png',
      '/images/fes/4.png',
      '/images/fes/5.png',
      '/images/fes/6.png',
      '/images/fes/7.png',
      '/images/fes/8.png',
      '/images/fes/9.png',
      '/images/fes/10.png',
      '/images/fes/11.png',
      '/images/fes/12.png',
      '/images/fes/13.png',
      '/images/fes/14.png',
      '/images/fes/15.png',
      '/images/fes/16.png',
      '/images/fes/17.png',
      '/images/fes/18.png',
      '/images/fes/19.png',
    ],
    stack: [
      'react',
      'typescript',
      'inertiajs',
      'laravel',
      'tailwindcss',
      'shadcnui',
      'zod',
      'mysql',
    ],
  },
  pms: {
    key: 'pms',
    title: 'PMS',
    description: 'A project management system for Reygenix.',
    link: '',
    repoLink: 'https://github.com/jasperfernandez',
    displayImage: '/images/pms/2.png',
    images: [
      '/images/pms/1.png',
      '/images/pms/2.png',
      '/images/pms/3.png',
      '/images/pms/4.png',
    ],
    stack: ['laravel', 'bootstrap', 'mysql'],
  },
  todo: {
    key: 'todo',
    title: 'Todo App',
    description: 'A simple todo app.',
    link: 'https://todo-jasperfernandez.vercel.app',
    repoLink: 'https://github.com/jasperfernandez/todo-app',
    displayImage: '/images/todo/1.png',
    images: ['/images/todo/1.png'],
    stack: ['vuejs'],
  },
  pomodoro: {
    key: 'pomodoro',
    title: 'Pomodoro App',
    description: 'A simple pomodoro app.',
    link: 'https://pomodoro-jasperfernandez.vercel.app',
    repoLink: 'https://github.com/jasperfernandez/pomodoro-app',
    displayImage: '/images/pomodoro/1.png',
    images: ['/images/pomodoro/1.png'],
    stack: ['vuejs'],
  },
};

export const skills = {
  // Frontend
  html: {
    key: 'html',
    title: 'HTML',
    type: 'frontend',
  },
  css: {
    key: 'css',
    title: 'CSS',
    type: 'frontend',
  },
  javascript: {
    key: 'javascript',
    title: 'JavaScript',
    type: 'frontend',
  },
  react: {
    key: 'react',
    title: 'React',
    type: 'frontend',
  },
  typescript: {
    key: 'typescript',
    title: 'TypeScript',
    type: 'frontend',
  },
  vuejs: {
    key: 'vuejs',
    title: 'Vue.js',
    type: 'frontend',
  },
  tailwindcss: {
    key: 'tailwindcss',
    title: 'Tailwind CSS',
    type: 'frontend',
  },
  bootstrap: {
    key: 'bootstrap',
    title: 'Bootstrap',
    type: 'frontend',
  },
  shadcnui: {
    key: 'shadcnui',
    title: 'Shadcn UI',
    type: 'frontend',
  },
  zod: {
    key: 'zod',
    title: 'Zod',
    type: 'frontend',
  },
  framermotion: {
    key: 'framermotion',
    title: 'Framer Motion',
    type: 'frontend',
  },

  // Backend
  php: {
    key: 'php',
    title: 'PHP',
    type: 'backend',
  },
  laravel: {
    key: 'laravel',
    title: 'Laravel',
    type: 'backend',
  },
  python: {
    key: 'python',
    title: 'Python',
    type: 'backend',
  },
  fastapi: {
    key: 'fastapi',
    title: 'FastAPI',
    type: 'backend',
  },

  // Database
  mysql: {
    key: 'mysql',
    title: 'MySQL',
    type: 'database',
  },
  sqlite: {
    key: 'sqlite',
    title: 'SQLite',
    type: 'database',
  },
  postgressql: {
    key: 'postgressql',
    title: 'PostgresSQL',
    type: 'database',
  },
  redis: {
    key: 'redis',
    title: 'Redis',
    type: 'database',
  },

  // Tools
  postman: {
    key: 'postman',
    title: 'Postman',
    type: 'tools',
  },
  git: {
    key: 'git',
    title: 'Git',
    type: 'tools',
  },
  github: {
    key: 'github',
    title: 'Github',
    type: 'tools',
  },
  githubdesktop: {
    key: 'githubdesktop',
    title: 'Github Desktop',
    type: 'tools',
  },
  vscode: {
    key: 'vscode',
    title: 'VS Code',
    type: 'tools',
  },
  phpstorm: {
    key: 'phpstorm',
    title: 'PhpStorm',
    type: 'tools',
  },
  androidstudio: {
    key: 'androidstudio',
    title: 'Android Studio',
    type: 'tools',
  },
  figma: {
    key: 'figma',
    title: 'Figma',
    type: 'tools',
  },
  beekeeperstudio: {
    key: 'beekeeperstudio',
    title: 'Beekeeper Studio',
    type: 'tools',
  },

  // DevOps
  nginx: {
    key: 'nginx',
    title: 'Nginx',
    type: 'devops',
  },
  linux: {
    key: 'linux',
    title: 'Linux Basic Commands',
    type: 'devops',
  },
  ubuntu: {
    key: 'ubuntu',
    title: 'Ubuntu',
    type: 'devops',
  },
  digitalocean: {
    key: 'digitalocean',
    title: 'Digital Ocean',
    type: 'devops',
  },
  githubactions: {
    key: 'githubactions',
    title: 'Github Actions',
    type: 'devops',
  },

  // Others
  inertiajs: {
    key: 'inertiajs',
    title: 'Inertia.js',
    type: 'others',
  },
  flutter: {
    key: 'flutter',
    title: 'Flutter',
    type: 'others',
  },
  bloc: {
    key: 'bloc',
    title: 'Bloc',
    type: 'others',
  },
};

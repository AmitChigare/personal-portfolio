import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Amit Chigare",
  initials: "AC",
  url: "https://amitchigare.com", // You may want to update this with Amit's actual website URL
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  description:
    "Full Stack Developer with expertise in MERN stack and a passion for building innovative web applications.",
  summary:
    "I'm a B.Tech graduate in Electronics and Communication Engineering at Indian Institute of Information Technology D&M Kancheepuram, with a strong focus on full-stack development. I have experience in building production-level web applications and have participated in various hackathons, winning awards for innovative projects.",
  avatarUrl: "https://avatars.githubusercontent.com/u/96920033?v=4", // You may want to update this with Amit's actual avatar image
  skills: [
    "JavaScript",
    "Python",
    "Java",
    "TypeScript",
    "SQL",
    "HTML",
    "CSS",
    "Node.js",
    "React.js",
    "Express.js",
    "Next.js",
    "Django",
    "Flask",
    "Electron.js",
    "Redux-Toolkit",
    "GraphQL",
    "FastAPI",
    "RapidAPI",
    "Bootstrap",
    "Tailwind CSS",
    "ShadCN",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "AWS",
    "MSSQL",
    "SqlLite",
    "Django Rest Framework",
    "Django Channels",
    "Next.js SSR",
    "React Router",
    "Next.js SSG",
    "OAuth2",
    "JWT",
    "Responsive Design",
    "SEO Optimization",
    "Git",
    "GitHub",
    "Visual Studio",
    "Chrome DevTools",
    "VS Code Debugger",
    "ESLint",
    "CI/CD Pipelines",
    "Agile Methodologies",
    "Docker",
    "Cloud Platforms (AWS, Azure)",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/techy", icon: NotebookIcon, label: "Technical" },
  ],
  contact: {
    email: "amitchigare7@gmail.com",
    tel: "+91 0000000000",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AmitChigare",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amit-chigare",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/amitgokakfalls17",
        icon: Icons.x,

        navbar: true,
      },
      Instagram: {
        name: "Youtube",
        url: "https://instagram.com/amit_uc_",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Nirvin IT Solutions",
      href: "https://intartica.com",
      badges: [],
      location: "Hyderabad, India (remote)",
      title: "Full Stack Developer Intern",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIV2gkSyxNvdFjzXIonhjdZ-jy6yWgCie8Jg&s", // You may want to update this with the actual logo
      start: "Nov 2023",
      end: "April 2024",
      description:
        "Built a production level MERN stack Interior Design website from scratch. Launched on intartica.com on AWS EC2 and implemented a robust CI/CD pipeline through GitHub Actions. Developing an advanced MERN E-commerce application for Intartica, incorporating Passport-based authentication for enhanced security. Utilizing Next.js and TypeScript to build a dynamic front end, while the backend is powered by ExpressJs.",
    },
    {
      company: "Congruent Solutions Private Limited",
      href: "https://www.cspl.com",
      badges: [],
      location: "Chennai, India",
      title: "Trainee Programmer (Full Stack) Intern",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfIsrFUJ7ley0HENmk7KPOOSA7MkRxhJ5X8w&s", // You may want to update this with the actual logo
      start: "May 2023",
      end: "Oct 2023",
      description:
        "Worked on ReactJS Projects - Upgraded dependencies, removed vulnerabilities, advanced hooks and routers. Reduced up to 30 percent of Azure billing cost by analyzing the expenditure data and building Dashboard for clear Visualization (Django, Python, DashPlotly). Designed end-to-end dashboards covering frontend, APIs, and stored procedures for reports. Independently built a customized reporting module, showcasing expertise in MSSQL, Dapper, Entity Framework, .NET, React, Recharts, and React-bootstrap. Followed Agile development cycle with Azure DevOps.",
    },
  ],
  education: [
    {
      school: "Indian Institute of Information Technology D&M Kancheepuram",
      href: "https://www.iiitdm.ac.in",
      degree: "B.Tech in Electronics and Communication Engineering",
      logoUrl: "/iiitdm.png", // You may want to update this with the actual logo
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Automation of Institute Forms",
      href: "https://github.com/amitchigare/institute-forms-automation",
      dates: "2023",
      active: true,
      description:
        "Integrated Academic Forms into College Website using PHP and MySQL. Solved the problem of physical printout of forms by automating the form flow to professors in a seamless flow.",
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/amitchigare/institute-forms-automation",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "GreatKart",
      href: "https://github.com/amitchigare/greatkart",
      dates: "2023",
      active: true,
      description:
        "Implemented Custom User Model and context processors. Developed RESTful APIs using Django Rest Framework. Implemented advanced Django features such as middleware, signals, and custom context processors to enhance application functionality and performance. Customized Django's built-in admin panel to provide a more user-friendly and intuitive interface.",
      technologies: ["Django", "Python", "REST API", "PostgreSQL"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/amitchigare/greatkart",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
  hackathons: [
    {
      title: "Matrix - ETHIndia 2024",
      dates: "December 2024",
      location: "KTPO Whitefield, Bengaluru",
      description:
        "Matrix is here to gamify learning! 🎮📚 A blockchain-based multiplayer game that helps you learn new languages 🌍 by diving into fun, real-life-inspired missions 🚀. What Makes Matrix Unique?🌐Cross-Chain Magic: Play from any supported blockchain like Optimism, Arbitrum, or Base!🗺️ Global Map: A unified map connects players worldwide 🌎, with real-time-like movement illusions 🎥.🤝 Proximity Interactions: Chat 💬 and connect based on in-game location, just like real life!🤖 AI Agents: Engage with smart AI for player-to-AI 🤝 and AI-to-AI 🤖✨ interactions.💼",
      image:
        "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fd64ead180bfc42bda8cee408f6d39b80%2Fprojects%2F5e421339f88c4963902345e4bd4c0d06%2Ff9f4e2b3-2d91-479a-813e-9224a4608181.jpeg&w=1440&q=75", // You may want to update this with the actual image
      links: [],
    },
    {
      title: "DreamScribe - Unfold 2024",
      dates: "December 2024",
      location: "Marriott Whitefield, Bengaluru",
      description:
        "DreamScribe is a fun and competitive Telegram mini-game 🎮 that challenges players to unleash their creativity under time pressure. Players manipulate 3D objects in a free space to craft unique art on a 2D screen, blending imagination with quick thinking. We overcame challenges like undocumented bugs 🛠️ with developer support and integrated AI agents to moderate the game. Using Okto's abstracted login, we simplified onboarding and managed scores and objects across multiple chains, aligning seamlessly with the Okto track 🚀.",
      image:
        "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fbeea3a652dd04c86b1890bd76bca5451%2Fprojects%2Fddaea3611790437cbd340dcc32b8ce02%2F9d7bf702-f405-4581-8da2-f3530066479c.jpeg&w=1440&q=75", // You may want to update this with the actual image
      links: [],
    },
    {
      title: "RecapIt - Convex Zero to Hero Hackathon 2024",
      dates: "March 2024",
      location: "Online",
      description:
        "Awarded as 'Most Viral App' and winning a prize money of $1500. We used React Native to build the application and utilized Clerk for authentication while Backend was managed by Convex.",
      image: "/recapit-hackathon.png", // You may want to update this with the actual image
      links: [],
    },
    {
      title: "Canvas - Unfold 2023",
      dates: "October 2023",
      location: "KTPO Whitefield,Bengaluru",
      description:
        "Canvas is your decentralized productivity hub 🚀—empowering you to effortlessly create documents, collaborate in real-time, control access, and monetize your content 💰. It solves the hassle of managing productivity tools by combining them into one platform, while the NFT template marketplace 🛍️ turns your creativity into value.  With seamless smart contract communication, default wallet integration 🔗, and a clean, modular codebase 🏗️, Canvas makes collaboration and updates future-proof. Embrace the future of productivity today! 🎉",
      image:
        "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F720066c363054ce08d0fcfa0158d48f6%2Fprojects%2F8117b7d0b2304850a9b848a5ee9a9729%2F8debc6f8-b57f-4f5c-bfcf-10018cc184d9.jpeg&w=1440&q=75", // You may want to update this with the actual image
      links: [],
    },
    {
      title: "SafeKey - Pangea Hackathon",
      dates: "June 2023",
      location: "Online",
      description:
        "Awarded as 'Most Creative Project' by Pangea with prize money of $500. Transferred a USB device into a secret key by using Pangea Vault API to backup the encrypt/decrypt keys in real time.",
      image: "/safekey-hackathon.png", // You may want to update this with the actual image
      links: [],
    },
  ],
} as const;

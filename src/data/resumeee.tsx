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
    "I'm a B.Tech student in Electronics and Communication Engineering at Indian Institute of Information Technology D&M Kancheepuram, with a strong focus on full-stack development. I have experience in building production-level web applications and have participated in various hackathons, winning awards for innovative projects.",
  avatarUrl: "/amit-chigare.png", // You may want to update this with Amit's actual avatar image
  skills: [
    "JavaScript",
    "Python",
    "TypeScript",
    "SQL",
    "HTML/CSS",
    "Node.js",
    "React.js",
    "Express.js",
    "Next.js",
    "Django",
    "Flask",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "AWS",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "amitchigare7@gmail.com",
    tel: "+91 9901580475",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/amitchigare",
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
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
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
      logoUrl: "/nirvin-it-solutions.png", // You may want to update this with the actual logo
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
      logoUrl: "/congruent-solutions.png", // You may want to update this with the actual logo
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
      title: "RecapIt - Convex Zero to Hero Hackathon 2024",
      dates: "March 2024",
      location: "Online",
      description:
        "Awarded as 'Most Viral App' and winning a prize money of $1500. We used React Native to build the application and utilized Clerk for authentication while Backend was managed by Convex.",
      image: "/recapit-hackathon.png", // You may want to update this with the actual image
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

export type NavItem = {
  label: string;
  href: string;
};

export type TimelineItem = {
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
};

export type SkillGroup = {
  category: string;
  summary: string;
  skills: string[];
};

export type Project = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  credentials?: ProjectCredential[];
  paperDetails?: ProjectPaperDetails;
};

export type ProjectCredential = {
  role: string;
  userid: string;
  password: string;
};

export type ProjectPaperDetails = {
  doi?: string;
  paperName?: string;
  conferenceName?: string;
  conferenceYear?: string;
  authors?: string[];
  abstract?: string;
  paperUrl?: string;
};

export const portfolioData = {
  personal: {
    name: "Saifullah Anik",
    title: "Full Stack Developer",
    tagline:
      "I build fast, accessible, product-focused web applications with clean architecture and thoughtful user experience.",
    location: "Gazipur, Bangladesh",
    email: "sanik@gmail.com",
    phone: "+880 1884 70 21 79",
    resumeUrl: "https://drive.google.com/drive/folders/1RwMqdVbRSSztoZlO-pWPCXa-F0Fx8Jd5?usp=sharing",
    avatar: "/portfolio/avatar2.jpg",
    bio: [
      "I am a full stack developer who enjoys turning unclear product ideas into reliable, elegant software. My work blends frontend craft, backend structure, and a steady obsession with usability.",
      "My journey started with small JavaScript experiments and grew into building production-ready applications with React, Next.js, Node.js, databases, and cloud-friendly tooling.",
      "I care about clean interfaces, resilient systems, and solving practical problems for real users.",
    ],
  },
  socials: {
    github: "https://github.com/sanik4144",
    linkedin: "https://linkedin.com/in/saanik",
    leetcoode: "https://leetcode.com/u/anik15-4922",
    facebook: "https://facebook.com/sanik4144",
  },
  nav: [
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Research", href: "#research-works" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],

  experience: [
    {
      title: "Junior Full Stack Developer",
      organization: "Bangladesh Rice Research Institute",
      period: "May 2026 - Present",
      description:
        "Building internal product dashboards and customer-facing workflows for a fast-moving software team.",
      highlights: [
        "Improved dashboard load times by 42% through route-level optimization",
        "Created reusable React components that reduced duplicate UI code",
        "Integrated role-based access control and audit-friendly API endpoints",
      ],
    },
    {
      title: "Instructor, Algorithm",
      organization: "Q-Bit Learning",
      period: "Jul 2024 - Jul 2025",
      description:
        "Conducted lectures on programming and computer science fundamentals for undergraduate-level students",
      highlights: [
        "Delivered 50+ hours of structured instruction to 100+ students",
        "Designed quizzes, mock labs, and assessments to evaluate student learning",
        "Mentored students on academic and real-world projects"
      ],
    },
  ] satisfies TimelineItem[],

  skills: [
    {
      category: "Frontend",
      summary: "Interfaces that feel crisp, accessible and fast.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      summary: "APIs and services with practical boundaries.",
      skills: ["Node.js", "Express.js", "REST APIs", "Spring Boot", "Auth", "JWT", "Bcrypt"],
    },
    {
      category: "Database",
      summary: "Data models that support real product workflows.",
      skills: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL", "Prisma"],
    },
    {
      category: "Tools",
      summary: "Daily engineering tools for shipping confidently.",
      skills: ["Github", "Linux", "Vercel","Postman", "ORMs", "Firebase"],
    },
    {
      category: "Language",
      summary: "Core languages for full stack development and scripting.",
      skills: ["JavaScript", "C", "C++", "Java", "Python", "Dart"],
    },
    {
      category: "Others",
      summary: "Soft skills and additional tools that support my work.",
      skills: ["Problem-solving", "Communication", "Teamwork", "Version Control"],
    },
  ] satisfies SkillGroup[],

  projects: [
    {
      title: "Quix",
      description:
        "A full-stack Learning Management System that supports Admin, Instructor, and Student roles with a dynamic permission system, course management, quizzes, enrollments, certificates and progress tracking.",
      image: "/portfolio/lms.png",
      techStack: ["React.js", "Node.js", "Express.js", "MySQL", "Sequelize"],
      liveUrl: "https://quix-frontend.vercel.app/",
      githubUrl: "https://github.com/sanik4144/quix",
      credentials: [
        {
          role: "Admin",
          userid: "admin@quix.com",
          password: "admin123",
        },
        {
          role: "Instructor",
          userid: "instructor1@quix.com",
          password: "instructor123",
        },
        {
          role: "Student",
          userid: "student1@quix.com",
          password: "student123",
        },
      ],
    },
    {
      title: "Materials",
      description:
        "A single vendor ecommerce site that I have been building with my teammate for a client. A full-stack eCommerce platform using JavaScript (MERN stack). Designed scalable backend APIs using Node.js & Express.js. Managed data with MongoDB",
      image: "/portfolio/materials.png",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
      liveUrl: "https://materials4981.netlify.app/",
      githubUrl: "",
    },
    {
      title: "Resume Analyzer",
      description:
        "A full-stack application that analyzes resumes against job descriptions using Google's Gemini AI. The application identifies missing keywords, assesses job fit, and offers actionable feedback to help candidates improve their resumes.",
      image: "/portfolio/resume_analyzer.png",
      techStack: ["React", "Node.js", "Express", "Gemini API", "Multer", "PDF-Parse", "Rate Limiting"],
      liveUrl: "https://resume-analyzer-frontend-opal.vercel.app/",
      githubUrl: "https://github.com/sanik4144/resume_analyzer_frontend",
    },
    {
      title: "SlideSpark",
      description:
        "SlideSpark helps students easily find and manage slides for their academic courses across various departments. Whether you're in CSE, EEE, SWE or NFE, this app ensures that your study resources are just a tap away.",
      image: "/portfolio/slidespark.png",
      techStack: ["Flutter", "Firebase", "Google Sign-In", "Cloud Firestore", "Firebase Storage"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.SparkStudio.slideSpark",
      githubUrl: "https://github.com/sanik4144/SlideSpark-App",
      credentials: [
        {
          role: "User",
          userid: "You cannot access unless you are a student of Daffodil International University",
          password: "Has to google Sign-In with a valid DIU email",
        },
      ],
    },
  ] satisfies Project[],

  education: [
    {
      title: "B.Sc. in Computer Science and Engineering",
      organization: "Daffodil International University",
      period: "2022 - 2025",
      description:
        "Relevant Courses: Data Structures & Algorithm, Web Dev, Databases, Software Engineering, OOP",
      highlights: [
        "Graduated with strong project portfolio",
        "Built capstone SaaS dashboard with React and Node.js",
        "Led peer coding sessions for JavaScript fundamentals",
      ],
    },
    {
      title: "HSC in Science",
      organization: "Dhaka College",
      period: "2018 - 2020",
      description:
        "Relevant Courses: Data Structures & Algorithm, Web Dev, Databases, Software Engineering, OOP",
      highlights: [
        "Graduated with strong project portfolio",
        "Built capstone SaaS dashboard with React and Node.js",
        "Led peer coding sessions for JavaScript fundamentals",
      ],
    },
  ] satisfies TimelineItem[],

  researchWorks: [
    {
      title: "A Speech Driven Framework For Identifying Low Resourced Ethnic Languages of Bangladesh",
      description:
        "2nd International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN - 2025)",
      image: "/portfolio/materials.png",
      techStack: ["Requirements", "Documentation", "Software Engineering"],
      liveUrl: "",
      githubUrl: "",
      paperDetails: {
        doi: "",
        paperName: "A Speech Driven Framework For Identifying Low Resourced Ethnic Languages of Bangladesh",
        conferenceName:
          "2nd International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN)",
        conferenceYear: "2025",
        authors: [
          "Saifullah Anik",
          "Nusrat Jahan",
          "Md. Rakib Hasan",
          "Dr. Farhana Rahman",
        ],
        abstract:
          "This demo paper presents a speech-driven framework for identifying low-resourced ethnic languages of Bangladesh from short audio samples. The proposed workflow combines audio preprocessing, feature extraction, and lightweight classification to support language documentation and inclusive digital services for communities with limited annotated speech resources.",
        paperUrl: "/papers/speech-driven-framework-demo.pdf",
      },
    },
    {
      title: "Behavioral Data-Driven Prediction of Suicide Risk Using Machine Learning Approaches",
      description:
        "(International Conference on Intelligent Data Analysis and Applications [IDAA 2025])",
      image: "/portfolio/lms.png",
      techStack: ["Research", "Dashboards", "Data Workflows", "Internal Tools"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Applying Convolutional Neural Networks for Early Multi-Class Detection of Lemon Leaf Diseases: A Comparative Analysis",
      description:
        "(1st International Conference on Smart Agriculture and Sustainable Development [ICSASD2026])",
      image: "/portfolio/resume_analyzer.png",
      techStack: ["Literature Review", "Problem Framing", "Technical Reports"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Early Multi-Class Disease Detection in Chili Plant Leaves Using Convolutional Neural Networks: A Comparative Study",
      description:
        "(8th International Conference on Sustainable Development-ICSD 2026)",
      image: "/portfolio/materials.png",
      techStack: ["Requirements", "Documentation", "Software Engineering"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Community Response to Early Warning System: An Empirical Study on Action Delay and Risk Perception",
      description:
        "(8th International Conference on Sustainable Development-ICSD 2026)",
      image: "/portfolio/materials.png",
      techStack: ["Requirements", "Documentation", "Software Engineering"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Early Detection of Sesame Leaf Diseases Using Convolutional Neural Networks",
      description:
        "(8th International Conference on Sustainable Development-ICSD 2026)",
      image: "/portfolio/materials.png",
      techStack: ["Requirements", "Documentation", "Software Engineering"],
      liveUrl: "",
      githubUrl: "",
    },
  ] satisfies Project[],

  achievements: [
    "Meta Front-End Developer Professional Certificate",
    "AWS Cloud Practitioner Essentials",
    "Champion, University Web App Hackathon 2023",
    "Open source contributor to React ecosystem utilities",
  ],
};

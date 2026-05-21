import { time } from "console";
import { format } from "path/win32";

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
      image: "/portfolio/demopaper.png",
      techStack: [],
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
          "Md. Obydul Hossain",
          "Md. Shakib Ahammed",
          "Gourab Kumar Pranta",
          "Abdus Sattar"
        ],
        abstract:
          "The ethnic languages with limited resources are not well represented in the field of computational speech, which makes it challenging to implement into the new technology. This study introduces a speech-based machine-learning system to detect 3 low-resource ethnic languages of Bangladesh that are Chakma, Marma and Garo. A collection of 2,321 audio samples of different native speakers was gathered, reading translated versions of 211 sentences in Bangali. The samples were checked to be linguistically correct and they were normalized in WAV format. Noise, silence, normalization and Mel Frequency Cepstral Coefficient (MFCC) extraction were performed as the prepro-cessing steps to obtain the consistent feature representationsthat can be used in machine-learning analysis. Through MFCC that can be used in machine-learning analysis. Through MFCC features, a set of classical machine-learning models, Support Vector Machine (SVM), Logistic Regression, Random Forest and K-Nearest Neighbors, were trained. The accuracy of the SVM and Random Forest models were the highest, with both models obtaining accuracy of 99.35%, whereas the accuracy of the Logistic Regression and KNN is 99.14% and 98.92% respectively. These good findings indicate that classical machine- learning approaches can be used to reasonably well learn the acoustic patterns of the differences between Chakma, Garo, and Marma, even with a relatively small dataset. In order to improve interpretability, SHAP (SHapley Additive exPlanations) was used on the SVM and the Random Forest models. SHAP outcome indicated that the most valuable features in all models were mfcc5mean, and the MFCCmean category was the most significant. On the whole, the results support the possibility of constructing an effective and explainable system of language- identification of low-resourced Bangladeshi languages with the help of classical machine learning. The future research consists of dataset expansion, deep-learning implementation, as well as real-time deployment to further digital inclusion and language preservation.",
        paperUrl: "/papers/paper1.pdf",
      },
    },
    {
      title: "Behavioral Data-Driven Prediction of Suicide Risk Using Machine Learning Approaches",
      description:
        "International Conference on Intelligent Data Analysis and Applications (IDAA 2025)",
      image: "/portfolio/paperimage2.png",
      techStack: [],
      liveUrl: "",
      githubUrl: "",
      paperDetails: {
        doi: "",
        paperName: "Behavioral Data-Driven Prediction of Suicide Risk Using Machine Learning Approaches",
        conferenceName:
          "International Conference on Intelligent Data Analysis and Applications (IDAA 2025)",
        conferenceYear: "2025",
        authors: [
          "Salman Af Rahman",
          "Saifullah Anik",
          "Radoanul Arifen",
          "Md. Shakib Ahammed",
          "S.M. Meriyan Islam",
          "M. Humayet Islam"
        ],
        abstract:
          "Suicide is a major global health issue, and identifying those at risk early can help prevent it. Our research aims to develop a model that predicts suicidal tenden- cies using a dataset of 1,128 records from hospitals in Bangladesh, including Dhaka Medical College, BIRDEM, and other institutions, with additional data sourced from GitHub. The dataset includes 16 factors like age, gender, sleep disorders, past suicide attempts, mental illnesses, and mood conditions. Data cleaning, missing value processing, label encoding, and feature standardization were applied for consistency. Four machine learning models—Logistic Regression, Random Forest, Support Vector Machine (SVM ), and XGBoost—were tested, with Random Forest and XGBoost achieving the highest accuracy of 98.14%. These results highlight how machine learning, particularly ensemble models, can detect subtle patterns in behavioral data, helping mental health professionals identify at-risk individuals before it's too late.",
        paperUrl: "/papers/paper2.pdf",
      },
    },
    {
      title: "Applying Convolutional Neural Networks for Early Multi-Class Detection of Lemon Leaf Diseases: A Comparative Analysis",
      description:
        "(1st International Conference on Smart Agriculture and Sustainable Development [ICSASD2026])",
      image: "/portfolio/demopaper.png",
      techStack: [],
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Early Multi-Class Disease Detection in Chili Plant Leaves Using Convolutional Neural Networks: A Comparative Study",
      description:
        "8th International Conference on Sustainable Development (ICSD 2026)",
      image: "/portfolio/paperimage4.png",
      techStack: [],
      liveUrl: "",
      githubUrl: "",
      paperDetails: {
        doi: "",
        paperName: "Early Multi-Class Disease Detection in Chili Plant Leaves Using Convolutional Neural Networks: A Comparative Study",
        conferenceName:
          "8th International Conference on Sustainable Development (ICSD 2026)",
        conferenceYear: "2026",
        authors: [
          "Radoanul Arifen",
          "S.M. Meriyan Islam",
          "Rakibul Hasan",
          "Apurba Saha",
          "S. M. Jabbaruzzaman",
          "Anisa Azad",
          "Saifullah Anik"
        ],
        abstract:
          "Chili is an important economic and nutritional crop with a relatively limited availability of different disease-resistant varieties. Leaf diseases, including those caused by fungi, bacteria, viruses, pests, or nutritional deficiencies, significantly compromise production and crop quality. Early detection of these diseases is key to reducing yield loss; however, traditional visual examinations are limited by time constraints, human subjectivity, and low detection sensitivity at early stages of infection. To overcome these challenges, this study proposes a deep learning based framework for early multi-class detection of chili leaf diseases using convolutional neural networks (CNNs). A real-field dataset comprising 16,392 high-resolution images of chili leaves across six disease and healthy classes was collected from multiple regions of Bangladesh. The dataset was preprocessed, augmented, and split into training and validation sets using an 80:20 ratio. Five pre-trained CNN architectures—DenseNet121, EfficientNetB3, MobileNetV2, ResNet50, and InceptionV3 were evaluated using a transfer learning strategy. Experimental results demonstrate that MobileNetV2 achieved the best performance, attaining an overall classification accuracy of 96%. The results indicate that the proposed system demonstrates strong generalization capability and effectively discriminates visually similar chili leaf diseases. This work can be considered a valuable application in precision agriculture, providing an efficient, automated, and practical approach for in situ early diagnosis of chili leaf diseases through smart farm management.",
        paperUrl: "/papers/paper4.pdf",
      },
    },
    {
      title: "Community Response to Early Warning System: An Empirical Study on Action Delay and Risk Perception",
      description:
        "(8th International Conference on Sustainable Development-ICSD 2026)",
      image: "/portfolio/demopaper.png",
      techStack: [],
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Early Detection of Sesame Leaf Diseases Using Convolutional Neural Networks",
      description:
        "(8th International Conference on Sustainable Development-ICSD 2026)",
      image: "/portfolio/demopaper.png",
      techStack: [],
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

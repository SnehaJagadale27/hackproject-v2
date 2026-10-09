// ═══════════════════════════════════════════════════════════
//  TEAM DATA — Edit this file to update ALL website content
// ═══════════════════════════════════════════════════════════

export const siteConfig = {
  teamName: "NexCore",
  teamInitials: "NC",
  hackathonName: "Hackathon 2026",
  tagline: "Four minds. Different strengths. One mission — turning ideas into meaningful solutions.",
  badge: "Tech × Creativity × Impact",
};

// ——————————————————————————
//  TEAM MEMBERS
// ——————————————————————————
export const members = [
  {
    id: 1,
    name: "Abhay Chougule",
    role: "AI & Data Science Engineer",

    bio: "Motivated Artificial Intelligence and Data Science engineering student with knowledge of programming, machine learning, data analysis, and web development. Passionate about applying technical skills to real-world projects.",

    photo: "/assets/team/Abhay.jpeg",
    photoPosition: "center 20%",

    technicalSkills: [
      "C",
      "C++",
      "Java",
      "Python",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "MySQL",
      "Jupyter Notebook",
      "LangChain",
      "APIs",
      "Node.js",
      "Microsoft Excel",
      "Power BI"
    ],

    softSkills: [
      "Problem Solving",
      "Communication",
      "Teamwork",
      "Leadership",
      "Planning",
      "Adaptability",
      "Continuous Learning"
    ],

    personality: [
      "Problem Solver",
      "Curious Learner",
      "Analytical Thinker",
      "Team Player",
      "Innovative",
      "Goal Oriented"
    ],

    github: "https://github.com/Abhaychougule",
    linkedin: "https://linkedin.com/in/abhay-chougule-5a15a6384",
    portfolio: "https://abhaychougule04.github.io/Portfolio/"
  },
  {
    id: 2,
    name: "Avinash Kamble",
    role: "Software Developer | AI/ML Enthusiast",
    bio: "Building practical technology solutions with Python, AI/ML, web development, cloud computing, and data analytics.",
    photo: "/assets/team/Avinash.jpeg",
    photoPosition: "center center",
    technicalSkills: ["Python",
      "C",
      "C++",
      "JavaScript",
      "React.js",
      "AI/ML",
      "Data Analytics",
      "MySQL",
      "Firebase",
      "AWS",
      "Android Development",
      "Git & GitHub"],
    softSkills: ["Problem Solving",
      "Quick Learning",
      "Teamwork",
      "Communication",
      "Creativity",
      "Adaptability"],
    personality: ["Technology Enthusiast",
      "Problem Solver",
      "Quick Learner",
      "Creative Thinker",
      "Innovation Focused"],
    github: "https://github.com/ak-devzone/",
    linkedin: "https://www.linkedin.com/in/avinashkamble-ak/",
    portfolio: "",
  },
  {
    id: 3,
    name: "Sneha Jagadale",

    role: "AI/ML | Research & Innovation",

    bio: "Exploring emerging technologies, analyzing real-world problems, and transforming innovative ideas into practical technology solutions.",

    photo: "/assets/team/sneha.jpeg",
    photoPosition: "center 25%",

    technicalSkills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Analysis",
      "Python",
      "Research",
      "Problem Analysis",
      "Data Science",
      "Generative AI",
      "Full-Stack Development",
      "Cloud Computing",
      "Project Development",
      "Technical Documentation"
    ],

    softSkills: [
      "Critical Thinking",
      "Problem Solving",
      "Research",
      "Communication",
      "Presentation",
      "Teamwork",
      "Leadership",
      "Creativity",
      "Time Management",
      "Adaptability"
    ],

    personality: [
      "Innovative",
      "Analytical",
      "Curious",
      "Strategic Thinker",
      "Problem Solver",
      "Technology Enthusiast",
      "Creative",
      "Growth Mindset"
    ],

    achievements: [
      "Best Outgoing Student Award 2025–26",
      "E-Cell IIT Bombay Campus Ambassador",
      "Technical & Entrepreneurship Activities",
      "AI/ML Internship Experience",
      "Multiple Technology Projects"
    ],

    interests: [
      "AI & Machine Learning",
      "Data Science",
      "Technology Innovation",
      "Entrepreneurship",
      "Research & Development",
      "Startup Ideas",
      "Emerging Technologies"
    ],

    github: "https://github.com/SnehaJagadale27",
    linkedin: "https://www.linkedin.com/in/sneha-jagadale/",

  },
  {
    id: 4,
    name: "Sandhya Hake",

    role: "AI/ML & Software Developer",

    bio: "Computer Science and Engineering student passionate about Artificial Intelligence, Machine Learning, software development, and building innovative technology solutions.",

    photo: "/assets/team/sandhya.jpeg",
    photoPosition: "center center",

    technicalSkills: [
      "Python",
      "C++",
      "HTML",
      "Java",
      "Artificial Intelligence",
      "Machine Learning",
      "Software Development",
      "Web Development"
    ],

    softSkills: [
      "Communication",
      "Teamwork",
      "Problem Solving",
      "Quick Learning",
      "Adaptability",
      "Time Management"
    ],

    personality: [
      "Innovative",
      "Curious",
      "Adaptable",
      "Technology Enthusiast",
      "Creative",
      "Team Player"
    ],

    interests: [
      "Artificial Intelligence",
      "Machine Learning",
      "Software Development",
      "Web Development",
      "Emerging Technologies",
      "Innovative Projects"
    ],

    experience: [
      "AI Internship at RV Techniques, Pune",
      "Hackathons & Technical Activities",
      "Academic & Technology Projects"
    ],

    github: "https://github.com/sandhya337",
    linkedin: "https://www.linkedin.com/in/sandhya-hake-7887aa357",
    portfolio: ""
  },
];

// ——————————————————————————
//  FEATURED & MULTI-PROJECT CATALOG
// ——————————————————————————
export const project = {
  id: "digital-lib",
  category: "Full-Stack",
  name: "Fullstack Digital Library System",
  tagline: "Next-Gen Cloud Library & Resource Management Platform",
  image: "/assets/project/project-main.jpg",
  description: "A modern web-based library management platform for browsing, searching, and managing books digitally — built for students and librarians alike.",
  problem: "Traditional libraries rely on manual book tracking, physical catalogues, and slow checkout processes — causing inefficiency and poor user experience for both students and librarians.",
  solution: "A full-stack digital library platform with real-time book search, user authentication, borrow/return management, automated fine calculation, and an admin dashboard — all accessible from any device.",
  technologies: ["React.js", "Firebase Firestore", "Node.js", "JavaScript", "HTML5", "TailwindCSS", "Cloud Functions"],
  impact: "95% faster book discovery, 100% paperless record keeping, real-time availability tracking, and a seamless modern experience for students and library administrators.",
  role: "Full-stack development, UI/UX design, Firebase Firestore integration, authentication, and cloud deployment.",
  github: "https://github.com/ak-devzone/Fullstack-Digital-Lib-System/",
  demo: "https://library-systemm.web.app/",
  metrics: [
    { label: "Active Records", value: "5,000+" },
    { label: "Search Latency", value: "<120ms" },
    { label: "Uptime", value: "99.9%" },
  ],
  features: [
    "Instant Search with fuzzy keyword filtering",
    "Role-based Access (Student, Librarian, Admin)",
    "Live QR Code Scanner for quick issue/return",
    "Automated Return Reminders & Analytics",
    "Cloud Firestore real-time inventory synchronization",
  ],
  stats: [
    { label: "Featured Project", value: "01" },
    { label: "Team Members", value: "04" },
    { label: "Core Modules", value: "15+" },
    { label: "Hours of Dev", value: "200+" },
  ],
};

export const allProjects = [
  {
    id: "digital-lib",
    category: "Full-Stack",
    title: "Fullstack Digital Library System",
    subtitle: "Cloud-Native Resource & Asset Hub",
    description: "Enterprise-grade digital library web application with real-time Firestore database, role-based auth, instant search, and automated checkout pipelines.",
    technologies: ["React.js", "Firebase", "Node.js", "TailwindCSS"],
    badge: "Production Ready",
    color: "from-blue-500/20 to-cyan-500/20",
    borderGlow: "hover:border-cyan-400/50",
    gradient: "from-blue-500 to-cyan-400",
    github: "https://github.com/ak-devzone/Fullstack-Digital-Lib-System/",
    demo: "https://library-systemm.web.app/",
    stats: "5,000+ Books Managed • Real-time DB",
    highlights: ["Live QR Book Tracking", "Instant Search Filter", "Fine Engine"],
  },
  {
    id: "ai-diagnosis",
    category: "AI & ML",
    title: "MedVision: Multimodal AI Disease Classifier",
    subtitle: "Deep Learning Diagnostic Intelligence",
    description: "Deep Convolutional Neural Network (CNN) & Transformer model detecting pulmonary abnormalities and pneumonia in chest radiographs with 96.4% validation accuracy.",
    technologies: ["Python", "PyTorch", "OpenCV", "FastAPI", "React"],
    badge: "AI Research",
    color: "from-purple-500/20 to-pink-500/20",
    borderGlow: "hover:border-purple-400/50",
    gradient: "from-purple-500 to-pink-500",
    github: "https://github.com/Abhaychougule",
    demo: "https://github.com/Abhaychougule",
    stats: "96.4% Accuracy • Grad-CAM Heatmaps",
    highlights: ["Grad-CAM Explainability", "Ensemble ResNet-50", "Sub-second Inference"],
  },
  {
    id: "resume-intel",
    category: "AI & ML",
    title: "CogniHire: LLM Resume & Career Matcher",
    subtitle: "Generative AI Semantic Matching Engine",
    description: "Autonomous recruitment copilot utilizing LangChain, vector embeddings, and OpenAI APIs to score job-to-resume compatibility and generate personalized interview questions.",
    technologies: ["LangChain", "Python", "ChromaDB", "Streamlit", "OpenAI"],
    badge: "GenAI Powered",
    color: "from-cyan-500/20 to-emerald-500/20",
    borderGlow: "hover:border-emerald-400/50",
    gradient: "from-cyan-400 to-emerald-400",
    github: "https://github.com/SnehaJagadale27",
    demo: "https://github.com/SnehaJagadale27",
    stats: "Semantic Vectors • Top 1% Match Engine",
    highlights: ["Vector RAG Pipeline", "Skill Gap Analyzer", "Automated Q&A Generator"],
  },
  {
    id: "nexcode-ide",
    category: "Full-Stack",
    title: "NexCode: Cloud Collaborative IDE",
    subtitle: "Real-time Multi-Cursor Browser Editor",
    description: "Web-based collaborative code editor with in-browser WebContainer code execution, WebRTC live voice room, and synchronized Monaco editor instances.",
    technologies: ["React.js", "WebSockets", "Monaco Editor", "Docker", "Node.js"],
    badge: "DevOps / Web",
    color: "from-indigo-500/20 to-blue-500/20",
    borderGlow: "hover:border-indigo-400/50",
    gradient: "from-indigo-500 to-blue-500",
    github: "https://github.com/ak-devzone/",
    demo: "https://github.com/ak-devzone/",
    stats: "<40ms Latency • CRDT Sync Engine",
    highlights: ["Real-time Cursor Presence", "Browser Terminal", "Instant Container Run"],
  },
  {
    id: "iot-telemetry",
    category: "IoT & Cloud",
    title: "AeroSense: Campus Telemetry & Air Sentinel",
    subtitle: "Real-time Micro-Climate Sensor Fleet",
    description: "Distributed IoT node network measuring AQI, CO2, temperature, and acoustic pollution across university campus with predictive anomaly forecasting.",
    technologies: ["C++ / ESP32", "Python", "MQTT", "AWS IoT Core", "Chart.js"],
    badge: "Hardware & Cloud",
    color: "from-amber-500/20 to-orange-500/20",
    borderGlow: "hover:border-amber-400/50",
    gradient: "from-amber-400 to-orange-500",
    github: "https://github.com/sandhya337",
    demo: "https://github.com/sandhya337",
    stats: "24/7 Sensor Stream • Auto Alerts",
    highlights: ["MQTT Low-Power Protocol", "Predictive Trend ML", "Live Heatmap UI"],
  },
  {
    id: "algo-sentiment",
    category: "AI & ML",
    title: "FinPulse: Social Sentiment Market Predictor",
    subtitle: "NLP-driven Financial Sentiment Engine",
    description: "FinBERT-powered streaming pipeline analyzing financial news feeds, Reddit feeds, and earnings call transcripts to quantify market sentiment and backtest strategies.",
    technologies: ["Python", "HuggingFace", "Pandas", "Scikit-Learn", "FastAPI"],
    badge: "FinTech & NLP",
    color: "from-rose-500/20 to-purple-500/20",
    borderGlow: "hover:border-rose-400/50",
    gradient: "from-rose-500 to-purple-500",
    github: "https://github.com/Abhaychougule",
    demo: "https://github.com/Abhaychougule",
    stats: "100k+ Articles Scanned • Real-time Alpha",
    highlights: ["FinBERT Sentiment Scoring", "Backtested Trading Strategies", "Live Alert Webhook"],
  },
  {
    id: "neuro-shield",
    category: "AI & ML",
    title: "NeuroShield: Deep Packet Threat & Intrusion Sentinel",
    subtitle: "Real-time AI Zero-Day Attack Neutralizer",
    description: "Autonomous real-time network packet inspection and anomaly detection using deep autoencoders and Transformer embeddings to detect and mitigate zero-day cyber exploits.",
    technologies: ["Python", "PyTorch", "Scapy", "Kafka", "React.js", "FastAPI"],
    badge: "Cyber AI / Security",
    color: "from-red-500/20 to-violet-500/20",
    borderGlow: "hover:border-red-400/50",
    gradient: "from-red-500 to-violet-500",
    github: "https://github.com/ak-devzone/",
    demo: "https://github.com/ak-devzone/",
    stats: "99.1% Anomaly Detection • <10ms Packet Inspection",
    highlights: ["Zero-Day Anomaly Detection", "Live Packet Flow Visualizer", "Instant Quarantine Trigger"],
  },
  {
    id: "agro-vision",
    category: "IoT & Cloud",
    title: "AgroVision: Autonomous Crop Disease & Drone AI",
    subtitle: "Edge-AI Precision Agriculture Platform",
    description: "Edge-AI multispectral drone vision pipeline for early crop blight detection, NDVI soil moisture mapping, and yield optimization with localized multilingual voice alerts for farmers.",
    technologies: ["Python", "OpenCV", "YOLOv8", "TensorFlow Lite", "ESP32", "React"],
    badge: "AgriTech & Edge AI",
    color: "from-emerald-500/20 to-lime-500/20",
    borderGlow: "hover:border-emerald-400/50",
    gradient: "from-emerald-400 to-lime-400",
    github: "https://github.com/SnehaJagadale27",
    demo: "https://github.com/SnehaJagadale27",
    stats: "30+ Plant Pathologies • 97.8% Edge Precision",
    highlights: ["YOLOv8 Real-time Detection", "NDVI Vegetation Index", "Multilingual Voice Advisory"],
  }
];

// ——————————————————————————
//  ACHIEVEMENTS
// ——————————————————————————
export const achievements = [
  {
    year: "2026",
    icon: "🏆",
    title: "Hackathon Finalist",
    description: "Successfully developed and presented an innovative solution at a national-level hackathon.",
  },
  {
    year: "2026",
    icon: "💡",
    title: "Project Achievement",
    description: "Built a real-world technology solution deployed and used by actual users.",
  },
  {
    year: "2025",
    icon: "🚀",
    title: "Entrepreneurship Activity",
    description: "Participated in entrepreneurship and innovation activities, pitching startup ideas.",
  },
  {
    year: "2025",
    icon: "📜",
    title: "Technical Certification",
    description: "Earned industry-recognized certifications in cloud computing and development.",
  },
  {
    year: "2025",
    icon: "🎯",
    title: "Workshop & Training",
    description: "Conducted and attended workshops on emerging technologies and design thinking.",
  },
];

// ——————————————————————————
//  WHY US CARDS
// ——————————————————————————
export const whyUsCards = [
  {
    icon: "💻",
    title: "Technical Skills",
    description: "We turn ideas into working prototypes using modern technologies and clean code.",
  },
  {
    icon: "🎨",
    title: "Creativity",
    description: "We don't just build functional solutions — we think about experience, aesthetics, and presentation.",
  },
  {
    icon: "🧠",
    title: "Problem Solving",
    description: "We focus on understanding the real problem before designing the solution.",
  },
  {
    icon: "🗣️",
    title: "Communication",
    description: "We explain complex ideas clearly to both technical and non-technical audiences.",
  },
  {
    icon: "🤝",
    title: "Teamwork",
    description: "Each member contributes a different strength — we complement, not compete.",
  },
  {
    icon: "🚀",
    title: "Execution",
    description: "We move quickly from idea → prototype → presentation with precision.",
  },
];

// ——————————————————————————
//  CREATIVE DNA
// ——————————————————————————
export const creativeDNA = {
  traits: [
    { icon: "💡", label: "Ideas" },
    { icon: "🎨", label: "Design" },
    { icon: "🎤", label: "Presentation" },
    { icon: "🧠", label: "Problem Solving" },
    { icon: "🤝", label: "Collaboration" },
    { icon: "🚀", label: "Experimentation" },
  ],
  paragraph:
    "We believe great ideas are not created by technology alone. They come from curiosity, creativity, teamwork, and the courage to experiment.",
  stats: [
    { label: "Curiosity", value: 100 },
    { label: "Creativity", value: 90 },
    { label: "Teamwork", value: 100 },
    { label: "Innovation", value: 95 },
    { label: "Problem Solving", value: 100 },
  ],
};

// ——————————————————————————
//  WORKFLOW STEPS
// ——————————————————————————
export const workflowSteps = [
  { title: "Idea", description: "Identify a meaningful problem worth solving.", icon: "💡" },
  { title: "Research", description: "Understand users, market, and existing solutions.", icon: "🔍" },
  { title: "Brainstorm", description: "Explore multiple angles and creative approaches.", icon: "🧠" },
  { title: "Design", description: "Create wireframes, flows, and visual prototypes.", icon: "🎨" },
  { title: "Build", description: "Write clean code and develop the solution.", icon: "⚙️" },
  { title: "Test", description: "Validate with users and squash every bug.", icon: "🧪" },
  { title: "Present", description: "Craft a compelling story around the solution.", icon: "🎤" },
  { title: "Impact", description: "Measure results and iterate for real change.", icon: "🚀" },
];

// ——————————————————————————
//  TEAM STRENGTH
// ——————————————————————————
export const teamStrengths = [
  { member: "Abhay", strength: "AI & Full-Stack Dev", color: "#3b82f6" },
  { member: "Avinash", strength: "Software & Cloud", color: "#8b5cf6" },
  { member: "Sneha", strength: "AI/ML & Research", color: "#06b6d4" },
  { member: "Sandhya", strength: "ML & Innovation", color: "#10b981" },
];

// ——————————————————————————
//  HACKATHON MINDSET
// ——————————————————————————
export const mindsetPoints = [
  { number: "01", title: "Think Different", description: "Challenge assumptions. Question the obvious. Find angles nobody considered." },
  { number: "02", title: "Build Fast", description: "Rapid prototyping, agile thinking, and shipping working demos under pressure." },
  { number: "03", title: "Create Impact", description: "Technology is a tool. Impact on real people is the mission." },
];

// ——————————————————————————
//  SOCIAL & CONTACT CONFIG
// ——————————————————————————
export const socialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  instagram: "https://instagram.com",
  email: "mailto:Nexcoreinfo@gmail.com",
};

export const contactConfig = {
  // Paste your Google Apps Script Web App URL here to receive submissions in Google Sheets
  googleSheetScriptUrl: "https://script.google.com/macros/s/AKfycbzlnv7WR2dwImjrug0GGdQCqyrCcONqLU2D4grzC1XVD8hxBiOMGLgmaLZ1JRINLg3E/exec",
  services: [
    "Full-Stack Web Application",
    "AI / Deep Learning Solution",
    "Generative AI & LLM Copilot",
    "IoT & Embedded Cloud Telemetry",
    "Hackathon / Startup Collaboration",
    "Custom Software Engineering",
  ],
  timelines: ["Urgent (< 1 Week)", "1 - 2 Weeks", "1 Month+", "Exploring Ideas"],
};

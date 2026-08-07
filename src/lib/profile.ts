export const profile = {
  name: "Sri Vinay Appari",
  title: "Software Engineer",
  tagline: "Hi, Vinay here. Ask my AI anything about my experience.",
  summary:
    "Sri Vinay Appari is a Software Engineer with 5+ years of experience designing, developing, and deploying enterprise-grade applications using Java, Spring Boot, React, microservices, and RESTful web services across the insurance, financial services, and healthcare domains.",
  location: "United States",
  email: "srivinay.appari@gmail.com",
  phone: "(669) 288-1604",
  github: "https://github.com/SriVinayA",
  linkedin: "https://www.linkedin.com/in/SriVinayA",
  quote:
    "Building backends that are secure, scalable, and reliable from Spring Boot microservices and well-modeled data layers to tuned SQL, thorough tests, and containerized deployments on AWS.",
};

export const experience = [
  {
    company: "State Compensation Insurance Fund (SCIF)",
    role: "Java Developer",
    location: "Pleasanton, CA",
    period: "March 2025 – Present",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "JPA",
      "JWT",
      "React",
      "AWS ECS",
      "AWS Lambda",
      "Apache Tomcat",
    ],
    highlights: [
      "Engineered scalable backend microservices in Java and Spring Boot for end-to-end claim lifecycle workflows claim validation, business rule processing, and status management.",
      "Designed RESTful APIs with strict request/response modeling and robust error handling for reliable client-server interactions.",
      "Secured every endpoint with JWT-based authentication and role-based access control (RBAC).",
      "Modeled complex claims and user entities with Spring Data JPA and PostgreSQL, cutting query execution times through refined repository layers and indexing strategies.",
      "Built a responsive internal dashboard for claims adjusters in React, integrated with backend Spring Boot REST APIs for real-time status updates.",
      "Orchestrated containerized microservices on AWS ECS with automated scaling, and implemented serverless document processing with AWS Lambda.",
      "Applied Test-Driven Development with JUnit 5 and Mockito to maintain strong coverage and prevent regressions.",
    ],
  },
  {
    company: "Harland Medical Systems",
    role: "Java Developer",
    location: "Eden Prairie, MN",
    period: "Jan 2023 – Jan 2024",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "PostgreSQL",
      "Swagger/OpenAPI",
      "Docker",
      "AWS Elastic Beanstalk",
    ],
    highlights: [
      "Engineered scalable backend microservices for high-volume medical device coating data on an enterprise client management platform.",
      "Designed and documented RESTful APIs with Swagger/OpenAPI and global exception handling for manufacturing and compliance reporting tools.",
      "Optimized PostgreSQL performance through complex SQL queries and indexing strategies, reducing retrieval latency on compliance endpoints.",
      "Mapped complex entity relationships for device batches, coating parameters, and quality control records using Spring Data JPA and Hibernate.",
      "Deployed containerized environments with Docker and AWS Elastic Beanstalk, and stored compliance documents and logs in AWS S3.",
      "Integrated automated JUnit and Mockito test runs into the CI/CD pipeline to hold high coverage thresholds for industry compliance.",
    ],
  },
  {
    company: "Mastercard",
    role: "Software Engineer",
    location: "India",
    period: "Sep 2021 – Jan 2023",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Oracle DB",
      "JWT",
      "Testcontainers",
      "Jenkins",
      "SonarQube",
    ],
    highlights: [
      "Built cloud-native microservices on the Global Analytics Engine, serving mission-critical financial analytics to Mastercard's global client base.",
      "Optimized report generation latency via advanced indexing, pagination, and refactored JPQL queries.",
      "Authored extensive JUnit 5 and Mockito suites under a TDD approach, reaching 90%+ coverage on core business logic.",
      "Validated service-to-service communication and database consistency using MockMvc and Testcontainers.",
      "Managed data persistence and object-relational mapping with Spring Data JPA and Hibernate for sensitive financial records.",
      "Automated multi-stage deployment pipelines in Jenkins with version control via Bitbucket.",
    ],
  },
  {
    company: "Wipro",
    role: "Software Engineer",
    location: "India",
    period: "May 2020 – Sep 2021",
    stack: ["Java", "Spring", "Spring MVC", "JDBC", "SQL", "JSP", "Git", "Eclipse"],
    highlights: [
      "Developed core backend services in Java and Spring, implementing business logic for internal administrative tools in a 3-tier architecture.",
      "Designed RESTful endpoints with Spring MVC for secure data exchange between frontend dashboards and backend processing units.",
      "Engineered efficient data access layers with pure JDBC for high-performance connectivity without ORM overhead.",
      "Wrote and optimized complex SQL queries, stored procedures, and triggers to accelerate internal analytics reporting.",
      "Implemented custom authentication and session management using core Servlets and Filters to restrict administrative access.",
      "Authored JUnit and Mockito suites covering edge cases to harden backend service layers before deployment.",
    ],
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: [
      "Java",
      "SQL",
      "PL/SQL",
      "JavaScript",
      "Python",
      "C++ (DSA)",
      "HTML",
      "CSS",
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Spring Security",
      "Hibernate",
      "JDBC",
      "Servlets",
      "JSP",
      "React",
    ],
  },
  {
    category: "Web Services & APIs",
    items: [
      "RESTful APIs",
      "SOAP Web Services",
      "Swagger/OpenAPI",
      "JSON",
      "Microservices Architecture",
      "SOA",
    ],
  },
  {
    category: "Security",
    items: ["JWT Authentication", "Role-Based Access Control (RBAC)", "Spring Security"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "Oracle Database", "MongoDB"],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3, ECS, Lambda, Elastic Beanstalk, API Gateway)",
      "Docker",
      "Jenkins",
      "CI/CD",
      "Apache Tomcat",
    ],
  },
  {
    category: "Testing & Code Quality",
    items: ["JUnit 5", "Mockito", "Testcontainers", "TDD", "SonarQube", "Postman"],
  },
  {
    category: "Tools & Methodologies",
    items: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Maven",
      "Jira",
      "Confluence",
      "Eclipse",
      "Agile/Scrum",
    ],
  },
];

import boltfetchCover from "@/assets/boltfetch-cover.jpg";
import talenttrekCover from "@/assets/talenttrek-cover.jpg";
import portfolioCover from "@/assets/portfolio-cover.jpg";

export const projects = [
  {
    name: "Portfolio Backend",
    tagline: "This site with a Spring AI + Gemini chatbot.",
    date: "2024",
    description:
      "A modern, interactive personal portfolio built with React, TypeScript, Tailwind CSS, shadcn/ui, TanStack Router/Start, and Vite. The AI chatbot is powered by a Spring Boot backend using Spring AI integrated with Google's Gemini 3.1 API try Cmd+K to ask it anything about my background.",
    stack: ["React", "TypeScript", "Tailwind", "shadcn/ui", "TanStack Router/Start", "Vite", "Spring Boot", "Spring AI", "Google Gemini API"],
    link: "https://github.com/SriVinayA/portfolio",
    cover: portfolioCover,
  },
  {
    name: "TalentTrek",
    tagline: "AI-powered career companion — Master's capstone.",
    description:
      "AI Resume Tailoring microservice: a pipeline that parses resume + JD into structured JSON, runs cosine-similarity gap analysis, uses GPT-4.1 with structured output for hallucination-free rewrites, then compiles to ATS-friendly PDF via a custom JSON→LaTeX pipeline with one-click Overleaf. Dockerized on AWS EC2 behind API Gateway + Cognito.",
    stack: ["Python", "FastAPI", "GPT-4.1", "LaTeX", "Docker", "AWS", "Cognito"],
    link: "https://github.com/SriVinayA/Resume-Customizer",
    cover: talenttrekCover,
  },
  {
    name: "BoltFetch",
    tagline: "A blazing-fast, resilient download manager written in Rust.",
    description:
      "High-performance multi-threaded download manager with dynamic multipart downloading, adaptive rate-limit handling, exponential backoff, and persistent resume via .boltfetch state files. Ships both a CLI (Clap + Indicatif) and a native Tauri v2 + Leptos desktop UI with an IDM-inspired segmented progress bar.",
    stack: ["Rust", "Tokio", "Reqwest", "Tauri v2", "Leptos", "WebAssembly"],
    link: "https://github.com/SriVinayA/BoltFetch",
    cover: boltfetchCover,
  },
];

export const strengths = [
  "Enterprise Java & Spring Boot backend development",
  "RESTful API design with Swagger/OpenAPI documentation",
  "Microservices architecture & loosely coupled service design",
  "Spring Security, JWT authentication & RBAC",
  "Data modeling with Spring Data JPA and Hibernate",
  "SQL query optimization, indexing & performance tuning",
  "Test-Driven Development with JUnit 5, Mockito & Testcontainers",
  "CI/CD pipelines with Jenkins, Docker & SonarQube",
  "AWS deployments (ECS, Lambda, Elastic Beanstalk, S3)",
  "React dashboards integrated with backend APIs",
];

export const education = [
  {
    degree: "Master of Science — Computer Software Engineering",
    detail: "San Jose State University, CA, USA",
  },
  {
    degree: "Bachelor of Engineering — Computer Science and Engineering",
    detail: "Sathyabama Institute of Science and Technology, India",
  },
];

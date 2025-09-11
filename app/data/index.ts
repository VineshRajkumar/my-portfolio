export interface MenuItem {
  label: string;
  url: string;
}

export const menuItems: MenuItem[] = [
  // {
  // 	label: "vinesh",
  // 	url: "/",
  // },
  // {
  // 	label: "writings",
  // 	url: "/writings",
  // },
  // {
  // 	label: "thoughts",
  // 	url: "/thoughts",
  // },
  // {
  // 	label: "ships",
  // 	url: "/ships",
  // },
];

export const title = "Vinesh Raj";
export const description =
  "I build modern apps, design clean UIs, and love turning ideas into reality.";
export const image = "/images/ogimage.png";
export const url = `${process.env.NEXT_PUBLIC_SITE_URL}`;

export const ogImage = {
  src: "/images/ogimage.png",
  alt: "Vinesh Raj",
};

export const seo = {
  twitterHandle: "@VineshRaj239",

  /*
  Prompt :- 
  	Act as an SEO expert. I need help developing a list of relevant, high-volume, and low-competition keywords for my portfolio website. Please provide keywords, including long-tail variations, and group them by topic. Also, suggest related questions users might search for.
	Give me all those keywords which users might search and which will rank my portfolio above all when my name is searched 
	i am giving you some information about me 
	[INFO HERE]
	Please generate don't worry about the words limit i need my website to rank even if the just the word "vinesh" is searched
  */
  keywords: [
    // 🔥 Personal Branding: Vinesh Variations
    "vinesh",
    "vinesh portfolio",
    "vinesh developer",
    "vinesh full stack developer",
    "vinesh github",
    "vinesh linkedin",
    "vinesh contact",
    "vinesh resume",
    "vinesh intern",
    "vineshraj239",
    "vinesh website",
    "vinesh personal site",
    "vinesh projects",
    "vinesh open to work",
    "vinesh available for internship",
    "vinesh frontend developer",
    "vinesh backend developer",

    // 🔥 Personal Branding: vinesh raj
    "vinesh raj",
    "vinesh raj portfolio",
    "vinesh raj developer",
    "vinesh raj full stack developer",
    "vinesh raj pune",
    "vinesh raj github",
    "vinesh raj linkedin",
    "vinesh raj website",
    "vinesh raj personal site",
    "vinesh raj projects",
    "vinesh raj contact",
    "vinesh raj resume",
    "vinesh raj intern",
    "vinesh raj open to work",
    "vinesh raj frontend developer",
    "vinesh raj backend developer",

    // 🔥 Personal Branding: vinesh rajkumar
    "vinesh rajkumar",
    "vinesh rajkumar portfolio",
    "vinesh rajkumar developer",
    "vinesh rajkumar full stack developer",
    "vinesh rajkumar pune",
    "vinesh rajkumar github",
    "vinesh rajkumar linkedin",
    "vinesh rajkumar website",
    "vinesh rajkumar personal site",
    "vinesh rajkumar projects",
    "vinesh rajkumar contact",
    "vinesh rajkumar resume",
    "vinesh rajkumar intern",
    "vinesh rajkumar frontend developer",
    "vinesh rajkumar backend developer",
    "vinesh rajkumar open to work",

    // 🔥 Personal Branding: vineshrajkumar (no space)
    "vineshrajkumar",
    "vineshrajkumar portfolio",
    "vineshrajkumar developer",
    "vineshrajkumar full stack developer",
    "vineshrajkumar website",
    "vineshrajkumar personal site",
    "vineshrajkumar projects",
    "vineshrajkumar contact",
    "vineshrajkumar resume",
    "vineshrajkumar intern",
    "vineshrajkumar frontend developer",
    "vineshrajkumar backend developer",
    "vineshrajkumar open to work",

    // ❓ Personal Questions (across all name variations)
    "who is vinesh developer",
    "who is vinesh raj developer",
    "who is vinesh rajkumar developer",
    "who is vineshrajkumar developer",
    "where can I see vinesh's projects",
    "where can I see vinesh raj’s projects",
    "where can I see vinesh rajkumar’s projects",
    "how to contact vinesh",
    "how to contact vinesh raj",
    "how to contact vinesh rajkumar",
    "how to contact vineshrajkumar",
    "what tech stack does vinesh use",
    "what tech stack does vinesh raj use",
    "what tech stack does vinesh rajkumar use",

    // 💼 Internship & Job Keywords
    "web developer open for internship",
    "full stack developer seeking internship",
    "frontend developer open to work",
    "backend developer looking for internship",
    "19 year old full stack developer",
    "btech cse student developer portfolio",
    "intern web developer nextjs",
    "hire full stack developer pune",
    "web developer portfolio nextjs",
    "looking for frontend internship india",
    "nextjs developer available for hire",
    "open source contributor india",
    "developer open for collaboration",

    // ❓ Internship Questions
    "where can I find web dev interns in India",
    "how to hire a full stack intern",
    "who is a good full stack intern in pune",

    // 🛠️ Tech Stack Keywords
    "nextjs developer portfolio",
    "full stack developer using nextjs",
    "tailwind css portfolio",
    "websocket realtime app",
    "prisma postgres nextjs",
    "mongodb and nextauth project",
    "zod and shadcn ui project",
    "typescript developer portfolio",
    "node express backend developer",
    "react developer 2025",

    // ❓ Tech Stack Questions
    "what can I build with nextjs and websocket",
    "how to build a modern saas with tailwind css",
    "is prisma better than mongodb",

    // 🔶 Project: Orange
    "orange excalidraw clone",
    "collaborative whiteboard nextjs",
    "real time drawing app web",
    "orange board websocket canvas",
    "vinesh raj orange project",
    "collaborative canvas typescript",
    "excalidraw clone portfolio",

    // ❓ Orange Questions
    "how to build an excalidraw clone",
    "can I make a collaborative drawing app",

    // ☕ Kindness Cafe
    "kindness cafe donation platform",
    "buy me a coffee clone india",
    "razorpay nextjs donation app",
    "donate to creators india",
    "kindnesscafe vercel",
    "support creators with kindness cafe",

    // 🔐 AlertMe
    "vulnerability monitoring system sih",
    "smart india hackathon project 2024",
    "detect security threats web app",
    "oem cyber threat detection india",
    "vinesh raj alertme project",

    // ✍️ Brown Blog
    "brown blog website",
    "blogging site react tailwind",
    "blog publishing react",
    "vinesh raj blog project",
    "responsive blog portfolio",

    // 🕵️ MystryMsg
    "anonymous messaging app otp",
    "mystery message anonymous feedback",
    "send anonymous message india",
    "otp verified messaging app",
    "public profile feedback app",
    "vinesh mystery message app",

    // 🌎 Geographic
    "developer in pune india",
    "full stack developer pune",
    "btech cse student pune",
    "indian full stack developer",
    "19 year old developer india",

    // 📈 Long-Tail SEO
    "best portfolio website for full stack developer",
    "real time drawing app with canvas and websocket",
    "anonymous message app with otp verification",
    "nextjs full stack project with authentication",
    "developer portfolio with open source projects",
    "tailwind css clean ui examples",
    "internship ready developer portfolio site",
    "responsive portfolio website built in nextjs",
    "how to build buy me a coffee clone",
    "full stack web apps made by students",
    "portfolio with blog, chat, and drawing apps",
    "developer personal website nextjs tailwind",
  ],

  authors: [
    {
      name: "Vinesh Rajkumar",
      url: "https://github.com/VineshRajkumar",
    },
  ],
};

export const products = [
  {
    id: 1,
    name: "Orange",
    liveurl: "https://orangeboard.vercel.app/", 
    githuburl: "https://github.com/VineshRajkumar/orange",  
    description:
      "A collaborative whiteboard app like Excalidraw, built with real-time drawing, multi-user editing via WebSocket, and a responsive, modern UI. Designed as a full SaaS product with focus on scalability, UX, and SEO.",
    popupImage: "/products/orangeLandingPage.webm",
    image: "/products/orangelogo.png",
    tech: [
      "Next.js",
      "Turborepo",
      "WebSocket",
      "Prisma",
      "Tailwind CSS",
      "TypeScript",
      "Zod",
      "ShadCN",
      "Node.js",
      "Express.js",
    ],
    status: ["Completed"],
  },
  {
    id: 2,
    name: "Cafe",
    liveurl: "https://kindness-cafe.vercel.app/",
    githuburl: "https://github.com/VineshRajkumar/KindnessCafe.com",
    description:
      "KindnessCafe.com is a platform similar to Buy Me a Coffee, where users can support their favorite creators by donating money. The website features user authentication, payment processing via Razorpay, and a personalized dashboard for each user.",
    popupImage: "/products/kindnesscafePopup.png",
    image: "/products/kindnesscafe.jpg",
    tech: [
      "Next.js",
      "NextAuth.js",
      "Tailwind CSS",
      "MongoDB",
      "JavaScript",
      "Razorpay",
    ],
    status: ["Completed", "UI Redesign", "In Progress"],
  },
  {
    id: 3,
    name: "AlertMe",
    // liveurl: "",
    githuburl:
      "https://github.com/VineshRajkumar/TEAM_ACCELERATE_SIH_SCRAPER_2024",
    description:
      "This project was developed as part of Smart India Hackathon (SIH) 2024, tackling Problem Statement 1676.\nOur goal was to create a near real-time vulnerability monitoring system that detects and alerts users about critical vulnerabilities in OEM equipment (IT & OT) faster than the National Vulnerability Database (NVD).\nThis project deepened our understanding of cybersecurity, AI-based threat detection, and large-scale web scraping.",
    popupImage: "/products/alertmePopup.png",
    image: "/products/alertme.png",
    tech: ["Node.js", "Express.js", "PostgreSQL", "Puppeteer"],
    status: ["Prototype"],
  },
  {
    id: 4,
    name: "Brown",
    liveurl: "https://vineshrajkumar.github.io/Brown/",
    githuburl: "https://github.com/VineshRajkumar/Brown",
    description:
      "The Brown Blog Site is a blogging platform where users can sign up, write posts, and manage their content with ease. It offers a clean, responsive interface for reading and publishing blogs. Ideal for creators looking to share ideas and manage posts effortlessly.",
    popupImage: "/products/brownPopup.png",
    image: "/products/brown.png",
    tech: ["React", "Redux", "Tailwind CSS", "ShadCN"],
    status: ["Completed"],
  },
  {
    id: 5,
    name: "MystryMsg",
    liveurl: "https://mystery-message-net.vercel.app/",
    githuburl: "https://github.com/VineshRajkumar/MysteryMessage",
    description:
      "Mystery Message App lets users collect anonymous feedback through a secure, OTP-verified sign-up. Each user gets a unique public link to receive messages without revealing the sender's identity. Perfect for creators, professionals, and teams seeking honest, private feedback.",
    popupImage: "/products/mystrymsgPopup.png",
    image: "/products/mystrymsg.png",
    tech: [
      "Next.js",
      "MongoDB",
      "NextAuth.js",
      "Zod",
      "ShadCN",
      "Tailwind CSS",
    ],
    status: ["Completed", "UI Redesign", "In Progress"],
  },
];

export const socialLinks = [
  {
    label: "@x",
    url: "https://x.com/VineshRaj239",
  },
  {
    label: "resume",
    url: "https://drive.google.com/file/d/1T6fpCqc-Fxneirj8s3HSourscv9E5wEi/view?usp=sharing",
  },
  {
    label: "github",
    url: "https://github.com/VineshRajkumar",
  },
  {
    label: "linkedin",
    url: "https://www.linkedin.com/in/vinesh-rajkumar/",
  },
];

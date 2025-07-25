export const SITE_TITLE = "Vinesh Raj";
export const SITE_DESCRIPTION = "I build modern apps, design clean UIs, and love turning ideas into reality.";

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
export const description = "I build modern apps, design clean UIs, and love turning ideas into reality.";
export const image = "/images/ogimage.png";
export const url =`${process.env.NEXT_PUBLIC_SITE_URL}`

export const ogImage = {
	src: "/images/ogimage.png",
	alt: "Vinesh Raj",
};


export const products = [
	{	
		id:1,
		name: "Orange",
		// liveurl: "", //update once ready
		// githuburl:'',  //update once ready
		description: 'A collaborative whiteboard app like Excalidraw, built with real-time drawing, multi-user editing via WebSocket, and a responsive, modern UI. Designed as a full SaaS product with focus on scalability, UX, and SEO.',
		popupImage: '/products/orange.gif',
		image: "/products/orangelogo.png",
		tech: ["Next.js","Turborepo", "WebSocket", "Prisma", "Tailwind CSS", "TypeScript", "Zod", "ShadCN", "Node.js", "Express.js"],
		status: ["In Progress"]
	},
	{	
		id:2,
		name: "Cafe",
		liveurl: "https://kindness-cafe.vercel.app/",
		githuburl:'https://github.com/VineshRajkumar/KindnessCafe.com',
		description: 'KindnessCafe.com is a platform similar to Buy Me a Coffee, where users can support their favorite creators by donating money. The website features user authentication, payment processing via Razorpay, and a personalized dashboard for each user.',
		popupImage: '/products/kindnesscafePopup.png',
		image: "/products/kindnesscafe.jpg",
		tech: ["Next.js", "NextAuth.js", "Tailwind CSS", "MongoDB", "JavaScript", "Razorpay"],
		status: ["Completed","UI Redesign","In Progress"]
	},
    {	
		id:3,
		name: "AlertMe",
		// liveurl: "",
		githuburl:'https://github.com/VineshRajkumar/TEAM_ACCELERATE_SIH_SCRAPER_2024',
		description: 'This project was developed as part of Smart India Hackathon (SIH) 2024, tackling Problem Statement 1676.\nOur goal was to create a near real-time vulnerability monitoring system that detects and alerts users about critical vulnerabilities in OEM equipment (IT & OT) faster than the National Vulnerability Database (NVD).\nThis project deepened our understanding of cybersecurity, AI-based threat detection, and large-scale web scraping.',
		popupImage: '/products/alertmePopup.png',
		image: "/products/alertme.png", 
		tech: ["Node.js", "Express.js", "PostgreSQL", "Puppeteer"],
		status: ["Prototype"]
	},
	{
		id:4,
		name: "Brown",
		liveurl: "https://vineshrajkumar.github.io/Brown/",
		githuburl:'https://github.com/VineshRajkumar/Brown',
		description: 'The Brown Blog Site is a blogging platform where users can sign up, write posts, and manage their content with ease. It offers a clean, responsive interface for reading and publishing blogs. Ideal for creators looking to share ideas and manage posts effortlessly.',
		popupImage: '/products/brownPopup.png',
		image: "/products/brown.png",
		tech: ["React", "Redux", "Tailwind CSS", "ShadCN"],
		status: ["Completed"]
	},
	{
		id:5,
		name: "MystryMsg",
		liveurl: "https://mystery-message-net.vercel.app/",
		githuburl:'https://github.com/VineshRajkumar/MysteryMessage',
		description: 'Mystery Message App lets users collect anonymous feedback through a secure, OTP-verified sign-up. Each user gets a unique public link to receive messages without revealing the sender\'s identity. Perfect for creators, professionals, and teams seeking honest, private feedback.',
		popupImage: '/products/mystrymsgPopup.png',
		image: "/products/mystrymsg.png",
		tech: ["Next.js", "MongoDB", "NextAuth.js", "Zod", "ShadCN", "Tailwind CSS"],
		status: ["Completed","UI Redesign","In Progress"]
	},

];

export const socialLinks = [
	{
		label: "@x",
		url: "https://x.com/VineshRaj239",
	},
	{
		label: "resume",
        url: "https://drive.google.com/file/d/1SrdYCR_IPJK5Qf9TiZca_QsQin9WcBO6/view",
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
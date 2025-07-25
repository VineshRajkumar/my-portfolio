'use client';


import {
    SiJavascript,
    SiTypescript,
    SiCplusplus,
    SiPostgresql,
    SiMongodb,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiPrisma,
    SiTailwindcss,
    SiAuth0,
    SiRedux,
    SiZod,

    // SiVercel,
    SiPuppeteer,
    // SiGithub,
    SiShadcnui,
    SiPostman,
    SiTurborepo,
} from 'react-icons/si';
import { Badge } from './badge';
import { Marquee } from '../magicui/marquee';
import { Plug } from 'lucide-react';



export const techStack = [
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
    { name: 'C++', icon: <SiCplusplus className="text-blue-600" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-800 dark:text-blue-200"  /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'React', icon: <SiReact className="text-sky-400" /> },
    { name: 'Redux', icon: <SiRedux className="text-[#764ABC] dark:text-purple-300" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress className="text-black dark:text-white" /> },
    { name: 'Prisma', icon: <SiPrisma className="text-indigo-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'ShadCN', icon: <SiShadcnui className="text-violet-400" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
    { name: 'NextAuth.js', icon: <SiAuth0 className="text-orange-500" /> },
    { name: 'Zod', icon: <SiZod className="text-green-400" /> },
    { name: 'Puppeteer', icon: <SiPuppeteer className="text-black dark:text-white" /> },
    { name: 'Turborepo', icon: <SiTurborepo className="text-[#EF4444] dark:text-[#f87171]" /> },
    { name: 'WebSocket', icon: <Plug className="text-blue-500 dark:text-blue-400" /> }
];
const TechStackMarquee = () => {
    return (

        <div className="absolute top-0 left-0 w-full h-full">
            <Marquee >
                {techStack.map((tech, idx) => (
                    <Badge
                        key={idx}
                        className=" px-3 py-1 text-xs font-medium flex items-center gap-2 rounded-md"
                        variant="outline"
                    >
                        <span className="text-sm">{tech.icon}</span>
                        {tech.name}
                    </Badge>
                ))}
            </Marquee>
        </div>
    );
};

export default TechStackMarquee;

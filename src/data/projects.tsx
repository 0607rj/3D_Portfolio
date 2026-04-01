import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "talentbridge",
    category: "Job Portal & Career Platform",
    title: "TalentBridge",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center mb-4">
            Your All-in-One Career Companion 🚀
          </TypographyP>
          <TypographyP className="font-mono">
            TalentBridge is a comprehensive job portal that goes beyond traditional job listings. 
            Built with the MERN stack, it offers resume building, gap analysis, resume evaluation, 
            mock tests, and live video call interviews all in one platform.
          </TypographyP>
          {this.live && <ProjectsLinks live={this.live} repo={this.github} />}
          
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
            <li className="font-mono">
              <strong>Smart Resume Builder:</strong> Create professional resumes with AI-powered suggestions
            </li>
            <li className="font-mono">
              <strong>Gap Analysis:</strong> Identify skill gaps and get personalized learning recommendations
            </li>
            <li className="font-mono">
              <strong>Resume Analyzer:</strong> Get instant feedback on your resume's strengths and weaknesses
            </li>
            <li className="font-mono">
              <strong>Mock Interviews:</strong> Practice with AI-driven mock tests before the real thing
            </li>
            <li className="font-mono">
              <strong>Live Video Interviews:</strong> Conduct or attend video call interviews directly on the platform
            </li>
            <li className="font-mono">
              <strong>Job Matching:</strong> Smart algorithm matches candidates with relevant opportunities
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Tech Highlights</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
            <li className="font-mono">Real-time video calling integration</li>
            <li className="font-mono">AI-powered resume analysis and recommendations</li>
            <li className="font-mono">Secure authentication and user management</li>
            <li className="font-mono">Responsive design for seamless mobile experience</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "ecodrive",
    category: "Carpooling & Sustainability",
    title: "EcoDrive",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center mb-4">
            Share Rides, Save Money, Save the Planet 🌍🚗
          </TypographyP>
          <TypographyP className="font-mono">
            EcoDrive is a modern carpooling platform that connects commuters heading in the same direction. 
            Built with the MERN stack, it makes ride-sharing easy, affordable, and eco-friendly.
          </TypographyP>
          {this.live && <ProjectsLinks live={this.live} repo={this.github} />}
          
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
            <li className="font-mono">
              <strong>Smart Ride Matching:</strong> Find or offer rides based on your route and schedule
            </li>
            <li className="font-mono">
              <strong>Real-time Tracking:</strong> Track your ride and estimated arrival time
            </li>
            <li className="font-mono">
              <strong>User Profiles & Ratings:</strong> Build trust through verified profiles and reviews
            </li>
            <li className="font-mono">
              <strong>Cost Splitting:</strong> Automatic fare calculation and split among passengers
            </li>
            <li className="font-mono">
              <strong>Environmental Impact:</strong> Track your CO2 savings and contribution to sustainability
            </li>
            <li className="font-mono">
              <strong>Safety Features:</strong> Emergency contacts, ride verification, and safety guidelines
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <p className="font-mono">
            EcoDrive promotes sustainable transportation by reducing the number of vehicles on the road, 
            lowering carbon emissions, and making commutes more affordable for everyone.
          </p>
        </div>
      );
    },
  },
  {
    id: "notesforge",
    category: "AI-Powered Education",
    title: "NotesForge",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center mb-4">
            AI-Generated Exam Notes in Seconds 📚✨
          </TypographyP>
          <TypographyP className="font-mono">
            NotesForge is an AI-powered exam notes generator that uses Google's Gemini API to create 
            comprehensive, well-structured study notes from any topic. Built with the MERN stack, 
            it's your study companion for last-minute exam prep.
          </TypographyP>
          {this.live && <ProjectsLinks live={this.live} repo={this.github} />}
          
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
            <li className="font-mono">
              <strong>Gemini AI Integration:</strong> Leverages Google's Gemini API for intelligent note generation
            </li>
            <li className="font-mono">
              <strong>Topic Customization:</strong> Generate notes for specific subjects, topics, or chapters
            </li>
            <li className="font-mono">
              <strong>Smart Formatting:</strong> Notes are automatically formatted with headers, bullet points, and highlights
            </li>
            <li className="font-mono">
              <strong>Save & Organize:</strong> Save your generated notes and organize them by subject
            </li>
            <li className="font-mono">
              <strong>Export Options:</strong> Download notes as PDF or share them with classmates
            </li>
            <li className="font-mono">
              <strong>Quick Summaries:</strong> Get concise summaries for quick revision
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">How It Works</TypographyH3>
          <p className="font-mono mb-4">
            Simply enter your topic or upload study material, and NotesForge's AI will analyze and generate 
            comprehensive notes tailored to your needs. Perfect for students who need to review large amounts 
            of material quickly.
          </p>
        </div>
      );
    },
  },
  {
    id: "object-detection",
    category: "AI & Computer Vision",
    title: "Object Detection AI",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center mb-4">
            Real-Time Object Detection Powered by AI 🤖👁️
          </TypographyP>
          <TypographyP className="font-mono">
            A powerful object detection system using the COCO-SSD model to identify and classify objects 
            in real-time from images or video streams. Built with the MERN stack and integrated 
            with TensorFlow.js for browser-based AI inference.
          </TypographyP>
          {this.live && <ProjectsLinks live={this.live} repo={this.github} />}
          
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
            <li className="font-mono">
              <strong>COCO-SSD Model:</strong> Detects 80+ different object categories with high accuracy
            </li>
            <li className="font-mono">
              <strong>Real-Time Detection:</strong> Process video streams and identify objects on the fly
            </li>
            <li className="font-mono">
              <strong>Image Upload:</strong> Upload images and get instant object detection results
            </li>
            <li className="font-mono">
              <strong>Bounding Boxes:</strong> Visual overlay showing detected objects with confidence scores
            </li>
            <li className="font-mono">
              <strong>Webcam Integration:</strong> Use your device camera for live object detection
            </li>
            <li className="font-mono">
              <strong>Detection History:</strong> Save and review past detection results
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Technical Implementation</TypographyH3>
          <p className="font-mono mb-4">
            Leverages TensorFlow.js and the COCO-SSD pre-trained model to perform object detection 
            entirely in the browser, ensuring fast performance and privacy (no data sent to servers).
          </p>

          <TypographyH3 className="my-4 mt-8">Use Cases</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
            <li className="font-mono">Educational demonstrations of computer vision</li>
            <li className="font-mono">Image analysis and cataloging</li>
            <li className="font-mono">Security and surveillance applications</li>
            <li className="font-mono">Accessibility tools for visually impaired users</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "framezy",
    category: "E-Commerce Platform",
    title: "Framezy",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center mb-4">
            Your College Essentials, One Click Away 🎓🛒
          </TypographyP>
          <TypographyP className="font-mono">
            Framezy is an e-commerce platform tailored for college students, offering everything from 
            posters and RTO copies to notebooks and project materials. Built with the MERN stack and 
            integrated with Razorpay for seamless payments.
          </TypographyP>
          {this.live && <ProjectsLinks live={this.live} repo={this.github} />}
          
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
            <li className="font-mono">
              <strong>Product Catalog:</strong> Browse posters, notebooks, RTO copies, and project supplies
            </li>
            <li className="font-mono">
              <strong>Shopping Cart:</strong> Add items, manage quantities, and proceed to checkout seamlessly
            </li>
            <li className="font-mono">
              <strong>Razorpay Integration:</strong> Secure payment gateway for smooth transactions
            </li>
            <li className="font-mono">
              <strong>Order Tracking:</strong> Real-time updates on order status and delivery
            </li>
            <li className="font-mono">
              <strong>User Accounts:</strong> Save addresses, track order history, and manage wishlists
            </li>
            <li className="font-mono">
              <strong>Admin Dashboard:</strong> Manage products, orders, and inventory with ease
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Product Categories</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
            <li className="font-mono">📜 Posters (educational, motivational, decorative)</li>
            <li className="font-mono">📓 Notebooks and stationery</li>
            <li className="font-mono">📋 RTO copies and official documents</li>
            <li className="font-mono">📚 Project materials and supplies</li>
            <li className="font-mono">🎨 Custom printing services</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Why Framezy?</TypographyH3>
          <p className="font-mono mb-4">
            Built specifically for college students, Framezy understands your needs. Whether you're 
            decorating your dorm, preparing for exams, or working on a project, we've got everything 
            you need at student-friendly prices with fast delivery.
          </p>
        </div>
      );
    },
  },
  {
    id: "minesweeper",
    category: "Classic Game",
    title: "Minesweeper Game",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    live: "",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center mb-4">
            The Classic Puzzle Game, Reimagined 💣🎮
          </TypographyP>
          <TypographyP className="font-mono">
            A modern take on the classic Minesweeper game built with vanilla JavaScript. 
            Features smooth animations, multiple difficulty levels, and a clean, intuitive interface.
          </TypographyP>
          {this.live && <ProjectsLinks live={this.live} repo={this.github} />}
          
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
            <li className="font-mono">
              <strong>Multiple Difficulty Levels:</strong> Choose from Beginner, Intermediate, and Expert modes
            </li>
            <li className="font-mono">
              <strong>Smooth Animations:</strong> Responsive interactions with satisfying visual feedback
            </li>
            <li className="font-mono">
              <strong>Timer & Scoring:</strong> Track your time and compete for the best scores
            </li>
            <li className="font-mono">
              <strong>Flag System:</strong> Right-click to flag suspected mines
            </li>
            <li className="font-mono">
              <strong>Auto-Reveal:</strong> Click empty cells to auto-reveal safe adjacent cells
            </li>
            <li className="font-mono">
              <strong>First-Click Safety:</strong> Never hit a mine on your first click
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Game Mechanics</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
            <li className="font-mono">Clean grid layout with responsive design</li>
            <li className="font-mono">Classic Minesweeper rules and logic</li>
            <li className="font-mono">Keyboard shortcuts for faster gameplay</li>
            <li className="font-mono">Local high scores and statistics tracking</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Built With</TypographyH3>
          <p className="font-mono mb-4">
            Developed using pure JavaScript, HTML, and CSS to demonstrate fundamental web development 
            skills and game logic implementation. No frameworks needed – just clean, efficient code.
          </p>
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Personal Portfolio",
    title: "3D Interactive Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png", "navbar.png", "projects.png", "skills.png", "project.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.spline,
        PROJECT_SKILLS.gsap,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.node,
      ],
    },
    live: "https://rajgupta.site",
    github: "https://github.com/0607rj/3d-portfolio",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center mb-4">
            An Immersive 3D Experience 🚀✨
          </TypographyP>
          <TypographyP className="font-mono">
            This portfolio itself is a project! Built with cutting-edge technologies like Spline for 3D graphics, 
            GSAP and Framer Motion for buttery-smooth animations, and Next.js 14 for blazing-fast performance.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Standout Features</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
            <li className="font-mono">
              <strong>3D Interactive Keyboard:</strong> Each keycap represents a skill with hover interactions
            </li>
            <li className="font-mono">
              <strong>Space Theme:</strong> Floating particles and cosmic aesthetics
            </li>
            <li className="font-mono">
              <strong>Buttery Animations:</strong> Scroll-triggered animations powered by GSAP
            </li>
            <li className="font-mono">
              <strong>Dark/Light Mode:</strong> Seamless theme switching with cheeky disclaimers
            </li>
            <li className="font-mono">
              <strong>Contact Form:</strong> Integrated email delivery via Resend API
            </li>
            <li className="font-mono">
              <strong>Fully Responsive:</strong> Looks stunning on all devices
            </li>
          </ul>

          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/navbar.png`,
              `${BASE_PATH}/portfolio/projects.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
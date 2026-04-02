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
        className="underline flex gap-2"
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
          className="underline flex gap-2"
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
    title: "Shadcn UI",
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
  mongodb: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: "",
  },
  chartjs: {
    title: "Chart.js",
    bg: "black",
    fg: "white",
    icon: "",
  },
  flask: {
    title: "Flask",
    bg: "black",
    fg: "white",
    icon: "",
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "talentbridge",
    category: "Job Portal & Career Platform",
    title: "TalentBridge",
    src: "/assets/projects-screenshots/thumbnails/talentbridge.png",
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
    live: "https://talentbridge6.netlify.app/",
    get content() {
      return (
        <div className="space-y-12">
          <section className="space-y-4 font-sans">
            <TypographyP className="text-xl text-neutral-300 leading-relaxed font-normal">
              I built TalentBridge to be more than just a job board. It's a comprehensive platform that 
              helps candidates understand their career gaps and prepares them for the next step in their journey.
            </TypographyP>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 space-y-4">
              <h4 className="text-white font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                AI Career Intelligence
              </h4>
              <div className="space-y-3">
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Resume Analyzer:</strong> Scans your resume for keywords and gives a score based on job requirements.
                </div>
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Gap Finder:</strong> Identifies specifically which skills you are missing for your dream role and recommends how to learn them.
                </div>
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">AI Resume Sync:</strong> Keeps your profile always up-to-date by automatically syncing changes from your latest resume.
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 space-y-4">
               <h4 className="text-white font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                Preparation & Proof
              </h4>
              <div className="space-y-3">
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Mock Test Platform:</strong> Take practice interviews and technical tests to sharpen your skills before the real thing.
                </div>
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">AI Talent Badges:</strong> Earn verified badges by passing skill assessments, making your profile stand out to recruiters.
                </div>
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Smart Recommendations:</strong> Get personalized job alerts based on your actual verified skills and assessment history.
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
             <h4 className="text-white font-bold text-lg">Platform Connectivity</h4>
             <p className="text-neutral-400 text-sm leading-relaxed">
               I also integrated high-quality video calling directly in the browser using WebRTC, so 
               recruiters and candidates can have smooth, real-time interviews without needing 
               any external apps like Zoom or Google Meet.
             </p>
          </section>
        </div>
      );
    },
  },
  {
    id: "ecodrive",
    category: "Carpooling & Sustainability",
    title: "EcoDrive",
    src: "/assets/projects-screenshots/thumbnails/ecodrive.png",
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
    live: "https://my-carpool.vercel.app/",
    get content() {
      return (
        <div className="space-y-12">
          <section className="space-y-4">
            <TypographyP className="text-xl text-neutral-300 leading-relaxed font-normal">
              EcoDrive is a modern carpooling platform designed to make commuting more affordable 
              and sustainable. I built it specifically for people who want to share their daily 
              travel costs while reducing their environmental impact.
            </TypographyP>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 space-y-4">
              <h4 className="text-white font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Smart Routing
              </h4>
              <div className="space-y-3">
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Route Suggestions:</strong> Automatically finds the best meeting spots that are directly on the driver's path to minimize detours.
                </div>
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Fare Splitter:</strong> A built-in calculator that suggests fair prices based on distance and fuel consumption.
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 space-y-4">
               <h4 className="text-white font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Impact Tracking
              </h4>
              <div className="space-y-3">
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Carbon Dashboard:</strong> Every trip shows you exactly how much CO2 you've saved by carpooling instead of driving alone.
                </div>
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Real-time Chat:</strong> Integrated messaging system for drivers and passengers to coordinate pickups safely.
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    },
  },
  {
    id: "notesforge",
    category: "AI-Powered Education",
    title: "NotesForge",
    src: "/assets/projects-screenshots/thumbnails/notesforge.png",
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
    live: "https://notesforge-ai.netlify.app/",
    get content() {
      return (
        <div className="space-y-12">
          <section className="space-y-4">
            <TypographyP className="text-xl text-neutral-300 leading-relaxed font-normal">
              NotesForge is an AI project I built to help students manage massive amounts of information. 
              It doesn't just store notes—it helps you understand and organize them automatically.
            </TypographyP>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 space-y-4">
              <h4 className="text-white font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500" />
                AI Content Engine
              </h4>
              <div className="space-y-3">
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Smart Summaries:</strong> Uses Gemini 1.5 Pro to take entire textbook chapters and turn them into concise, readable guides.
                </div>
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Auto-Quiz:</strong> Generates practice quizzes and flashcards directly from your uploaded notes to help with active recall.
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 space-y-4">
               <h4 className="text-white font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                Workspace Tools
              </h4>
              <div className="space-y-3">
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Topic Logic:</strong> Automatically groups related notes into semantic clusters so you never lose track of a concept.
                </div>
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Real-time Sync:</strong> Full cross-device support so your workspace is always ready, whether you're on a phone or a laptop.
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    },
  },
  {
    id: "object-detection",
    category: "AI & Computer Vision",
    title: "Object Detection AI",
    src: "/assets/projects-screenshots/thumbnails/object-detection.png",
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
    live: "https://object-detection-ai.netlify.app/",
    get content() {
      return (
        <div className="space-y-12">
          <section className="space-y-4">
            <TypographyP className="text-xl text-neutral-300 leading-relaxed font-normal">
              Object Detection AI is a computer vision tool I built to demonstrate how 
              artificial intelligence can run locally and privately inside a web browser.
            </TypographyP>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 space-y-4">
              <h4 className="text-white font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                Edge AI Capabilities
              </h4>
              <div className="space-y-3">
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Real-time Vision:</strong> Identifies and tracks over 80 different object classes in a live video stream with zero server lag.
                </div>
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">On-Device Inference:</strong> Uses TensorFlow.js to run the entire AI model on the user's GPU, ensuring the camera feed never leaves the device.
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 space-y-4">
               <h4 className="text-white font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neutral-400" />
                Performance Focus
              </h4>
              <div className="space-y-3">
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Dynamic Scaling:</strong> Adjusts frame rates and model precision based on the device's hardware power to keep performance smooth.
                </div>
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Privacy First:</strong> Since no data is sent to the cloud, it's a perfectly secure way to use AI for sensitive camera tasks.
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    },
  },
  {
    id: "framezy",
    category: "E-Commerce Platform",
    title: "Framezy",
    src: "/assets/projects-screenshots/thumbnails/framezy.png",
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
    live: "https://framezy.netlify.app/",
    get content() {
      return (
        <div className="space-y-12">
          <section className="space-y-4">
            <TypographyP className="text-xl text-neutral-300 leading-relaxed font-normal">
              Framezy is a campus-focused e-commerce platform I built to bridge the gap between 
              local student vendors and the university community. It makes buying project 
              materials and books fast and secure.
            </TypographyP>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 space-y-4">
              <h4 className="text-white font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-500" />
                Marketplace Features
              </h4>
              <div className="space-y-3">
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Multi-Vendor Dashboard:</strong> Empowered local owners to list items, manage inventory, and track orders in real-time.
                </div>
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Secure Payments:</strong> Integrated Razorpay for a smooth checkout process tailored to the campus environment.
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 space-y-4">
               <h4 className="text-white font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Student Utility
              </h4>
              <div className="space-y-3">
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Verified Listings:</strong> A curation system to ensure that all books and project components listed are relevant to current courses.
                </div>
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Live Inventory:</strong> Stock levels update instantly to prevent over-orders during peak semester transition weeks.
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    },
  },
  {
    id: "minesweeper",
    category: "Classic Game",
    title: "Minesweeper Game",
    src: "/assets/projects-screenshots/thumbnails/minesweeper.png",
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    live: "",
    get content() {
      return (
        <div className="space-y-12">
          <section className="space-y-4">
            <TypographyP className="text-xl text-neutral-300 leading-relaxed font-normal">
              I built a high-performance web version of the classic Minesweeper game. My focus was 
              on creating a perfectly fair and logical experience by implementing advanced game 
              algorithms from scratch.
            </TypographyP>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 space-y-4">
              <h4 className="text-white font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500" />
                Game Logic
              </h4>
              <div className="space-y-3">
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">First-Click Safety:</strong> Every game starts with a guaranteed safe zone so the player never hits a mine on their first move.
                </div>
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Flood-Fill Algorithm:</strong> Custom recursive logic to instantly reveal all connecting empty cells when clicked.
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 space-y-4">
               <h4 className="text-white font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neutral-400" />
                Web Performance
              </h4>
              <div className="space-y-3">
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">State Management:</strong> Built with raw JavaScript and efficient DOM updates to ensure zero lag on boards of all sizes.
                </div>
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Adaptive UI:</strong> Responsive board scaling that looks and feels great on both desktop monitors and phones.
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Personal Portfolio",
    title: "3D Interactive Portfolio",
    src: "/assets/projects-screenshots/thumbnails/portfolio.png",
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
    live: "https://rajportfolio06.netlify.app/",
    github: "https://github.com/0607rj/3d-portfolio",
    get content() {
      return (
        <div className="space-y-8">
          <TypographyP className="text-lg text-neutral-300 leading-relaxed font-normal">
            This portfolio is my personal digital space. I wanted to build something that isn't 
            just a list of links, but an interactive experience where you can see my work in a 
            unique way.
          </TypographyP>

          <div className="p-6 bg-neutral-900 rounded-lg border border-neutral-800 font-sans">
             <h4 className="text-white font-bold mb-4">Technical Choice</h4>
             <p className="text-sm text-neutral-400 leading-relaxed">
               I combined 3D design using Spline with modern web tools like Next.js and Framer Motion. 
               The result is a portfolio that feels alive and tactile, while still being fast 
               and easy to navigate.
             </p>
          </div>
        </div>
      );
    },
  },
  {
    id: "codingducks",
    category: "Coding Platform",
    title: "Coding Ducks",
    src: "/assets/projects-screenshots/codingducks/1.png",
    screenshots: [
      "/assets/projects-screenshots/codingducks/2.png",
      "/assets/projects-screenshots/codingducks/3.png",
      "/assets/projects-screenshots/codingducks/4.png",
      "/assets/projects-screenshots/codingducks/5.png",
    ],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongodb, PROJECT_SKILLS.sockerio],
    },
    live: "https://www.codingducks.live",
    get content() {
      return (
        <div className="space-y-12">
          <section className="space-y-4">
            <TypographyP className="text-xl text-neutral-300 leading-relaxed font-normal">
              CodingDucks is an interactive coding platform I built to combine the creativity of 
              building with the challenge of problem-solving. It's a place for developers 
              to collaborate and learn together in real-time.
            </TypographyP>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 space-y-4">
              <h4 className="text-white font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                Collaborative Tools
              </h4>
              <div className="space-y-3">
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Real-time Editor:</strong> Powered by Socket.io, allowing multiple developers to type and refactor code on the same screen simultaneously.
                </div>
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Integrated Sandbox:</strong> A custom-built environment to run snippets immediately and see the output without reloading.
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 space-y-4">
               <h4 className="text-white font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Community Hub
              </h4>
              <div className="space-y-3">
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Global Discussion:</strong> A built-in forum for sharing tips, discussing algorithms, and connecting with other builders on campus.
                </div>
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Algorithmic Track:</strong> Curated problem sets categorized by difficulty to help developers move from beginner to advanced.
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    },
  },
  {
    id: "ghostchat",
    category: "Messaging App",
    title: "Ghost Chat",
    src: "/assets/projects-screenshots/ghostchat/1.png",
    screenshots: [
      "/assets/projects-screenshots/ghostchat/2.png",
      "/assets/projects-screenshots/ghostchat/3.png",
      "/assets/projects-screenshots/ghostchat/4.png",
    ],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.firebase, PROJECT_SKILLS.sockerio],
    },
    live: "https://ghostchatt.vercel.app/",
    get content() {
      return (
        <div className="space-y-12">
          <section className="space-y-4">
            <TypographyP className="text-xl text-neutral-300 leading-relaxed font-normal">
              GhostChat is a minimalist chat application I built to prioritize speed and privacy. 
              The goal was to create a messaging experience that disappears without leaving 
              any digital footprint.
            </TypographyP>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 space-y-4">
              <h4 className="text-white font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Privacy Engine
              </h4>
              <div className="space-y-3">
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Ephemeral Messaging:</strong> Messages exist only for the session and are purged from the system after the connection ends.
                </div>
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Zero-Footprint Info:</strong> No accounts, logins, or tracking. Just connect to a room and start talking instantly.
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 space-y-4">
               <h4 className="text-white font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                Performance Sync
              </h4>
              <div className="space-y-3">
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Firebase Realtime:</strong> Leveraging real-time data streaming for sub-100ms message delivery across platforms.
                </div>
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Modern Stack:</strong> Powered by Next.js and Tailwind to keep the entire experience lightweight and fast.
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    },
  },
  {
    id: "couponluxury",
    category: "Deals & Discounts",
    title: "Coupon Luxury",
    src: "/assets/projects-screenshots/couponluxury/1.png",
    screenshots: [
      "/assets/projects-screenshots/couponluxury/2.png",
      "/assets/projects-screenshots/couponluxury/3.png",
      "/assets/projects-screenshots/couponluxury/4.png",
      "/assets/projects-screenshots/couponluxury/5.png",
    ],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.postgres],
    },
    live: "https://www.couponluxury.com/",
    get content() {
      return (
        <div className="space-y-8">
          <TypographyP className="text-lg text-neutral-300 leading-relaxed font-normal">
            Coupon Luxury is a site that helps shoppers find the best deals and coupon codes for 
            high-end brands. I aimed to make the search for discounts fast and easy.
          </TypographyP>

          <div className="p-6 bg-neutral-900 rounded-lg border border-neutral-800 font-sans">
             <h4 className="text-white font-bold mb-4">What it offers</h4>
             <p className="text-sm text-neutral-400 leading-relaxed">
                The site tracks verified discounts and luxury deals globally. I built a system to 
                filter out expired codes so users always find savings that actually work.
             </p>
          </div>
        </div>
      );
    },
  },
  {
    id: "jntua-analyser",
    category: "Academic Tool",
    title: "JNTUA Results Analyser",
    src: "/assets/projects-screenshots/jra/1.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.vue, PROJECT_SKILLS.bootstrap],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.flask, PROJECT_SKILLS.chartjs],
    },
    live: "https://jntua-results-analyser.vercel.app/",
    get content() {
      return (
        <div className="space-y-12">
          <section className="space-y-4">
            <TypographyP className="text-xl text-neutral-300 leading-relaxed font-normal">
              JNTUA Results Analyser is an academic data tool I built to transform complex university 
              results into actionable insights for thousands of students and faculty members.
            </TypographyP>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 space-y-4">
              <h4 className="text-white font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Data Insights
              </h4>
              <div className="space-y-3">
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Bulk Parsing:</strong> Engineered a Python backend to scrape and parse thousands of student records from official university portals simultaneously.
                </div>
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Visual Audits:</strong> Integrated Chart.js to create interactive dashboards showing class-wise performance and historical trends.
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 space-y-4">
               <h4 className="text-white font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Student Growth
              </h4>
              <div className="space-y-3">
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Individual Tracking:</strong> Allows students to securely check their entire academic history and identify their strongest and weakest areas.
                </div>
                <div className="text-sm text-neutral-400">
                  <strong className="text-neutral-200">Low Latency:</strong> Optimized database indexing to ensure lookups remain under 500ms even during peak results seasons.
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    },
  },
];

export default projects;
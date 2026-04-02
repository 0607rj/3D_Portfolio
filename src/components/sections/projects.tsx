"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";
import { ExternalLink, ArrowUpRight, MoveUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto py-20 min-h-screen">
      <SectionHeader id="projects" title="Featured Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mt-16">
        {projects.slice(0, 6).map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
      <div className="flex justify-center mt-16">
        <Link href="/projects">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-neutral-900 border border-neutral-800 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-neutral-800 transition-all flex items-center gap-3 shadow-xl hover:shadow-cyan-500/10"
          >
            Explore All Projects
            <ArrowUpRight className="w-4 h-4 text-cyan-400" />
          </motion.button>
        </Link>
      </div>
    </SectionWrapper>
  );
};

export const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className="flex flex-col h-full"
    >
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn w-full h-full text-left p-0">
          <div
            className="relative w-full group rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/40 hover:border-cyan-500/50 transition-all duration-700 shadow-2xl flex flex-col h-full"
            style={{ aspectRatio: "16/11" }}
          >
            <div className="relative flex-grow overflow-hidden">
              <Image
                className="absolute w-full h-full object-cover top-0 left-0 transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                src={project.src}
                alt={project.title}
                width={600}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
            
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-bold mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
              <div className="w-0 group-hover:w-full h-[1px] bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-700 ease-in-out" />
            </div>

            {project.live && (
              <div className="absolute top-4 right-4 z-40 p-2.5 bg-black/50 backdrop-blur-md rounded-full text-white/50 border border-white/10 group-hover:bg-cyan-500 group-hover:text-black group-hover:border-transparent transition-all duration-500">
                <ExternalLink className="w-4 h-4" />
              </div>
            )}
          </div>
        </ModalTrigger>
        
        <ModalBody className="md:max-w-7xl md:max-h-[90vh] bg-neutral-950 border-neutral-800 shadow-[0_0_80px_-20px_rgba(34,211,238,0.3)]">
          <ModalContent className="p-0">
            <ProjectContents project={project} />
          </ModalContent>
        </ModalBody>
      </Modal>
    </motion.div>
  );
};

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-full bg-black font-sans relative">
      {/* Left Sidebar - CLEAN Identification & Actions */}
      <div className="w-full md:w-[35%] bg-neutral-950 p-8 md:p-12 border-b md:border-b-0 md:border-r border-neutral-800/50 flex flex-col gap-12 md:sticky md:top-0 md:h-screen">
        <div className="space-y-10">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-neutral-800"
          >
            <Image 
              src={project.src} 
              alt={project.title} 
              width={800} 
              height={500} 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-neutral-400 font-medium bg-neutral-900/50 self-start px-3 py-1 rounded-md border border-neutral-800">
              {project.category}
            </p>
          </div>
        </div>

        {/* Action Buttons - Minimal */}
        <div className="flex flex-col gap-3">
           <Link href={project.live} target="_blank" className="w-full">
              <button className="w-full relative group flex items-center justify-center gap-3 px-6 py-3.5 bg-white text-black text-sm font-bold rounded-lg transition-all hover:bg-neutral-200 active:scale-95 shadow-lg">
                <span>View Live Site</span>
                <MoveUpRight className="w-4 h-4" />
              </button>
           </Link>
           {project.github && (
              <Link href={project.github} target="_blank" className="w-full">
                <button className="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white text-sm font-medium rounded-lg border border-neutral-800 transition-all">
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </button>
              </Link>
           )}
        </div>

        {/* Dynamic Tech Stack - Simple list */}
        <div className="hidden md:flex flex-col gap-6">
           <div className="flex flex-col gap-8">
              {project.skills.frontend?.length > 0 && (
                <div className="flex flex-col gap-3">
                   <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Interface</span>
                   <div className="flex flex-wrap gap-2">
                      <FloatingDock items={project.skills.frontend} />
                   </div>
                </div>
              )}
              {project.skills.backend?.length > 0 && (
                 <div className="flex flex-col gap-3">
                    <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Technology</span>
                    <div className="flex flex-wrap gap-2">
                       <FloatingDock items={project.skills.backend} />
                    </div>
                 </div>
              )}
           </div>
        </div>
      </div>

      {/* Right Content - Clean Journal Narrative */}
      <div className="flex-1 p-8 md:p-16 lg:p-24 max-w-4xl space-y-20 pb-48">
         {/* Introduction */}
         <section className="space-y-6">
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-[0.2em] mb-4">About this work</h3>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-normal">
                {project.title} is a project I built to explore {project.category.toLowerCase()}. 
                The goal was to create something that feels simple to use while being technically solid under the hood.
              </p>
            </div>
         </section>

         {/* Standard Content Render */}
         <section className="prose prose-invert max-w-none prose-p:text-neutral-400 prose-p:text-lg prose-p:leading-relaxed prose-headings:text-white">
            <div className="space-y-12">
              {project.content}
            </div>
         </section>

         {/* Simple Roadmap */}
         <section className="space-y-8 pt-16 border-t border-neutral-800">
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-[0.2em]">The Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               {[
                 { step: "01", title: "Plan", desc: "Thinking about the user and how to make the experience smooth." },
                 { step: "02", title: "Build", desc: "Writing clean, reusable code using modern technologies." },
                 { step: "03", title: "Test", desc: "Making sure everything works perfectly across all devices." }
               ].map((item) => (
                 <div key={item.step} className="space-y-3">
                    <div className="text-xs font-bold text-neutral-600">{item.step}</div>
                    <h5 className="font-bold text-white text-base">{item.title}</h5>
                    <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
         </section>
      </div>
    </div>
  );
};

export default ProjectsSection;

"use client";

import React from "react";
import projects from "@/data/projects";
import { ProjectCard } from "@/components/sections/projects";
import { motion } from "framer-motion";
import AnimatedBackground from "@/components/animated-background";
import SmoothScroll from "@/components/smooth-scroll";
import { TypographyH1, TypographyP } from "@/components/ui/typography";

export default function ProjectsPage() {
  return (
    <SmoothScroll>
      <AnimatedBackground />
      <main className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto overflow-x-hidden">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-neutral-500 text-xs font-bold uppercase tracking-[0.3em] mb-4">
              My Portfolio
            </h4>
            <TypographyH1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Projects & <br className="md:hidden" />
              <span className="text-neutral-400">
                Work
              </span>
            </TypographyH1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl"
          >
            <TypographyP className="text-neutral-400 text-lg">
              A comprehensive showcase of my technical journey, from complex AI integrations 
              to immersive 3D experiences and scalable full-stack applications.
            </TypographyP>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </main>
    </SmoothScroll>
  );
}

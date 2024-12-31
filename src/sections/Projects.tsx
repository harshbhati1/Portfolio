 import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg'
import ShopFiIcon from '@/assets/images/ShopFi.png'
import SmartVoteIcon from '@/assets/images/SmartVote.png'
import ClockIcon from '@/assets/images/Clock.png'
import BlogSphereIcon from '@/assets/images/BlogSphere.png'
import ProposalIcon from '@/assets/images/Proposal.png'
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Shopfi",
    year: "2024",
    title: "Credit Ledger App",
    results: [
      { title: "Reduced manual errors by 40%" },
      { title: "Real-time data synchronization" },
      { title: "Testing with 100+ users" },
    ],
    link: "https://www.youtube.com/watch?v=aIILearHubk",
    image: ShopFiIcon,
  },
  {
    company: "SmartVote",
    year: "2024",
    title: "Ranked Choice Voting System",
    results: [
      { title: "Implemented Ranked Choice Vote Redistribution" },
      { title: "Optimized Linked Memory Structures" },
      { title: "Integrated File I/O Pipelines" },
    ],
    link: "https://www.youtube.com/watch?v=OVfPo7qUt7w",
    image: SmartVoteIcon,
  },
  {
    company: "Digital Clock System",
    year: "2024",
    title: "Microcontroller-Based LCD Clock Display",
    results: [
      { title: "Engineered MCU Timekeeping Logic" },
      { title: "Optimized Bitwise Display Rendering" },
      { title: "Developed Scalable Assembly Modules" },
    ],
    link: "https://youtu.be/LcqCH4v0dGA",
    image: ClockIcon,
  },
  {
    company: "BlogSphere",
    year: "2024",
    title: "Dynamic Blogging and Content Sharing Platform",
    results: [
      { title: "Designed responsive UI for seamless content creation" },
      { title: "Built scalable backend for efficient blog storage and retrieval" },
      { title: "Integrated comment moderation and analytics for user insights" },
    ],
    link: "https://youtu.be/WvWPG9y2-u4",
    image: BlogSphereIcon,
  },
];

export const ProjectsSection = () => {
  return <section id="projects" className="pb-16 lg:py-24">
    <div className="container">
      <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="See how I transformed concepts into engaging digital experiences." />  
      <div className="flex flex-col mt-10 md:mt-20 gap-20">
        {portfolioProjects.map((project, projectIndex) => (
          <Card key={project.title} className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky" style={{
            top:`calc(64px + ${projectIndex * 40}px`
          }}>

            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text ">
              <span>{project.company}</span>
              <span>&bull;</span>
              <span>{project.year}</span>
              </div>
            <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>
            <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
            <ul className="flex flex-col gap-4 mt-4 md:mt-5 ">
              {project.results.map((result) => (
                <li  key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                  <CheckCircleIcon className = "size-5 md:size-6" />
                  <span>{result.title}</span>
                  </li>
              ))}
            </ul>
            <a href={project.link}  target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-gray-950 h-12 w-full  md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
              <span> Check it Out </span>
              <ArrowUpRight className = 'size-4' />
              </button>
            </a>
            </div>
            <div className="relative">
            <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
            </div>
            </div>
          </Card>
        ))} 
      </div>


    </div>
  </section>;
};

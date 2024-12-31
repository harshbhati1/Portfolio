"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from '@/assets/images/book-cover.png'
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import JavaIcon from '@/assets/icons/java.svg'
import PythonIcon from '@/assets/icons/python.svg'
import ReactIcon from '@/assets/icons/react.svg'
import GithubIcon from '@/assets/icons/github.svg'
import CIcon from '@/assets/icons/c-1.svg'
import FlaskIcon from '@/assets/icons/flask.svg'
import FlutterIcon from '@/assets/icons/flutter.svg'
import TailWindIcon from '@/assets/icons/tailwind.svg'
import DockerIcon from '@/assets/icons/docker.svg'
import OCamlIcon from '@/assets/icons/ocaml.svg'
import X86Icon from '@/assets/icons/os-x86.svg'
import MatlabIcon from '@/assets/icons/matlab.svg'
import RustIcon from '@/assets/icons/rust.svg'
import SQLIcon from '@/assets/icons/sql.svg'
import DartIcon from '@/assets/icons/dart.svg'
import MapImage from '@/assets/images/map-2.png'
import smileMemoji from '@/assets/images/memoji-smile.png'
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";
import { motion } from 'framer-motion'
import { useRef } from "react";

const toolboxItems = [
  {
    title: 'Java',
    iconType: JavaIcon,
  },
  {
    title: 'Python',
    iconType: PythonIcon,
  },
  {
    title: 'C',
    iconType: CIcon,
  },
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
  {
    title: 'Dart',
    iconType: DartIcon,
  },
  {
    title: 'SQL',
    iconType: SQLIcon,
  },
  {
    title: 'Rust',
    iconType: RustIcon,
  },
  {
    title: 'MATLAB',
    iconType: MatlabIcon,
  },
  {
    title: 'X86_Assembly',
    iconType: X86Icon,
  },
  {
    title: 'OCaml',
    iconType: OCamlIcon,
  },
  {
    title: 'Docker',
    iconType: DockerIcon,
  },
  {
    title: 'Tailwind',
    iconType: TailWindIcon,
  },
  {
    title: 'Flutter',
    iconType: FlutterIcon,
  },
  {
    title: 'Flask',
    iconType: FlaskIcon,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
]

const hobbies = [
  {
    title: 'Photography',
    emoji: '📸',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Cooking',
    emoji: '🍳',
    left: '40%',
    top: '20%',
  },
  {
    title: 'Cricket',
    emoji: '🏏',
    left: '60%',
    top: '10%',
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: '1%',
    top: '40%',
  },
  {
    title: 'Geopolitics',
    emoji: '🌍',
    left: '55%',
    top: '45%',
  },
  {
    title: 'Traveling',
    emoji: '✈️',
    left: '20%',
    top: '60%',
  },
  {
    title: 'Music',
    emoji: '🎵',
    left: '60%',
    top: '75%',
  },
  {
    title: 'Fitness',
    emoji: '🏋️‍♂️',
    left: '10%',
    top: '80%',
  },
];



export const AboutSection = () => {
  const constraintRef = useRef(null);
  
  return <section id="about"> <div className="py-20 lg:py-28">
    <div className="container">
    <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do, and what inspires me " />

   <div className="mt-20 flex flex-col gap-8">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
    <Card className="h-[320px] md:col-span-2 lg:col-span-1">
      <CardHeader title="My Reads" description="Explore the books shaping my perspectives." />
      <div className="w-40 mx-auto mt-2 md:mt-0">
      <Image src={bookImage} alt="Book cover" />
      </div>
    </Card>

    <Card className="h-[320px] md:col-span-3 lg:col-span-2">
      <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to craft exceptional digital experiences." className="" />
      <ToolBoxItems items={ toolboxItems} className="" itemsWrapperClassname="animate-move-left [animation-duration:60s]" />
      <ToolBoxItems items={ toolboxItems} className="mt-6"
      itemsWrapperClassname="animate-move-right [animation-duration:30s]" />
    </Card>
    </div>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
    <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
      <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond the digital realm." className="px-6 py-6" />
    <div className="relative flex-1" ref={constraintRef}>
      {hobbies.map(hobby => (

        <motion.div key={hobby.title} className="inline-flex items-center  gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{
          left: hobby.left,
          top: hobby.top,
        }}
        drag
        dragConstraints={constraintRef}
        >
          <span className="font-medium text-gray-950">{hobby.title}</span>
          <span>{hobby.emoji}</span>
        </motion.div>
      ))}
    </div>
    </Card>

    <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
      <Image src={MapImage} alt="map" className="h-full w-full object-cover object-left-top" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
      <Image src={smileMemoji} alt="smileMemoji" className="size-20" />
      </div>
    </Card>
    </div>

   </div> 
   </div>
  </div>
  </section>
  ;
};

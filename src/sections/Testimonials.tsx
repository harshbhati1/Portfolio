/* eslint-disable react/no-unescaped-entities */

import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from '@/assets/images/grain.jpg'
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Anshaj Goyal",
    position: "Data Scientist @ Scalenut",
    text: "Harsh's exceptional problem-solving skills and technical expertise greatly enhanced our workflows at Scalenut. His dedication, curiosity, and ability to collaborate made him an invaluable asset to our team",
    avatar: memojiAvatar1,
  },
  {
    name: "Harita Patel",
    position: "Assistant Program Director @ OMSE",
    text: "Harsh has been an outstanding tutor at OMSE, combining his deep understanding of complex concepts with a patient and encouraging approach. His support has greatly benefited the students he mentors.",
    avatar: memojiAvatar2,
  },
  {
    name: "Harsh G.",
    position: "CEO @ Interview Camp",
    text: "Harsh has a strong aptitude for logical reasoning and problem-solving. He approaches challenges thoughtfully, analyzing them from multiple angles to arrive at practical and effective solutions.",
    avatar: memojiAvatar3,
  },
  {
    name: "Ronisha Ruth",
    position: "Product Manager @ I4C",
    text: "Harsh has been an invaluable part of I4C, mentoring students on Python and IoT projects and leading innovative initiatives like 3D printing and hardware integration. His guidance has inspired creativity and driven meaningful impact.",
    avatar: memojiAvatar4,
  },
  {
    name: "Shreh Madan",
    position: "Co-Founder @ Burgrill",
    text: "Harsh's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return <div className="py-16 lg:py-24">
    <div className="container">
    <SectionHeader eyebrow="Trusted Voices" title="What They Say About Me" description="Don’t just take my word for it. Here’s what those who’ve worked with me have to share." />
     <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
      <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
          {testimonials.map(testimonial => (
            <Card key={testimonial.name} className="max-w-xs p-6 md:max-w-md md:p-8 hover:-rotate-3 transition duration-300">
              <div className="flex gap-4 items-center">
              <div className="size-14 bg-gray-700 inline-flex items-center
              jusitfy-center rounded-full flex-shrink-0">
              <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full" />
              </div>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-white/40">{testimonial.position}</div>
              </div>
              </div>
              <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
            </Card>
          ))}
          </Fragment>
        ))}
     </div>
     </div>
     </div>
  </div>;
};

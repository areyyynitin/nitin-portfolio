import React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import Image from 'next/image';

const Skills = () => {
  const skills = [
    { name: "Express.js", src: "/svg/express.svg" },
    { name: "Figma", src: "/svg/figma.svg" },
    { name: "Git", src: "/svg/git.svg" },
    { name: "JavaScript", src: "/svg/javascript.svg" },
    { name: "MongoDB", src: "/svg/mongo.svg" },
    { name: "Next.js", src: "/svg/nextjs.svg" },
    { name: "Node.js", src: "/svg/nodejs.svg" },
    { name: "PostgreSQL", src: "/svg/postgresSql.svg" },
    { name: "Prisma", src: "/svg/prisma.svg" },
    { name: "React", src: "/svg/react.svg" },
    { name: "Tailwind", src: "/svg/tailwind.svg" },
    { name: "TypeScript", src: "/svg/typescript.svg" },
  ];

  return (
    <div className='font-sans mx-4 md:mx-16 lg:mx-82 text-lg md:text-[20px]'>
     <h2 className='font-bold font-kode-mono text-2xl md:text-[30px] pt-10 text-start'> Skills</h2>

      <div className='mt-3 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4 pl-0 md:pl-4'>
        {skills.map((skill) => (
          <Tooltip key={skill.name}>
            <TooltipTrigger>
              <Image
                src={skill.src}
                alt={skill.name}
                className='rounded-md bg-gray-200 p-2 hover:-translate-y-1 transition-transform w-full max-w-[50px] mx-auto'
                width={50}
                height={50}
              />
            </TooltipTrigger>
            <TooltipContent className=''>{skill.name}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default Skills;

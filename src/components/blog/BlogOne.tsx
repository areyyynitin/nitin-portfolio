"use client";
import React from "react";
import { HoverEffect } from "../ui/card-hover-effect";

const BlogOne = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow font-sans mx-4 md:mx-16 lg:mx-82 text-lg md:text-[20px]">
        <h2 className="font-bold font-kode-mono text-2xl md:text-[30px] text-start">
          Blog
        </h2>
        <div className="pt-6 pb-6">
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>
  );
};

export default BlogOne;

export const projects = [
  {
    title: "Blog 1",
    description:
      "01100111 01100101 01110100 00100000 01100001 00100000 01101010 01101111 01100010 00100000 01001110 01101001 01100111 01100111 01100001",
    link: "/",
  },
];

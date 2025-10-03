"use client";
import { Code2 } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    
      <footer className="bg-white border-t border-gray-300">
        <div className="font-sans mx-4 md:mx-16 lg:mx-20 text-lg md:text-[20px]">
          <div className="pt-6 pb-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm md:text-base text-gray-600 flex items-center gap-2">
              <Code2 className="w-5 h-5 md:w-6 md:h-6" />
              I make stuff work
            </p>
          </div>
        </div>
      </footer>
    
  );
};

export default Footer;

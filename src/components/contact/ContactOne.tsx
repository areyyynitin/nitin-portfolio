import { Clock8, Code2, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Headers from '../mypages/Headers';

const ContactOne = () => {
  return (
    <div>
      <Headers />
      <main className="mx-4 sm:mx-8 md:mx-16 lg:mx-82">
        {/* Heading */}
        <div className="font-sans pt-6 text-[18px] sm:text-[20px] text-center md:text-left px-2">
            <h2 className='font-bold font-kode-mono text-2xl md:text-[30px]  text-start'> Contact </h2>
          <p>Have an idea but need someone to bring it to life?</p>
          <p className="text-[18px] sm:text-[20px] font-semibold">I help turn concepts into working products</p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-10 p-4 sm:p-6 rounded-xl shadow-sm">
          {/* Left: Reach out */}
          <div className="p-2 sm:p-4 md:border-r border-gray-200">
            <h2 className="font-kode-mono text-lg sm:text-xl font-bold mb-4">Reach out</h2>

            <div className="flex items-center gap-3 mb-3">
              <div className="bg-black text-white p-2 rounded-md flex-shrink-0">
                <Mail size={18} />
              </div>
              <Link href="mailto:np089250@gmail.com" className="text-blue-600 hover:underline break-all text-sm sm:text-base">
                np089250@gmail.com
              </Link>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="bg-black text-white p-2 rounded-md flex-shrink-0">
                <MapPin size={18} />
              </div>
              <span className="text-sm sm:text-base">India (GMT+5:30)</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-black text-white p-2 rounded-md flex-shrink-0">
                <Clock8 size={18} />
              </div>
              <span className="text-sm sm:text-base">Response within 24h</span>
            </div>
          </div>

          {/* Right: What I Build */}
          <div className="p-2 sm:p-4">
            <h2 className="font-kode-mono text-lg sm:text-xl font-bold mb-4">What I Build</h2>
            <div className="space-y-3">
              {["Full-stack web apps", "APIs & backend systems", "Database architecture", "Performance optimization"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="bg-black text-white p-2 rounded-md flex-shrink-0">
                    <Code2 size={18} />
                  </div>
                  <span className="text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="font-sans pt-8 sm:pt-10 text-[18px] sm:text-[20px] text-center md:text-left mb-12 sm:mb-20 px-2">
          <p className="font-bold mb-4">Let's Connect</p>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 sm:gap-4">
            {[
              { src: "/svg/gmail.svg", alt: "Gmail" },
              { src: "/svg/github-mark.svg", alt: "GitHub" },
              { src: "/svg/x.svg", alt: "X" },
              { src: "/svg/linkedin.svg", alt: "LinkedIn" },
            ].map((icon) => (
              <div
                key={icon.alt}
                className="rounded-md bg-gray-200 p-2 hover:-translate-y-1 transition-transform"
              >
                <Image src={icon.src} alt={icon.alt} width={40} height={40} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactOne;
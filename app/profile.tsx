"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import ChapterCard from "@/components/ChapterCard";

export default function ProfilePage() {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Area */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        
        {/* Background Blur Decorative */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4 text-center">
          
          {/* Profile Picture */}
          <Image
            src="/profile.jpg"
            alt="Profile Image"
            width={180}
            height={180}
            priority
            className="rounded-full mx-auto shadow-xl object-cover border-4 border-primary/30"
          />

          {/* Name & Position */}
          <h1 className="text-4xl font-bold text-foreground mt-6">
            Siriprapa Horadee
          </h1>
          <p className="text-lg text-foreground/70 mt-2">
            Full Stack Developer • Designer
          </p>

          {/* Dropdown Menu */}
          <div className="mt-6 relative inline-block">
            
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="px-6 py-3 rounded-xl bg-primary text-white font-medium flex items-center gap-2 shadow-md hover:shadow-lg transition"
            >
              Menu
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openMenu ? "rotate-180" : ""
                }`}
              />
            </button>

            {openMenu && (
              <div className="absolute left-0 w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-200 z-30 overflow-hidden">
                
                <button
                  onClick={() => {
                    setOpenMenu(false);
                    router.push("/profile");
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gray-100"
                >
                  ดูโปรไฟล์
                </button>

                <button
                  onClick={() => {
                    setOpenMenu(false);
                    router.push("/certificates");
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gray-100"
                >
                  ดูเกียรติบัตร
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          
          <ChapterCard title="About Me" variant="highlight">
            <p>
              I am a passionate developer who enjoys building modern web
              applications using React, Next.js, Tailwind CSS, and UI/UX
              design. I love creating clean, minimal, and enjoyable user
              experiences.
            </p>
          </ChapterCard>

          <ChapterCard title="Skills">
            <ul className="list-disc pl-5 space-y-1">
              <li>React / Next.js</li>
              <li>Node.js / Express</li>
              <li>UI/UX Design</li>
              <li>Tailwind CSS</li>
              <li>REST API / Firebase</li>
            </ul>
          </ChapterCard>

          <ChapterCard title="Education">
            <p>Bachelor of Information Technology — Year 3</p>
          </ChapterCard>

        </div>
      </section>
    </div>
  );
}

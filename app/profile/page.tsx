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
            src="/profile.png"
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
            Information Technology • IT
          </p>


        </div>
      </section>

      {/* Profile Content */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          
          <ChapterCard title="About Me" variant="highlight">
            <p>
              I am a passionate developer who enjoys building modern web
              applications using React, Next.js, Tailwind CSS, and UI/UX
              design. I love creating clean, minimal, and enjoyable user
              experiences.
            </p>
          </ChapterCard>

        {/* Skills */}
          <ChapterCard title="Skills">
            <ul className="pl-5 space-y-1">
              <li>React / Next.js</li>
              <li>Node.js / Express</li>
              <li>UI/UX Design</li>
              <li>Tailwind CSS</li>
              <li>Chat GPT</li>
            </ul>
          </ChapterCard>

          {/* Education */}
          <ChapterCard title="Education">
          <p className="mt-4">
                <strong>2563 - 2566</strong> | ระดับมัธยมศึกษาตอนปลาย  
                สายวิทย์-คณิต โรงเรียนเกาะคาวิทยาคม  
            </p>

              <p className="mt-4">
                <strong>2566 - 2567</strong> | ระดับปริญญาตรี  
                Information Technology  
                มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา ลำปาง  
              </p>

          </ChapterCard>

        </div>
      </section>
    </div>
  );
}

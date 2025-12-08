"use client";

import Image from "next/image";
import ChapterCard from "@/components/ChapterCard";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Image
              src="/profile.png"
              alt="Profile"
              width={180}
              height={180}
              className="rounded-full mx-auto shadow-xl object-cover"
            />

            <h1 className="text-4xl font-bold text-foreground mt-6">
              Siriprapa Horadee
            </h1>
            <p className="text-lg text-foreground/70 mt-2">
              ศิริประภา หอระดี
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-1">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">

          {/* About */}
          <ChapterCard title="About Me" variant="highlight">
          <p><strong>ชื่อ :</strong> นางสาวศิริประภา หอระดี</p>
          <p><strong>ชื่อเล่น :</strong> น้ำฝน</p>
          <p><strong>อายุ :</strong> 20 ปี</p>
          <p><strong>วันเกิด :</strong> 25 สิงหาคม 2548</p>
          <p><strong>ที่อยู่ :</strong> 3/1 ม.3 ต.วังพร้าว อ.เกาะคา จ.ลำปาง 52130</p>
          </ChapterCard>

          {/* Skills */}
          <ChapterCard title="Skills">
            <ul className="list-disc pl-5 space-y-1">
              <li>React / Next.js</li>
              <li>Node.js / Express</li>
              <li>UI/UX Design</li>
              <li>Tailwind CSS</li>
              <li>Chat GPT</li>
            </ul>
          </ChapterCard>

          {/* Education */}
          <ChapterCard title="Education">
          <p className="mt-2">
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

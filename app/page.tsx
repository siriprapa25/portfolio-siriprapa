"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import ChapterCard from "@/components/ChapterCard";

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Profile Section */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl shadow-md p-8 grid md:grid-cols-3 gap-8">
          {/* Profile Image */}
          <div className="flex justify-center">
            <Image
              src="/profile.png"
              alt="Profile"
              width={180}
              height={180}
              className="rounded-full object-cover"
            />
          </div>

          {/* Profile Info */}
          <div className="md:col-span-2">
            <h1 className="text-2xl font-bold mb-2">
              นางสาวศิริประภา หอระดี
            </h1>
          <p><strong>ชื่อเล่น </strong> น้ำฝน</p>
          <p><strong>อายุ </strong> 20 ปี</p>
          <p><strong>วันเกิด </strong> 25 สิงหาคม 2548</p>
          <p><strong>ที่อยู่ </strong> 3/1 ม.3 ต.วังพร้าว อ.เกาะคา จ.ลำปาง 52130</p>

            <p className="text-gray-600 mb-4">
              สาขาเทคโนโลยีสารสนเทศ
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              สนใจการพัฒนาเว็บแอปพลิเคชันด้วย Next.js, React และ Tailwind CSS
              รวมถึงการออกแบบระบบสารสนเทศและงานด้านเทคโนโลยีสารสนเทศ
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">

              <button
                onClick={() => router.push("/certificates")}
                className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                ใบเกียรติบัตร
              </button>

              <a
                href="/cv.pdf"
                download
                className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
              >
                ดาวน์โหลด CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Preview */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="text-xl font-semibold mb-6">
          ใบเกียรติบัตร
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <ChapterCard
            title="การออกแบบประสบการณ์ผู้ใช้และส่วนติดต่อผู้ใช้"
            description="ผ่านการอบรมด้านเทคโนโลยีสารสนเทศ"
            image="/certificates/cert1.png"
            onClick={() => router.push("/certificates")}
          />
        </div>
      </section>
    </div>
  );
}

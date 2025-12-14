"use client";

import Image from "next/image";
import { useState } from "react";
import ChapterCard from "@/components/ChapterCard";

const certificates = [
  {
    id: 1,
    title: "Web Development Certificate",
    image: "/certificates/cert1.png",
  },
  {
    id: 2,
    title: "Certificate",
    image: "/certificates/cert2.png",
  },
  {
    id: 3,
    title: "React Training Certificate",
    image: "/certificates/cert3.jpg",
  },
];

export default function CertificatesPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-bold text-center mb-10">
          ใบเกียรติบัตร
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <ChapterCard key={cert.id} title={cert.title}>
              <Image
                src={cert.image}
                alt={cert.title}
                width={400}
                height={300}
                className="rounded-lg cursor-pointer hover:scale-105 transition"
                onClick={() => setActiveImage(cert.image)}
              />
            </ChapterCard>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setActiveImage(null)}
        >
          <Image
            src={activeImage}
            alt="Certificate"
            width={900}
            height={700}
            className="rounded-xl shadow-2xl max-h-[90vh] object-contain"
          />
        </div>
      )}
    </div>
  );
}

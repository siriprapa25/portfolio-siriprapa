import Image from "next/image";
import { ReactNode } from "react";

interface ChapterCardProps {
  title: string;
  description?: string;
  image?: string;
  onClick?: () => void;
  children?: ReactNode;
  variant?: "default" | "highlight";
}

export default function ChapterCard({
  title,
  description,
  image,
  onClick,
  children,
  variant = "default",
}: ChapterCardProps) {
  
  return (
    <div
      onClick={onClick}
      className={`group rounded-2xl cursor-pointer transition overflow-hidden
        ${
          variant === "highlight"
            ? "bg-white shadow-lg border border-blue-200 p-6"
            : "bg-white shadow-md hover:shadow-xl"
        }`}
    >
      {/* Image (แสดงเฉพาะเมื่อมี image) */}
      {image && (
        <div className="overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={400}
            height={250}
            className="group-hover:scale-105 transition duration-300 object-cover"
          />
        </div>
      )}

      <div className="p-5 text-center">
        <h3 className="font-semibold text-lg text-gray-800 mb-1">
          {title}
        </h3>

        {description && (
          <p className="text-gray-600 text-sm mb-2">
            {description}
          </p>
        )}

        {/* รองรับ children */}
        {children}
      </div>
    </div>
  );
}

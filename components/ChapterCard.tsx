import React from "react";

interface Props {
  title: string;
  description: string;
}

export default function ChapterCard({ title, description }: Props) {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-lg transition">
      <h2 className="text-lg font-bold text-blue-600">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
}

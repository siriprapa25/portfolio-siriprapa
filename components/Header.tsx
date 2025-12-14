"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const menuClass = (path: string) =>
    `px-4 py-2 rounded-lg transition
     ${
       pathname === path
         ? "bg-blue-600 text-white"
         : "text-gray-700 hover:bg-blue-100"
     }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          My Portfolio
        </h1>

        {/* Menu */}
        <nav className="flex gap-3">
          <Link href="/profile" className={menuClass("/profile")}>
            โปรไฟล์
          </Link>

          <Link href="/certificates" className={menuClass("/certificates")}>
            ใบเกียรติบัตร
          </Link>
        </nav>
      </div>
    </header>
  );
}

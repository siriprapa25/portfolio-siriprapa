"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <nav className="space-x-6">
          <Link href="/" className="hover:text-yellow-300">หน้าแรก</Link>
          <Link href="/profile" className="hover:text-yellow-300">โปรไฟล์</Link>
          <Link href="/certificate/CertificateDetail" className="hover:text-yellow-300">
            เกียรติบัตร
          </Link>
        </nav>
      </div>
    </header>
  );
}

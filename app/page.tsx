import Image from "next/image";
import Header from "../components/Header";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <main className="max-w-5xl mx-auto p-6">

        {/* 🔵 SECTION: PROFILE CARD */}
        <section className="bg-white shadow-lg rounded-2xl p-8 mt-10 flex flex-col items-center text-center border border-blue-100 hover:shadow-2xl transition">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full border-4 border-blue-500 shadow-md"
          />

          <h1 className="mt-5 text-3xl font-extrabold text-blue-700">
            ชื่อของคุณ
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Full-stack Developer | นักศึกษาสาขาเทคโนโลยีสารสนเทศ
          </p>

          <div className="flex gap-6 mt-6">
            <Link
              href="/profile"
              className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
            >
              ดูโปรไฟล์เต็ม
            </Link>

            <Link
              href="/certificate/CertificateDetail"
              className="px-6 py-2 bg-gray-100 border border-gray-300 rounded-xl shadow-sm hover:bg-gray-200 transition"
            >
              ดูเกียรติบัตร
            </Link>
          </div>

        </section>

        {/* 🔵 SECTION: INFORMATION CARDS */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* การศึกษา */}
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition border border-blue-100">
            <h2 className="text-xl font-bold text-blue-700">🎓 ประวัติการศึกษา</h2>
            <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-1">
          <li>มัธยมศึกษาตอนปลาย 2563-2566 | สายวิทย์-คณิต โรงเรียนเกาคาวิทยาคม</li>
          <li>ปริญญาตรี2566-2568 | Information Technology</li>
            </ul>
          </div>

          {/* ทักษะภาษาโปรแกรม */}
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition border border-blue-100">
            <h2 className="text-xl font-bold text-blue-700">💻 ทักษะด้านภาษาโปรแกรม</h2>
            <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-1">
          <li>JavaScript / TypeScript</li>
          <li>Python</li>
          <li>HTML / CSS</li>
          <li>My SQL</li>
          <li>Node.js</li>
            </ul>
          </div>

          {/* โปรแกรมที่ใช้ */}
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition border border-blue-100">
            <h2 className="text-xl font-bold text-blue-700">🛠️ ทักษะด้านโปรแกรมคอมพิวเตอร์</h2>
            <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-1">
              <li>VS Code</li>
              <li>Figma</li>
              <li>Git / GitHub</li>
            </ul>
          </div>

          {/* งานอดิเรก */}
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition border border-blue-100">
            <h2 className="text-xl font-bold text-blue-700">🎧 งานอดิเรก</h2>
            <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-1">
              <li>วาดรูป</li>
              <li>ถ่ายภาพ</li>
              <li>ดูหนัง/ซีรีย์</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

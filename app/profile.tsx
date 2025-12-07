import Image from "next/image";
import Header from "../components/Header";

export default function Profile() {
  return (
    <div>
      <Header />

      <main className="max-w-4xl mx-auto p-6 space-y-6">

        {/* 🔵 รูปโปรไฟล์ */}
        <div className="flex flex-col items-center">
          <Image
            src="/profile.png"   // ← ใส่รูปที่อยู่ใน public/
            alt="Profile Picture"
            width={180}
            height={180}
            className="rounded-full shadow-lg border-4 border-blue-500"
          />
          <h1 className="text-2xl font-bold text-blue-700 mt-4">
            ข้อมูลส่วนตัว
          </h1>
        </div>

        {/* 🔵 ข้อมูลส่วนตัว */}
        <section className="space-y-2">
          <p><strong>ชื่อ :</strong> นางสาวศิริประภา หอระดี</p>
          <p><strong>ชื่อเล่น :</strong> น้ำฝน</p>
          <p><strong>อายุ :</strong> 20 ปี</p>
          <p><strong>วันเกิด :</strong> 25 สิงหาคม 2548</p>
          <p><strong>ที่อยู่ :</strong> 3/1 ม.3 ต.วังพร้าว อ.เกาะคา จ.ลำปาง 52130</p>
        </section>

        {/* 🔵 การศึกษา */}
        <h2 className="text-xl font-bold text-blue-700">ประวัติการศึกษา</h2>
        <ul className="list-disc pl-6">
          <li>มัธยมศึกษาตอนปลาย 2563-2566 | สายวิทย์-คณิต โรงเรียนเกาคาวิทยาคม</li>
          <li>ปริญญาตรี2566-2568 | Information Technology</li>
        </ul>

        {/* 🔵 ทักษะภาษาโปรแกรม */}
        <h2 className="text-xl font-bold text-blue-700">ทักษะด้านภาษาโปรแกรม</h2>
        <ul className="list-disc pl-6">
          <li>JavaScript / TypeScript</li>
          <li>Python</li>
          <li>HTML / CSS</li>
          <li>My SQL</li>
          <li>Node.js</li>
        </ul>

        {/* 🔵 ทักษะโปรแกรม */}
        <h2 className="text-xl font-bold text-blue-700">ทักษะด้านโปรแกรมคอมพิวเตอร์</h2>
        <ul className="list-disc pl-6">
          <li>VS Code</li>
          <li>Figma</li>
          <li>Git / GitHub</li>
        </ul>

        {/* 🔵 งานอดิเรก */}
        <h2 className="text-xl font-bold text-blue-700">งานอดิเรก</h2>
        <ul className="list-disc pl-6">
          <li>วาดรูป</li>
          <li>ถ่ายภาพ</li>
          <li>ดูหนัง/ซีรีย์</li>
        </ul>

      </main>
    </div>
  );
}

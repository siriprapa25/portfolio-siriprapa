import Header from "../components/Header";
import ChapterCard from "../components/ChapterCard";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="max-w-5xl mx-auto p-6 space-y-6">

        <h1 className="text-2xl font-bold">ยินดีต้อนรับสู่โปรไฟล์ของฉัน</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/profile">
            <ChapterCard 
              title="ประวัติส่วนตัว"
              description="ข้อมูลส่วนตัว การศึกษา ทักษะ และงานอดิเรก"
            />
          </Link>

          <Link href="/certificate/CertificateDetail">
            <ChapterCard 
              title="เกียรติบัตร"
              description="รวมผลงานและใบรับรองที่ได้รับ"
            />
          </Link>
        </div>

      </main>
    </div>
  );
}

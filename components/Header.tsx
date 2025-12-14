import Link from "next/link";


export default function Header() {
return (
<header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm">
<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
<h1 className="text-2xl font-bold text-blue-600">
My Portfolio
</h1>


<nav className="flex gap-6 text-gray-700 font-medium">
<Link href="/profile" className="hover:text-blue-600 transition">
โปรไฟล์
</Link>
<Link href="/certificates" className="hover:text-blue-600 transition">
ใบเกียรติบัตร
</Link>
</nav>
</div>
</header>
);
}
import Image from "next/image";

export default function CertificateDetail() {
  const certificates = [
    { id: 1, name: "Certificate 1", img: "/cert1.png" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-8">
        เกียรติบัตรของฉัน
      </h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-white p-4 rounded-xl shadow-md border border-blue-100 hover:shadow-xl transition text-center"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              {cert.name}
            </h2>
            <Image
              src={cert.img}
              alt={cert.name}
              width={400}
              height={300}
              className="rounded-lg mx-auto shadow"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

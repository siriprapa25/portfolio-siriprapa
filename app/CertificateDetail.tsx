import Header from "../components/Header";

export default function CertificateDetail() {
  const certificates = [
    { id: 1, name: "Certificate 1", img: "/cert1.png" },
  ];

  return (
    <div>
      <Header />

      <main className="max-w-5xl mx-auto p-6 space-y-6">
        <h1 className="text-2xl font-bold text-blue-700">เกียรติบัตร</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} className="border rounded-lg p-2 shadow-sm">
              <img 
                src={cert.img} 
                alt={cert.name} 
                className="w-full rounded-lg"
              />
              <p className="text-center mt-2 font-semibold">{cert.name}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}


const reviews = [
  {
    nama: "Andi Pratama",
    komentar:
      "Teknisi datang tepat waktu dan sangat profesional. Kompor freestanding Modena saya kembali normal setelah diservis.",
  },
  {
    nama: "Rina Wulandari",
    komentar:
      "Pelayanan cepat dan rapi. Teknisi menjelaskan kerusakan dengan detail dan mengganti suku cadang asli.",
  },
  {
    nama: "Budi Santoso",
    komentar:
      "Service kompor tanam Modena di rumah saya sangat memuaskan. Pekerjaan bersih dan bergaransi.",
  },
  {
    nama: "Dewi Lestari",
    komentar:
      "Tidak perlu repot ke service center, teknisi langsung datang ke rumah. Pelayanan ramah dan hasilnya bagus.",
  },
];

const Testi = () => {
  return (
    <div
      id="testimoni"
      className="w-full px-6 py-16 bg-base-200 text-base-content text-center"
    >
      <h1 className="text-3xl font-extrabold mb-10">
        Apa Kata Pelanggan Kami?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-md hover:shadow-xl transition"
          >
            <div className="card-body text-left">
              <h2 className="card-title text-lg">{review.nama}</h2>

              <div className="flex items-center mb-2 text-yellow-500">
                {"★★★★★"}
              </div>

              <p className="text-sm text-base-content/80">
                {review.komentar}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testi;

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80)",
      }}
    >
      <div className="hero-overlay bg-black/60"></div>

      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-5xl lg:text-6xl font-extrabold">
            Modena Call <span className="text-primary">Service</span>
          </h1>

          <p className="mb-8 text-lg text-neutral-content/90">
            Layanan{" "}
            <strong>Perbaikan, Perawatan & Penggantian Suku Cadang</strong>
            <br />
            Kompor Gas Modena oleh teknisi profesional langsung ke rumah Anda.
          </p>

          <div className="flex justify-center gap-4">
            <a href="#pemesanan" className="btn btn-primary btn-lg rounded-full">
              Pesan Layanan
            </a>

            <a
              href="#harga"
              className="btn btn-outline btn-lg rounded-full text-white"
            >
              Lihat Layanan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;

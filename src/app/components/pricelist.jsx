import Image from "next/image";

const Pricelist = () => {
  return (
    <main
      id="harga"
      className="w-full px-6 md:px-24 py-16 bg-black text-white"
    >
      <h1 className="text-center pb-12 text-2xl md:text-3xl font-extrabold">
        Layanan Modena Call Service
      </h1>

      {/* Section Wrapper */}
      <div className="space-y-20">
        {/* SERVICE 1 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <Image
            width={400}
            height={400}
            alt="Service Kompor Freestanding Modena"
            className="w-full md:w-[360px] h-auto rounded-2xl shadow-lg"
            src="https://homeservicemodenajakarta.com/wp-content/uploads/2025/11/kompor-freestanding-modena.png"
          />

          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Service Kompor Freestanding Modena
            </h2>

            <p className="text-sm md:text-base leading-relaxed text-white">
              Layanan profesional untuk{" "}
              <strong>kompor freestanding Modena</strong>
              meliputi perbaikan kerusakan, penggantian suku cadang asli,
              bongkar pasang, serta perawatan rutin agar kompor tetap aman dan
              berfungsi optimal.
              <br />
              <br />
              Ditangani langsung oleh teknisi berpengalaman dengan standar
              layanan home service resmi.
            </p>
          </div>
        </div>

        {/* SERVICE 2 */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Service Kompor Tanam Modena
            </h2>

            <p className="text-sm md:text-base leading-relaxed text-white">
              Layanan khusus untuk{" "}
              <strong>kompor tanam (built-in) Modena</strong>
              yang mencakup perbaikan, penggantian suku cadang, bongkar pasang,
              serta perawatan menyeluruh untuk menjaga performa dan keamanan
              penggunaan jangka panjang.
              <br />
              <br />
              Cocok untuk rumah modern dengan instalasi dapur built-in.
            </p>
          </div>

          <Image
            width={400}
            height={400}
            alt="Service Kompor Tanam Modena"
            className="w-full md:w-[360px] h-auto rounded-2xl shadow-lg"
            src="https://homeservicemodenajakarta.com/wp-content/uploads/2025/11/kompor-tanam-modena-1.png"
          />
        </div>
      </div>
    </main>
  );
};

export default Pricelist;

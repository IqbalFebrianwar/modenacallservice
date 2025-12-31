import Image from "next/image";

const galleryImages = [
  {
    src: "https://res.cloudinary.com/dys9rpgr3/image/upload/v1767189971/WhatsApp_Image_2025-12-31_at_21.03.37_1_ai8qu5.jpg",
    alt: "Kompor Freestanding Modena",
  },
  {
    src: "https://res.cloudinary.com/dys9rpgr3/image/upload/v1767189971/WhatsApp_Image_2025-12-31_at_21.03.37_xebwfn.jpg",
    alt: "Kompor Tanam Modena",
  },
  {
    src: "https://res.cloudinary.com/dys9rpgr3/image/upload/v1767189968/WhatsApp_Image_2025-12-31_at_21.03.37_2_tvxlkm.jpg",
    alt: "Teknisi Home Service",
  },
  {
    src: "https://res.cloudinary.com/dys9rpgr3/image/upload/v1767189970/WhatsApp_Image_2025-12-31_at_21.03.38_stwc45.jpg",
    alt: "Dapur Modern",
  },
  {
    src: "https://res.cloudinary.com/dys9rpgr3/image/upload/v1767189968/WhatsApp_Image_2025-12-31_at_21.03.39_urmyyb.jpg",
    alt: "Service Peralatan Dapur",
  },
  {
    src: "https://res.cloudinary.com/dys9rpgr3/image/upload/v1767189968/WhatsApp_Image_2025-12-31_at_21.03.37_3_irswbz.jpg",
    alt: "Kitchen Appliance",
  },
  {
    src: "https://res.cloudinary.com/dys9rpgr3/image/upload/v1767189967/WhatsApp_Image_2025-12-31_at_21.03.39_1_bidcu8.jpg",
    alt: "Kitchen Appliance",
  },
  {
    src: "https://res.cloudinary.com/dys9rpgr3/image/upload/v1767190330/WhatsApp_Image_2025-12-31_at_21.11.48_vsby2i.jpg",
    alt: "Kitchen Appliance",
  },
];

const Gallery = () => {
  return (
    <section id="galeri" className="w-full px-6 md:px-24 py-16 bg-base-200">
      <h2 className="text-center text-3xl font-extrabold mb-12">
        Galeri Layanan Kami
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
          >
            {/* WRAPPER FIXED RATIO */}
            <div className="relative w-full aspect-[5/3]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <p className="text-white text-sm font-semibold text-center px-4">
                {img.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

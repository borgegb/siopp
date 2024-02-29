import Image from "next/image";

export default function PartnersLogos() {
  return (
    <div className="w-full bg-white py-4 flex justify-center items-center space-x-4 overflow-hidden">
      {/* Adjust the width classes for different screen sizes */}
      <div className="px-2 w-1/2 sm:w-1/3 md:w-1/6 lg:w-1/8">
        <Image
          src="/logo-altibox-gray.png"
          alt="Altibox"
          width={200}
          height={80}
          className="grayscale"
        />
      </div>
      <div className="px-2 w-1/2 sm:w-1/3 md:w-1/6 lg:w-1/8">
        <Image
          src="/logo-telenor-gray.png"
          alt="Telenor"
          width={200}
          height={80}
          className="grayscale"
        />
      </div>
      <div className="px-2 w-1/2 sm:w-1/3 md:w-1/6 lg:w-1/8">
        <Image
          src="/logo-telia-gray.png"
          alt="Telia"
          width={200}
          height={80}
          className="grayscale"
        />
      </div>
      <div className="px-2 w-1/2 sm:w-1/3 md:w-1/6 lg:w-1/8">
        <Image
          src="/logo-next.png"
          alt="NextGenTel"
          width={200}
          height={80}
          className="grayscale"
        />
      </div>
    </div>
  );
}

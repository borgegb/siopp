import Image from "next/image";

export default function PartnersLogos() {
  return (
    <div>
      <div className="w-full bg-white py-4 flex justify-center items-center space-x-4 overflow-hidden">
        {/* Adjust the width and height classes for different screen sizes */}
        <div className="w-1/4 max-w-xs px-2">
          <Image
            src="/logo-altibox-gray.png"
            alt="Altibox"
            layout="responsive"
            width={100}
            height={40}
            className="grayscale"
          />
        </div>
        <div className="w-1/4 max-w-xs px-2">
          <Image
            src="/logo-telenor-gray.png"
            alt="Telenor"
            layout="responsive"
            width={100}
            height={40}
            className="grayscale"
          />
        </div>
        <div className="w-1/4 max-w-xs px-2">
          <Image
            src="/logo-telia-gray.png"
            alt="Telia"
            layout="responsive"
            width={100}
            height={40}
            className="grayscale"
          />
        </div>
        <div className="w-1/4 max-w-xs px-2">
          <Image
            src="/logo-NextGentel.png"
            alt="NextGentel"
            layout="responsive"
            width={100}
            height={40}
            className="grayscale"
          />
        </div>
      </div>
    </div>
  );
}

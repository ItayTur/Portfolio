import Image, { StaticImageData } from "next/image";

const BallCanvas = ({ icon }: { icon: StaticImageData }) => {
  return (
    <div className="w-full h-full flex items-center justify-center group">
      <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-[#915EFF]/20 to-[#915EFF]/5 backdrop-blur-sm border border-[#915EFF]/30 p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-[#915EFF]/50 hover:border-[#915EFF]/60">
        <div className="relative w-full h-full">
          <Image
            src={icon}
            alt="Technology icon"
            fill
            className="object-contain p-4 transition-transform duration-300"
            sizes="(max-width: 768px) 256px, 320px"
          />
        </div>
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#915EFF]/0 to-[#915EFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </div>
  );
};

export default BallCanvas;

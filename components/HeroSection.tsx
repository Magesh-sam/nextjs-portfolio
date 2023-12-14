import React from "react";
import Image from "next/image";
import { roboto_mono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

function HeroSection() {
  return (
    <section className="mb-5 flex flex-col px-3 ">
      <span
        className={cn(
          roboto_mono.className,
          "htmltag font-rbmono text-slate-400",
        )}
      >{`<hero section>`}</span>
      <h1 className="text-xl md:text-2xl">
        Hello World{" "}
        <span className="inline-block origin-wave animate-wave">👋</span>, I am{" "}
      </h1>
      <h2 className="w-max bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text py-2   text-3xl font-bold text-transparent md:pb-3 md:text-4xl ">
        Mageshkannan
      </h2>
      <Image
        src="/profile.jpg"
        alt="profile picture"
        width={300}
        height={250}
        className="mb-3 w-full max-w-lg  rounded-lg grayscale filter transition duration-300 ease-in hover:filter-none "
        priority
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAEAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAbEAACAQUAAAAAAAAAAAAAAAAAAwUBAhESIf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQACETH/2gAMAwEAAhEDEQA/AIyc/Iok3rW/Wy3GKa05wAE1rO9iIT//2Q=="
      />
      <h3 className="text-wrap-balanced text-xl md:text-3xl">
        Creative{" "}
        <span className="w-max bg-gradient-to-r  from-purple-600 to-pink-500 bg-clip-text  font-semibold text-transparent">
          Frond-end
        </span>{" "}
        Web Developer !
      </h3>
      <span
        className={`${roboto_mono.className}  htmltag font-rbmono text-slate-400`}
      >{`</hero section>`}</span>
    </section>
  );
}

export default HeroSection;

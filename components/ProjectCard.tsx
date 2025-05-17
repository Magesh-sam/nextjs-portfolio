import { ProjectCardProps } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";
import React, { FC } from "react";
import Chip from "./Chip";

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  demo,
  source,
  skills,
}) => {
  return (
    <div className="flex min-w-fit max-w-lg  flex-col items-start gap-x-3 gap-y-5 rounded-md border border-transparent bg-[#2E2E2E] p-2 transition duration-300 ease-in hover:border-pink-500 md:flex-row ">
      <Image
        src={imageSrc}
        alt={title}
        width={320}
        height={280}
        className=" block aspect-video w-full rounded-lg md:w-80"
        priority
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRjIDAABXRUJQVlA4WAoAAAAgAAAARAEAtgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggRAEAADAWAJ0BKkUBtwA/OZzEXq8qpqUgKJngJwlpbt5QA29X/3PkAT7p7U1gzSjINHHc9Ic+wegQbT7N2wuU+fnO0mduIaKdz7NPCkcx4/sFPQHkduKbBgwytgO+ieN3PSIfzUXmZFU9Ace/2+R7gO06pAUJtNo1Etz74bn+eWWNX1PkRyCzbRaXI7LGBQKHyX21nFGJ2jDemIz5uZrWWfcPaMN6YjJlaujRmlJYeeWdSCfFZx+0cDiaymKj4AD+6d2Pmr0xSop0yypaqHzj061zCnT7pB+vZOr8YVXKMBeNzKBfUw7ANG89iaqaxHiDrM09NDHoP+di/YAXzgKI8JGZSuQCjMlzooL2ZTx0fV8tWD7ZCiFX6kP0KtJyemdezQj1JDU8dCfUKEf0hDpIrnCFF7hDmuN4FPpPFYjhknhFzAEAQAAAAA=="
      />
      <div className="flex flex-col gap-y-5 pb-3">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className=" max-w-md text-left font-normal">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Chip key={skill} name={skill} />
          ))}
        </div>
        <div className=" flex items-center gap-x-3">
          {demo.length > 0 && (
            <Link
              href={demo}
              target="_blank"
              aria-label="View Demo"
              title="View Demo"
              className="group transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#fafafa"
                  className="group-hover:stroke-pink-500"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m20 4-8 8m8-8v4.5M20 4h-4.5m3.5 8.5v4.3c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C17.48 20 16.92 20 15.8 20H7.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C4 18.48 4 17.92 4 16.8V8.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C5.52 5 6.08 5 7.2 5h4.3"
                />
              </svg>
            </Link>
          )}
          <Link
            href={source}
            target="_blank"
            aria-label="View Source"
            title="View Source"
            className="group transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 20 20"
            >
              <path
                className="group-hover:fill-pink-500"
                fill="#fafafa"
                fillRule="evenodd"
                d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

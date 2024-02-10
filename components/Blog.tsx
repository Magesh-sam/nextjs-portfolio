import { BlogProps } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";
import React, { FC } from "react";

const Blog: FC<BlogProps & { priority: boolean }> = ({
  title,
  coverImage,
  cuid,
  views,
  slug,
  priority
}) => {
  return (
    <>
      <article key={cuid} className="">
        <Link
          className="flex flex-col"
          target="_blank"
          href={`https://mageshkannan.hashnode.dev/${slug}`}
        >
          <h2 className="mb-5 flex items-center text-3xl font-bold text-[#f1f1f1]">
            {`${title} - ${views} views`}
          </h2>
          <Image
            src={coverImage || "/placeholder.png"}
            alt={title}
            width={300}
            height={200}
            priority={priority}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,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"
            className=" h-auto w-full rounded-lg"
          />
        </Link>
      </article>
      <hr className="opacity-20" />
    </>
  );
};

export default Blog;

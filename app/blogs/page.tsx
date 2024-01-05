import React, { Suspense } from "react";
import { blogsData } from "@/lib/blogs";

import Blog from "@/components/Blog";
import { Skeleton } from "@/components/Skeleton";
function page() {
  return (
    <main className=" mx-auto  flex max-w-5xl flex-col  gap-y-6  px-3  pt-10">
      <div className="flex h-20 w-full  items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 ">
        <h1
          className="  text-3xl font-semibold
 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-4xl lg:text-5xl "
        >
          Blogs
        </h1>
      </div>
      <Suspense
        fallback={
          <div className="flex flex-col gap-10">
            <Skeleton className="h-300 h-auto w-full" />
            <Skeleton className="h-300 h-auto w-full" />
            <Skeleton className="h-300 h-auto w-full" />
          </div>
        }
      >
        <section className="  mb-14 mt-5 flex flex-col gap-y-16 ">
          {blogsData.map((blog, index) => (
            <Suspense
              key={blog.cuid}
              fallback={<Skeleton className="h-300 h-auto w-full" />}
            >
              <Blog {...blog} priority={index > 1 ? true : false} />
            </Suspense>
          ))}
        </section>
      </Suspense>
    </main>
  );
}

export default page;

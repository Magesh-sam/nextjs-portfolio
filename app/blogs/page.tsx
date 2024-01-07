export const revalidate = 3600; // revalidate at most every hour
import Blog from "@/components/Blog";
import { Skeleton } from "@/components/Skeleton";
import { BlogProps } from "@/lib/types";
import React, { Fragment, Suspense } from "react";

const fetchBlogPosts = async () => {
  const query = `
    {
      user(username: "mageshkannan") {
          publication {
              posts(page: 0) {
                  title
                  views
                  coverImage
                  cuid
                  slug
              }
          }
          }
      }
        `;
  const response = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();

  const PostData = await data.data.user.publication.posts;
  return PostData || {};
};

async function page() {
  const PostData = await fetchBlogPosts();
  return (
    <main className=" mx-auto   flex max-w-5xl  flex-col  gap-y-6  px-3 pt-10">
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
            <Skeleton className="h-300 h-auto w-full " />
            <Skeleton className="h-300 h-auto w-full " />
            <Skeleton className="h-300 h-auto w-full " />
          </div>
        }
      >
        <section className="mb-14 flex flex-col gap-y-20">
          {PostData?.map((post: BlogProps, index: number) => (
            <Blog
              key={post.cuid}
              {...post}
              priority={index > 1 ? true : false}
            />
          ))}
        </section>
      </Suspense>
    </main>
  );
}

export default page;

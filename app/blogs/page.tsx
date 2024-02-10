import Blog from "@/components/Blog";
import { Skeleton } from "@/components/Skeleton";
import { BlogProps } from "@/lib/types";
import { Metadata } from "next";
import Image from "next/image";
import React, {  Suspense } from "react";

export const metadata: Metadata = {
  title: "Blogs | Mageshkannan Portfolio",
  description:
    "I'm Mageshkannan and I'm a front-end developer from India. other than coding I love swimming, exploring nature, food, culture and doing wildlife photography 🐳🐯 ",
  openGraph: {
    title: "Mageshkannan Portfolio",
    description:
      "I'm Mageshkannan and I'm a front-end developer from India. other than coding I love swimming, exploring nature, food, culture and doing wildlife photography 🐳🐯 ",
    url: "https://mageshkannan.vercel.app/",
    siteName: "Mageshkannan Portfolio",
    images: {
      url: "https://mageshkannan.vercel.app/ogimg.jpg",
      width: 1200,
      height: 700,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Mageshkannan Portfolio",
    description:
      "I'm Mageshkannan and I'm a front-end developer from India. other than coding I love swimming, exploring nature, food, culture and doing wildlife photography 🐳🐯 ",
    creator: "@mageshkannan",
    images: ["https://mageshkannan.vercel.app/ogimg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};  

// const fetchBlogPosts = async () => {
//   const query = `
//     {
//       user(username: "mageshkannan") {
//           publication {
//               posts(page: 0) {
//                   title
//                   views
//                   coverImage
//                   cuid
//                   slug
//               }
//           }
//           }
//       }
//         `;
//   const response = await fetch("https://api.hashnode.com/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ query }),
//   });

//   const data = await response.json();
//   console.log("entire data",data)
//   const PostData = await data.data.user.publication.posts;
//   console.log("post data",PostData)
//   return PostData || {};
// };

async function Page() {
  // const PostData = await fetchBlogPosts();
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
      <section className="container flex flex-col mt-3 mx-auto">
        <Image src="/updating.svg" width={500} height={500} alt="updating page" />
        <h2 className="text-xl mt-3">Migrating the blogs to the new API</h2>
        <h3 className="text-xl mt-3">Soon It will be updated</h3>
      </section>
      {/* <Suspense
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
      </Suspense> */}
    </main>
  );
}

export default Page;

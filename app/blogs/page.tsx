import Blog from "@/components/Blog";
import { Skeleton } from "@/components/Skeleton";
import { BlogPostArray } from "@/lib/types";
import { Metadata } from "next";
import React, { Suspense } from "react";
const dynamic = 'force-dynamic'
const revalidate = 0

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
const fetchBlogPosts = async () => {
  const query = `
  {
    publication(host: "mageshkannan.hashnode.dev") {
      posts(first: 20) {
        edges {
          node {
            title
            readTimeInMinutes
                    views
                    brief
                    cuid
                    slug
            tags{
              name
            }
            coverImage{
              url
            }
          }
        }
      }
    }
  }
        `;
  const response = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    next: {
      revalidate: 0,
    }
  });

  const data = await response.json();
  const PostData = await data.data.publication.posts.edges;
  return PostData || {};
};



async function Page() {
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
          {PostData?.map((post:BlogPostArray, index: number) => (
            <Blog
              key={post.node.cuid}
              {...post.node}
              priority={index > 1 ? true : false}
            />
          ))}
        </section>
      </Suspense>
    </main>
  );
}

export default Page;

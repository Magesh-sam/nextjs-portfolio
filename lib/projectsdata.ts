import { SingleProjectProps } from "@/components/SingleProject";

export const ProjectData: SingleProjectProps[] = [
  {
    src: "/project-images/nextstore.jpg",
    title: "Next Store",
    link: "https://nextstore-stripe.vercel.app/",
    description:
      "An E-commerce store built with Next.js With Stripe secure payment, category and search filtering and  user authentication with firebase.",
    source: "https://github.com/Magesh-sam/next-store",
    skills: [
      "Next.js",
      "Typescript",
      "Tailwind",
      "Stripe",
      "Firebase",
      "Auth0",
    ],
  },
  {
    src: "/project-images/dummyuser.jpg",
    title: "Dummy user API",
    link: "https://dummyuser.vercel.app/",
    description:
      "Our API can quickly produce a variety of profiles for your application, giving it a boost with actual user data and providing a lively and interesting user experience while saving you time.",
    source: "https://github.com/Magesh-sam/dummy-user-api",
    skills: ["Next.js", "Typescript", "Tailwind"],
  },

  {
    src: "/project-images/rick-marty.jpg",
    title: "Rick Marty Pedia",
    link: "https://rick-marty-pedia.vercel.app/",
    description:
      "Rick and Marty Pedia built with rick and morty api and react query with pagination and caching",
    source: "https://rick-marty-pedia.vercel.app/",
    skills: ["React", "React-query", "Typescript", "Tailwind"],
  },
];

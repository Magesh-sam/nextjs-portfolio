import { ProjectCardProps } from "./types";

export const ProjectData: ProjectCardProps[] = [
  {
    imageSrc: "/project-images/nextstore.jpg",
    title: "Next Store",
    description:
      "An E-commerce store built with Next.js With Stripe secure payment, category and search filtering and  user authentication with firebase.",
    demo: "https://nextstore-stripe.vercel.app/",
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
    imageSrc: "/project-images/dummyuser.jpg",
    title: "Dummy user API",
    description:
      "Our API can quickly produce a variety of profiles for your application, giving it a boost with actual user data and providing a lively and interesting user experience while saving you time.",
    demo: "https://dummyuser.vercel.app/",
    source: "https://github.com/Magesh-sam/dummy-user-api",
    skills: ["Next.js", "Typescript", "Tailwind"],
  },

  {
    imageSrc: "/project-images/rick-marty.jpg",
    title: "Rick Marty Pedia",
    description:
      "Rick and Marty Pedia built with rick and morty api and react query with pagination and caching",
    demo: "https://rick-marty-pedia.vercel.app/",
    source: "https://rick-marty-pedia.vercel.app/",
    skills: ["React", "React-query", "Typescript", "Tailwind"],
  },
];

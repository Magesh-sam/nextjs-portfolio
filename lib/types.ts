import { blogsData } from "./blogs";
export type ProjectCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  demo: string;
  source: string;
  skills: string[];
};

export type BlogProps = {
  title: string;
  views: number;
  coverImage: string;
  cuid: string;
  slug: string;
};

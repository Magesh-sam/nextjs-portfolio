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
  cuid: string;
  url: string;
  title: string;
  publishedAt: string;
  views: number;
  tags: {
    name: string;
  }[];
  slug: string;
  coverImage: {
    url: string;
  };
};

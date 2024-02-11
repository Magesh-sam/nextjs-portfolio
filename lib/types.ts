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
  readTimeInMinutes: number;
  views: number;
  coverImage: {
    url: string;
  };
  cuid: string;
  slug: string;
  brief: string;
  tags: {
    name: string;
  }[];
};

export interface BlogPostArray {
  node: BlogProps;
}

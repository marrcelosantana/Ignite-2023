export interface Post {
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  content: {
    type: "paragraph" | "link";
    content: string;
  };
  publishedAt: Date;
}

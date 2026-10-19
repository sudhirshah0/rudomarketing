import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface BlogPost {
  slug: string;
  title: string;
  titleAr: string;
  excerpt: string;
  excerptAr: string;
  date: string;
  category: string;
  categoryAr: string;
  readingTime: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  image: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((file) => file.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "",
        titleAr: data.titleAr || data.title || "",
        excerpt: data.excerpt || "",
        excerptAr: data.excerptAr || data.excerpt || "",
        date: data.date || "",
        category: data.category || "Marketing",
        categoryAr: data.categoryAr || data.category || "تسويق",
        readingTime: data.readingTime || "5 min read",
        author: data.author || {
          name: "Sami Al-Fassi",
          role: "Head of Growth Strategy",
          image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200",
        },
        image: data.image || "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800",
        content,
      } as BlogPost;
    })
    .sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1));

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "",
      titleAr: data.titleAr || data.title || "",
      excerpt: data.excerpt || "",
      excerptAr: data.excerptAr || data.excerpt || "",
      date: data.date || "",
      category: data.category || "Marketing",
      categoryAr: data.categoryAr || data.category || "تسويق",
      readingTime: data.readingTime || "5 min read",
      author: data.author || {
        name: "Sami Al-Fassi",
        role: "Head of Growth Strategy",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200",
      },
      image: data.image || "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800",
      content,
    };
  } catch (error) {
    return null;
  }
}

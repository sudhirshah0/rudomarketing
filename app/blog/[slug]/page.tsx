import React from "react";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import BlogPostClient from "./BlogPostClient";
import type { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | Rudo Marketing Dubai`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Rudo Marketing`,
      description: post.excerpt,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}

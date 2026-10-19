import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import BlogIndexClient from "./BlogIndexClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intelligence & Market Insights | Rudo Marketing Dubai",
  description:
    "Actionable market intelligence, digital acquisition strategies, and GCC consumer insights from Rudo Marketing's Dubai research team.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogIndexClient posts={posts} />;
}

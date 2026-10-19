import { MetadataRoute } from "next";
import { servicesCatalog } from "@/lib/servicesData";
import { industriesCatalog } from "@/lib/industriesData";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rudomarketing.ae";

  const staticRoutes = [
    "",
    "/services",
    "/industries",
    "/case-studies",
    "/about",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/terms-and-conditions",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = Object.keys(servicesCatalog).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const industryRoutes = Object.keys(industriesCatalog).map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const posts = getAllPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date || new Date()),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...blogRoutes];
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getAllBlogPosts } from "@/lib/blog-posts";

const siteUrl = "https://techhubpolypack.com";

export const metadata: Metadata = {
  title: "TechHub Polypack Blogs | Insights & Packaging Solutions",
  description:
    "Insights, industry knowledge, and packaging solutions from TechHub Polypack.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "TechHub Polypack Blogs",
    description:
      "Insights, industry knowledge, and packaging solutions from TechHub Polypack.",
    url: `${siteUrl}/blog`,
    type: "website",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechHub Polypack Blogs",
    description:
      "Insights, industry knowledge, and packaging solutions from TechHub Polypack.",
    images: ["/logo.png"],
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  const blogCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "TechHub Polypack Blogs",
    url: `${siteUrl}/blog`,
    description:
      "Insights, industry knowledge, and packaging solutions from TechHub Polypack.",
    publisher: {
      "@type": "Organization",
      name: "TechHub Polypack",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.publishedAt,
      author: {
        "@type": "Organization",
        name: post.author,
      },
      url: `${siteUrl}/blog/${post.slug}`,
      image: post.featuredImage.startsWith("http")
        ? post.featuredImage
        : `${siteUrl}${post.featuredImage}`,
    })),
  };

  return (
    <main className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogCollectionSchema),
        }}
      />
      <Navbar />

      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50 -z-10" />
        <div className="absolute top-16 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-25 -z-10" />
        <div className="absolute -bottom-10 left-10 w-64 h-64 bg-cyan-100 rounded-full blur-3xl opacity-25 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">
            TechHub Knowledge Hub
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
            TechHub Polypack Blogs
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Insights, Industry Knowledge &amp; Packaging Solutions
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </Link>

                <div className="p-5 md:p-6">
                  <p className="text-sm text-blue-700 font-semibold mb-3">
                    {post.category}
                  </p>
                  <h2 className="text-xl font-bold text-gray-900 leading-snug mb-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-700 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-5">
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString("en-IN")}
                    </span>
                    <span>{post.readingTime}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    Read more
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BlogScrollProgress from "@/components/blog-scroll-progress";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "@/lib/blog-posts";

const siteUrl = "https://techhubpolypack.com";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found | TechHub Polypack",
      description: "The requested blog post could not be found.",
    };
  }

  const imageUrl = post.featuredImage.startsWith("http")
    ? post.featuredImage
    : `${siteUrl}${post.featuredImage}`;

  return {
    title: `${post.title} | TechHub Polypack Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | TechHub Polypack Blog`,
      description: post.excerpt,
      type: "article",
      url: `${siteUrl}/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [imageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | TechHub Polypack Blog`,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post.slug, 3);
  const imageUrl = post.featuredImage.startsWith("http")
    ? post.featuredImage
    : `${siteUrl}${post.featuredImage}`;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    image: imageUrl,
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "TechHub Polypack",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
  };

  return (
    <main className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <BlogScrollProgress />
      <Navbar />

      <article className="pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
          >
            <span aria-hidden>←</span> Back to Blogs
          </Link>

          <header className="mt-6">
            <p className="text-sm font-semibold text-blue-700">
              {post.category}
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-gray-600">
              <span className="font-medium">{post.author}</span>
              <span aria-hidden>•</span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-IN")}
              </time>
              <span aria-hidden>•</span>
              <span>{post.readingTime}</span>
            </div>
          </header>

          <div className="relative mt-8 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src={post.featuredImage}
              alt={post.title}
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>

          <section className="mt-10 space-y-6 text-gray-700 text-lg leading-relaxed">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        </div>
      </article>

      <section className="pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 leading-tight">
              Contact TechHub Polypack for Premium Packaging Solutions
            </h2>
            <p className="mt-3 text-gray-600">
              Let&apos;s discuss your custom requirements for durable, scalable,
              and high-performance packaging systems.
            </p>
            <a
              href="/#contact"
              className="mt-5 inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 px-5 py-3 text-white font-semibold hover:shadow-lg transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Related Posts
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {relatedPosts.map((related) => (
              <article
                key={related.slug}
                className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Link href={`/blog/${related.slug}`} className="block">
                  <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                    <Image
                      src={related.featuredImage}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </Link>
                <div className="p-5">
                  <p className="text-sm text-blue-700 font-semibold mb-2">
                    {related.category}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3">
                    <Link
                      href={`/blog/${related.slug}`}
                      className="hover:text-blue-700 transition-colors"
                    >
                      {related.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {related.excerpt}
                  </p>
                  <Link
                    href={`/blog/${related.slug}`}
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

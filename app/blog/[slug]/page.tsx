import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getBlogPosts } from "app/lib/posts";
import { metaData } from "app/config";
import Image from "next/image";
import React from "react";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${metaData.baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${metaData.baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
      <div>
        <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: post.metadata.title,
                datePublished: post.metadata.publishedAt,
                dateModified: post.metadata.publishedAt,
                description: post.metadata.summary,
                image: post.metadata.image
                    ? `${metaData.baseUrl}${post.metadata.image}`
                    : `/og?title=${encodeURIComponent(post.metadata.title)}`,
                url: `${metaData.baseUrl}/blog/${post.slug}`,
                author: {
                  "@type": "Person",
                  name: metaData.name,
                },
              }),
            }}
        />
        <section className="relative bg-amber-100">
          <div className="flex mt-12 mb-12 mx-auto flex-col-reverse md:flex-row ">
            <div className="flex md:flex-row md:w-1/3 flex-col md:ml-9 mb-9 ">
              <div className="prose prose-neutral dark:prose-invert">
                <h1 className="mb-12 text-2xl font-medium tracking-tight">
                  {post.metadata.title}
                </h1>
                <p>
                  {post.metadata.summary}
                </p>
              </div>
            </div>
            <div className="md:w-2/3 m-6">
              <Image src="/photos/joga_temp.jpg" alt={metaData.name}
                     width={672} height={672}
                     className="sm:max-w-96 mx-auto md:max-w-full"
              />
            </div>
          </div>
        </section>
        <section className="">
        <h1 className="title mb-3 font-medium text-4xl tracking-tight">
          {post.metadata.title}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-8 text-medium">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </div>
        <article className="prose prose-quoteless prose-neutral dark:prose-invert">
          <CustomMDX source={post.content}/>
        </article>
        </section>
      </div>

  );
}

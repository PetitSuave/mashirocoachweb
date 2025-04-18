import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";
import {metaData} from "../config";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Blog",
  description: "Nextfolio Blog",
};

export default function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Blog</h1>
      <div className="flex flex-wrap">
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (

            <div className="w-full md:w-1/3 mb-6">

                <div className="relative min-h-full border-solid border-teal-600 bg-teal-100 border-2 m-2">
                <Link
                    key={post.slug}
                    className="flex flex-col space-y-1 transition-opacity duration-200 hover:opacity-80"
                    href={`/blog/${post.slug}`}
                >
                <Image src="/photos/joga_temp.jpg" alt={metaData.name}
                       width={672} height={672}
                       className="sm:max-w-96 mx-auto md:max-w-full"
                />

                  <div className="p-6">
                      <p className="text-black dark:text-white tracking-tight text-sm font-mono mb-3">
                          {post.metadata.tags}
                      </p>
                      <p className="text-black dark:text-white tracking-tight text-xl font-bold mb-3">
                          {post.metadata.title}
                      </p>
                      <p className="text-black dark:text-white tracking-tight">
                          {post.metadata.summary}
                      </p>
                      {/*   <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>*/}
                  </div>
              </Link>
                </div>
            </div>
          ))}
      </div>
    </section>
  );
}

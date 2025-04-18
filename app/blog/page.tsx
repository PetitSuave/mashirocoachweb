import Link from "next/link";
import {getBlogPosts } from "app/lib/posts";
import {metaData} from "../config";
import Image from "next/image";
import {ScreenWideSection} from "../components/screen-wide-section";
import React from "react";
import {BlogFilterComponent} from "../components/blogFilter";

export const metadata = {
  title: "Blog",
  description: "Nextfolio Blog",
};

export default function BlogPosts() {
    const allBlogs = getBlogPosts(); // Předpokládáme, že tato funkce vrací všechny blogy
    const filteredBlogs = allBlogs;

    return (
      <div className="relative min-h-screen">
          <ScreenWideSection>
              <section className="relative w-screen -ml-[calc(50vw-50%)] bg-teal-800 mb-6">
                  <div className="flex flex-col w-full max-w-[960px] mx-auto justify-center">
                      <p className="text-3xl leading-tight font font-semibold mt-16 mb-16 mx-9 text-white">
                          Blog: Místo, kde se dozvíš víc.
                      </p>
                  </div>
              </section>
          </ScreenWideSection>
          <section>
              <div className="flex flex-wrap">
                  {/* Předáme všechny blogy do klientské komponenty */}
                  <BlogFilterComponent allBlogs={allBlogs} />

                  {/* Zobrazení filtrovaných blogů */}
                  {filteredBlogs
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

                              <div
                                  className="relative min-h-full border-solid border-teal-600 bg-teal-100 border-2 m-2">
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
          </div>
          );
          }

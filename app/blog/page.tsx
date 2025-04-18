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
                {/* Předáme všechny blogy do klientské komponenty */}
                <BlogFilterComponent allBlogs={allBlogs}/>
            </section>
        </div>
);
          }

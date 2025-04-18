import React from "react";
import {getBlogPosts } from "app/lib/posts";
import {ScreenWideSection} from "../components/screen-wide-section";
import {BlogList} from "./components/blog-list";

export const metadata = {
  title: "Blog",
  description: "Nextfolio Blog",
};

export default function BlogPosts() {
    const allBlogs = getBlogPosts(); // Předpokládáme, že tato funkce vrací všechny blogy

    return (
        <div className="relative min-h-screen">
            <ScreenWideSection background={<div className="absolute w-full h-full -z-10 bg-teal-800" />}>
                <h1 className="text-3xl leading-tight font font-semibold mt-16 mb-16 mx-9 text-white">
                    Blog: Místo, kde se dozvíš víc.
                </h1>
            </ScreenWideSection>
            <section className="mt-6">
                {/* Předáme všechny blogy do klientské komponenty */}
                <BlogList allBlogs={allBlogs}/>
            </section>
        </div>
);
}

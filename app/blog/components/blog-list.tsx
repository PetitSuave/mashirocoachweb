'use client'; // Tento řádek je potřeba, aby byla komponenta považována za klientskou

import React, {useState, useEffect} from "react";
import {ALL_TAG, blogFilterByTags, blogSortNewest} from "../utils";
import BlogPostPreview from "./blog-post-preview";
import {BlogPost} from "../../lib/types";
import BlogFilter from "./blog-filter";

const TAGS = [ALL_TAG, "jóga", "koučink"];

type BlogListProps = {
    allBlogs: BlogPost[];
}

export function BlogList({allBlogs}: BlogListProps) {
    const [selectedTag, setSelectedTag] = useState<string>(ALL_TAG); // Stav pro výběr tagu
    const [filteredBlogs, setFilteredBlogs] = useState(allBlogs); // Počáteční stav pro všechny blogy

    const onFilterChange = (tag: string) => setSelectedTag(tag)

    // Když se změní selectedTag, přefiltruj blogy
    useEffect(() => {
        const filtered = selectedTag === ALL_TAG
            ? allBlogs
            : allBlogs.filter(blogFilterByTags(selectedTag));
        setFilteredBlogs(filtered); // Nastavíme filtrované blogy
    }, [selectedTag]);

    return (
        <>
            <BlogFilter tags={TAGS} selectedTag={selectedTag} onChange={onFilterChange}/>
            <div className="flex flex-wrap">
                {/* Zobrazení filtrovaných blogů */}
                {filteredBlogs
                    .sort(blogSortNewest)
                    .map((post, index) => (
                        <div key={index} className="w-full md:w-1/3 mb-6">
                            <BlogPostPreview post={post}/>
                        </div>
                    ))}
            </div>
        </>
    );
}
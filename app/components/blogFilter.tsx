'use client'; // Tento řádek je potřeba, aby byla komponenta považována za klientskou

import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import {metaData} from "../config";

export function BlogFilterComponent({ allBlogs }: { allBlogs: any[] }) {
    const [selectedTag, setSelectedTag] = useState('all'); // Stav pro výběr tagu
    const [filteredBlogs, setFilteredBlogs] = useState(allBlogs); // Počáteční stav pro všechny blogy

    // Funkce pro filtrování blogů podle tagu
    const handleTagSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = e.target.value;
        setSelectedTag(selected);

        // Filtrování blogů
        const filtered = selected === 'all'
            ? allBlogs
            : allBlogs.filter((post) => post.metadata.tags.includes(selected));

        setFilteredBlogs(filtered); // Nastavíme filtrované blogy
    };

    return (
        <div>
            <select onChange={handleTagSelect} value={selectedTag}>
                <option value="all">Všechny</option>
                <option value="jóga">Jóga</option>
                <option value="koučink">Koučink</option>
            </select>

            <div className="flex flex-wrap">

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
        </div>
    );
}
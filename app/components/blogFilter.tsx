'use client'; // Tento řádek je potřeba, aby byla komponenta považována za klientskou

import React, { useState } from 'react';

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

            <div>
                <h2>Filtrované blogy:</h2>
                {filteredBlogs.map((post) => (
                    <div key={post.slug}>
                        <h3>{post.metadata.title}</h3>
                        <p>Tag: {post.metadata.tags}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
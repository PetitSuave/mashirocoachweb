import React from "react";
import {getTagDisplayName} from "../utils";

const TAG_STYLES = {
    'default': 'px-4 py-2 rounded-full text-sm border transition bg-teal-700 text-white border-teal-700',
    'selected': 'px-4 py-2 rounded-full text-sm border transition bg-white text-teal-700 border-teal-700 hover:bg-teal-100',
} as const;

type BlogFilterProps = {
    tags: string[];
    selectedTag: string;
    onChange: (tag: string) => void;
}

const BlogFilter = ({ tags, selectedTag, onChange }: BlogFilterProps) => (
    <div className="flex flex-wrap gap-2 my-4">
        {tags.map((tag) => (
            <button
                key={tag}
                onClick={() => onChange(tag)}
                className={selectedTag === tag ? TAG_STYLES['selected'] : TAG_STYLES['default']}
            >
                {getTagDisplayName(tag)}
            </button>
        ))}
    </div>
)

export default BlogFilter
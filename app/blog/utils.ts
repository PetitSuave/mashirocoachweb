import {BlogPost} from "../lib/types";

export const blogSortNewest = (a: BlogPost, b: BlogPost) => {
    if (
        new Date(a.metadata.publishedAt) >
        new Date(b.metadata.publishedAt)
    ) {
        return -1;
    }
    return 1;
}

export const blogFilterByTags
    = (tag: string) =>
    (post: BlogPost) =>
        post.metadata.tags.toLowerCase().includes(tag.toLowerCase())

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const ALL_TAG = 'all';

export const getTagDisplayName = (tag: string) =>
    tag === ALL_TAG ? "Všechny" : capitalize(tag)
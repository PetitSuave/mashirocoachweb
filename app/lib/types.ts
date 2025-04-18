export type Metadata = {
    title: string;
    publishedAt: string;
    summary: string;
    tags: string;
    image?: string;
};

export type BlogPost = {
    metadata: Metadata;
    slug: string;
    content: string;
}


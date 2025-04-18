import React from "react";
import Link from "next/link";
import Image from "next/image";
import {metaData} from "../../config";
import {BlogPost} from "../../lib/types";

type BlogPostPreviewProps = {
    post: BlogPost
}

const BlogPostPreview = ({ post }: BlogPostPreviewProps) => {
    return (
        <div
            className="relative min-h-full border-solid border-teal-600 bg-teal-100 border-2 m-2">
            <Link
                className="flex flex-col space-y-1 transition-opacity duration-200 hover:opacity-80"
                href={`/blog/${post.slug}`}
            >
                {post.metadata.image && (
                    <div className="w-full aspect-[16/10] relative overflow-hidden">
                        <Image
                            src={post.metadata.image}
                            alt={metaData.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}

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
    )
}

export default BlogPostPreview;
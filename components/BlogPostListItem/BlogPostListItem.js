import React from "react";
import Link from "next/link";
import striptags from 'striptags';
import Date from "../Date/Date";
import Tags from "../Tags/Tags";
function BlogPostListItem({ post: { slug, title, excerpt, tags: { nodes: tags }, date } }) {

  return (
    <article className="border-b border-gray-800 pb-7 mb-7">
      <h2 className="text-xl text-gray-200 hover:text-gray-100">
        <Link href={`/posts/${slug}`}>{title}</Link>
      </h2>
      <div className="flex flex-wrap gap-2 items-center pt-2 pb-4 text-sm">
        <Date dateString={date}/>
        {tags && <Tags tags={tags}/>}
      </div>
      <p className="text-gray-300 font-light">{striptags(excerpt)}</p>
    </article>
  );
}

export default BlogPostListItem;

import React from "react";
import Link from "next/link";
import striptags from 'striptags';
import Date from "../Date/Date";
function BlogPostListItem({ post: { slug, title, excerpt, tags: { nodes: tags }, date } }) {

  return (
    <article className="border-b border-gray-800 pb-7 mb-7">
      <h2 className="text-xl text-gray-200 hover:text-gray-100">
        <Link href={`/posts/${slug}`}>{title}</Link>
      </h2>
      <div className="flex items-center pt-2 pb-4 text-sm">
        <Date dateString={date}></Date>
        {tags &&
        <ul className="inline-flex gap-2">
          {tags.map((tag) => (
            <li
              key={tag.name}
              className="rounded-xl bg-blue-900 text-gray-300 pl-2 pr-2"
            >
              {tag.name}
            </li>
          ))}
        </ul>
        }
      </div>
      <p className="text-gray-300 font-light">{striptags(excerpt)}</p>
    </article>
  );
}

export default BlogPostListItem;

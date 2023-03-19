import React from "react";

interface TagsProps {
  tags: {
    name: string;
  }[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <ul className="inline-flex gap-2 flex-wrap">
      {tags.map((tag) => (
        <li
          key={tag.name}
          className="rounded-xl bg-blue-900 text-gray-300 pl-2 pr-2"
        >
          {tag.name}
        </li>
      ))}
    </ul>
  );
};
export default Tags;

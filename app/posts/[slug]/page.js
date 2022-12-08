import React from "react";
import Blocks from "../../../components/Blocks/Blocks";
import fetchClient from "../../fetch-client";

const postBySlug = (slug) =>
  fetchClient(
    `
    query postBySlug($id: ID!) {
        post(id: $id, idType: SLUG) {
          title
          blocks {
            ... on CoreParagraphBlock {
              name
              attributes {
                ... on CoreParagraphBlockAttributes {
                  align
                  anchor
                  content
                }
              }
            }
          }
        }
      }
`,
    {
      id: slug,
    }
  );

async function SinglePost({ params }) {
  const {
    data: { post },
  } = await postBySlug(params.slug);
  return (
    <section>
      <h2 className="text-gray-50 text-3xl pb-5">{post.title}</h2>
      <Blocks blocks={post.blocks}/>
    </section>
  );
}

export default SinglePost;

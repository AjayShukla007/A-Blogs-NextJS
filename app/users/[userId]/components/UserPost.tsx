type Props = {
  promise: Promise<Post[]>;
};

import React from "react";

export default async function UserPost({ promise }: Props) {
  const posts = await promise;

  const content = posts.map((post) => {
    return (
      <article key={post.id}>
        <h2 style={{
          color: 'red'
        }}>{post.title}</h2>
        <p>{post.body}</p>
        <br />
      </article>
    );
  });

  return content;
}

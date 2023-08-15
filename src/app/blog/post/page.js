import { useRouter } from "next/router";
import blogData from "../../data/blogData.json";

const Post = () => {
  const router = useRouter();
  const postId = router.query.id;
  console.log(postId);

  const post = blogData.find((post) => post.id === Number(postId));
  console.log(post);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Date: {post.date}</p>
    </article>
  );
};

export default Post;

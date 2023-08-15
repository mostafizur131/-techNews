"use client";
import Article from "@/components/Article";
import blogData from "../../../data/blogData.json";
import styles from "./page.module.css";
const Post = ({ params }) => {
  const postId = params.post;
  const post = blogData.find((post) => post.id === Number(postId));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className=" px-6 py-6 mx-auto space-y-5  text-gray-900 text-center">
      <div className="w-full mx-auto space-y-2 text-center">
        <h1 className={`text-4xl font-bold  md:text-5xl ${styles.marginT}`}>
          {post.title}
        </h1>
        <p className="text-sm text-[#FF6584] font-bold">Date : {post.date}</p>
      </div>
      <div className="pt-5 border-t border-gray-700 flex justify-center items-center mb-10">
        <img
          src={post.img}
          alt={post.title}
          className="object-cover w-full md:w-2/3 lg:w-1/2 "
        />
      </div>
      <div className="text-left w-full md:w-4/5 lg:w-3/5 mx-auto ">
        {post.content.map((para, i) => (
          <Article key={i} para={para}></Article>
        ))}
      </div>
    </article>
  );
};

export default Post;

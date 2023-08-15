import Link from "next/link";

import blogData from "../../data/blogData.json";

const Blog = () => {
  return (
    <section className="py-6 sm:py-12 bg-gray-100 text-gray-900">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-4xl font-bold">
            Welcome to Tech News Blog Posts
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {blogData.map((post) => (
            <div
              key={post.id}
              className="flex flex-col bg-gray-900 text-gray-100"
            >
              <img
                alt={post.title}
                className="object-cover w-full h-52 bg-gray-500"
                src={post.img}
              />

              <div className="flex flex-col flex-1 p-6">
                <Link
                  href={`/blog/post/${post.id}`}
                  className="text-2xl font-bold"
                >
                  {post.title}
                </Link>
                <p>
                  {post.content.length > 50
                    ? post.content.slice(0, 50) + "..."
                    : post.content}
                </p>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                  <span>Date : {post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

import React from "react";

const Article = ({ para }) => {
  return (
    <div className="mb-5">
      <h3 className="text-4xl font-bold  md:text-3xl mb-1">{para.title}</h3>
      <p className="text-xl text-gray-900">{para.content}</p>
    </div>
  );
};

export default Article;

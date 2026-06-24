import React from "react";
import blogs from "./blogData";

const BlogGrid = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group"
        >
          <div className="overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          <div className="p-6">
            <p className="text-sm text-[#1a6faf] font-medium mb-2">
              {blog.date}
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {blog.title}
            </h3>

            <p className="text-gray-600 leading-relaxed mb-5">
              {blog.description}
            </p>

            <button className="bg-[#1a6faf] text-white px-6 py-3 rounded-full font-medium hover:bg-[#14598d] transition">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;

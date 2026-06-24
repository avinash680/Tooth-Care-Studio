import React from "react";
import BlogHeading from "./BlogHeading";
import BlogGrid from "./BlogGrid";
import BlogCTA from "./BlogCTA";

const Blog = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogHeading />
        <BlogGrid />
        <BlogCTA />
      </div>
    </section>
  );
};

export default Blog;